"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useCanAnimate } from "@/hooks/useCanAnimate";

export default function Parallax({ children, amount = 60, className = "" }:
  { children: React.ReactNode; amount?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const canAnim = useCanAnimate();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [amount, -amount]);
  return (
    <motion.div ref={ref} style={canAnim ? { y } : undefined} className={className}>
      {children}
    </motion.div>
  );
}
