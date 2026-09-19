"use client";
import { motion } from "framer-motion";
import { useCanAnimate } from "@/hooks/useCanAnimate";

type Variant = "up" | "fade" | "clip" | "blur";
const EASE = [0.16, 1, 0.3, 1] as const;

export default function Reveal({
  children, as = "div", delay = 0, y = 30, className = "",
  variant = "up", amount = 0.25, duration = 0.9,
}: {
  children: React.ReactNode; as?: any; delay?: number; y?: number;
  className?: string; variant?: Variant; amount?: number; duration?: number;
}) {
  const canAnim = useCanAnimate();
  if (!canAnim) {
    const Tag = as as any;
    return <Tag className={className}>{children}</Tag>;
  }
  const M = (motion as any)[as] || motion.div;
  const hidden =
    variant === "clip" ? { opacity: 0, clipPath: "inset(0 0 100% 0)" } :
    variant === "blur" ? { opacity: 0, y, filter: "blur(10px)" } :
    variant === "fade" ? { opacity: 0 } : { opacity: 0, y };
  const shown =
    variant === "clip" ? { opacity: 1, clipPath: "inset(0 0 0% 0)" } :
    variant === "blur" ? { opacity: 1, y: 0, filter: "blur(0px)" } :
    variant === "fade" ? { opacity: 1 } : { opacity: 1, y: 0 };
  return (
    <M className={className} initial={hidden} whileInView={shown}
      viewport={{ once: true, amount }} transition={{ duration, ease: EASE, delay }}>
      {children}
    </M>
  );
}
