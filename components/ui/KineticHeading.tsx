"use client";
import { motion } from "framer-motion";
import { useCanAnimate } from "@/hooks/useCanAnimate";

export default function KineticHeading({
  lines, className = "", accentLast = false, delay = 0.15, stagger = 0.09, as = "h1", immediate = false,
}: { lines: string[]; className?: string; accentLast?: boolean; delay?: number; stagger?: number; as?: "h1" | "h2"; immediate?: boolean }) {
  const canAnim = useCanAnimate();
  const Tag = as as any;
  const label = lines.join(" ");
  return (
    <Tag className={className} aria-label={label}>
      {lines.map((line, i) => {
        const accent = accentLast && i === lines.length - 1;
        const accentCls = accent ? "text-accent italic" : "";
        if (!canAnim) return <span key={i} aria-hidden className={"block " + accentCls}>{line}</span>;
        const anim = { y: 0 };
        const t = { duration: 1.05, ease: [0.16, 1, 0.3, 1] as const, delay: delay + i * stagger };
        return (
          <span key={i} aria-hidden className="block overflow-hidden pb-[0.06em]">
            <motion.span
              className={"block will-change-transform " + accentCls}
              initial={{ y: "115%" }}
              {...(immediate
                ? { animate: anim }
                : { whileInView: anim, viewport: { once: true, amount: 0.35 } })}
              transition={t}
            >
              {line}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
