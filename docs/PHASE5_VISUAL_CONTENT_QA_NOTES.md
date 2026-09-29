# Phase 5 — Visual / Content QA & Production Hardening

## Status
Implemented source-level QA and production hardening against the Phase 4 portfolio source.

## Fixes made

### 1. Case-cover curation
The six new case-study covers were previously using legacy portfolio images that could misrepresent the new case topics. Added six dedicated editorial SVG cover assets under `public/assets/cases-v2/` and mapped the six public case/work entries to them.

The covers are intentionally abstract and topic-labelled rather than pretending to be documentary evidence. They can be replaced later with bespoke case-specific photography/diagrams without changing the content model.

### 2. Deloitte status wording
Changed the Business Process Improvement & Governance case status from the mixed label `Built · Validated / Final stage` to:

`Final stage · formal closure pending`

This avoids implying that the Deloitte audit has formally closed.

### 3. Removed stale `/v2` navigation condition
The public `/v2` route is permanently redirected to `/`, so the Navbar no longer needs a special-case early return for `/v2`. The redirect remains in `next.config.mjs` for migration continuity.

## Static QA completed

- 44 TS/TSX source files transpile successfully with the installed TypeScript compiler; 0 transpile diagnostics.
- All 37 referenced public image/media/document paths checked in source exist in `public/`.
- All six public case slugs are unique.
- All six `next` case references resolve to another public case.
- No production source references the old `sumanthmanjunathportfolio.vercel.app` hostname.
- All six new SVG covers parse as valid XML/SVG.
- Public case chain is complete: 01 → 02 → 03 → 04 → 05 → 06 → 01.
- Evidence language was scanned for unsupported causal/outcome phrasing; the existing performance case retains an explicit non-causal evidence qualifier.

## Browser/render limitation

A full Next.js browser render and production build could not be completed in this environment because the project dependencies are not installed and `npm ci --ignore-scripts` timed out. The global TypeScript compiler was used for source transpilation/syntax validation instead.

Therefore this phase does **not** claim that desktop/mobile browser rendering has been fully verified. The source package is prepared for local/Vercel browser QA.

## Required deployment QA

After deploying the hardened source:

1. Render `/` at desktop and mobile widths.
2. Render all six `/work/<slug>` routes at desktop and mobile widths.
3. Test the mobile navigation and every CTA.
4. Test each case's previous/next navigation.
5. Confirm all cover assets load correctly.
6. Confirm `/v2` and all five legacy case routes return permanent redirects.
7. Confirm `robots.txt` and `sitemap.xml` on `sumanthm.co.in`.
8. Run Google Search Console URL Inspection on the homepage and six new cases.
9. Replace any temporary/abstract covers only when real case-specific visuals are available.

## Claim discipline

No new performance claims were introduced during Phase 5. The only content adjustment was clarification of the Deloitte status and replacement of potentially misleading legacy cover imagery with neutral editorial covers.
