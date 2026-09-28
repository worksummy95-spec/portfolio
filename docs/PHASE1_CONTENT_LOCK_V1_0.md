# Portfolio Phase 1 — Content Lock V1.0

**Status:** Complete
**Scope:** `lib/content.ts` only. Visual components are unchanged.

## Locked positioning
- Core identity: **Digital Strategy & Transformation**
- Hero: business/digital problem → structured strategy/system/roadmap
- Supporting disciplines: digital platforms, SEO & growth, process improvement, governance, technology-business translation, brand & communications

## Locked homepage content model
- Hero positioning updated
- How I Work reduced to **Diagnose / Build**
- Selected Work now contains six business-problem-led cases
- Systems retained and reframed as operating systems / governance assets
- Capabilities taxonomy updated to Strategy / Platforms / Transformation / Technology / Commerce & Analytics / Brand & Communication
- Experience narrative updated to show progression in problem complexity
- POV updated around diagnosis, measurement, governance and building missing structure

## Six locked case-study groups
1. Enterprise Digital Platform & Website Governance
2. Digital Strategy, SEO & Growth
3. Digital Commerce & Performance
4. Business Process Improvement & Governance
5. Digital Product, AI & Adoption Systems
6. Brand, Communications & Reputation

## Evidence controls
- Existing source cases are preserved under `legacyCases` for temporary route continuity.
- New case records include `status`, `role`, `evidence` and `mediaStatus` fields for later UI rendering.
- New covers are marked `mediaStatus: "temporary"` where the current repository does not contain a case-specific asset; no new visual assets were fabricated in Phase 1.
- Deloitte status remains **final stage / formal closure pending**.
- Measured outcomes are phrased as measured evidence without claiming that one intervention caused an entire downstream result.
- No people-management, adoption or software-engineering claims were added beyond the established evidence.

## Technical validation
- `tsc --noEmit` passed for `lib/content.ts` under strict settings.
- All six new case slugs are present.
- All six new case cover paths exist in `public/assets`.
- Legacy routes remain available temporarily; redirects/retirement are deferred to the technical implementation phase.

## Next phase
Phase 2 can now modify the homepage information architecture/components to expose this locked content model. Technical SEO, redirects, canonical metadata and asset replacement follow in later phases.
