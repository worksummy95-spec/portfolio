/* Single source of truth. Components render from this. */
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
  | { t: "coverage"; clip: Img; outlets: string; online: Img };
export type Chapter = { id: string; label: string; blocks: Block[] };
export type Case = {
  slug: string; index: string; mode: string; client: string; title: string;
  cover: Img; chapters: Chapter[]; next: { slug: string; title: string };
};

export const meta = {
  name: "Sumanth Manjunath",
  role: "Brand & Corporate Communications",
  email: "work.summy95@gmail.com",
  linkedin: "https://www.linkedin.com/in/sumanth-manju/",
  resume: "/Sumanth-Manjunath-Resume.pdf",
  location: "Bengaluru, India",
};

export const hero = {
  eyebrow: "Brand Strategy · Corporate Communications · Digital · Reputation",
  headline: ["I make", "complex organisations", "easier to understand,", "trust and remember."],
  sub: "I work at the intersection of brand, communication, digital experience, business operations and systems — turning complexity into something people can understand, use and act on.",
  collage: [
    { src: "/assets/case-02/hero.jpg", alt: "Jindal Aluminium campaign", cls: "hc-a" },
    { src: "/assets/case-01/ev.jpg", alt: "EV Edge campaign", cls: "hc-b" },
    { src: "/assets/case-05/hero.jpg", alt: "Real-world event", cls: "hc-c" },
    { src: "/assets/case-03/hero.png", alt: "Press coverage", cls: "hc-d" },
    { src: "/assets/case-04/creative.jpg", alt: "Digital creative", cls: "hc-e" },
  ],
};

export const manifesto = [
  { kw: "Build", h: "Brand transformation", flow: ["50+ years of equity", "identity transition", "brand system", "communication", "application"], p: "Evolving an established industrial brand into a usable system across stories, channels, teams and applications." },
  { kw: "Systemise", h: "Systems thinking", flow: ["scattered information", "structure", "workflow", "governance", "control"], p: "Turning operational problems into structured, documented systems — BOASMS, BOCMS and Audit OS." },
];

export const work = [
  { slug: "reframing-a-brand", n: "01", mode: "Build", title: "Reframing a 50+ Year Brand", client: "Jindal Aluminium · Brand governance", desc: "Evolving a 50-year industrial identity into a usable brand system.", img: "/assets/case-01/brand-cover.jpg" },
  { slug: "making-aluminium-matter", n: "02", mode: "Translate", title: "Making Aluminium Matter", client: "B2B storytelling · Campaign strategy", desc: "Turning a technical material into stories people actually remember.", img: "/assets/case-02/hero.jpg" },
  { slug: "public-narrative", n: "03", mode: "Amplify", title: "From Business Activity to Public Narrative", client: "Corporate communications · PR", desc: "A repeatable route from business activity to press coverage.", img: "/assets/case-03/hero.png" },
  { slug: "digital-layer", n: "04", mode: "Operate", title: "Building the Digital Layer", client: "Digital · SEO · Reputation", desc: "Search, social, website and reputation as one connected system.", img: "/assets/case-04/social.jpg" },
  { slug: "real-world", n: "05", mode: "Deliver", title: "Taking the Brand Into the Real World", client: "Physical applications · Events", desc: "The brand made physical — events, signage and production.", img: "/assets/case-05/hero.jpg" },
];

export const systems = [
  { status: "System initiative · build", name: "BOASMS", full: "Brand Operations Asset & Subscription Management System", p: "Fragmented operational information — subscriptions, vendors, renewals, invoices, budgets and digital assets — turned into one governed system.", label: "System architecture", nodes: ["Subscriptions", "Vendors", "Renewals", "Invoices", "Budgets", "Digital assets", "Governance"] },
  { status: "Design · specification", name: "BOCMS", full: "Brand Operations Campaign Management System", p: "Campaign management as an operating system — lifecycle, workflow, control and reporting from brief to performance.", label: "System architecture", nodes: ["Campaign", "Activities", "Content", "Assets", "Approvals", "Publishing", "Performance"] },
  { status: "Built · validated", name: "Audit OS", full: "Audit Operating System", p: "Audit complexity turned into a traceable control centre. A control structure, not a card.", label: "Control structure", nodes: ["IDR", "Evidence", "Submission", "Query", "Observation", "Risk", "Action"] },
];

