"use client";
import { motion } from "framer-motion";

export default function Sequence({ items, loop = false }:
  { items: { label: string; on?: boolean }[]; loop?: boolean }) {
  const n = items.length;
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-x-3">
          <motion.span
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
            style={loop ? ({ ["--seq-delay" as any]: `${((i * 3.4) / n).toFixed(2)}s` }) : undefined}
            className={
              "cursor-default rounded-full border px-3 py-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] transition-colors duration-300 hover:border-accent hover:bg-accent/[0.08] hover:text-accent " +
              (loop
                ? "seq-chip border-line text-muted"
                : it.on
                ? "border-accent/60 bg-accent/[0.06] text-accent"
                : "border-line text-muted")
            }
          >
            {it.label}
          </motion.span>
          {i < n - 1 && <span className="select-none text-faint">→</span>}
        </div>
      ))}
    </div>
  );
}
