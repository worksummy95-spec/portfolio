/*
 * Single source of truth for all portfolio copy, case data and asset paths.
 *
 * Second-generation content model (Blueprint V1.0 → Phases 1–5):
 * positioning is Digital Strategy & Transformation; brand and communications
 * remain a supporting pillar.
 *
 * Evidence discipline, applied throughout:
 *   framework ≠ implementation · evaluation ≠ selection · audit finding ≠ remediation
 *   planning ≠ completion · activity ≠ outcome · technical fluency ≠ software engineering
 * Only user-confirmed metrics appear, and never with a causal claim.
 */
export type Img = { src: string; alt: string; cap?: string; ratio?: string };
export type Block =
  | { t: "statement"; text: string; em?: string }
  | { t: "para"; text: string }
  | { t: "heading"; text: string }
  | { t: "sequence"; items: { label: string; on?: boolean }[] }
  | { t: "stack"; items: string[] }
  | { t: "image"; img: Img; full?: boolean }
  | { t: "split"; reverse?: boolean; img: Img; heading?: string; para?: string }
  | { t: "pair"; a: Img; b: Img }
  | { t: "wall"; title?: string; items: (Img & { size?: "big" | "tall" | "wide" })[] }
  | { t: "essay"; items: (Img & { area: string })[] }
  | { t: "gallery"; title?: string; items: Img[] }
  | { t: "metrics"; items: { label: string; from?: string; to: string; delta?: string }[]; note?: string }
  | { t: "status"; items: { item: string; status: string; note?: string }[] }
  | { t: "decision"; h: string; p: string }
  | { t: "social"; title?: string; posts: SocialPost[] };

/* Social posts: static (one image) · carousel (ordered slides) · video (mp4 + poster). */
export type SocialPost = {
  handle: string; caption: string; ratio: string; desc?: string;
} & (
  | { kind: "static"; src: string }
  | { kind: "carousel"; slides: string[] }
  | { kind: "video"; src: string; poster: string }
);
export type Chapter = { id: string; label: string; blocks: Block[] };
export type Case = {
  slug: string;
  index: string;
  mode: string;
  client: string;
  title: string;
  cover: Img;
  chapters: Chapter[];
  next: { slug: string; title: string };
  summary: string;
  context: string;
  role: string;
  status: string;
  evidence: string[];
  notes?: string[];
};

/* Status vocabulary used across the site (Blueprint §7). */
export const statusVocabulary = ["Built", "Validated", "Specified", "Framework", "Roadmap", "Coordinated", "Measured"];

export const site = {
  url: "https://sumanthm.co.in",
  title: "Sumanth Manjunath — Digital Strategy & Transformation",
  description:
    "Digital Strategy & Transformation professional with experience across digital platforms, marketing operations, business process improvement, governance and AI-enabled systems.",
};

export const meta = {
  name: "Sumanth Manjunath",
  role: "Digital Strategy & Transformation",
  email: "work.summy95@gmail.com",
  linkedin: "https://www.linkedin.com/in/sumanth-manju/",
  resume: "/Sumanth-Manjunath-Resume.pdf",
  location: "Bengaluru, India",
};

export const hero = {
  eyebrow: "Platforms · SEO & Growth · Process & Governance · AI & Adoption · Brand",
  headline: ["I bring structure to", "complex business", "and digital problems."],
  sub: "Strategies, systems and improvement roadmaps across digital platforms, SEO and growth, process and governance, AI-enabled tools, and brand and communications.",
  photo: { src: "/assets/global/sumanth-portrait-2026.jpg", alt: "Sumanth Manjunath" },
  current: "Currently at Jindal Aluminium, where my remit grew from brand and communications into digital platforms, operations and governance across the group's four entities.",
  proof: [
    { value: "+65%", label: "Organic traffic, YoY", ctx: "JNI · SEO & growth", href: "/work/digital-strategy-seo-growth" },
    { value: "+419%", label: "Checkouts, 21 → 109", ctx: "Jindal Herbals · Google Ads", href: "/work/digital-commerce-performance" },
    { value: "4–6h", label: "ORM response time, down from 24h+", ctx: "JAL · Reputation", href: "/work/brand-communications-reputation" },
    { value: "9", label: "Control trackers in Audit OS", ctx: "Deloitte internal audit", href: "/work/business-process-improvement-governance" },
  ],
};

/* How I Work — Diagnose → Build → Improve */
export const approach = {
  intro:
    "I move from evidence to structure: understand the problem, build the system that addresses it, then put the measurement and review loop in place so it keeps improving.",
  steps: [
    {
      kw: "01 · Diagnose", h: "Frame the problem",
      flow: ["Understand the problem", "Audit current state", "Find structural gaps", "Prioritise"],
      p: "Start with the business problem, the evidence and the constraints. Audit what exists, then reduce a complex situation to the few decisions that matter.",
    },
    {
      kw: "02 · Build", h: "Make the structure",
      flow: ["Strategy", "Framework / system", "Workflow", "Coordinate implementation"],
      p: "Turn the diagnosis into a strategy, framework, roadmap or operating model. Then coordinate the people, vendors and teams who implement it.",
    },
    {
      kw: "03 · Improve", h: "Close the loop",
      flow: ["Measure outcomes", "Review", "Govern", "Refine"],
      p: "Define what evidence would show a change, keep the information current, and build the review mechanism so the system improves after launch.",
    },
  ],
};