export const capabilities = [
  { n: "01", h: "Brand", p: "Brand Strategy & Governance" },
  { n: "02", h: "Communication", p: "Corporate Communications & Reputation" },
  { n: "03", h: "Digital", p: "Digital Brand & Experience" },
  { n: "04", h: "Story", p: "B2B Storytelling & Content" },
  { n: "05", h: "Operations", p: "Marketing Operations & Process Design" },
  { n: "06", h: "Systems", p: "Business Systems & AI-Assisted Workflows" },
];

/* Social & campaign creative — real posts from the two brand accounts.
   Types: static (one image) · carousel (ordered slides) · video (mp4 + poster). */
export type SocialPost = {
  handle: string; caption: string; ratio: string; desc?: string;
} & (
  | { kind: "static"; src: string }
  | { kind: "carousel"; slides: string[] }
  | { kind: "video"; src: string; poster: string }
);

const M = "/assets/social/media";
export const social = {
  handles: [
    { tag: "@jindalaluminium", label: "Jindal Aluminium", years: "2022 – present" },
    { tag: "@jindalnaturecure", label: "Jindal Naturecure", years: "2020 – 2022" },
  ],
  posts: [
    { kind: "carousel", handle: "@jindalaluminium", ratio: "1/1", caption: "The Green Metal", desc: "Swipe explainer on why aluminium is 100% recyclable and lower-emission.", slides: [1,2,3,4,5,6].map(n => `${M}/jal-greenmetal-${n}.jpg`) },
    { kind: "video", handle: "@jindalaluminium", ratio: "16/9", caption: "Brand film", desc: "Positioning film for engineered aluminium.", src: `${M}/jal-vid-1.mp4`, poster: `${M}/jal-vid-1-poster.jpg` },
    { kind: "carousel", handle: "@jindalaluminium", ratio: "1/1", caption: "44,569 tonnes of CO₂ avoided", desc: "Sustainability milestone, visualised as a swipe.", slides: [1,2,3,4,5].map(n => `${M}/jal-co2-${n}.jpg`) },
    { kind: "static", handle: "@jindalaluminium", ratio: "4/5", caption: "100% Sustainable", desc: "Recyclable, zero-compromise sustainability messaging.", src: `${M}/jal-sustainable.jpg` },
    { kind: "carousel", handle: "@jindalaluminium", ratio: "1/1", caption: "Across global industries", desc: "Where engineered aluminium shows up, industry by industry.", slides: [1,2,3,4,5,6].map(n => `${M}/jal-industries-${n}.jpg`) },
    { kind: "video", handle: "@jindalaluminium", ratio: "1/1", caption: "Product film", desc: "Short-form product film.", src: `${M}/jal-vid-3.mp4`, poster: `${M}/jal-vid-3-poster.jpg` },
    { kind: "static", handle: "@jindalaluminium", ratio: "4/5", caption: "Engineering capabilities", desc: "Capability positioning creative.", src: `${M}/jal-engineering.jpg` },
    { kind: "video", handle: "@jindalaluminium", ratio: "9/13", caption: "Reel — aluminium in motion", desc: "Vertical reel for social.", src: `${M}/jal-vid-2.mp4`, poster: `${M}/jal-vid-2-poster.jpg` },
    { kind: "static", handle: "@jindalaluminium", ratio: "4/5", caption: "Frames & Facades", desc: "Solutions campaign for premium façade systems.", src: `${M}/jal-facades.jpg` },
    { kind: "static", handle: "@jindalaluminium", ratio: "1/1", caption: "Festival post", desc: "Occasion-led brand creative.", src: `${M}/jal-brand.jpg` },
    { kind: "video", handle: "@jindalnaturecure", ratio: "4/3", caption: "From farms to wellness", desc: "Film linking organic farms to guest wellbeing.", src: `${M}/jni-vid-wellness.mp4`, poster: `${M}/jni-vid-wellness-poster.jpg` },
    { kind: "static", handle: "@jindalnaturecure", ratio: "1/1", caption: "Heal, rejuvenate, transform", desc: "Institute positioning creative.", src: `${M}/jni-heal.jpg` },
    { kind: "video", handle: "@jindalnaturecure", ratio: "6/5", caption: "Fresh & nutrient-dense", desc: "Nutrition-led wellness messaging.", src: `${M}/jni-vid-fresh.mp4`, poster: `${M}/jni-vid-fresh-poster.jpg` },
    { kind: "static", handle: "@jindalnaturecure", ratio: "1/1", caption: "Buddha Purnima", desc: "Festival greeting creative.", src: `${M}/jni-buddha.jpg` },
    { kind: "video", handle: "@jindalnaturecure", ratio: "1/1", caption: "Farms & renewable energy", desc: "Sustainability story for the campus.", src: `${M}/jni-vid-farms.mp4`, poster: `${M}/jni-vid-farms-poster.jpg` },
    { kind: "static", handle: "@jindalnaturecure", ratio: "1/1", caption: "Kannada Rajyotsava", desc: "Regional festival greeting.", src: `${M}/jni-kannada.jpg` },
  ] as SocialPost[],
};

