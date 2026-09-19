"use client";
import { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

type Ctx = { show: (src: string) => void; hide: () => void };
const PreviewCtx = createContext<Ctx>({ show: () => {}, hide: () => {} });
export const useWorkPreview = () => useContext(PreviewCtx);

export default function CursorPreview({ children }: { children: React.ReactNode }) {
  const [src, setSrc] = useState<string | null>(null);
  const enabled = useRef(false);
  const primed = useRef(false);

  // smoothly trail the cursor
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 260, damping: 30, mass: 0.5 });
  const y = useSpring(my, { stiffness: 260, damping: 30, mass: 0.5 });

  useEffect(() => {
    enabled.current =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const move = (e: MouseEvent) => {
      // on first read after showing, jump (no fly-in) so it appears under the cursor
      if (!primed.current) { mx.jump(e.clientX); my.jump(e.clientY); primed.current = true; }
      else { mx.set(e.clientX); my.set(e.clientY); }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mx, my]);

  const show = useCallback((s: string) => { if (enabled.current) { primed.current = false; setSrc(s); } }, []);
  const hide = useCallback(() => setSrc(null), []);

  return (
    <PreviewCtx.Provider value={{ show, hide }}>
      {children}
      <AnimatePresence>
        {src && (
          <motion.div
            style={{ x, y }}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none fixed left-0 top-0 z-[60] hidden -translate-x-1/2 -translate-y-1/2 md:block"
          >
            <div className="relative h-[13rem] w-[20rem] overflow-hidden rounded-[3px] ring-1 ring-white/10"
              style={{ boxShadow: "0 40px 90px -30px rgba(0,0,0,.85)" }}>
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={src}
                  src={src}
                  alt=""
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </PreviewCtx.Provider>
  );
}
