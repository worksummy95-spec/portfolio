import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { capabilities } from "@/lib/content";

export default function Capabilities() {
  return (
    <Section id="capabilities" index="04" label="Capabilities">
      <div className="grid gap-px overflow-hidden rounded-[2px] border border-line bg-line sm:grid-cols-2 md:grid-cols-3">
        {capabilities.map((c, i) => (
          <Reveal key={c.n} delay={(i % 3) * 0.06}>
            <div className="group relative flex h-full flex-col gap-3 overflow-hidden bg-bg p-8 transition-colors duration-500 hover:bg-bgalt">
              <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-editorial group-hover:scale-x-100" />
              <span aria-hidden className="pointer-events-none absolute -right-2 -top-5 font-serif text-[5.5rem] leading-none text-ink/[0.03] transition-colors duration-500 group-hover:text-accent/[0.07]">{c.n}</span>
              <span className="relative font-mono text-[0.7rem] tabular-nums text-faint transition-colors duration-300 group-hover:text-accent">{c.n}</span>
              <h3 className="relative font-serif text-2xl text-ink transition-transform duration-500 ease-editorial group-hover:translate-x-1">{c.h}</h3>
              <p className="relative text-sm leading-relaxed text-muted">{c.p}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
