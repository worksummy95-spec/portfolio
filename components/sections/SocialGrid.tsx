"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { useCanAnimate } from "@/hooks/useCanAnimate";
import { social, type SocialPost } from "@/lib/content";

/* ---------- in-view autoplay video ---------- */
function AutoVideo({ src, poster, className = "", muted = true, controls = false, active = true }:
  { src: string; poster: string; className?: string; muted?: boolean; controls?: boolean; active?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const canAnim = useCanAnimate();
  useEffect(() => {
    const v = ref.current; if (!v || controls) return;
    if (!canAnim || !active) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); },
      { threshold: 0.35 }
    );
    io.observe(v); return () => io.disconnect();
  }, [canAnim, active, controls]);
  return (
    <video ref={ref} className={className} poster={poster} muted={muted} loop playsInline
      controls={controls} autoPlay={controls} preload={controls ? "auto" : "none"} />
  );
}

/* ---------- badges ---------- */
const VideoBadge = () => (
  <span className="pointer-events-none absolute left-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-bg/70 text-ink backdrop-blur-sm">
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 translate-x-[1px]" aria-hidden><path d="M8 5v14l11-7z" /></svg>
  </span>
);
const CarouselBadge = ({ n }: { n: number }) => (
  <span className="pointer-events-none absolute right-3 top-3 flex items-center gap-1 rounded-full bg-bg/70 px-2.5 py-1 font-mono text-[0.6rem] text-ink backdrop-blur-sm">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3 w-3" aria-hidden><rect x="3" y="3" width="14" height="14" rx="2"/><path d="M21 7v12a2 2 0 0 1-2 2H7"/></svg>
    {n}
  </span>
);

/* ---------- card — cover shrinks on hover to reveal the description beneath ---------- */
function Card({ post, i, onOpen }: { post: SocialPost; i: number; onOpen: () => void }) {
  const [slide, setSlide] = useState(0);
  const canAnim = useCanAnimate();
  const hoverTimer = useRef<any>(null);

  const startCycle = () => {
    if (post.kind !== "carousel" || !canAnim) return;
    hoverTimer.current = setInterval(() => setSlide((s) => (s + 1) % post.slides.length), 1000);
  };
  const stopCycle = () => { clearInterval(hoverTimer.current); setSlide(0); };

  return (
    <motion.figure
      initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-6% 0px" }} transition={{ duration: 0.7, delay: (i % 4) * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="group relative mb-4 block break-inside-avoid overflow-hidden rounded-[8px] bg-panel ring-1 ring-white/[0.06]"
      style={{ aspectRatio: post.ratio }}
      onMouseEnter={startCycle} onMouseLeave={stopCycle}>

      {/* description layer (revealed as the cover shrinks) */}
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end p-5">
        <span className="mb-1.5 font-mono text-[0.6rem] uppercase tracking-[0.16em] text-accent">{post.handle.replace("@jindal", "@")}</span>
        <h4 className="font-serif text-[0.95rem] leading-tight text-ink transition-all duration-500 ease-editorial group-hover:text-lg">{post.caption}</h4>
        {post.desc && (
          <p className="mt-0 max-h-0 overflow-hidden text-[0.78rem] leading-snug text-muted opacity-0 transition-all duration-500 ease-editorial group-hover:mt-2 group-hover:max-h-28 group-hover:opacity-100">
            {post.desc}
          </p>
        )}
      </div>

      {/* cover layer (top) — shrinks + rounds on hover */}
      <button type="button" onClick={onOpen} aria-label={"Open: " + post.caption}
        className="absolute inset-0 cursor-pointer overflow-hidden rounded-[8px] ring-1 ring-white/[0.05] transition-[inset,border-radius] duration-[600ms] ease-editorial group-hover:bottom-[38%] group-hover:left-2.5 group-hover:right-2.5 group-hover:top-2.5 group-hover:rounded-[14px]">
        {post.kind === "video" ? (
          <AutoVideo src={post.src} poster={post.poster} className="h-full w-full object-cover" />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={post.kind === "carousel" ? post.slides[slide] : post.src} alt={post.caption} loading="lazy" decoding="async"
            className="h-full w-full object-cover" />
        )}
        {post.kind === "video" && <VideoBadge />}
        {post.kind === "carousel" && <CarouselBadge n={post.slides.length} />}
      </button>
    </motion.figure>
  );
}

