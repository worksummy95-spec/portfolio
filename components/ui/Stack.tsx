"use client";
import { motion } from "framer-motion";

export default function Stack({ items }: { items: string[] }) {
  return (
    <ol className="grid gap-px overflow-hidden rounded-[2px] border border-line bg-line">
      {items.map((it, i) => (
        <motion.li key={i}
          initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-8% 0px" }} transition={{ duration: 0.5, delay: i * 0.06 }}
          className="flex items-baseline gap-5 bg-bg px-5 py-4 md:px-7 md:py-5">
          <span className="font-mono text-[0.7rem] text-faint tabular-nums">{String(i + 1).padStart(2, "0")}</span>
          <span className="font-serif text-lg md:text-xl text-ink">{it}</span>
        </motion.li>
      ))}
    </ol>
  );
}
