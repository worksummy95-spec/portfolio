import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { pov } from "@/lib/content";

export default function POV() {
  return (
    <Section index="06" label="Point of view">
      <Reveal>
        <blockquote className="relative max-w-4xl">
          <span aria-hidden className="absolute -left-2 -top-10 font-serif text-[7rem] leading-none text-accent/15 md:-left-8 md:text-[9rem]">&ldquo;</span>
          <span className="relative font-serif text-3xl leading-[1.2] text-ink md:text-5xl md:leading-[1.14]">
            {pov.statement[0]}<br /><em className="text-accent not-italic">{pov.statement[1]}</em>
          </span>
        </blockquote>
      </Reveal>
      <div className="mt-20 grid gap-px overflow-hidden rounded-[2px] border border-line bg-line sm:grid-cols-2">
        {pov.principles.map((p, i) => (
          <Reveal key={p.n} delay={(i % 2) * 0.08}>
            <div className="group relative flex h-full flex-col gap-4 overflow-hidden bg-bg p-8 transition-colors duration-500 hover:bg-bgalt">
              <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-editorial group-hover:scale-x-100" />
              <span className="font-mono text-[0.7rem] tabular-nums text-accent">{p.n}</span>
              <h3 className="font-serif text-xl text-ink transition-transform duration-500 ease-editorial group-hover:translate-x-1 md:text-2xl">{p.h}</h3>
              <p className="text-base leading-relaxed text-muted">{p.p}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
