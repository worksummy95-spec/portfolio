import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/lib/content";

export default function Experience() {
  const path = experience.path;
  return (
    <Section id="experience" index="05" label="Experience">
      <Reveal><p className="mb-16 max-w-2xl font-serif text-2xl text-ink md:text-3xl">{experience.note}</p></Reveal>

      <div className="relative border-t border-line">
        {/* timeline spine */}
        <span aria-hidden className="pointer-events-none absolute bottom-0 left-[5px] top-0 hidden w-px bg-line md:block" />
        {experience.arc.map((e, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="group relative grid gap-4 border-b border-line py-9 transition-colors duration-500 hover:bg-bgalt/40 md:grid-cols-[auto_1fr_1.2fr] md:gap-10 md:pl-10">
              {/* node on the spine */}
              <span aria-hidden className="pointer-events-none absolute left-[5px] top-[2.9rem] hidden h-[11px] w-[11px] -translate-x-1/2 rounded-full border border-faint bg-bg transition-all duration-500 ease-editorial group-hover:scale-125 group-hover:border-accent group-hover:bg-accent md:block" />
              <span className="font-mono text-sm tabular-nums text-accent">{e.yr}</span>
              <div>
                <h3 className="font-serif text-2xl text-ink transition-transform duration-500 ease-editorial group-hover:translate-x-1">{e.org}</h3>
                <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-faint">{e.role}</p>
              </div>
              <p className="text-base leading-relaxed text-muted">{e.p}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* how the role grew */}
      <Reveal>
        <div className="mt-12">
          <p className="mb-4 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-faint">How the role grew</p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
            {path.map((p, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className={"rounded-full border px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] transition-colors " + (i === path.length - 1 ? "border-accent/60 bg-accent/[0.06] text-accent" : "border-line text-muted")}>{p}</span>
                {i < path.length - 1 && <span className="text-faint">→</span>}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