export const work = [
  { slug: "enterprise-digital-platform-governance", proof: "40 data points · 241 locations in one register", n: "01", mode: "Govern", title: "Enterprise Digital Platform & Website Governance", client: "JAL / JNI · Digital platforms", desc: "Turning website, content, SEO and information-management work into a governed digital operating layer.", img: "/assets/cases-v2/01-cover.svg" },
  { slug: "digital-strategy-seo-growth", featured: true, metric: { value: "+65%", label: "Organic traffic, year on year" }, proof: "+65% organic traffic YoY · +40% conversion", n: "02", mode: "Diagnose", title: "Digital Strategy, SEO & Growth", client: "JNI · SEO · Analytics · Growth", desc: "Connecting search, analytics, content and market priorities into a measurable digital growth roadmap.", img: "/assets/cases-v2/02-cover.svg" },
  { slug: "digital-commerce-performance", featured: true, metric: { value: "+419%", label: "Checkouts, 21 → 109" }, proof: "Checkouts 21 → 109 · add-to-carts 77 → 385", n: "03", mode: "Grow", title: "Digital Commerce & Performance", client: "Jindal Herbals · Ecommerce", desc: "Using structured campaign optimisation, tracking and performance evidence to improve the ecommerce funnel.", img: "/assets/cases-v2/03-cover.svg" },
  { slug: "business-process-improvement-governance", featured: true, metric: { value: "9", label: "Control trackers behind a Deloitte audit" }, proof: "9-tracker Audit OS · Deloitte audit, final stage", n: "04", mode: "Systemise", title: "Business Process Improvement & Governance", client: "Audit · Operations · Control", desc: "Designing operating systems, trackers and control structures for complex business workflows.", img: "/assets/cases-v2/04-cover.svg" },
  { slug: "digital-product-ai-adoption", proof: "68 UAT test cases · 67-question AI search bank", n: "05", mode: "Translate", title: "Digital Product, AI & Adoption Systems", client: "Policy · UAT · AI-assisted workflows", desc: "Translating business requirements into testable digital products, validation structures and adoption support.", img: "/assets/cases-v2/05-cover.svg" },
  { slug: "brand-communications-reputation", featured: true, metric: { value: "4–6h", label: "ORM response time, down from 24h+" }, visual: { src: "/assets/case-01/brand-cover.jpg", pos: "50% 50%" }, proof: "ORM response 24h+ → 4–6h · +75% engagement", n: "06", mode: "Narrate", title: "Brand, Communications & Reputation", client: "JAL · Brand · PR · ORM", desc: "Building brand systems and public narratives that make complex organisations easier to understand and trust.", img: "/assets/cases-v2/06-cover.svg" },
];

/* Operating systems. Tier 1 = documented systems with an architecture.
   Tier 2 = governance layer. Statuses are deliberately conservative; nothing here
   claims organisation-wide adoption. */
export const systems = [
  { status: "Built · Validated", name: "Audit OS", full: "Audit Operating System", p: "Audit complexity turned into a traceable control centre for IDRs, evidence, submissions, queries, observations, risks and actions. Used to coordinate the Deloitte internal audit evidence process.", note: "Deloitte audit: final stage · formal closure pending", label: "Control structure", nodes: ["IDR", "Evidence", "Submission", "Query", "Observation", "Risk", "Action"] },
  { status: "Specified", name: "BOCMS", full: "Brand Operations Campaign Management System", p: "Campaign management run as an operating system: lifecycle, workflow, control and reporting, from brief to performance.", note: "Enterprise workbook specification", label: "System architecture", nodes: ["Campaign", "Activities", "Content", "Assets", "Approvals", "Publishing", "Performance"] },
  { status: "System initiative · Build", name: "BOASMS", full: "Brand Operations Asset & Subscription Management System", p: "Subscriptions, vendors, renewals, invoices, budgets and digital assets, pulled out of scattered sheets and inboxes into one governed system.", note: "Build in progress", label: "System architecture", nodes: ["Subscriptions", "Vendors", "Renewals", "Invoices", "Budgets", "Digital assets", "Governance"] },
];

/* Governance layer — shown compactly: named with a status, no filler descriptions. */
export const governanceLayer = [
  { name: "Website Governance", status: "Built · Validated", href: "/work/enterprise-digital-platform-governance" },
  { name: "Marketing Operations", status: "Coordinated" },
  { name: "Vendor Governance", status: "Framework" },
  { name: "BMCC Charter", status: "Framework" },
  { name: "SOP Library", status: "Framework" },
];

/* Things I've built: personal projects, live on Vercel. Descriptions stick to what each
   app visibly does. No user, revenue or adoption claims. */
