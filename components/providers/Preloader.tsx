"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let seen = false;
    try { seen = sessionStorage.getItem("sm_intro") === "1"; } catch {}
    if (seen) return;
    setShow(true);
    document.documentElement.style.overflow = "hidden";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dur = reduce ? 500 : 1500;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setCount(Math.round(p * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        try { sessionStorage.setItem("sm_intro", "1"); } catch {}
        setTimeout(() => { setShow(false); document.documentElement.style.overflow = ""; }, reduce ? 100 : 500);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); document.documentElement.style.overflow = ""; };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-deep"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-6">
            <span className="font-serif text-3xl tracking-tight text-ink md:text-4xl">
              Sumanth<span className="text-accent">.</span>
            </span>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.3em] text-faint">
              Brand · Communication · Systems
            </span>
          </motion.div>
          <div className="absolute bottom-10 left-0 right-0 mx-auto flex max-w-wrap items-center justify-between px-6 md:px-10">
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-faint">Loading</span>
            <span className="font-serif text-5xl tabular-nums text-ink md:text-7xl">{count}</span>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-accent"
            initial={{ width: "0%" }} animate={{ width: count + "%" }} transition={{ ease: "linear" }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
