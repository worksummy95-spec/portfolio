"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import KineticHeading from "@/components/ui/KineticHeading";
import Magnetic from "@/components/ui/Magnetic";
import AnimatedLink from "@/components/ui/AnimatedLink";
import { ArrowRight } from "@/components/ui/Icon";
import { hero, meta } from "@/lib/content";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { useCanAnimate } from "@/hooks/useCanAnimate";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const canAnim = useCanAnimate();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yUp = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const yDown = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // clean staggered two-column collage
  const colA = hero.collage.slice(0, 2);
  const colB = hero.collage.slice(2, 4);

  return (
    <section ref={ref} className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-28">
      <div aria-hidden className="pointer-events-none absolute -top-1/4 right-[-10%] h-[70vh] w-[70vh] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(214,79,97,0.16), transparent 60%)" }} />

      <div className="relative mx-auto grid max-w-wrap gap-14 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-10">
        <motion.div style={canAnim ? { y: yUp } : undefined}>
          {/* NAME + role */}
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-serif text-xl tracking-tight text-ink md:text-2xl">Sumanth Manjunath</span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-faint">/ {meta.role}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.25 }}
            className="mb-8 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-accent">
            {hero.eyebrow}
          </motion.p>

          <KineticHeading
            lines={hero.headline} accentLast immediate delay={0.35}
            className="text-balance font-serif text-[12vw] leading-[1.03] tracking-[-0.03em] text-ink sm:text-6xl md:text-[clamp(2.9rem,5.2vw,5rem)] md:leading-[1.0]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.95 }}
            className="mt-10 max-w-xl text-pretty text-lg leading-relaxed text-muted md:text-xl">
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.1 }}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Magnetic strength={0.4}>
              <a href={"mailto:" + meta.email}
                className="group inline-flex items-center gap-3 rounded-full border border-line px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink transition-colors hover:border-accent hover:text-accent">
                Get in touch
                <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <AnimatedLink href={meta.linkedin} external className="py-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted">
              LinkedIn
            </AnimatedLink>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-faint">{meta.location}</span>
          </motion.div>
        </motion.div>

        {/* CLEAN STAGGERED COLLAGE */}
        <motion.div style={canAnim ? { y: yDown } : undefined} className="hidden md:grid md:grid-cols-2 md:gap-4">
          <div className="flex flex-col gap-4">
            {colA.map((c, i) => (
              <CollageItem key={c.src} c={c} i={i} ratio={i === 0 ? "4/5" : "4/3"} priority />
            ))}
          </div>
          <div className="mt-10 flex flex-col gap-4">
            {colB.map((c, i) => (
              <CollageItem key={c.src} c={c} i={i + 2} ratio={i === 0 ? "4/3" : "4/5"} />
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div style={canAnim ? { opacity: fade } : undefined}
        className="mx-auto mt-20 flex max-w-wrap items-center gap-3 px-6 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-faint md:px-10">
        <span className="relative h-8 w-px overflow-hidden bg-line">
          <motion.span className="absolute inset-x-0 top-0 h-3 bg-accent"
            animate={canAnim ? { y: [-12, 32] } : undefined}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} />
        </span>
        Scroll to explore
      </motion.div>
    </section>
  );
}

function CollageItem({ c, i, ratio, priority = false }:
  { c: { src: string; alt: string }; i: number; ratio: string; priority?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-[3px] ring-1 ring-white/[0.06]"
      style={{ aspectRatio: ratio, boxShadow: "0 30px 70px -35px rgba(0,0,0,.8)" }}>
      <Image src={c.src} alt={c.alt} fill sizes="(max-width:768px) 0px, 28vw"
        className="object-cover transition-transform duration-[1.3s] ease-editorial group-hover:scale-[1.05]" priority={priority} />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
}