export type Build = {
  name: string; kind: string; line: string; features: string[]; url: string;
  cover: string; coverPos?: string; shots: { src: string; alt: string; mobile?: boolean }[];
};
const BD = "/assets/builds";
export const builds: Build[] = [
  {
    name: "Finio", kind: "Personal finance · web app", url: "https://finio-steel.vercel.app/",
    line: "A local-first money dashboard: income, spending, budgets, goals, loans and net worth in one place, with data kept on the device.",
    features: ["Budgets & goals", "Loans & EMIs", "Net worth", "Bank-statement import"],
    cover: `${BD}/finio-dashboard-d.jpg`,
    shots: [
      { src: `${BD}/finio-dashboard-d.jpg`, alt: "Finio dashboard with income, spending trend and category breakdown (sample data)" },
      { src: `${BD}/finio-transactions-d.jpg`, alt: "Finio transactions ledger with filters (sample data)" },
      { src: `${BD}/finio-analytics-d.jpg`, alt: "Finio analytics: income vs expense, category breakdown, savings rate (sample data)" },
      { src: `${BD}/finio-budgets-d.jpg`, alt: "Finio category budgets with progress bars (sample data)" },
      { src: `${BD}/finio-goals-d.jpg`, alt: "Finio savings goals with progress (sample data)" },
      { src: `${BD}/finio-loans-emis-d.jpg`, alt: "Finio loans and EMIs tracker (sample data)" },
      { src: `${BD}/finio-net-worth-d.jpg`, alt: "Finio net worth: assets and liabilities (sample data)" },
      { src: `${BD}/finio-insights-d.jpg`, alt: "Finio behavioural insights cards (sample data)" },
      { src: `${BD}/finio-import-d.jpg`, alt: "Finio import flow for bank statements, salary slips and invoices" },
      { src: `${BD}/finio-login-d.jpg`, alt: "Finio sign-in screen" },
      { src: `${BD}/finio-dashboard-m.jpg`, alt: "Finio dashboard on mobile (sample data)", mobile: true },
    ],
  },
  {
    name: "Atlas", kind: "Fitness · offline-first PWA", url: "https://project-atlas-puce.vercel.app/",
    line: "A phone-first tracker for a body-recomposition plan: the day's checklist, meal plan, workout programme and weekly progress.",
    features: ["Daily checklist", "Meal plan", "Workout programme", "Progress log"],
    cover: `${BD}/atlas-cover.jpg`,
    shots: [
      { src: `${BD}/atlas-today-m.jpg`, alt: "Atlas Today screen with daily checklist, water and protein trackers", mobile: true },
      { src: `${BD}/atlas-meals-m.jpg`, alt: "Atlas meal plan for a training day", mobile: true },
      { src: `${BD}/atlas-workouts-m.jpg`, alt: "Atlas workout programme with warm-up guidance", mobile: true },
      { src: `${BD}/atlas-progress-m.jpg`, alt: "Atlas progress tracking screen", mobile: true },
    ],
  },
  {
    name: "ContentHub", kind: "Content operations · SaaS", url: "https://content-hub-eta-one.vercel.app/",
    line: "A content-operations dashboard for freelancers and agencies: scheduling, analytics, a content calendar, competitor tracking and an industry news feed.",
    features: ["Post scheduling", "Analytics", "Competitor tracker", "Tiered plans"],
    cover: `${BD}/contenthub-hero-d.jpg`,
    shots: [
      { src: `${BD}/contenthub-hero-d.jpg`, alt: "ContentHub landing page" },
      { src: `${BD}/contenthub-features-d.jpg`, alt: "ContentHub tools: Instagram manager, analytics, calendar, competitor tracker, news" },
      { src: `${BD}/contenthub-pricing-d.jpg`, alt: "ContentHub pricing plans" },
      { src: `${BD}/contenthub-login-d.jpg`, alt: "ContentHub sign-in" },
      { src: `${BD}/contenthub-hero-m.jpg`, alt: "ContentHub landing page on mobile", mobile: true },
    ],
  },
  {
    name: "Project Ascend", kind: "Habits · gamified app", url: "https://project-ascend-livid.vercel.app/",
    line: "Turns everyday habits into an RPG: real actions become quests that earn XP and ranks. Sign-in with Google.",
    features: ["Quests", "XP & ranks", "Google sign-in"],
    cover: `${BD}/ascend-landing-d.jpg`,
    shots: [
      { src: `${BD}/ascend-landing-d.jpg`, alt: "Project Ascend landing screen" },
      { src: `${BD}/ascend-landing-m.jpg`, alt: "Project Ascend on mobile", mobile: true },
    ],
  },
];

/* Capabilities — six groups (Blueprint §8), carrying the prioritised capability list. */
export const capabilities = [
  { n: "01", h: "Strategy", items: ["Digital Strategy", "Digital Transformation", "Market & competitor research"] },
  { n: "02", h: "Platforms", items: ["Digital Platforms", "Website Governance", "UX / information architecture"] },
  { n: "03", h: "Transformation", items: ["Business Process Improvement", "Governance & controls", "Marketing Operations"] },
  { n: "04", h: "Technology", items: ["Technology-Business Translation", "AI-Assisted Business Systems", "UAT & implementation coordination"] },
  { n: "05", h: "Growth & Analytics", items: ["SEO & Organic Growth", "Digital Commerce", "Data & Analytics"] },
  { n: "06", h: "Brand & Communication", items: ["Brand Strategy", "Corporate Communications", "Reputation / ORM"] },
];

export const experience = {
  arc: [
    { yr: "2017", org: "Zerozilla Technologies", role: "Digital Marketing Executive · Oct 2017 – Oct 2020", p: "Performance marketing, SEO, paid search and content across multiple client accounts. This is where I learned to measure things.", scope: ["Performance marketing", "SEO / SEM", "Content"] },
    { yr: "2020", org: "Jindal Naturecure Institute", role: "Digital Marketing & Corporate Communication · Oct 2020 – Jun 2022", p: "Integrated content, digital marketing, analytics and communication across health and wellness initiatives, including website and SEO work.", scope: ["Website & SEO", "Analytics", "Digital marketing", "Communications"] },
    { yr: "2022", org: "Jindal Aluminium Limited", role: "Assistant Manager – Brand Marketing & Corporate Communications · Jun 2022 – Present", p: "The remit widened from brand and communications into digital platforms, SEO, analytics, marketing operations, audit coordination, process improvement and technology-business initiatives across the group's entities.", scope: ["Digital platforms", "Governance", "Operations", "Process improvement", "AI-assisted systems", "Brand & reputation"] },
  ],
  note: "The role expanded with the problem.",
  about: {
    text: [
      "I started in performance marketing in 2017, spent almost two years on digital and communications for a wellness institute, and joined Jindal Aluminium in 2022.",
      "The questions people bring me have changed since then. They used to be about campaigns. Now they are more often about why a process keeps breaking, where the right data lives, or how a new tool will get used once it launches. Those are the problems I like most, and this site is mostly about them.",
    ],
  },
  path: ["Communication", "Digital", "Platforms", "Operations", "Systems", "Transformation"],
};

