# Sumanth Manjunath — Portfolio v2 (Next.js)

Second-generation portfolio: **Digital Strategy & Transformation**, with brand and
communications as a supporting pillar. Built as a controlled evolution of the live
portfolio: same Warm Ink palette, Fraunces / Inter / JetBrains Mono, Lenis smooth
scroll, Framer Motion reveals, and case-study engine. New information architecture,
positioning, case studies, systems layer, routing/SEO and production hardening.

This is a **separate project**. It does not share a Vercel project, domain or DNS
with the live site at sumanthm.co.in.

## Stack
- Next.js 15 (App Router, fully static: 6 SSG case pages) · React 18 · TypeScript (strict)
- Tailwind CSS 3.4 (tokens in `tailwind.config.ts`)
- Framer Motion (reveals, kinetic headings, transitions) · Lenis (smooth scroll)
- All motion respects `prefers-reduced-motion`

## Run
```bash
npm ci
npm run dev          # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build && npm start
```

## Structure
```
app/
  layout.tsx              metadata (canonical sumanthm.co.in), fonts, providers
  page.tsx                homepage + Person/WebSite JSON-LD
  work/[slug]/page.tsx    case route: static params, per-case metadata, CreativeWork + Breadcrumb JSON-LD
  sitemap.ts robots.ts    SEO (custom domain only)
  icon.svg apple-icon.png favicon set
lib/content.ts            SINGLE SOURCE OF TRUTH — copy, cases, systems, redirects
next.config.ts            301/308 legacy redirects (from lib/content.ts) + security headers
components/
  sections/  Hero · HowIWork · SelectedWork · Systems · Capabilities · Experience · POV · Contact
  case/      CaseStudy (overview band: context/role/status/evidence + chapter rail + next case)
  ui/        Blocks (statement, para, heading, sequence, stack, image, split, pair, wall,
             essay, gallery, metrics, status) · Shot (lightbox) · Reveal · KineticHeading …
  seo/       JsonLd
public/
  assets/cases-v2/        six text-free case cover diagrams (generated)
  og/                     Open Graph images, 1200×630 (generated)
scripts/
  make-covers.py          regenerates the case covers
  make-og.py              regenerates the OG images (needs Playwright + Chromium)
docs/                     Blueprint + Phase 1–5 notes + v2 build/QA record
```

## Homepage order
Hero → How I Work (Diagnose / Build / Improve) → Selected Work → Operating Systems →
Capabilities → Experience → Point of View → Contact

## Routes
| Route | Case |
|---|---|
| `/work/enterprise-digital-platform-governance` | 01 Enterprise Digital Platform & Website Governance |
| `/work/digital-strategy-seo-growth` | 02 Digital Strategy, SEO & Growth |
| `/work/digital-commerce-performance` | 03 Digital Commerce & Performance |
| `/work/business-process-improvement-governance` | 04 Business Process Improvement & Governance |
| `/work/digital-product-ai-adoption` | 05 Digital Product, AI & Adoption Systems |
| `/work/brand-communications-reputation` | 06 Brand, Communications & Reputation |

Permanent redirects: `/v2`, `/work/reframing-a-brand`, `/work/making-aluminium-matter`,
`/work/public-narrative`, `/work/real-world`, `/work/digital-layer`,
`/work/business-process-governance` → see `legacyRedirects` in `lib/content.ts`.

## Evidence discipline (enforced in content)
Framework ≠ implementation · evaluation ≠ selection · audit finding ≠ remediation ·
planning ≠ completion · activity ≠ outcome · technical fluency ≠ software engineering.
Status vocabulary: Built · Validated · Specified · Framework · Roadmap · Coordinated · Measured.
Deloitte audit: **Final stage · formal closure pending**.
