# CLAUDE.md — Project conventions for drpradeepsahoo.com

This file documents conventions decided during the build. Read it before
making changes so the codebase stays consistent across phases. For full product
scope, read **SPEC.md**.

---

## Stack deviations from SPEC

- **Tailwind v3 (not v4).** SPEC.md §2 lists Tailwind v4, but v4's single-file
  `@theme` configuration model conflicts with the spec's requirement of a
  `tailwind.config.ts` mirror of design tokens. v3 is stable, universally
  supported, and satisfies the config-file requirement. Tokens are defined as
  CSS variables in `app/globals.css` and mapped to Tailwind classes in
  `tailwind.config.ts`. Revisit if v4 reaches full ecosystem parity.
- **Next.js 15.5.x** (patched) instead of 15.1.x to avoid CVE-2025-66478.
- **shadcn/ui primitives** are written inline under `components/ui/` rather
  than scaffolded via the CLI, to avoid an extra config round-trip. Accordion
  is the only primitive currently used.

## Directory conventions

```
app/
  (marketing)/    route group: all public pages share nav + footer
  api/            route handlers (Phase 3+)
  layout.tsx      root: fonts, metadata, JSON-LD
  globals.css     design tokens + base layer + component utility classes
  sitemap.ts, robots.ts, icon.svg
components/
  layout/         site chrome: nav, footer, mobile-nav, whatsapp-fab
  sections/       page-level sections (hero, faq, testimonials, …)
  shared/         atomic reusables (card, badge, section wrapper)
  ui/             shadcn-style headless primitives (accordion, …)
content/          MDX content (Phase 2+)
lib/              constants, schema builders, utils
public/images/    all imagery; see public/images/README.md
```

- Files use kebab-case: `credential-badge.tsx`, not `CredentialBadge.tsx`.
- Components are named-exported (never default), except Next.js route files
  (`page.tsx`, `layout.tsx`) which must default-export.
- Client components declare `"use client"` at the top of the file. Every
  component without state/effects/event handlers stays a server component.

## Design tokens — single source of truth

1. CSS custom properties live in `app/globals.css` (`:root`).
2. `tailwind.config.ts` maps those CSS variables into Tailwind tokens
   (`bg-primary`, `text-text-secondary`, `rounded-lg`, `shadow-md`, …).
3. **Never** hardcode hex, rem/px spacing, or raw font-sizes in components —
   always use a Tailwind utility that resolves to a token. If a new color or
   size is needed, add it to both files.

## Typography

- `font-display` → Fraunces (headings, pull-quotes)
- `font-sans` → Inter (all body copy)
- `font-mono` → JetBrains Mono (numerics, stats only)
- Body size floor: `text-body` (17px). Never use `text-body-sm` (15px) or
  smaller for running paragraphs; reserve those for captions, eyebrows,
  metadata.

## Buttons and links

- `btn-primary` — gold accent, primary CTA (Book, Submit). One per screen max
  above the fold.
- `btn-secondary` — outline teal, secondary action.
- `btn-ghost` — low-emphasis.
- `link-arrow` — text link with arrow affordance (use for "Learn more" style).

## Motion

- Default ease: `ease-smooth` (cubic-bezier 0.22,1,0.36,1).
- Default duration: 300–400ms.
- Scroll reveals: 24px fade-up, once.
- Hero stagger: 80ms between elements.
- `prefers-reduced-motion` is globally honored via `app/globals.css`; do not
  write component-level opt-outs unless absolutely necessary.
- No bounce, no spring, no attention-grabbing loops. Subtle pulse on the
  WhatsApp FAB (once, after scroll) is the only exception.

## SEO

- Every page exports `generateMetadata` (or static `metadata`) with `title`,
  `description`, and `alternates.canonical`.
- JSON-LD is emitted via inline `<script type="application/ld+json">`.
  Builders live in `lib/schema.ts` — add new builders there, never inline.