export const experience = {
  arc: [
    { yr: "2017", org: "Zerozilla Technologies", role: "Digital Marketing Executive · Oct 2017 – Oct 2020", p: "Performance marketing, SEO, paid search and content across multiple client accounts." },
    { yr: "2020", org: "Jindal Naturecure Institute", role: "Digital Marketing & Corporate Communication · Oct 2020 – Jun 2022", p: "Integrated content, digital marketing and communication across health and wellness initiatives." },
    { yr: "2022", org: "Jindal Aluminium Limited", role: "Assistant Manager – Brand Marketing & Corporate Communications · Jun 2022 – Present", p: "Brand, corporate communications, digital, content, PR, reputation, marketing operations and cross-functional business initiatives." },
  ],
  note: "The role expanded with the problem.",
  path: ["Communication", "Brand", "Digital", "Operations", "Systems"],
};

export const pov = {
  statement: ["Good communication is rarely about saying more.", "It's about removing what doesn't matter."],
  principles: [
    { n: "01", h: "Message before medium", p: "The channel is easy. Knowing exactly what to say, to whom and why is the actual work." },
    { n: "02", h: "Measure or it didn't happen", p: "Communication should be accountable to evidence, not just activity." },
    { n: "03", h: "Reputation is a system", p: "Reputation isn't only a crisis function. The workflows that keep it steady matter before a crisis arrives." },
    { n: "04", h: "If a tool is missing, build it", p: "Not everything needs a vendor. Sometimes the fastest path to a better process is to build the missing structure yourself." },
  ],
};

