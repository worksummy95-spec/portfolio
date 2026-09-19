import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { ArrowUpRight } from "@/components/ui/Icon";
import { work } from "@/lib/content";

export default function SelectedWork() {
  return (
    <Section id="work" index="01" label="Selected work">
      <ul className="border-t border-line">
        {work.map((w) => (
          <li key={w.slug}>
            <Link href={`/work/${w.slug}`}
              className="group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 border-b border-line py-7 md:gap-8 md:py-9">
              {/* hover fill: panel + the case image washes in behind the text */}
              <span className="pointer-events-none absolute inset-x-[-1.5rem] inset-y-0 z-0 overflow-hidden md:inset-x-[-2.5rem]">
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-bgalt transition-transform duration-500 ease-editorial group-hover:scale-y-100" />
                <span className="absolute inset-0 opacity-0 transition-opacity duration-[650ms] ease-editorial group-hover:opacity-100">
                  <Image src={w.img} alt="" fill sizes="100vw" className="scale-105 object-cover object-center transition-transform duration-[1400ms] ease-editorial group-hover:scale-100" />
                  <span className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/45" />
                </span>
              </span>

              {/* index + accent bar */}
              <span className="relative z-10 flex items-center gap-4">
                <span className="font-mono text-[0.72rem] text-faint tabular-nums transition-colors group-hover:text-accent">{w.n}</span>
                <span className="h-8 w-px origin-top scale-y-0 bg-accent transition-transform duration-500 ease-editorial group-hover:scale-y-100" />
              </span>

              {/* title + client + revealed description */}
              <span className="relative z-10 flex flex-col gap-1">
                <span className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                  <span className="font-serif text-2xl leading-tight text-ink transition-all duration-500 ease-editorial group-hover:translate-x-2 group-hover:text-accent md:text-[2.5rem]">
                    {w.title}
                  </span>
                  <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-faint">{w.client}</span>
                </span>
                <span className="max-h-0 overflow-hidden text-sm leading-snug text-muted opacity-0 transition-all duration-500 ease-editorial group-hover:mt-1.5 group-hover:max-h-16 group-hover:opacity-100 md:group-hover:translate-x-2">
                  {w.desc}
                </span>
              </span>

              {/* mode + arrow */}
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
