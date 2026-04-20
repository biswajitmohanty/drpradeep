# /public/images

All images referenced by the site live here. Placeholder SVGs are used until
real photography and illustrations are sourced. Replace each file listed below
with its production asset — keep the same filename so no code changes are
needed.

## Current assets

### `/brand`

| Filename   | Purpose                                   |
|------------|-------------------------------------------|
| `logo.png` | Clinic / doctor brand mark used in nav + footer. Transparent background, ~512×512. |

### `/doctor`

| Filename                    | Purpose                                                                |
|-----------------------------|------------------------------------------------------------------------|
| `robotic-smith-nephew.jpg`  | Homepage hero, About hero, Robotic Surgery page inset (primary portrait). Dr. Sahoo with the Smith+Nephew CORI platform. |
| `robotic-velys.jpg`         | Robotic Surgery showcase on the homepage (VELYS / DePuy Synthes). |
| `ot-team.jpg`               | About page "Team" block — wide panorama of Dr. Sahoo and the OT team. |

## Still to add

- Hospital & institution **logo** files (Apollo, NHS, MKCG, AO, FIFA). Until
  added, the credentials trust strip renders as styled text chips.
- Short **explainer video** for `/robotic-surgery` (currently the Smith+Nephew
  still frame stands in).
- Static OG image fallbacks under `/og/` (the dynamic OG image at
  `app/opengraph-image.tsx` covers the default case).

## Image optimization

`next/image` handles format conversion (AVIF/WebP) and responsive sizing.
When adding new images:
1. Provide explicit `width` and `height` (or `fill` with sized parent) — no CLS.
2. Provide meaningful `alt` text (or `alt=""` if purely decorative).
3. Use `priority` on LCP images only (homepage hero portrait).
4. Default to lazy loading everywhere else.