/* ---------- lightbox ---------- */
function Lightbox({ post, onClose }: { post: SocialPost; onClose: () => void }) {
  const [idx, setIdx] = useState(0);
  const canAnim = useCanAnimate();
  const slides = post.kind === "carousel" ? post.slides : null;
  const go = useCallback((d: number) => { if (slides) setIdx((v) => (v + d + slides.length) % slides.length); }, [slides]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (slides && e.key === "ArrowRight") go(1);
      if (slides && e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.documentElement.style.overflow = ""; };
  }, [go, slides, onClose]);

  return (
    <motion.div className="fixed inset-0 z-[90] flex flex-col bg-deep/95 backdrop-blur-md"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
      onClick={onClose} role="dialog" aria-modal="true" aria-label={post.caption}>
      <div className="flex items-center justify-between px-6 py-5 md:px-10" onClick={(e) => e.stopPropagation()}>
        <span className="flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
          <span className="text-accent">{post.handle}</span>
          <span className="max-w-[50vw] truncate text-faint">{post.caption}</span>
          {slides && <span className="text-faint">· {idx + 1}/{slides.length}</span>}
        </span>
        <button onClick={onClose} aria-label="Close"
          className="group flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink">
          Close
          <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4" aria-hidden><path d="M6 6l12 12M18 6L6 18" /></svg>
          </span>
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-4 pb-10 md:px-16" onClick={(e) => e.stopPropagation()}>
        <motion.div
          initial={canAnim ? { clipPath: "circle(0% at 50% 50%)" } : undefined}
          animate={canAnim ? { clipPath: "circle(72% at 50% 50%)" } : undefined}
          exit={canAnim ? { clipPath: "circle(0% at 50% 50%)" } : undefined}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center">
        {post.kind === "video" ? (
          <AutoVideo src={post.src} poster={post.poster} controls muted={false} className="max-h-[80vh] w-auto rounded-[3px] ring-1 ring-white/10" />
        ) : (
          <AnimatePresence mode="wait">
            <motion.img key={slides ? slides[idx] : (post as any).src}
              src={slides ? slides[idx] : (post as any).src} alt={post.caption}
              initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-h-[80vh] w-auto rounded-[3px] object-contain ring-1 ring-white/10 shadow-2xl" />
          </AnimatePresence>
        )}
        </motion.div>

        {slides && (
          <>
            <button onClick={() => go(-1)} aria-label="Previous"
              className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-bg/50 text-ink backdrop-blur-sm transition-colors hover:border-accent hover:bg-accent hover:text-bg md:left-8">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button onClick={() => go(1)} aria-label="Next"
              className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-line bg-bg/50 text-ink backdrop-blur-sm transition-colors hover:border-accent hover:bg-accent hover:text-bg md:right-8">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5" aria-hidden><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </>
        )}
      </div>
    </motion.div>
  );
}

export default function SocialGrid() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <Section id="social" index="02" label="Creative & Social">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <p className="max-w-2xl font-serif text-2xl leading-snug text-ink md:text-3xl">
            Day-to-day brand presence — campaigns, films and social creative across two brand accounts.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {social.handles.map((h) => (
              <span key={h.tag} className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />{h.tag}
                <span className="text-faint">· {h.years}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="[column-fill:balance] gap-4 columns-2 md:columns-3 lg:columns-4">
        {social.posts.map((p, i) => <Card key={i} post={p} i={i} onOpen={() => setOpen(i)} />)}
      </div>

      <AnimatePresence>
        {open !== null && <Lightbox post={social.posts[open]} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </Section>
  );
}