- Sitemap is generated in `app/sitemap.ts` — add any new static route there.
- Robots: `app/robots.ts`, allows all except `/api/`.

## Accessibility baseline

- One `<h1>` per page.
- Skip link in `app/layout.tsx` → `#main` on `(marketing)/layout.tsx`.
- All icon-only buttons carry `aria-label`.
- All form controls paired with `<label>` (not placeholders). — Phase 3.
- Focus ring is a global 2px teal outline, configured in `globals.css`.
- Color contrast: text-primary on bg >= 15:1; text-secondary >= 7:1; primary
  button (white on teal) >= 4.5:1. Verified against WebAIM contrast checker.

## Content rules

- **Section 10 copy in SPEC.md is verbatim.** Do not paraphrase.
- Placeholder contact info (`+91-XXXXXXXXXX`, `appointments@…`) is in
  `lib/constants.ts` only. Change in one place when real values arrive.
- Placeholder testimonials carry a `// PLACEHOLDER` note and must be replaced
  with consented patient stories before launch. See
  `components/sections/testimonials.tsx`.

## Known follow-ups (tracked in POST_LAUNCH.md)

- **JS bundle size.** Homepage First Load JS is ~164KB (target: <100KB).
  framer-motion is the main contributor. Candidate fixes: selective import
  from `framer-motion/dom`, swap to CSS animations for scroll reveals, or
  lazy-load motion-heavy sections.
- **Real imagery.** All images in `/public/images` are PLACEHOLDER SVGs.
- **Real stats.** `STATS` in `lib/constants.ts` uses reasonable defaults;
  verify "1500+ surgeries" and "4.9★" with the doctor before launch.
- **Phone, WhatsApp, email.** Three placeholder tokens in
  `lib/constants.ts` — `phone`, `whatsapp`, `whatsappIntl`, `email`.
- **Production integrations.** Supabase + Resend + Plausible + Clarity are
  wired behind env-var flags. Flip them on by populating `.env.local` (or
  Vercel env vars) per `.env.example`. Run
  `supabase/migrations/0001_bookings.sql` to create the bookings table.

## Content pipeline

- **Treatments** — `content/treatments/*.mdx`. Frontmatter plus
  `## [section]` blocks that `lib/content.ts` parses into structured data
  (symptoms, options, what-to-expect, recovery, risks, faqs, related).
  The page template at `app/(marketing)/treatments/[slug]/page.tsx`
  renders each section consistently across the 6 treatments.
- **Blog** — `content/blog/*.mdx`. Standard frontmatter; body is rendered
  by `components/blog/mdx.tsx` (next-mdx-remote + remark-gfm). Posts use
  ISR (1-hour revalidate). Reading time is calculated at build from
  `reading-time`.
- **Testimonials** — `content/testimonials/testimonials.json`. All
  entries currently PLACEHOLDER (see JSON `_note`). Replace before launch.

## Booking API contract

- `POST /api/booking`, JSON body validated by `lib/schema-forms.ts`
  (`bookingSchema`). Honeypot field `website` must be empty; filled
  requests get a 200 with no side effects.
- When Supabase is configured, inserts into `public.bookings` table
  (schema in `supabase/migrations/0001_bookings.sql`, RLS locked).
- When Resend is configured, sends clinic notification + optional
  patient confirmation email.
- Always returns `{ ok: true }` on successful submission, even if
  downstream persistence or email fails — never lose the patient.
  Failures are logged server-side.

## Testing

- `npm run test:e2e` runs the Playwright smoke suite against a
  production build. The suite boots its own `npm run build && npm run
  start` via `playwright.config.ts`.
- The suite deliberately uses real form submissions (no mocks) — the
  API route logs/persists depending on env configuration.

## Running the project

```bash
npm install        # once
npm run dev        # http://localhost:3000
npm run build      # production build
npm run lint       # ESLint (next/core-web-vitals + next/typescript)
```

Both `npm run build` and `npm run lint` must pass before any phase closes.
