"use client";
import { motion } from "framer-motion";
import { useCanAnimate } from "@/hooks/useCanAnimate";

export default function Section({
  id, index, label, children, className = "",
}: { id?: string; index?: string; label?: string; children: React.ReactNode; className?: string }) {
  const canAnim = useCanAnimate();
  return (
    <section id={id} className={"mx-auto max-w-wrap px-6 py-24 md:px-10 md:py-32 " + className}>
      {(index || label) && (
        <div className="relative mb-12 pb-4">
          <motion.div
            initial={canAnim ? { opacity: 0, y: 14 } : undefined}
            whileInView={canAnim ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-4">
            {index && <span className="font-mono text-[0.72rem] tabular-nums text-accent">{index}</span>}
            {label && <h2 className="m-0 font-mono text-[0.72rem] font-normal uppercase tracking-[0.2em] text-muted">{label}</h2>}
          </motion.div>
          <motion.span
            initial={canAnim ? { scaleX: 0 } : undefined}
            whileInView={canAnim ? { scaleX: 1 } : undefined}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="absolute bottom-0 left-0 h-px w-full origin-left bg-line" />
        </div>
      )}
      {children}
    </section>
  );
}
