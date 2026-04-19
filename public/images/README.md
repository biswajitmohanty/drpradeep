# /public/images

All images referenced by the site live here. Placeholder SVGs are used until
real photography and illustrations are sourced. Replace each file listed below
with its production asset — keep the same filename so no code changes are
needed.

## Required assets

### `/doctor`

| Filename           | Purpose                                   | Format | Dimensions         | Notes |
|--------------------|-------------------------------------------|--------|--------------------|-------|
| `portrait.svg`     | Homepage hero + About hero portrait       | JPG/WebP | 1000×1250 (4:5)  | Natural lighting, clinic / OT backdrop. Replace SVG with `portrait.jpg` and update the `<Image src>` path. |

### `/credentials`

_(to be populated)_ Logo files for Elite Ortho Care, Apollo, NHS, MKCG
Medical College, DNB, AO Foundation. SVG preferred, transparent background.

### `/treatments`

| Filename                | Purpose                                  | Format | Notes |
|-------------------------|------------------------------------------|--------|-------|
| `robotic-surgery.svg`   | Robotic surgery showcase section visual  | SVG illustration or surgery photo | Replace with real OR photo / branded anatomical illustration |

### `/og`

_(Phase 4)_ Static OG image fallbacks. Phase 4 will add `app/opengraph-image.tsx`
that generates these dynamically via `@vercel/og`.

## Placeholder policy

All current SVGs in this directory labeled `PLACEHOLDER` must be replaced
before launch. They exist only so the site renders cleanly during development.

## Image optimization

`next/image` handles format conversion (AVIF/WebP) and responsive sizing.
When adding new images:
1. Provide explicit `width` and `height` (or `fill` with sized parent) — no CLS.
2. Provide meaningful `alt` text (or `alt=""` if purely decorative).
3. Use `priority` on LCP images only (homepage hero portrait).
4. Default to lazy loading everywhere else.
