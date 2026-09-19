"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCanAnimate } from "@/hooks/useCanAnimate";
import type { Img } from "@/lib/content";

export default function Shot({ img, className = "", priority = false, index, sizes = "(max-width:768px) 100vw, 60vw" }:
  { img: Img; className?: string; priority?: boolean; index?: string; sizes?: string }) {
  const [open, setOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const canAnim = useCanAnimate();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.documentElement.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <figure className={"group relative m-0 " + className}>
        <motion.button
          type="button" onClick={() => setOpen(true)} aria-label={"View larger: " + img.alt}
          className="relative block w-full overflow-hidden rounded-[3px] bg-panel ring-1 ring-white/[0.05] cursor-zoom-in"
          style={{ aspectRatio: img.ratio || "16/10" }}
          initial={canAnim ? { clipPath: "inset(0 0 100% 0)" } : undefined}
          whileInView={canAnim ? { clipPath: "inset(0 0 0% 0)" } : undefined}
          viewport={{ once: true, margin: "-8% 0px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image src={img.src} alt={img.alt} fill priority={priority} sizes={sizes}
            onLoad={() => setLoaded(true)}
            className={"object-cover transition-transform duration-[1.3s] ease-editorial group-hover:scale-[1.04] " + (loaded ? "img-ready" : "img-load")} />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          {/* expand affordance */}
          <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-bg/70 text-ink opacity-0 backdrop-blur-sm transition-all duration-500 ease-editorial group-hover:translate-y-0 group-hover:opacity-100">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
              <path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" />
            </svg>
          </span>
        </motion.button>
        {(img.cap || index) && (
          <figcaption className="mt-3 flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-faint">
            {index && <span className="text-accent tabular-nums">{index}</span>}
            {img.cap && <span>{img.cap}</span>}
          </figcaption>
        )}
      </figure>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] flex flex-col bg-deep/90"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(14px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.35 }}
            role="dialog" aria-modal="true" aria-label={img.alt}
          >
            {/* top bar */}
            <div className="flex items-center justify-between px-6 py-5 md:px-10" onClick={(e) => e.stopPropagation()}>
              <span className="flex items-center gap-3 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
                {index && <span className="text-accent">{index}</span>}
                <span className="max-w-[60vw] truncate">{img.cap || img.alt}</span>
              </span>
              <button onClick={() => setOpen(false)} aria-label="Close"
                className="group flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink">
                Close
                <span className="grid h-8 w-8 place-items-center rounded-full border border-line transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" className="h-4 w-4" aria-hidden><path d="M6 6l12 12M18 6L6 18" /></svg>
                </span>
              </button>
            </div>
            {/* image */}
            <div className="flex flex-1 items-center justify-center px-6 pb-10 md:px-16">
              <motion.figure className="relative m-0 flex max-h-full max-w-6xl flex-col items-center"
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.88, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.92, opacity: 0 }}
                transition={{ default: { type: "spring", stiffness: 240, damping: 20, mass: 0.9 }, opacity: { duration: 0.3 } }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={img.alt} className="max-h-[80vh] w-auto rounded-[3px] object-contain ring-1 ring-white/10 shadow-2xl" />
                {img.cap && <figcaption className="mt-4 text-center font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">{img.cap}</figcaption>}
              </motion.figure>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
