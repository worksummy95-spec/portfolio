"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { work, type Case } from "@/lib/content";
import Blocks from "@/components/ui/Blocks";
import { ArrowUpRight } from "@/components/ui/Icon";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useCanAnimate } from "@/hooks/useCanAnimate";

export default function CaseStudy({ data }: { data: Case }) {
  const coverRef = useRef<HTMLElement>(null);
  const canAnim = useCanAnimate();
  const { scrollYProgress } = useScroll({ target: coverRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const titleFade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const active = useActiveSection(data.chapters.map((c) => c.id));
  const proof = work.find((w) => w.slug === data.slug)?.proof;

  return (
    <article>
      {/* Cover */}
      <header ref={coverRef} className="relative flex min-h-[64vh] flex-col justify-end overflow-hidden md:min-h-[58vh]">
        <motion.div style={canAnim ? { y: imgY, scale: 1.12 } : undefined} className="absolute inset-0">
          <Image src={data.cover.src} alt={data.cover.alt} fill priority sizes="100vw" className="object-cover object-[72%_45%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/55 to-bg/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg/40 to-transparent" />
        </motion.div>
        <motion.div style={canAnim ? { y: titleY, opacity: titleFade } : undefined}
          className="relative mx-auto w-full max-w-wrap px-6 pb-12 pt-32 md:px-10 md:pb-16">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-6 flex flex-wrap items-center gap-x-3 font-mono text-[0.72rem] uppercase tracking-[0.2em] text-accent">
            <Link href="/#work" className="mr-2 text-faint transition-colors hover:text-ink">← Work</Link>
            <span>{data.index}</span><span className="text-faint">/</span><span>{data.mode}</span>
            <span className="text-faint">—</span><span className="text-muted">{data.client}</span>
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl text-balance font-serif text-4xl leading-[1.04] tracking-[-0.02em] text-ink md:text-[clamp(3rem,6vw,6rem)] md:leading-[1.0]">
            {data.title}
          </motion.h1>
          {proof && (
            <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-6 font-mono text-[0.74rem] uppercase tracking-[0.14em] text-accentsoft">
              {proof}
            </motion.p>
          )}
        </motion.div>
      </header>

      {/* Case framing: context, summary, role, status and evidence */}
      <section aria-label="Case overview" className="border-y border-line bg-bgalt">
        <div className="mx-auto grid max-w-wrap gap-12 px-6 py-12 md:grid-cols-[1.25fr_0.75fr] md:gap-16 md:px-10 md:py-16">
          <div className="flex flex-col gap-8">
            <p className="max-w-3xl font-serif text-2xl leading-[1.15] tracking-[-0.015em] text-ink md:text-4xl">{data.summary}</p>
            <dl className="grid gap-7 sm:grid-cols-2">
              <div>
                <dt className="mb-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-faint">Context</dt>
                <dd className="m-0 text-sm leading-6 text-muted">{data.context}</dd>
              </div>
              <div>
                <dt className="mb-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-faint">Role / scope</dt>
                <dd className="m-0 text-sm leading-6 text-muted">{data.role}</dd>
              </div>
            </dl>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <p className="mb-3 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-faint">Status</p>
              <p className="inline-flex rounded-full border border-accent/50 bg-accent/[0.07] px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-accentsoft">{data.status}</p>
            </div>
            <div>
              <p className="mb-2 font-mono text-[0.66rem] uppercase tracking-[0.18em] text-faint">Evidence</p>
              <ul className="space-y-2">
                {data.evidence.map((item) => (
                  <li key={item} className="flex gap-2 text-sm leading-6 text-muted">
                    <span aria-hidden className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Body: sticky chapter rail + content */}
      <div className="mx-auto grid max-w-wrap gap-12 px-6 py-16 md:grid-cols-[210px_1fr] md:gap-16 md:px-10 md:py-24">
        <aside className="hidden md:block">
          <nav className="sticky top-28 flex flex-col gap-1" aria-label="Chapters">
            <span className="mb-4 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-faint">Contents</span>
            {data.chapters.map((c) => {
              const on = active === c.id;
              return (
                <a key={c.id} href={`#${c.id}`}
                  className={"group flex items-center gap-3 py-1.5 font-mono text-[0.72rem] uppercase tracking-[0.12em] transition-colors " + (on ? "text-ink" : "text-faint hover:text-muted")}>
                  <span className={"h-px transition-all duration-500 ease-editorial " + (on ? "w-6 bg-accent" : "w-3 bg-faint group-hover:w-5")} />
                  {c.label}
                </a>
              );
            })}
          </nav>
        </aside>

        <div className="flex flex-col gap-20 md:gap-28">
          {data.chapters.map((c, i) => (
            <section key={c.id} id={c.id} className="scroll-mt-28">
              <div className="mb-10 flex items-center gap-4">
                <span className="font-mono text-[0.7rem] tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="m-0 font-mono text-[0.7rem] font-normal uppercase tracking-[0.18em] text-muted">{c.label}</h2>
                <span className="h-px flex-1 bg-line" />
              </div>
              <Blocks blocks={c.blocks} />
            </section>
          ))}

          {data.notes?.length ? (
            <section aria-label="Notes" className="-mt-6 max-w-2xl border-t border-line pt-6 md:-mt-10">
              <p className="mb-3 font-mono text-[0.64rem] uppercase tracking-[0.18em] text-faint">Notes</p>
              <ol className="list-decimal space-y-1.5 pl-5 text-sm leading-relaxed text-faint marker:text-faint">
                {data.notes.map((n) => <li key={n}>{n}</li>)}
              </ol>
            </section>
          ) : null}
        </div>
      </div>

      <p className="mx-auto max-w-wrap px-6 pb-10 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint md:px-10">
        The full walkthrough, with the working files, is available in an interview.
      </p>

      {/* Next case */}
      <Link href={`/work/${data.next.slug}`} aria-label={`Next case: ${data.next.title}`} className="group block border-t border-line transition-colors hover:bg-bgalt">
        <div className="mx-auto flex max-w-wrap flex-col gap-3 px-6 py-16 md:px-10 md:py-24">
          <span className="font-mono text-[0.72rem] uppercase tracking-[0.18em] text-faint">Next case</span>
          <span className="flex items-center justify-between gap-4">
            <span className="font-serif text-3xl text-ink transition-all duration-500 ease-editorial group-hover:translate-x-2 group-hover:text-accent md:text-5xl">
              {data.next.title}
            </span>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line transition-all duration-500 ease-editorial group-hover:border-accent group-hover:bg-accent group-hover:text-bg md:h-16 md:w-16">
              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 ease-editorial group-hover:rotate-12" />
            </span>
          </span>
        </div>
      </Link>
    </article>
  );
}
