# drpradeepsahoo.com

Website for **Dr. Pradeep Kumar Sahoo** — Orthopaedic Surgeon & Robotic Knee
Replacement Specialist, Bhubaneswar.

Built with **Next.js 15** (App Router), **TypeScript**, **Tailwind CSS v3**,
**shadcn/ui** primitives, **MDX** content, and **Framer Motion**. Ships to
**Vercel**. See `SPEC.md` for the full product spec, `CLAUDE.md` for working
conventions, and `POST_LAUNCH.md` for items to address once real assets arrive.

## Quickstart

```bash
npm install
npm run dev   # http://localhost:3000
```

No environment variables are required for local development — the booking
API logs submissions to the server console until Supabase and Resend are
configured.

## Scripts

| Command            | What it does                                 |
|--------------------|----------------------------------------------|
| `npm run dev`      | Start the local dev server                   |
| `npm run build`    | Production build + type check                |
| `npm run lint`     | ESLint (next/core-web-vitals, TS)            |
| `npm run start`    | Serve the production build                   |
| `npm run test:e2e` | Playwright smoke tests (boots its own server)|

## Project layout

```
app/
  (marketing)/          public pages, share nav + footer
  api/booking/          booking POST handler → Supabase + Resend
  layout.tsx, globals.css, sitemap.ts, robots.ts, opengraph-image.tsx
components/
  layout/               nav, footer, mobile nav, WhatsApp FAB
  sections/             page-level sections (hero, faq, forms, ...)
  shared/               atomic reusables (cards, badges, Section)
  ui/                   shadcn-style primitives (accordion, ...)
  blog/                 MDX renderer for blog articles
content/
  treatments/*.mdx      6 treatments, structured frontmatter + sections
  blog/*.mdx            starter blog articles
  testimonials/         JSON of patient stories
lib/                    constants, schema builders, env, supabase, email, blog
public/images/          placeholder imagery (see README inside)
supabase/migrations/    SQL migration for the bookings table
tests/e2e/              Playwright smoke tests
```

See `CLAUDE.md` for naming conventions and design token rules.

## Environment variables

Copy `.env.example` → `.env.local` and fill the values that apply. All
variables are optional — the site still builds and the booking form still
returns success if they're missing (but without persistence or email).

| Key                             | Purpose                                        |
|---------------------------------|------------------------------------------------|
| `NEXT_PUBLIC_SUPABASE_URL`      | Supabase project URL                           |
| `SUPABASE_SERVICE_ROLE_KEY`     | Service role key for server-side inserts      |
| `RESEND_API_KEY`                | Resend API key                                 |
| `CLINIC_NOTIFICATION_EMAIL`     | Inbox that receives new booking notifications |
| `CLINIC_FROM_EMAIL`             | Verified sender address (defaults set)         |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`  | Plausible analytics domain                     |
| `NEXT_PUBLIC_CLARITY_ID`        | Microsoft Clarity project ID                   |

## Deploying to Vercel

1. Push to GitHub.
2. Create a new Vercel project from the repo — Next.js preset auto-detected.
3. Add environment variables (see above) in **Settings → Environment Variables**.
4. Trigger a deploy. Vercel builds and hosts the site on its global edge network.
5. Add the custom domain `drpradeepsahoo.com` in **Settings → Domains** and
   point its DNS records (A / CNAME per Vercel instructions) to Vercel.
6. (Optional but recommended) Front Vercel with Cloudflare for India edge
   performance — proxy the domain through Cloudflare with SSL set to "Full".

## Supabase setup

1. Create a project at [supabase.com](https://supabase.com).
2. In the SQL editor, run `supabase/migrations/0001_bookings.sql`.
3. Copy the project URL and service-role key from **Settings → API** into the
   env vars above.
4. Row-level security is enabled on the `bookings` table — all reads/writes go
   through the service-role key used server-side, so the anon key is never
   exposed to browsers.
5. Use the Supabase Studio to view incoming bookings until a clinic-side
   dashboard is built (post-launch).

## Resend setup

1. Sign up at [resend.com](https://resend.com).
2. Verify the sending domain (e.g. `drpradeepsahoo.com`) — Resend will show
   the required DNS records.
3. Generate an API key with send permission.
4. Set `CLINIC_NOTIFICATION_EMAIL` to the clinic's intake inbox.
5. Test end-to-end by submitting the booking form in preview / production.

## Editing content

- **Treatment pages** — edit `content/treatments/*.mdx`. The page template
  parses the `## [section]` blocks; keep the structure consistent with
  existing files.
- **Blog articles** — add a new `.mdx` file to `content/blog/` with the same
  frontmatter shape used by existing posts. New articles appear on `/blog`
  automatically, and the sitemap picks them up on the next build / ISR
  revalidate (1 hour).
- **Testimonials** — edit `content/testimonials/testimonials.json`. Mark
  each new entry with `featured: true` to surface it on the homepage.
- **Contact details, stats, nav links** — edit `lib/constants.ts`.

## Testing

`npm run test:e2e` runs the Playwright smoke suite: loads the homepage,
navigates to the booking form, submits valid data, and confirms the success
state. The suite also checks `sitemap.xml`, `robots.txt`, and a blog article.

The Playwright config (`playwright.config.ts`) builds and starts the
production server automatically — no need to pre-boot `npm run dev`.

## Current phase status

- [x] **Phase 1** — Foundation & Homepage
- [x] **Phase 2** — About + Treatments (6 MDX-driven treatment pages)
- [x] **Phase 3** — Robotic Surgery + Patient Stories + Booking
- [x] **Phase 4** — Blog + OG image generation
- [x] **Phase 5** — Supabase + Resend + analytics + smoke test wiring

See `POST_LAUNCH.md` for the remaining items that depend on real content,
accounts, or decisions.
