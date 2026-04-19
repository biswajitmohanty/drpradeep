import { test, expect } from "@playwright/test";

test.describe("site smoke", () => {
  test("homepage renders hero + primary CTA", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: /restoring movement with robotic precision/i,
      })
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: /book a consultation/i }).first()
    ).toBeVisible();
  });

  test("homepage → book → submit booking form", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("link", { name: /book a consultation/i })
      .first()
      .click();
    await expect(page).toHaveURL(/\/book/);

    await page.getByLabel(/your full name/i).fill("Playwright Tester");
    await page.getByLabel(/phone number/i).fill("+91 9876543210");
    await page.getByLabel(/email/i).fill("test@example.com");
    await page
      .getByLabel(/what would you like to discuss/i)
      .selectOption("knee-pain");
    await page
      .getByLabel(/anything we should know/i)
      .fill("Smoke test — please ignore.");

    await page
      .getByRole("button", { name: /request appointment/i })
      .click();

    await expect(
      page.getByRole("heading", { name: /request received/i })
    ).toBeVisible({ timeout: 15_000 });
  });

  test("treatments navigation reaches a treatment page", async ({ page }) => {
    await page.goto("/treatments");
    await page
      .getByRole("link", { name: /knee replacement/i })
      .first()
      .click();
    await expect(page).toHaveURL(/\/treatments\/knee-replacement/);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("blog article renders with structured content", async ({ page }) => {
    await page.goto("/blog");
    const firstArticle = page.locator("main a").filter({ hasText: /read article/i }).first();
    await firstArticle.click();
    await expect(page).toHaveURL(/\/blog\//);
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("sitemap and robots respond", async ({ request }) => {
    const sitemap = await request.get("/sitemap.xml");
    expect(sitemap.ok()).toBe(true);
    expect(await sitemap.text()).toContain("<url>");

    const robots = await request.get("/robots.txt");
    expect(robots.ok()).toBe(true);
    expect(await robots.text()).toContain("Sitemap:");
  });
});
