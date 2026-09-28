# Sumanthm.co.in — Portfolio Architecture & Content Blueprint V1.0

**Status:** Approved. Implementation not yet started.

## Core decision
Retain the current visual identity and reusable Next.js case-study engine. Reposition the portfolio from a **Brand & Corporate Communications-led** site to a **Digital Strategy & Transformation** portfolio with Brand, Communication, Growth and Technology as supporting disciplines.

## Homepage order
1. Hero — Digital Strategy & Transformation
2. How I Work — Diagnose / Build
3. Selected Work — six business-problem-led cases
4. Operating Systems — BOASMS / BOCMS / Audit OS
5. Capabilities — Strategy / Platforms / Transformation / Technology / Commerce & Analytics / Brand & Communication
6. Experience
7. Point of View
8. Contact

## Hero direction
**Eyebrow:** Digital Strategy & Transformation

**Headline:** I turn complex business and digital problems into structured strategies, systems and improvement roadmaps.

**Supporting line:** I work across digital platforms, SEO and growth, business process improvement, governance, technology-business translation, and brand and communications.

**CTAs:** View selected work / Résumé / LinkedIn

## Six case-study groups
### 01 — Enterprise Digital Platform & Website Governance
Backbone: current `Building the Digital Layer` + JAL/JNI website governance and technical evidence.

### 02 — Digital Strategy, SEO & Growth
New case: JNI SEO/GA4/GSC + international SEO roadmap.

### 03 — Digital Commerce & Performance
New case: Jindal Herbals ecommerce + Google/Meta performance.

### 04 — Business Process Improvement & Governance
New case: Audit OS + BOASMS + BOCMS + governance work.

### 05 — Digital Product, AI & Adoption Systems
New case: Policy Access Portal + chatbot + helpdesk/adoption.

### 06 — Brand, Communications & Reputation
Consolidate current Reframing a 50+ Year Brand, Making Aluminium Matter, Public Narrative and Real World work.

## Technical implementation requirements
- `app/layout.tsx`: custom-domain `metadataBase`, explicit canonical, V2 title/description/OG.
- `app/sitemap.ts`: use `https://sumanthm.co.in` only.
- `app/robots.ts`: point sitemap to `https://sumanthm.co.in/sitemap.xml`.
- Remove or noindex `/v2` after experiments.
- Add Person + WebSite JSON-LD.
- Replace repository PDF with approved V2 résumé.
- Add redirects for retired/merged case routes.

## Case-study template
Problem → Shift → My role → System/workflow → Work in practice → Outcome/evidence → Related work.

## Status vocabulary
Use: **Built · Validated · Specified · Framework · Roadmap · Coordinated**.

## Implementation sequence
1. Content model
2. Homepage architecture
3. Case studies
4. Technical SEO
5. Media/performance
6. QA
7. Search Console submission and inspection

## Definition of done
- Digital Strategy & Transformation is obvious in the first viewport.
- Digital/transformation work leads the proof hierarchy.
- Brand/Communication remains visible but no longer defines the whole portfolio.
- Six case groups are understandable and evidence-led.
- Systems are clearly labelled by implementation status.
- Sitemap/robots/metadata/canonical all use the public custom domain.
- Experimental `/v2` is not publicly indexable.
- Résumé matches the new positioning.
- Desktop/mobile/accessibility QA passes.
- Corrected sitemap is accepted by Search Console.
