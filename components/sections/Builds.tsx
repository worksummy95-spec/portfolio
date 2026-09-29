"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/Icon";
import { builds, type Build } from "@/lib/content";

/* Gallery viewer: arrows / Esc, focus moves in and back out. */
function Gallery({ build, onClose }: { build: Build; onClose: () => void }) {
  const [i, setI] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(typeof document !== "undefined" ? (document.activeElement as HTMLElement) : null);
  const n = build.shots.length;
  const go = useCallback((d: number) => setI((v) => (v + d + n) % n), [n]);

  useEffect(() => {
    const opener = openerRef.current;
    closeRef.current?.focus();
    return () => { opener?.focus(); };
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.documentElement.style.overflow = ""; };
  }, [go, onClose]);

  const shot = build.shots[i];
  return (
    <motion.div className="fixed inset-0 z-[90] flex flex-col bg-deep/95 backdrop-blur-md"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
      onClick={onClose} role="dialog" aria-modal="true" aria-label={`${build.name} screens`}>
      <div className="flex items-center justify-between px-6 py-5 md:px-10" onClick={(e) => e.stopPropagation()}>
        <span className="flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
          <span className="text-accentsoft">{build.name}</span>
          <span className="tabular-nums text-faint">{i + 1} / {n}</span>
        </span>
        <div className="flex items-center gap-5">
          <a href={build.url} target="_blank" rel="noreferrer"
            className="hidden items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink sm:inline-flex">
            Open live <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button ref={closeRef} onClick={onClose} aria-label="Close gallery"
            className="group grid h-9 w-9 place-items-center rounded-full border border-line text-muted transition-all hover:border-accent hover:bg-accent hover:text-bg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-4 md:px-20" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.figure key={shot.src} className="m-0 flex max-h-full flex-col items-center"
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={shot.src} alt={shot.alt}
              className={"w-auto rounded-[6px] object-contain shadow-2xl ring-1 ring-white/10 " + (shot.mobile ? "max-h-[74vh]" : "max-h-[74vh] max-w-full")} />
            <figcaption className="mt-4 max-w-2xl text-center text-sm text-muted">{shot.alt}</figcaption>
          </motion.figure>
        </AnimatePresence>
        {n > 1 && (
          <>
            <button onClick={() => go(-1)} aria-label="Previous screen"
              className="absolute left-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-bg/60 text-ink backdrop-blur-sm transition-colors hover:border-accent hover:bg-accent hover:text-bg md:left-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button onClick={() => go(1)} aria-label="Next screen"
              className="absolute right-3 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-bg/60 text-ink backdrop-blur-sm transition-colors hover:border-accent hover:bg-accent hover:text-bg md:right-6">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </>
        )}
      </div>

      {/* thumbnail strip */}
      <div className="flex justify-center gap-2 overflow-x-auto px-6 pb-6" onClick={(e) => e.stopPropagation()}>
        {build.shots.map((s, k) => (
          <button key={s.src} onClick={() => setI(k)} aria-label={`Show screen ${k + 1}`} aria-current={k === i ? "true" : undefined}
            className={"relative h-12 shrink-0 overflow-hidden rounded-[3px] ring-1 transition-all " + (s.mobile ? "w-7" : "w-20") + (k === i ? " ring-accent opacity-100" : " ring-white/10 opacity-50 hover:opacity-90")}>
            <Image src={s.src} alt="" fill sizes="80px" className="object-cover object-top" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export default function Builds() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section id="builds" index="03" label="Things I've built">
      <Reveal>
        <p className="mb-14 max-w-3xl font-serif text-2xl leading-snug text-ink md:text-3xl">
          Outside work, I build small products end to end, from a problem I had to a live app. They keep me close to how software actually gets made.
        </p>
      </Reveal>

      <ul className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {builds.map((b, i) => (
          <li key={b.name}>
            <Reveal delay={(i % 2) * 0.08} className="flex h-full flex-col">
              <button type="button" onClick={() => setOpen(i)} aria-label={`View ${b.shots.length} screens of ${b.name}`}
                className="group relative block w-full overflow-hidden rounded-[3px] bg-panel text-left ring-1 ring-white/[0.06]" style={{ aspectRatio: "16/10" }}>
                <Image src={b.cover} alt="" fill sizes="(max-width:768px) 100vw, 45vw"
                  className="object-cover object-top transition-transform duration-[1.3s] ease-editorial group-hover:scale-[1.03]" />
                <span aria-hidden className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-bg/70 px-3 py-1.5 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-ink backdrop-blur-sm transition-colors group-hover:border-accent">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-3.5 w-3.5" aria-hidden><rect x="3" y="4" width="14" height="12" rx="2" /><path d="M21 8v10a2 2 0 0 1-2 2H7" /></svg>
                  View {b.shots.length} screen{b.shots.length > 1 ? "s" : ""}
                </span>
              </button>

              <div className="mt-5 flex items-baseline justify-between gap-4">
                <h3 className="m-0 font-serif text-2xl text-ink md:text-[1.9rem]">{b.name}</h3>
                <a href={b.url} target="_blank" rel="noreferrer" aria-label={`Open ${b.name} live (opens in a new tab)`}
                  className="group inline-flex shrink-0 items-center gap-1.5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accentsoft">
                  Live <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-500 ease-editorial group-hover:rotate-12" />
                </a>
              </div>
              <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-faint">{b.kind}</p>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted md:text-base">{b.line}</p>
              <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${b.name} features`}>
                {b.features.map((f) => (
                  <li key={f} className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-faint">{f}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ul>

      <p className="mt-12 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-faint">
        Personal projects, not client work. Finio screens use its built-in sample data.
      </p>

      <AnimatePresence>
        {open !== null && <Gallery build={builds[open]} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </Section>
  );
}
