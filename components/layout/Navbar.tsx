"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "@/components/ui/Icon";
import { useActiveSection } from "@/hooks/useActiveSection";
import { meta } from "@/lib/content";

const links = [
  { href: "/#work", id: "work", label: "Work" },
  { href: "/#systems", id: "systems", label: "Systems" },
  { href: "/#experience", id: "experience", label: "Experience" },
  { href: "/#contact", id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";
  const active = useActiveSection(onHome ? links.map((l) => l.id) : []);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > last && y > 220 && !open);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => { document.documentElement.style.overflow = ""; };
  }, [open]);

  // /v2 provides its own in-hero navigation
  if (pathname.startsWith("/v2")) return null;

  return (
    <>
      <motion.header
        initial={{ y: 0 }} animate={{ y: hidden ? "-110%" : 0 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className={"fixed inset-x-0 top-0 z-50 transition-colors duration-500 " + (solid && !open ? "bg-bg/70 backdrop-blur-md" : "")}
      >
        <nav className="mx-auto flex max-w-wrap items-center justify-between px-6 py-4 md:px-10">
          <Link href="/" onClick={() => setOpen(false)} className="group relative z-[70] font-serif text-lg tracking-tight text-ink">
            Sumanth<span className="text-accent transition-all duration-500 group-hover:tracking-[0.05em]">.</span>
          </Link>
          <div className="hidden items-center gap-8 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted sm:flex">
            {links.map((l) => {
              const isActive = onHome && active === l.id;
              return (
                <Link key={l.href} href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={"group relative transition-colors hover:text-ink " + (isActive ? "text-ink" : "")}>
                  {l.label}
                  <span className={"absolute -bottom-1.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-500 ease-editorial " + (isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-hover:origin-left")} />
                </Link>
              );
            })}
          </div>
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}
            className="relative z-[70] flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden">
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 4 : 0 }} className="block h-px w-6 bg-ink" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -3 : 0 }} className="block h-px w-6 bg-ink" />
          </button>
        </nav>
        <div className={"mx-auto h-px max-w-wrap origin-left bg-line transition-transform duration-700 ease-editorial " + (solid && !open ? "scale-x-100" : "scale-x-0")} />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex flex-col justify-center bg-deep px-8 sm:hidden">
            <nav className="flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.div key={l.href}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                  <Link href={l.href} onClick={() => setOpen(false)}
                    className="group flex items-center justify-between font-serif text-5xl text-ink">
                    {l.label}
                    <ArrowUpRight className="h-7 w-7 text-faint transition-all duration-500 group-hover:text-accent group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-14 flex flex-col gap-2 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted">
              <a href={"mailto:" + meta.email} className="py-1 hover:text-accent">{meta.email}</a>
              <a href={meta.linkedin} target="_blank" rel="noreferrer" className="py-1 hover:text-ink">LinkedIn</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
