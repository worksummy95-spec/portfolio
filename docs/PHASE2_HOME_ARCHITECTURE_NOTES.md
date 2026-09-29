# Phase 2 — Homepage Architecture / Components

Status: IMPLEMENTED

## Locked homepage order
1. Hero — Digital Strategy & Transformation
2. How I Work — Diagnose / Build
3. Selected Work — six business-problem-led cases
4. Operating Systems — BOASMS / BOCMS / Audit OS
5. Capabilities — Strategy / Platforms / Transformation / Technology / Commerce & Analytics / Brand & Communication
6. Experience
7. Point of View
8. Contact

## Implementation changes
- Replaced the homepage's Marquee + Creative & Social-first flow with the approved architecture.
- Added `components/sections/HowIWork.tsx` using the locked Diagnose / Build content model.
- Added a short business-problem-led intro to Selected Work.
- Reframed Systems as `Operating systems` and updated the section introduction.
- Renumbered sections to match the approved architecture.
- Changed hero CTAs to `View selected work`, `Résumé`, and `LinkedIn`.
- Added `How I Work` to the main navigation.
- Preserved the existing visual components, animation language, and case-study engine.

## Validation
- Six new homepage case slugs resolve against the new case content model.
- All referenced asset paths in `lib/content.ts` currently exist in `public/`.
- Homepage import/render order matches the approved sequence.
- Marquee and SocialGrid are no longer rendered on the homepage.

## Environment limitation
A full `npm ci` / Next.js build could not be run in this environment because dependency installation timed out, and the environment has no cached npm packages. The checks above are static/source-level validation only; production build and browser QA remain for the later QA phase.