export const pov = {
  statement: ["Most complexity is not a technology problem.", "It is information, ownership and decisions that nobody has structured yet."],
  principles: [
    { n: "01", h: "Governance makes systems durable", p: "A process needs ownership, standards and a way to keep information current after launch. Without that, it drifts back into email and memory." },
    { n: "02", h: "Translate both ways", p: "Business teams and technology teams describe the same problem differently. Much of the value is in writing requirements both sides can act on." },
    { n: "03", h: "Label the status honestly", p: "A framework is not an implementation and a plan is not a result. Saying which is which keeps decisions sound, and keeps you credible." },
  ],
};

const V = "/assets/cases-v2";
const S = "/assets/social/media";

export const cases: Case[] = [
  {
    slug: "enterprise-digital-platform-governance", index: "01", mode: "Govern", client: "Jindal Aluminium · JNI · Digital Platforms",
    title: "Enterprise Digital Platform & Website Governance",
    summary: "Turning website, content, SEO and information-management work into a governed digital operating layer.",
    context: "Corporate websites and digital touchpoints for Jindal Aluminium (JAL) and Jindal Naturecure Institute (JNI), where public information spans many pages, locations and business facts.",
    role: "Audit · information governance · SEO / technical QA · content structure · cross-functional coordination",
    status: "Built · Validated",
    evidence: [
      "32 website corrections structured through the JAL audit process",
      "Key Data Register covering 40 critical data points across 241 locations",
      "JNI plugin-to-custom-code remediation across 32 pages",
      "Management-directed mechanism for ongoing website information management and maintenance",
    ],
    cover: { src: `${V}/01-cover.svg`, alt: "Diagram: stacked website pages feeding a validated data register", ratio: "16/10" },
    next: { slug: "digital-strategy-seo-growth", title: "Digital Strategy, SEO & Growth" },
    chapters: [
      { id: "problem", label: "Problem", blocks: [
        { t: "statement", text: "A website is not a brochure. ", em: "It is an operating layer." },
        { t: "para", text: "Public information about the company was spread across pages, locations and systems, and it drifted out of date. People judge the company by what they find when they search, visit and try to act." },
        { t: "sequence", items: [{ label: "Content" }, { label: "Search" }, { label: "Website" }, { label: "Reputation" }, { label: "Experience", on: true }] },
      ]},
      { id: "diagnosis", label: "Diagnosis", blocks: [
        { t: "heading", text: "From page-by-page correction to information governance." },
        { t: "para", text: "One wrong page was never the real issue. Facts lived in many places, had no named owner, and got fixed only when someone noticed. So the errors came back." },
        { t: "decision", h: "Fix the source, not the page.", p: "Instead of correcting pages one at a time, I moved the effort upstream: a register of the facts that matter, a validation step and a named owner. Corrections now stick." },
        { t: "stack", items: ["Content accuracy & currency", "UK English / brand consistency", "SEO & technical QA", "Information architecture", "Forms and user journeys", "Location and manufacturing data", "Ongoing ownership / maintenance"] },
      ]},
      { id: "system", label: "The system", blocks: [
        { t: "heading", text: "Business → Source → Validate → Content → Website → User." },
        { t: "sequence", items: [{ label: "Business" }, { label: "Source" }, { label: "Validate", on: true }, { label: "Content" }, { label: "Website" }, { label: "User" }] },
        { t: "para", text: "Detailed website auditing was combined with structured information management, so important facts could be checked, updated and governed instead of repeatedly rediscovered." },
        { t: "stack", items: ["Audit → 32 corrections structured", "Key Data Register → 40 critical data points", "241 locations covered in the register", "JNI → plugin-to-custom-code remediation across 32 pages", "Maintenance mechanism → management-directed"] },
      ]},
      { id: "practice", label: "Work in practice", blocks: [
        { t: "heading", text: "Social creates discovery. Search captures intent. The website has to deliver." },
        { t: "para", text: "Around the governance work sat the routine that keeps a platform healthy: keyword and SERP tracking, on-page and technical SEO, off-page listings, traffic analysis, monthly reporting, and daily reputation monitoring and response." },
      ]},
      { id: "outcome", label: "Evidence", blocks: [
        { t: "statement", text: "From digital housekeeping ", em: "to a repeatable governance mechanism." },
        { t: "para", text: "The strongest result was not a single page fix. It was a repeatable way to treat website information as governed business data." },
      ]},
    ],
    notes: ["Audit findings are shown as structured corrections; the case does not claim every item has been remediated."],
  },
  {
    slug: "digital-strategy-seo-growth", index: "02", mode: "Diagnose", client: "Jindal Naturecure · SEO · Analytics · Growth",
    title: "Digital Strategy, SEO & Growth",
    summary: "Connecting search, analytics, content and market priorities into a measurable digital growth roadmap.",
    context: "Jindal Naturecure Institute's website and search presence. Most of a wellness institute's enquiries start with a search.",
    role: "SEO strategy · GA4 analysis · GSC continuity · research · roadmap design",
    status: "Measured · Roadmap",
    evidence: [
      "JNI organic traffic measured at +65% YoY",
      "JNI conversion measured at +40%",
      "25-task international SEO roadmap across USA, Canada, Australia, Vietnam and South Africa",
    ],
    cover: { src: `${V}/02-cover.svg`, alt: "Diagram: rising organic trend above a flat baseline, with five market nodes", ratio: "16/10" },
    next: { slug: "digital-commerce-performance", title: "Digital Commerce & Performance" },
    chapters: [
      { id: "problem", label: "Problem", blocks: [
        { t: "statement", text: "Activity is easy to count. ", em: "Growth needs a signal you can trust." },
        { t: "para", text: "The growth problem was to connect search demand, website behaviour, content priorities and measurable business actions into one coherent operating roadmap." },
      ]},
      { id: "diagnosis", label: "Diagnosis", blocks: [
        { t: "heading", text: "Use analytics to understand where attention becomes action." },
        { t: "stack", items: ["GA4 channel and landing-page analysis", "Organic search baseline", "User behaviour and journey review", "Conversion event / attribution checks", "GSC property continuity and URL-level search data requirements"] },
        { t: "para", text: "The analysis also turned up measurement gaps. Thank-you-page events and Key Event reporting didn't match, for one. The roadmap was built around what the data could actually prove." },
        { t: "decision", h: "Plan only on what the data can prove.", p: "When the analytics showed gaps, I treated them as part of the diagnosis instead of working around them. International expansion stays labelled as a roadmap, because that is what it is." },
      ]},
      { id: "roadmap", label: "Roadmap", blocks: [
        { t: "heading", text: "From performance diagnosis to an actionable search roadmap." },
        { t: "sequence", items: [{ label: "Research" }, { label: "Prioritise" }, { label: "Optimise", on: true }, { label: "Measure" }, { label: "Expand" }] },
        { t: "stack", items: ["Technical SEO", "Content and intent mapping", "International search opportunity: 5 markets, 25 tasks", "Reporting and KPI definition", "Vendor / implementation coordination"] },
        { t: "status", items: [
          { item: "Domestic SEO & analytics work", status: "Measured", note: "Performance evidence below" },
          { item: "International SEO roadmap", status: "Roadmap", note: "5 markets · 25 tasks" },
        ]},
      ]},
      { id: "outcome", label: "Measured outcome", blocks: [
        { t: "metrics", items: [{ label: "Organic traffic", to: "+65%", delta: "YoY" }, { label: "Conversion", to: "+40%" }] },
      ]},
    ],
    notes: ["Traffic and conversion figures are measured results. No single optimisation is credited with them."],
  },
  {
    slug: "digital-commerce-performance", index: "03", mode: "Grow", client: "Jindal Herbals · Ecommerce · Performance Marketing",
    title: "Digital Commerce & Performance",
    summary: "Using structured campaign optimisation, tracking and performance evidence to improve the ecommerce funnel.",
    context: "Jindal Herbals' direct-to-consumer store, where paid search was being judged on clicks, with little view of what happened on the site afterwards.",
    role: "Digital strategy · campaign optimisation · UTM / tracking · creative coordination · performance analysis",
    status: "Coordinated · Measured",
    evidence: [
      "Google Ads clicks: 2,101 → 4,624 (+120%)",
      "Add-to-carts: 77 → 385 (+400%)",
      "Checkouts: 21 → 109 (+419%)",
      "Page views: 670 → 3,823 (+470%)",
      "CTR: 3.26% → 4.33% (+32%)",
    ],
    cover: { src: `${V}/03-cover.svg`, alt: "Diagram: four-stage ecommerce funnel, before and after optimisation", ratio: "16/10" },
    next: { slug: "business-process-improvement-governance", title: "Business Process Improvement & Governance" },
    chapters: [
      { id: "problem", label: "Problem", blocks: [
        { t: "statement", text: "Performance marketing is useful only when the funnel is visible. ", em: "Track the movement." },
        { t: "para", text: "Clicks were visible; what happened after them was not. The work combined channel strategy, campaign structure, tracking, creative inputs and conversion analysis so the path from click to checkout could be seen and improved." },
      ]},
      { id: "intervention", label: "Intervention", blocks: [
        { t: "decision", h: "Make the funnel visible before optimising it.", p: "Tracking and campaign structure came first: UTMs, extensions, structured copy. After that, every change could be read against add-to-carts and checkouts." },
        { t: "sequence", items: [{ label: "Track", on: true }, { label: "Structure" }, { label: "Test" }, { label: "Optimise" }, { label: "Measure" }] },
        { t: "stack", items: ["URL tracking / UTM structure", "Sitelinks", "Call-outs", "Structured snippets", "Additional headlines and descriptions", "Keyword research", "Creative asset coordination"] },
      ]},
      { id: "evidence", label: "Measured evidence", blocks: [
        { t: "heading", text: "A six-day before / after comparison showed movement across the funnel." },
        { t: "metrics", items: [
          { label: "Clicks", from: "2,101", to: "4,624", delta: "+120%" },
          { label: "Page views", from: "670", to: "3,823", delta: "+470%" },
          { label: "Add-to-carts", from: "77", to: "385", delta: "+400%" },
          { label: "Checkouts", from: "21", to: "109", delta: "+419%" },
          { label: "CTR", from: "3.26%", to: "4.33%", delta: "+32%" },
        ] },
      ]},
      { id: "outcome", label: "Outcome", blocks: [
        { t: "statement", text: "From campaign activity ", em: "to a visible performance funnel." },
        { t: "para", text: "The work created a more structured path from traffic acquisition to ecommerce actions, with clearer evidence for the next decision." },
      ]},
    ],
    notes: [
      "Figures come from a six-day before / after comparison, so they show direction over a short window. They are not a long-term trend.",
      "No single change is credited with the full movement.",
    ],
  },
  {
    slug: "business-process-improvement-governance", index: "04", mode: "Systemise", client: "Audit · Marketing Operations · Governance",
    title: "Business Process Improvement & Governance",
    summary: "Designing operating systems, trackers and control structures for complex business workflows.",
    context: "An internal audit by Deloitte, plus recurring brand-operations work (campaigns, subscriptions, vendors, renewals) that had been running on spreadsheets, email and memory.",
    role: "Process design · control architecture · evidence management · operating model design · cross-functional coordination",
    status: "Final stage · formal closure pending",
    evidence: [
      "Audit Operating System structured around 9 core trackers / control views",
      "IDR coordination, evidence management, submission control and walkthrough coordination for the Deloitte internal audit",
      "BOCMS enterprise workbook specification structured as an 18-sheet operating model",
      "Deloitte internal audit at final stage; formal closure pending",
    ],
    cover: { src: `${V}/04-cover.svg`, alt: "Diagram: nine tracker tiles connected to a central control node", ratio: "16/10" },
    next: { slug: "digital-product-ai-adoption", title: "Digital Product, AI & Adoption Systems" },
    chapters: [
      { id: "problem", label: "Problem", blocks: [
        { t: "statement", text: "Complex workflows create complexity faster than people can track it. ", em: "Structure becomes the control." },
        { t: "para", text: "Audit requests, evidence, submissions, queries, actions and marketing operations needed traceability without depending on fragmented spreadsheets, emails and memory." },
      ]},
      { id: "audit-os", label: "Audit OS", blocks: [
        { t: "heading", text: "Audit complexity turned into a traceable control centre." },
        { t: "decision", h: "Treat the audit as a process, not an inbox.", p: "Every request, submission and query got a place and a status in one set of trackers, so anyone could see what was outstanding without asking. BOCMS and BOASMS apply the same pattern to campaigns and subscriptions." },

        { t: "sequence", items: [{ label: "IDR" }, { label: "Evidence" }, { label: "Submission", on: true }, { label: "Walkthrough" }, { label: "Query" }, { label: "Closure" }] },
        { t: "stack", items: ["IDR tracker", "Evidence register", "Submission tracker", "Query log", "Observation tracker", "Risk / action tracker", "Meetings and dashboard views", "Closure and decision tracking", "Evidence coverage / gaps"] },
        { t: "para", text: "The operating structure was used to coordinate the Deloitte audit: information requests, evidence collection, submission control and walkthroughs. At the current reporting point the audit is in its final stage and formal closure remains pending." },
      ]},
      { id: "systems", label: "Operating systems", blocks: [
        { t: "heading", text: "When the process repeats, build the operating model." },
        { t: "sequence", items: [{ label: "Capture" }, { label: "Structure", on: true }, { label: "Control" }, { label: "Coordinate" }, { label: "Report" }] },
        { t: "status", items: [
          { item: "Audit OS · evidence / control centre", status: "Built · Validated" },
          { item: "Deloitte internal audit", status: "Final stage", note: "Formal closure pending" },
          { item: "BOCMS · campaign lifecycle / controls", status: "Specified", note: "Enterprise workbook specification" },
          { item: "BOASMS · asset / subscription operations", status: "System initiative · Build" },
        ]},
      ]},
      { id: "outcome", label: "Outcome", blocks: [
        { t: "statement", text: "From scattered administration ", em: "to traceable operating structure." },
        { t: "para", text: "The value is the structure itself: clearer ownership, traceability and repeatability around complex processes." },
      ]},
    ],
    notes: ["The Deloitte internal audit is at its final stage and formal closure is pending. No audit outcome is claimed."],
  },
  {
    slug: "digital-product-ai-adoption", index: "05", mode: "Translate", client: "Policy · UAT · AI-assisted Workflows · Adoption",
    title: "Digital Product, AI & Adoption Systems",
    summary: "Translating business requirements into testable digital products, validation structures and adoption support.",
    context: "An internal Policy Access Portal developed with the Digital Solutions team, a website FAQ chatbot, and the adoption work that follows any internal tool launch.",
    role: "Requirements translation · UAT · UX / IA review · AI-assisted information access · implementation coordination",
    status: "Validated · Built",
    evidence: [
      "Policy Access Portal tested through 68 functional test cases",
      "AI search bank structured with 67 questions",
      "WCAG checklist and continuous audit log included in the validation layer",
      "Policy portal live UAT conducted from 24 July 2026",
    ],
    cover: { src: `${V}/05-cover.svg`, alt: "Diagram: a 68-cell test matrix, a search query and a chatbot response", ratio: "16/10" },
    next: { slug: "brand-communications-reputation", title: "Brand, Communications & Reputation" },
    chapters: [
      { id: "problem", label: "Problem", blocks: [
        { t: "statement", text: "A digital product has to be usable, testable and actually used. ", em: "Launching it covers only the first." },
        { t: "para", text: "The work focused on translating policy, helpdesk and information-access requirements into usable interfaces, test structures and adoption workflows." },
      ]},
      { id: "validation", label: "Validation", blocks: [
        { t: "heading", text: "Policy Access Portal: UAT as a quality layer." },
        { t: "stack", items: ["Brand Plan of Action", "Functional UAT matrix: 68 test cases", "AI search question bank: 67 questions", "WCAG checklist", "Continuous audit log", "UX heuristics"] },
        { t: "para", text: "Functional tests ran alongside checks on search quality, accessibility and UX. Live UAT ran from 24 July 2026 across Brand, IT and Digital Solutions." },
        { t: "decision", h: "Test more than the happy path.", p: "A pass/fail UAT would have missed the things users actually trip over, so search, accessibility and UX got their own checks. Adoption became a separate workstream, so a clean launch wouldn't be mistaken for people using it." },
      ]},
      { id: "build", label: "Build", blocks: [
        { t: "heading", text: "AI-assisted workflows are practical when the surrounding structure is clear." },
        { t: "stack", items: ["Working WordPress chatbot", "HTML / CSS / JavaScript UI", "FAQ JSON", "Search / indexing layer", "Storage / logging", "Loader and installation guide"] },
      ]},
      { id: "adoption", label: "Adoption", blocks: [
        { t: "statement", text: "Deployment is not adoption. ", em: "They are tracked separately." },
        { t: "para", text: "Awareness communication, user guidance and the audit-log feedback loop run as their own workstream." },
        { t: "status", items: [
          { item: "Policy Access Portal", status: "Validated", note: "UAT: 68 functional test cases" },
          { item: "AI search question bank", status: "Validated", note: "67 questions" },
          { item: "Website FAQ chatbot", status: "Built" },
          { item: "Adoption", status: "Coordinated" },
        ]},
      ]},
    ],
    notes: [
      "On the chatbot, my part was hands-on implementation and translating the business need. I am not claiming full software-engineering ownership.",
      "No adoption or usage figures are claimed.",
    ],
  },
  {
    slug: "brand-communications-reputation", index: "06", mode: "Narrate", client: "JAL · Brand · Corporate Communications · ORM",
    title: "Brand, Communications & Reputation",
    summary: "Building brand systems and public narratives that make complex organisations easier to understand and trust.",
    context: "Jindal Aluminium, an industrial manufacturer with more than 50 years of history, whose brand, stories, media presence and reputation had to hold together across channels, teams and sites.",
    role: "Brand governance · narrative strategy · corporate communications · reputation / ORM · implementation coordination",
    status: "Coordinated · Measured",
    evidence: [
      "Measured brand visibility: +65%",
      "Measured social engagement: +75%",
      "Measured online sentiment: +40%",
      "ORM response time reduced from 24+ hours to 4–6 hours",
    ],
    cover: { src: `${V}/06-cover.svg`, alt: "Diagram: concentric rings radiating from one brand core to its publics", ratio: "16/10" },
    next: { slug: "enterprise-digital-platform-governance", title: "Enterprise Digital Platform & Website Governance" },
    chapters: [
      { id: "governance", label: "Brand governance", blocks: [
        { t: "statement", text: "How do you evolve an established industrial brand ", em: "without losing the equity built over decades?" },
        { t: "para", text: "People already knew the name. What was missing was consistency: the identity looked different depending on who produced the piece. The work was making it usable for every team, story and application." },
        { t: "pair", a: { src: "/assets/case-01/brand-cover.jpg", alt: "Jindal Aluminium brand guidelines cover", cap: "Brand guidelines / the system", ratio: "16/10" }, b: { src: "/assets/case-01/logo.jpg", alt: "Brand guidelines, logo usage page", cap: "The logo / usage rules", ratio: "16/10" } },
        { t: "statement", text: "I wasn't designing the logo. ", em: "I was helping make the new brand usable." },
        { t: "decision", h: "Make the brand usable, not just new.", p: "Most of the effort went into guidelines, templates and applications that teams, vendors and sites could pick up and use. That is what keeps an identity consistent a year after launch." },
        { t: "sequence", items: [{ label: "Translate", on: true }, { label: "Systemise", on: true }, { label: "Coordinate" }, { label: "Adapt" }, { label: "Scale" }] },
      ]},
      { id: "narrative", label: "Narrative", blocks: [
        { t: "heading", text: "Aluminium is a technical product. The stories are about what it makes possible." },
        { t: "sequence", items: [{ label: "Material" }, { label: "Application" }, { label: "Possibility", on: true }] },
        { t: "wall", title: "One material. Many stories.", items: [
          { src: "/assets/case-01/heritage.jpg", alt: "Campaign creative on heritage and scale", cap: "Heritage & scale", size: "big" },
          { src: "/assets/case-01/ev.jpg", alt: "EV Edge campaign creative", cap: "Mobility", size: "tall" },
          { src: "/assets/case-01/sustainability.jpg", alt: "Greener Future campaign creative", cap: "Sustainability" },
          { src: "/assets/case-01/innovation.jpg", alt: "Aerospace campaign creative", cap: "Innovation / aerospace", size: "wide" },
        ]},
      ]},
      { id: "public", label: "Public narrative", blocks: [
        { t: "heading", text: "From business activity to public story." },
        { t: "sequence", items: [{ label: "Business activity" }, { label: "Relevance" }, { label: "Angle" }, { label: "Narrative", on: true }, { label: "Media" }, { label: "Public story" }] },
        { t: "split", img: { src: "/assets/case-03/inception.jpg", alt: "56th Inception Day feature creative", cap: "56th Inception Day", ratio: "4/5" }, heading: "An anniversary isn't a story. What 56 years means today is.", para: "The narrative connected legacy with manufacturing leadership, engineering capability and future relevance." },
        { t: "split", reverse: true, img: { src: "/assets/case-03/press-clip.jpg", alt: "Print clipping of AS9100D aerospace certification coverage", cap: "Print coverage", ratio: "476/403" }, heading: "Coverage across business, trade and industry media.", para: "Business Standard · The Financial Express · Construction World · ET Energy World · Aviation & Defense · Construction Business Today · AI Circle · The Fourth Voice, and others." },
      ]},
      { id: "content", label: "Content system", blocks: [
        { t: "heading", text: "A steady content system: explainers, films, milestones and capability stories." },
        { t: "social", title: "Selected social content · @jindalaluminium · @jindalnaturecure", posts: [
          { kind: "carousel", handle: "@jindalaluminium", ratio: "1/1", caption: "The Green Metal", desc: "Swipe explainer on why aluminium is 100% recyclable and lower-emission.", slides: [1, 2, 3, 4, 5, 6].map((n) => `${S}/jal-greenmetal-${n}.jpg`) },
          { kind: "video", handle: "@jindalaluminium", ratio: "16/9", caption: "Brand film", desc: "Positioning film for engineered aluminium.", src: `${S}/jal-vid-1.mp4`, poster: `${S}/jal-vid-1-poster.jpg` },
          { kind: "carousel", handle: "@jindalaluminium", ratio: "1/1", caption: "44,569 tonnes of CO₂ avoided", desc: "Sustainability milestone, told as a swipe.", slides: [1, 2, 3, 4, 5].map((n) => `${S}/jal-co2-${n}.jpg`) },
          { kind: "video", handle: "@jindalaluminium", ratio: "9/13", caption: "Reel: aluminium in motion", desc: "Vertical reel for social.", src: `${S}/jal-vid-2.mp4`, poster: `${S}/jal-vid-2-poster.jpg` },
          { kind: "static", handle: "@jindalaluminium", ratio: "4/5", caption: "100% Sustainable", desc: "Recyclability and sustainability messaging.", src: `${S}/jal-sustainable.jpg` },
          { kind: "carousel", handle: "@jindalaluminium", ratio: "1/1", caption: "Across global industries", desc: "Where engineered aluminium shows up, industry by industry.", slides: [1, 2, 3, 4, 5, 6].map((n) => `${S}/jal-industries-${n}.jpg`) },
          { kind: "video", handle: "@jindalaluminium", ratio: "1/1", caption: "Product film", desc: "Short-form product film.", src: `${S}/jal-vid-3.mp4`, poster: `${S}/jal-vid-3-poster.jpg` },
          { kind: "static", handle: "@jindalaluminium", ratio: "4/5", caption: "Engineering capabilities", desc: "Capability positioning creative.", src: `${S}/jal-engineering.jpg` },
          { kind: "static", handle: "@jindalaluminium", ratio: "4/5", caption: "Frames & Facades", desc: "Solutions campaign for façade systems.", src: `${S}/jal-facades.jpg` },
          { kind: "video", handle: "@jindalnaturecure", ratio: "4/3", caption: "From farms to wellness", desc: "Film linking the institute's organic farms to guest wellbeing.", src: `${S}/jni-vid-wellness.mp4`, poster: `${S}/jni-vid-wellness-poster.jpg` },
          { kind: "video", handle: "@jindalnaturecure", ratio: "6/5", caption: "Fresh & nutrient-dense", desc: "Nutrition-led wellness messaging.", src: `${S}/jni-vid-fresh.mp4`, poster: `${S}/jni-vid-fresh-poster.jpg` },
          { kind: "video", handle: "@jindalnaturecure", ratio: "1/1", caption: "Farms & renewable energy", desc: "Sustainability story for the campus.", src: `${S}/jni-vid-farms.mp4`, poster: `${S}/jni-vid-farms-poster.jpg` },
        ]},
      ]},
      { id: "real-world", label: "In the real world", blocks: [
        { t: "heading", text: "A brand becomes real when people encounter it, which means vendors, materials, approvals and deadlines." },
        { t: "essay", items: [
          { src: "/assets/case-05/hero.jpg", alt: "Jindal Box Cricket League employee event", cap: "Employee event", area: "e1" },
          { src: "/assets/case-05/signage.jpg", alt: "Event countdown standee", cap: "Standee / signage", area: "e2" },
          { src: "/assets/case-05/collateral.jpg", alt: "Printed brand collateral", cap: "Collateral", area: "e3" },
        ]},
        { t: "sequence", items: [{ label: "Requirement" }, { label: "Brief & scope" }, { label: "Vendor" }, { label: "Technical review" }, { label: "Approval", on: true }, { label: "Production" }, { label: "Delivery" }] },
      ]},
      { id: "outcomes", label: "Measured outcomes", blocks: [
        { t: "metrics", items: [
          { label: "Brand visibility", to: "+65%" },
          { label: "Social engagement", to: "+75%" },
          { label: "Online sentiment", to: "+40%" },
          { label: "ORM response time", from: "24+ hrs", to: "4–6 hrs" },
        ] },
        { t: "statement", text: "Brand, reputation and communication ", em: "as operating disciplines." },
      ]},
    ],
    notes: ["Brand, engagement, sentiment and ORM figures come from internal performance reporting and are not attributed to a single intervention."],
  },
];

/* Retired public routes → current case (301). Consumed by next.config.mjs. */
export const legacyRedirects: Record<string, string> = {
  "/v2": "/",
  "/work/reframing-a-brand": "/work/brand-communications-reputation",
  "/work/making-aluminium-matter": "/work/brand-communications-reputation",
  "/work/public-narrative": "/work/brand-communications-reputation",
  "/work/real-world": "/work/brand-communications-reputation",
  "/work/digital-layer": "/work/enterprise-digital-platform-governance",
  "/work/business-process-governance": "/work/business-process-improvement-governance",
};
