import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import Sequence from "@/components/ui/Sequence";
import { manifesto } from "@/lib/content";

export default function Manifesto() {
  return (
    <Section index="00" label="What I do">
      <div className="grid gap-14 md:grid-cols-2 md:gap-10">
        {manifesto.map((m, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="group relative flex h-full flex-col gap-6 border-t border-line pt-8">
              <span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-[600ms] ease-editorial group-hover:scale-x-100" />
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-accent">{m.kw}</span>
              <h3 className="font-serif text-3xl leading-tight text-ink transition-transform duration-500 ease-editorial group-hover:translate-x-1 md:text-4xl">{m.h}</h3>
              <p className="max-w-md text-lg leading-relaxed text-muted">{m.p}</p>
              <div className="mt-auto pt-4"><Sequence loop items={m.flow.map((f) => ({ label: f }))} /></div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
