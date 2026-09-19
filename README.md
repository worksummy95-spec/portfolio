# Sumanth Manjunath — Portfolio (Next.js)

Award-grade editorial portfolio for a Brand & Corporate Communications manager.
Dark "Warm Ink" palette, Fraunces + Inter, GSAP + Lenis smooth scroll, Framer Motion
transitions, fully responsive, SEO-ready, statically prerendered.

## Stack
- **Next.js 15** (App Router, static export-friendly, per-case SSG)
- **React 18** + **TypeScript** (strict)
- **Tailwind CSS 3.4** — design tokens in `tailwind.config.ts`
- **Framer Motion** — reveals, kinetic headings, page transitions, cursor work-preview
- **GSAP + Lenis** — buttery smooth scroll + scroll-progress
- All motion respects `prefers-reduced-motion`

## Run locally
```bash
# 1. (only if a partial node_modules exists) start clean:
rm -rf node_modules package-lock.json install.log

# 2. install
npm install

# 3. dev server → http://localhost:3000
npm run dev

# 4. production build (validated: 11/11 pages prerender clean)
npm run build && npm start
```

## Deploy (Vercel)
```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```
No env vars needed. Vercel auto-detects Next.js.

## Structure
```
app/
  layout.tsx            fonts, metadata/OG, providers, nav+footer
  page.tsx              homepage composition
  template.tsx          route page-transition
  work/[slug]/page.tsx  case route (generateStaticParams + metadata)
  sitemap.ts robots.ts  SEO
  globals.css           tokens, Lenis CSS, grain, reduced-motion
lib/content.ts          SINGLE SOURCE OF TRUTH (all copy + case data + asset paths)
components/
  providers/  SmoothScroll (Lenis+GSAP), CursorPreview
  layout/     Navbar (auto-hide), Footer
  ui/         Reveal, KineticHeading, Shot (lightbox), Sequence, Stack, Section, Blocks
  sections/   Hero, Manifesto, SelectedWork, Systems, Capabilities, Experience, POV, Contact
  case/       CaseStudy (sticky chapter rail + scroll progress + next-case)
public/assets/  real evidence only (case-01…05, global/og-image)
```

## Editing content
Everything readable/writable lives in **`lib/content.ts`** — headline, cases,
systems, capabilities, experience, POV, contact. Case bodies are a typed block
model (`statement | para | heading | sequence | stack | image | split | pair |
wall | essay | coverage`) rendered by `components/ui/Blocks.tsx`, so new sections
need no new components.

## Guardrails baked in
- Real assets only — no fabricated dashboards or stock imagery.
- V4 résumé is the sole source for career facts (Zerozilla → Jindal Naturecure → Jindal Aluminium).
- Case 01 copy: "I wasn't designing the logo. I was helping make the new brand usable."
- Systems framed as business/operational/AI-assisted — not software engineering.
