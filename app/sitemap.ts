import type { MetadataRoute } from "next";
import { SITE, TREATMENTS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/treatments",
    "/robotic-surgery",
    "/patient-stories",
    "/book",
    "/contact",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const treatmentRoutes = TREATMENTS.map((t) => ({
    url: `${SITE.url}/treatments/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...treatmentRoutes];
}
