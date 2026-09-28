# Portfolio v2: build and QA record

**Status:** Built and QA'd locally. Not deployed. Stopped before the separate Vercel preview (needs Vercel sign-in).
**Project:** `sumanth-portfolio-v2`. This is a separate folder and repo, and the live sumanthm.co.in project was not touched.
**Base:** Phase 5 hardened source (cumulative Phases 1–5), finished and corrected against the Blueprint and the v2 brief.

## Gaps closed on top of Phase 5
- How I Work: Diagnose → Build → **Improve** (Phase 1–5 had only Diagnose / Build)
- Case 04 route renamed to `/work/business-process-improvement-governance` (old slug 308s)
- Operating Systems: Audit OS / BOCMS / BOASMS, plus a governance layer (Website Governance, Marketing Operations, Vendor Governance, BMCC Charter, SOP Library) with status labels
- Case template shows **Context · Role · Status · Evidence**. Per-component status tables for cases 02, 04 and 05. Metrics blocks carry non-causal notes
- Case 06 now includes the real brand imagery from the four legacy cases (guidelines, campaign wall, press, content system, physical applications)
- Phase 5 SVG covers had the case title baked in, which ghosted behind the real `<h1>`. Replaced with six text-free diagrams drawn from each case's evidence
- OG images: the old one still said "Brand · Communication". New 1200×630 PNGs for the homepage and each case
- Case `<title>` no longer repeats the name. Twitter/X card metadata, Person + WebSite + CreativeWork + Breadcrumb JSON-LD, favicon and apple-icon added
- Security headers, `poweredByHeader: false`, `dynamicParams = false`. Removed `/v2`, HeroVideo, SocialGrid, Marquee, Manifesto, the unused CursorPreview and GSAP
- Preloader tagline updated to the new positioning

## QA results (local production build)
- `npm ci` ✓ · `npx tsc --noEmit` ✓ · `npm run lint` ✓ (0 warnings) · `npm run build` ✓ (all 6 case pages pre-built as static HTML)
- 1440 / 1280 / 768 / 390 / 375: no horizontal overflow, one h1 per page, no console errors, no 4xx
- axe (WCAG 2 A/AA + best practice): 0 violations on all 7 pages after fixes
- Keyboard: skip link, visible focus, lightbox focus in/out, Esc closes menu and lightbox
- Links: 96 internal links / 34 targets, 0 broken, all anchors present
- Redirects: `/v2` and all six legacy case slugs → 308 to the right case
- CLS 0 (home and case 06)

## Needs Sumanth's confirmation before cutover
1. **Résumé PDF** still targets "Brand Marketing & Corporate Communications Manager roles". Replace it with the V2 résumé.
2. **BMCC Charter, SOP Library, Vendor Governance** are labelled *Framework* with generic one-liners. Confirm or correct the status and wording.
3. **BOCMS size**: the site says an "18-sheet operating model" (Phase 3 copy). A separate note describes a 15-sheet generator output for Policy Sense. Confirm which is right.
4. **Case-level status changes**: 02 → Measured · Roadmap, 03 → Coordinated · Measured, 05 → Validated · Built, 06 → Coordinated · Measured (Phase 3 used "Built · Validated" for all four).
5. **JAL metrics time window** (+65% / +75% / +40% / ORM) isn't stated. The Blueprint asks for a methodology/time window.
6. **JNI plugin-to-custom-code remediation (32 pages)** was added to Case 01 evidence from the Blueprint's proof map.

## Deployment (not done)
Deploy as a **new** Vercel project named `sumanth-portfolio-v2`. Never link it to the existing project, never run `--prod` against the live project, and don't add the sumanthm.co.in domain.