export const cases: Case[] = [
  {
    slug: "reframing-a-brand", index: "01", mode: "Build", client: "Jindal Aluminium · Brand Strategy · Governance",
    title: "Reframing a 50-year brand",
    cover: { src: "/assets/case-01/brand-cover.jpg", alt: "Jindal Aluminium — the brand guidelines / brand book" },
    next: { slug: "making-aluminium-matter", title: "Making Aluminium Matter" },
    chapters: [
      { id: "context", label: "The question", blocks: [
        { t: "statement", text: "How do you evolve an established industrial brand ", em: "without losing the equity built over decades?" },
        { t: "para", text: "The problem wasn't recognition — it was coherence. The answer wasn't a new logo. It was making the evolving identity usable across stories, channels, teams and real-world applications." },
      ]},
      { id: "transition", label: "Transition", blocks: [
        { t: "statement", text: "From an identity asset ", em: "to an identity system." },
        { t: "sequence", items: [{ label: "Old" }, { label: "New" }, { label: "System", on: true }] },
        { t: "pair", a: { src: "/assets/case-01/brand-cover.jpg", alt: "Jindal Aluminium brand guidelines cover", cap: "Brand guidelines / the system", ratio: "16/10" }, b: { src: "/assets/case-01/architecture.jpg", alt: "Then and Now — construction campaign", cap: "Then and Now / the story", ratio: "4/5" } },
      ]},
      { id: "role", label: "My role", blocks: [
        { t: "statement", text: "I wasn't designing the logo. ", em: "I was helping make the new brand usable." },
        { t: "sequence", items: [{ label: "Translate", on: true }, { label: "Systemise", on: true }, { label: "Coordinate" }, { label: "Adapt" }, { label: "Scale" }] },
      ]},
      { id: "system", label: "The system", blocks: [
        { t: "heading", text: "A brand guideline is useful only when people can actually use it." },
        { t: "para", text: "Logo, colour, scale and typography — the connective tissue that keeps a brand consistent across a large, multi-site organisation. Source: Jindal Aluminium brand guidelines." },
        { t: "split", img: { src: "/assets/case-01/logo.jpg", alt: "Brand guidelines — The Logo", cap: "The Logo / brand guidelines", ratio: "16/10" }, heading: "", para: "" },
        { t: "pair", a: { src: "/assets/case-01/colour.jpg", alt: "Brand guidelines — Colour and Scale", cap: "Colour & scale", ratio: "16/9" }, b: { src: "/assets/case-01/type.jpg", alt: "Brand guidelines — Typefaces", cap: "Typefaces", ratio: "16/9" } },
      ]},
      { id: "stories", label: "The stories", blocks: [
        { t: "heading", text: "One company. Many possibilities." },
        { t: "wall", title: "Campaign wall — Jindal Aluminium", items: [
          { src: "/assets/case-01/heritage.jpg", alt: "India's largest campaign", cap: "Heritage & scale", size: "big" },
          { src: "/assets/case-01/ev.jpg", alt: "EV Edge campaign", cap: "EV Edge / Mobility", size: "tall" },
          { src: "/assets/case-01/sustainability.jpg", alt: "Greener Future campaign", cap: "Sustainability" },
          { src: "/assets/case-01/innovation.jpg", alt: "Being a Part campaign", cap: "Innovation / Aerospace", size: "wide" },
          { src: "/assets/case-01/editorial.jpg", alt: "Production campaign", cap: "Production" },
          { src: "/assets/case-01/architecture.jpg", alt: "Then and Now campaign", cap: "Architecture", size: "tall" },
        ]},
      ]},
      { id: "wild", label: "In the wild", blocks: [
        { t: "heading", text: "The brand, made physical." },
        { t: "image", img: { src: "/assets/case-05/collateral.jpg", alt: "Physical collateral / standee", cap: "Application / collateral", ratio: "16/9" }, full: true },
      ]},
      { id: "outcome", label: "Outcome", blocks: [
        { t: "statement", text: "From identity ", em: "to a working system." },
        { t: "para", text: "The strongest outcome wasn't a single campaign or metric. It was coherence — a brand system capable of moving across stories, channels, teams and applications." },
      ]},
    ],
  },
  {
    slug: "making-aluminium-matter", index: "02", mode: "Translate", client: "Campaign Strategy · B2B Storytelling",
    title: "Making aluminium matter",
    cover: { src: "/assets/case-02/hero.jpg", alt: "Unleash Your Imagination With Engineered Aluminium campaign" },
    next: { slug: "public-narrative", title: "From Business Activity to Public Narrative" },
    chapters: [
      { id: "problem", label: "Problem", blocks: [
        { t: "statement", text: "Aluminium is technical. ", em: "Its impact isn't." },
        { t: "para", text: "Aluminium is everywhere — but the material itself is rarely the story people remember." },
      ]},
      { id: "shift", label: "The shift", blocks: [
        { t: "heading", text: "From product communication to possibility communication." },
        { t: "para", text: "The product was aluminium. The story was what aluminium makes possible." },
        { t: "sequence", items: [{ label: "Material" }, { label: "Application" }, { label: "Possibility", on: true }] },
      ]},
      { id: "stories", label: "Story wall", blocks: [
        { t: "wall", title: "One material. Many stories.", items: [
          { src: "/assets/case-02/hero.jpg", alt: "Unleash Imagination campaign", cap: "Possibility", size: "big" },
          { src: "/assets/case-02/story-01.jpg", alt: "India's largest campaign", cap: "Heritage", size: "tall" },
          { src: "/assets/case-02/ev.jpg", alt: "EV Edge campaign", cap: "Mobility" },
          { src: "/assets/case-02/story-02.jpg", alt: "Then and Now campaign", cap: "Architecture", size: "wide" },
          { src: "/assets/case-02/sustainability.jpg", alt: "Greener Future campaign", cap: "Sustainability" },
          { src: "/assets/case-02/louvers.jpg", alt: "Louvers campaign", cap: "Application", size: "tall" },
          { src: "/assets/case-02/innovation.jpg", alt: "Innovation campaign", cap: "Innovation" },
        ]},
      ]},
      { id: "outcome", label: "Outcome", blocks: [
        { t: "statement", text: "Make the invisible ", em: "matter." },
        { t: "para", text: "A broader portfolio of stories connecting aluminium with construction, mobility, infrastructure, sustainability and technology." },
      ]},
    ],
  },
  {
    slug: "public-narrative", index: "03", mode: "Amplify", client: "Corporate Communications · PR · Reputation",
    title: "From business activity to public narrative",
    cover: { src: "/assets/case-03/hero.png", alt: "Print media coverage — AS9100D Aerospace Certification" },
    next: { slug: "digital-layer", title: "Building the Digital Layer" },
    chapters: [
      { id: "problem", label: "Problem", blocks: [
        { t: "statement", text: "The business is moving. ", em: "The story has to travel." },
        { t: "para", text: "A company is constantly doing things. Communication decides what those things mean to the outside world." },
      ]},
      { id: "workflow", label: "Workflow", blocks: [
        { t: "stack", items: ["Business activity", "Relevance", "Angle", "Narrative", "Media", "Public story"] },
      ]},
      { id: "example", label: "Example", blocks: [
        { t: "heading", text: "An anniversary isn't a story. What 56 years means today is." },
        { t: "para", text: "The narrative connected legacy with manufacturing leadership, engineering capability and future relevance." },
        { t: "image", img: { src: "/assets/case-03/inception.jpg", alt: "56th Inception Day feature", cap: "56th Inception Day / #nextdraft", ratio: "16/9" }, full: true },
      ]},
      { id: "archive", label: "Coverage", blocks: [
        { t: "coverage", clip: { src: "/assets/case-03/hero.png", alt: "Print clipping — AS9100D", cap: "The Fourth Voice / Print" }, outlets: "Business Standard · The Financial Express · Construction World · ET Energy World · Aviation & Defense · Construction Business Today · AI Circle · The Fourth Voice — and others.", online: { src: "/assets/case-03/coverage.jpg", alt: "Online coverage — Business Standard", cap: "Business Standard / Online" } },
      ]},
      { id: "outcome", label: "Outcome", blocks: [
        { t: "statement", text: "Making the business ", em: "easier to understand." },
        { t: "para", text: "A repeatable route from business activity to narrative, media and public visibility." },
      ]},
    ],
  },
  {
    slug: "digital-layer", index: "04", mode: "Operate", client: "Digital · SEO · Website · Reputation",
    title: "Building the digital layer",
    cover: { src: "/assets/case-04/social.jpg", alt: "Digital social creative — inspire possibilities" },
    next: { slug: "real-world", title: "Taking the Brand Into the Real World" },
    chapters: [
      { id: "problem", label: "Problem", blocks: [
        { t: "statement", text: "One brand. ", em: "Too many digital touchpoints." },
        { t: "para", text: "A brand lives in what people see when they search for you, visit your website, read a review or meet you on social. The channel is not the experience." },
        { t: "sequence", items: [{ label: "Content" }, { label: "Search" }, { label: "Website" }, { label: "Reputation" }, { label: "Experience", on: true }] },
      ]},
      { id: "content", label: "Content", blocks: [
        { t: "split", reverse: true, img: { src: "/assets/case-04/creative.jpg", alt: "NextDraft internal newsletter", cap: "NextDraft / editorial", ratio: "4/5" }, heading: "One business. Many reasons to talk.", para: "A steady content system across social, festivals, milestones and an internal newsletter — consistent voice, many occasions." },
        { t: "pair", a: { src: "/assets/case-04/social.jpg", alt: "Festival social creative", cap: "Social", ratio: "9/12" }, b: { src: "/assets/case-04/calendar.jpg", alt: "Festival greeting post", cap: "Social", ratio: "9/12" } },
      ]},
      { id: "search", label: "Search", blocks: [
        { t: "heading", text: "Social creates discovery. Search captures intent." },
        { t: "stack", items: ["Keyword ranking & SERP tracking", "On-page & technical SEO", "Off-page — profiles, listings, bookmarks", "Traffic analysis — channels & engagement", "Task status & monthly reporting"] },
      ]},
      { id: "website", label: "Website", blocks: [
        { t: "heading", text: "The website is where the brand has to deliver." },
        { t: "sequence", items: [{ label: "Business" }, { label: "Source" }, { label: "Validate" }, { label: "Content" }, { label: "Website" }, { label: "User", on: true }] },
        { t: "para", text: "Structured information, validation, ownership and a single source of truth across locations and business data — plus daily reputation monitoring and response." },
      ]},
      { id: "outcome", label: "Outcome", blocks: [
        { t: "statement", text: "From digital activity ", em: "to a connected system." },
        { t: "para", text: "Consistency, governance, connectivity and repeatability across every digital touchpoint." },
      ]},
    ],
  },
  {
    slug: "real-world", index: "05", mode: "Deliver", client: "Physical · Events · Collateral · Production",
    title: "Taking the brand into the real world",
    cover: { src: "/assets/case-05/hero.jpg", alt: "Jindal Box Cricket League — employee engagement event" },
    next: { slug: "reframing-a-brand", title: "Reframing a 50-Year Brand" },
    chapters: [
      { id: "problem", label: "Problem", blocks: [
        { t: "statement", text: "A brand system isn't complete until it works ", em: "in the real world." },
        { t: "para", text: "Physical applications introduce dimensions, materials, locations, vendors, technical constraints, deadlines and approvals. Brand system → object → environment." },
      ]},
      { id: "essay", label: "Photo essay", blocks: [
        { t: "essay", items: [
          { src: "/assets/case-05/hero.jpg", alt: "Box Cricket League event", cap: "Jindal Box Cricket League / Event", area: "e1" },
          { src: "/assets/case-05/signage.jpg", alt: "Event countdown standee", cap: "Standee / Signage", area: "e2" },
          { src: "/assets/case-05/collateral.jpg", alt: "Production collateral", cap: "Collateral", area: "e3" },
          { src: "/assets/case-05/event.jpg", alt: "Aluminium Expo 2024", cap: "Aluminium Expo 2024", area: "e4" },
        ]},
      ]},
      { id: "coord", label: "Coordination", blocks: [
        { t: "heading", text: "Turning a requirement into an executable solution." },
        { t: "stack", items: ["Requirement", "Brief & scope", "Vendor", "Technical review", "Approval", "Production", "Delivery"] },
      ]},
      { id: "outcome", label: "Outcome", blocks: [
        { t: "statement", text: "A brand becomes real ", em: "when people encounter it." },
        { t: "para", text: "Brand consistency connected with usability, execution and physical experience." },
      ]},
    ],
  },
];
