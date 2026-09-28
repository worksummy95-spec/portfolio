import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icon";
import { work } from "@/lib/content";

export default function SelectedWork() {
  const featured = work.filter((w) => w.featured);
  const rest = work.filter((w) => !w.featured);

  return (
    <Section id="work" index="01" label="Selected work">
      <div className="mb-14 max-w-3xl">
        <p className="font-serif text-2xl leading-snug text-ink md:text-3xl">Six cases, each starting from a business problem. Four highlights first, with the evidence up front.</p>
      </div>

      {/* Highlights */}
      <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {featured.map((w, i) => (
          <li key={w.slug}>
            <Reveal delay={(i % 2) * 0.08} className="h-full">
              <Link href={`/work/${w.slug}`} className="group flex h-full flex-col">
                <span className="relative block overflow-hidden rounded-[3px] bg-panel ring-1 ring-white/[0.06]" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src={w.visual?.src ?? w.img} alt="" fill sizes="(max-width:768px) 100vw, 45vw"
                    className="object-cover transition-transform duration-[1.3s] ease-editorial group-hover:scale-[1.04]"
                    style={{ objectPosition: w.visual?.pos ?? "72% 45%" }} />
                  <span aria-hidden className={"absolute inset-0 " + (w.visual ? "bg-gradient-to-t from-bg via-bg/70 to-bg/10" : "bg-gradient-to-t from-bg via-bg/40 to-transparent")} />
                  {w.metric && (
                    <span className="absolute bottom-5 left-5 right-5 md:bottom-7 md:left-7">
                      <span className="block font-serif text-5xl leading-none tabular-nums text-ink md:text-6xl">{w.metric.value}</span>
                      <span className="mt-2 block max-w-xs text-sm leading-snug text-ink/80">{w.metric.label}</span>
                    </span>
                  )}
                  <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-bg/60 backdrop-blur-sm transition-all duration-500 ease-editorial group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:rotate-12" />
                  </span>
                </span>
                <span className="mt-5 flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.14em]">
                  <span className="tabular-nums text-accent">{w.n}</span>
                  <span className="text-faint">{w.client}</span>
                </span>
                <span className="mt-2 font-serif text-2xl leading-tight text-ink transition-colors duration-500 group-hover:text-accentsoft md:text-[1.9rem]">{w.title}</span>
                <span className="mt-2 max-w-md text-sm leading-relaxed text-muted md:text-base">{w.desc}</span>
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>

      {/* The rest, in the original list style */}
      <p className="mb-4 mt-20 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-faint">Also in the portfolio</p>
      <ul className="border-t border-line">
        {rest.map((w) => (
          <li key={w.slug}>
            <Link href={`/work/${w.slug}`}
              className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-line py-7 md:gap-8 md:py-9">
              <span className="pointer-events-none absolute inset-x-[-1.5rem] inset-y-0 z-0 overflow-hidden md:inset-x-[-2.5rem]">
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-bgalt transition-transform duration-500 ease-editorial group-hover:scale-y-100" />
                <span className="absolute inset-0 opacity-0 transition-opacity duration-[650ms] ease-editorial group-hover:opacity-100">
                  <Image src={w.img} alt="" fill sizes="100vw" className="scale-105 object-cover object-center transition-transform duration-[1400ms] ease-editorial group-hover:scale-100" />
                  <span className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/45" />
                </span>
              </span>

              <span className="relative z-10 flex items-center gap-4">
                <span className="font-mono text-[0.72rem] text-faint tabular-nums transition-colors group-hover:text-accent">{w.n}</span>
                <span className="h-8 w-px origin-top scale-y-0 bg-accent transition-transform duration-500 ease-editorial group-hover:scale-y-100" />
              </span>

              <span className="relative z-10 flex flex-col gap-1">
                <span className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                  <span className="font-serif text-2xl leading-tight text-ink transition-all duration-500 ease-editorial group-hover:translate-x-2 group-hover:text-accent md:text-[2.2rem]">
                    {w.title}
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">{w.client}</span>
                </span>
                <span className="mt-1.5 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-accentsoft/90 transition-transform duration-500 ease-editorial md:group-hover:translate-x-2">{w.proof}</span>
              </span>

              <span className="relative z-10 flex items-center gap-5 justify-self-end">
                <span className="hidden font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted transition-colors group-hover:text-ink sm:inline">{w.mode}</span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-line bg-bg/40 transition-all duration-500 ease-editorial group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:rotate-12" />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
