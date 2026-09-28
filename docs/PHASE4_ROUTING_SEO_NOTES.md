# Phase 4 — Routing + SEO + Canonical-Domain Cleanup

## Status
Implemented against the Phase 3 source package.

## Changes

### Public canonical domain
- `app/layout.tsx`: `metadataBase` normalized to `https://sumanthm.co.in`.
- Root metadata repositioned to Digital Strategy & Transformation.
- Root canonical explicitly set to `https://sumanthm.co.in/`.
- Open Graph root URL/description updated to the public positioning.

### Case-study canonical URLs
- `app/work/[slug]/page.tsx`: each case now declares a canonical URL on `sumanthm.co.in`.
- Open Graph URL is explicitly set to the same public case URL.

### Sitemap
- `app/sitemap.ts` now uses `https://sumanthm.co.in`.
- Sitemap contains the homepage plus only the six current portfolio cases.
- Legacy case slugs are no longer emitted because `cases` now points to `portfolioCases` only.

### Robots
- `app/robots.ts` now declares `https://sumanthm.co.in/sitemap.xml`.
- Crawl rule remains open (`Allow: /`).

### Legacy route migration
Permanent redirects were added in `next.config.mjs`:
- `/v2` → `/`
- `/v2/` → `/`
- `/work/reframing-a-brand` → `/work/brand-communications-reputation`
- `/work/making-aluminium-matter` → `/work/brand-communications-reputation`
- `/work/public-narrative` → `/work/brand-communications-reputation`
- `/work/digital-layer` → `/work/enterprise-digital-platform-governance`
- `/work/real-world` → `/work/brand-communications-reputation`

The old content remains in `legacyCases` in `lib/content.ts` as a source/archive reference, but is no longer part of the public `cases` collection or generated sitemap.

## Validation
- Confirmed there are no remaining production-code references to the old Vercel deployment hostname under `app`, `lib`, `public`, or `next.config.mjs`.
- Confirmed `cases` contains only the six new portfolio cases.
- Confirmed redirect mappings cover all five legacy case routes plus `/v2`.
- Attempted TypeScript validation with `npx tsc --noEmit`; the environment is missing several installed type-definition packages (`json5`, `node`, `prop-types`, `react`, `react-dom`), so a clean compiler result could not be obtained here.
- `npm ci --ignore-scripts` timed out in the execution environment; therefore a full production build was not verified in this environment.

## Important deployment action
After deploying this phase to Vercel/production:
1. Open `https://sumanthm.co.in/robots.txt` and verify the sitemap URL.
2. Open `https://sumanthm.co.in/sitemap.xml` and verify all `<loc>` values use `sumanthm.co.in`.
3. In Google Search Console, submit `sitemap.xml` under the verified `sumanthm.co.in` property.
4. Re-run URL Inspection for the homepage and each new case URL.
5. Keep the old URLs available long enough for the permanent redirects to be processed.

## Claim discipline
No new performance claims were added in this phase. This phase is limited to routing, metadata, canonical URLs, sitemap/robots configuration, and route migration.
