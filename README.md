# drpradeepsahoo.com

Website for **Dr. Pradeep Kumar Sahoo** — Orthopaedic Surgeon & Robotic Knee
Replacement Specialist, Bhubaneswar.

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS v3**, and
**shadcn/ui**. Deployed to **Vercel**. See `SPEC.md` for the full product
spec and `CLAUDE.md` for working conventions.

## Quickstart

```bash
npm install
npm run dev   # http://localhost:3000
```

## Scripts

| Command           | What it does                          |
|-------------------|---------------------------------------|
| `npm run dev`     | Start the local dev server            |
| `npm run build`   | Production build + type check         |
| `npm run lint`    | ESLint (next/core-web-vitals, TS)     |
| `npm run start`   | Serve the production build            |

## Project structure

See `CLAUDE.md` → "Directory conventions" for the layout and naming rules.

## Current phase

- [x] **Phase 1** — Foundation & Homepage (design system, layout, homepage)
- [ ] **Phase 2** — About + Treatments (MDX pipeline, 6 treatment pages)
- [ ] **Phase 3** — Robotic Surgery + Patient Stories + Booking
- [ ] **Phase 4** — Blog + SEO hardening
- [ ] **Phase 5** — Supabase + Resend + deploy

## Environment variables

None required for Phase 1. See `.env.example` for Phase 5 variables
(Supabase, Resend, analytics).
