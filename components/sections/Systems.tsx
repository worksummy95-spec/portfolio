"use client";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { systems } from "@/lib/content";

export default function Systems() {
  return (
    <Section id="systems" index="03" label="Beyond communication — systems">
      <Reveal><p className="mb-16 max-w-3xl font-serif text-2xl leading-snug text-ink md:text-3xl">
        When a process was missing, I built the structure for it. Three operating systems, designed as specimens.
      </p></Reveal>
      <div className="grid gap-px overflow-hidden rounded-[2px] border border-line bg-line md:grid-cols-3">
        {systems.map((s, i) => (
          <motion.div key={s.name}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }} transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group relative flex flex-col gap-6 overflow-hidden bg-bg p-8 transition-colors duration-500 hover:bg-bgalt">
            {/* accent top-rule draws in on hover */}
            <span aria-hidden className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 ease-editorial group-hover:scale-x-100" />

            <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">{s.status}</span>
            <div>
              <h3 className="font-serif text-3xl text-ink">{s.name}</h3>
              <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-faint">{s.full}</p>
            </div>
            <p className="text-base leading-relaxed text-muted">{s.p}</p>

            {/* pipeline — a signal cascades down the stages on hover */}
            <div className="mt-auto pt-4">
              <p className="mb-4 flex items-center justify-between font-mono text-[0.64rem] uppercase tracking-[0.16em] text-faint">
                <span>{s.label}</span>
                <span className="tabular-nums text-faint/70">{s.nodes.length} stages</span>
              </p>
              <ul className="relative flex flex-col">
                <span aria-hidden
                  className="absolute bottom-3 left-[8px] top-3 w-px origin-top scale-y-0 bg-gradient-to-b from-accent via-accent/70 to-accent/20 transition-transform duration-[900ms] ease-editorial group-hover:scale-y-100" />
                {s.nodes.map((n, k) => (
                  <li key={k} className="relative z-10 flex items-center gap-3 py-[0.35rem]">
                    <span className="grid h-[17px] w-[17px] shrink-0 place-items-center rounded-full bg-bg ring-1 ring-line transition-all duration-300 group-hover:bg-bgalt group-hover:ring-accent/50"
                      style={{ transitionDelay: `${k * 65}ms` }}>
                      <span className="h-1 w-1 rounded-full bg-faint transition-all duration-300 group-hover:h-[5px] group-hover:w-[5px] group-hover:bg-accent"
                        style={{ transitionDelay: `${k * 65}ms` }} />
                    </span>
                    <span className="font-mono text-[0.72rem] text-muted transition-colors duration-300 group-hover:text-ink"
                      style={{ transitionDelay: `${k * 65}ms` }}>{n}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
