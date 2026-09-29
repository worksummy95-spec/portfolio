"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import KineticHeading from "@/components/ui/KineticHeading";
import Magnetic from "@/components/ui/Magnetic";
import AnimatedLink from "@/components/ui/AnimatedLink";
import { ArrowRight } from "@/components/ui/Icon";
import { hero, meta } from "@/lib/content";
import { useCanAnimate } from "@/hooks/useCanAnimate";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const canAnim = useCanAnimate();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yUp = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const yDown = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-32 pb-20 md:pt-32 md:pb-24">
      <div aria-hidden className="pointer-events-none absolute -top-1/4 right-[-10%] h-[70vh] w-[70vh] rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, rgba(214,79,97,0.16), transparent 60%)" }} />

      <div className="relative mx-auto grid max-w-wrap gap-14 px-6 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-16 md:px-10">
        <motion.div style={canAnim ? { y: yUp } : undefined}>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <span className="relative mr-1 h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10 md:hidden">
              <Image src={hero.photo.src} alt="" fill sizes="44px" className="object-cover object-[50%_28%]" priority />
            </span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-accent md:inline-block" />
            <span className="font-serif text-xl tracking-tight text-ink md:text-2xl">{meta.name}</span>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-faint">/ {meta.role}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.25 }}
            className="mb-6 font-mono text-[0.68rem] uppercase leading-relaxed tracking-[0.2em] text-accent">
            {hero.eyebrow}
          </motion.p>

          <KineticHeading
            lines={hero.headline} accentLast immediate delay={0.35}
            className="text-balance font-serif text-[12.5vw] leading-[1.02] tracking-[-0.03em] text-ink sm:text-6xl md:text-[clamp(3rem,5.2vw,5rem)] md:leading-[0.98]"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            {hero.sub}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.95 }}
            className="mt-4 max-w-xl border-l border-accent/50 pl-4 text-pretty text-[0.95rem] leading-relaxed text-ink/85">
            {hero.current}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 1.05 }}
            className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Magnetic strength={0.4}>
              <a href="#work"
                className="group inline-flex items-center gap-3 rounded-full border border-line px-6 py-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink transition-colors hover:border-accent hover:text-accent">
                View selected work
                <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-editorial group-hover:translate-x-1" />
              </a>
            </Magnetic>
            <AnimatedLink href={meta.resume} external className="py-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted">
              Résumé
            </AnimatedLink>
            <AnimatedLink href={meta.linkedin} external className="py-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted">
              LinkedIn
            </AnimatedLink>
          </motion.div>

          {/* Compact evidence line — each item links to its case */}
          <motion.ul
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 1.2 }}
            aria-label="Selected evidence"
            className="mt-8 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-5 sm:grid-cols-4">
            {hero.proof.map((p) => (
              <li key={p.value}>
                <Link href={p.href} className="group block">
                  <span className="block font-serif text-2xl leading-none tabular-nums text-ink transition-colors group-hover:text-accentsoft md:text-[1.7rem]">{p.value}</span>
                  <span className="mt-1.5 block text-[0.8rem] leading-snug text-muted">{p.label}</span>
                </Link>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Portrait */}
        <motion.div style={canAnim ? { y: yDown } : undefined} className="hidden md:block md:self-center">
          <motion.figure
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="relative m-0 ml-auto w-full max-w-[380px] overflow-hidden rounded-[3px] ring-1 ring-white/[0.06]"
            style={{ aspectRatio: "4/5", boxShadow: "0 40px 90px -40px rgba(0,0,0,.85)" }}>
            <Image src={hero.photo.src} alt={hero.photo.alt} fill priority sizes="(max-width:768px) 1px, 400px"
              className="object-cover object-[50%_45%] grayscale-[15%]" />
            <span aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/55 via-transparent to-transparent" />
          </motion.figure>
        </motion.div>
      </div>

      <motion.div style={canAnim ? { opacity: fade } : undefined}
        className="mx-auto mt-14 flex max-w-wrap items-center gap-3 px-6 font-mono text-[0.68rem] uppercase tracking-[0.2em] text-faint md:px-10">
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
