"use client";
import Link from "next/link";
import { useState } from "react";
import { meta } from "@/lib/content";
import { useCanAnimate } from "@/hooks/useCanAnimate";

const VIDEO = "https://cdn.sceneai.art/Hero%20Section%20Video/a8132a81-b526-4f91-8095-003ce931ecdd.mp4";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#social", label: "Social", chevron: false },
  { href: "#systems", label: "Systems" },
  { href: "#experience", label: "Experience" },
];

/* word-by-word reveal via CSS keyframes (respects reduced motion globally) */
function Words({ text, start = 0, step = 0.05, className = "" }:
  { text: string; start?: number; step?: number; className?: string }) {
  return (
    <span className={className}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block whitespace-pre hv-word"
          style={{ animationDelay: `${start + i * step}s` }}>
          {w}{" "}
        </span>
      ))}
    </span>
  );
}

function Chevron() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="ml-1 h-3 w-3 opacity-70" aria-hidden><path d="M6 9l6 6 6-6" /></svg>;
}
function MailIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4" aria-hidden><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
}

export default function HeroVideo() {
  const [open, setOpen] = useState(false);
  const canAnim = useCanAnimate();

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-deep text-white">
      {/* background video */}
      <div className="absolute inset-0 z-0">
        {canAnim && (
          <video className="hv-video h-full w-full object-cover" autoPlay loop muted playsInline preload="auto"
            poster="/assets/case-01/heritage.jpg">
            <source src={VIDEO} type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-black/30" />
      </div>

      {/* top nav */}
      <div className="relative z-20 mx-auto flex max-w-wrap items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="font-serif text-xl tracking-tight text-white">
          Sumanth<span className="text-accent">.</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((l) => (
            <a key={l.href} href={l.href}
              className="flex items-center text-[14px] font-normal text-white/70 transition-colors duration-300 hover:text-white">
              {l.label}{l.chevron && <Chevron />}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-6 md:flex">
          <a href={"mailto:" + meta.email} className="flex items-center gap-2 text-[14px] font-normal text-white/70 transition-colors hover:text-white">
            <MailIcon /> {meta.email}
          </a>
          <a href="#contact" className="text-[14px] font-normal text-white transition-colors hover:text-accent">Contact</a>
        </div>
        {/* mobile toggle */}
        <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}
          className="relative z-30 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden">
          <span className={"block h-px w-6 bg-white transition-transform duration-300 " + (open ? "translate-y-[3px] rotate-45" : "")} />
          <span className={"block h-px w-6 bg-white transition-transform duration-300 " + (open ? "-translate-y-[3px] -rotate-45" : "")} />
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="fixed inset-0 z-20 flex flex-col justify-center gap-6 bg-deep px-8 md:hidden">
          {[...nav, { href: "#contact", label: "Contact" }].map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-serif text-4xl text-white">{l.label}</a>
          ))}
          <a href={"mailto:" + meta.email} onClick={() => setOpen(false)} className="mt-6 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-white/60">{meta.email}</a>
        </div>
      )}

      {/* centered content */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-88px)] max-w-wrap flex-col items-center justify-center px-6 text-center md:px-10">
        <span className="hv-fade mb-6 font-mono text-[0.7rem] uppercase tracking-[0.24em] text-accent" style={{ animationDelay: "0.2s" }}>
          Brand · Communications · Systems
        </span>
        <h1 className="max-w-4xl font-serif text-[40px] font-semibold leading-[1.05] tracking-[-0.02em] sm:text-[52px] md:text-[62px]">
          <Words text="Complexity, made clear." start={0.5} step={0.08} />
        </h1>
        <p className="mt-7 max-w-[34rem] text-[15px] font-light leading-relaxed text-white/75">
          <Words text="Brand, communication and systems that make complex organisations easier to understand, trust and remember." start={1.4} step={0.03} />
        </p>
        <a href="#work"
          className="hv-fade group mt-10 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-[14px] font-medium text-black transition-transform duration-200 hover:scale-[1.03] active:scale-95"
          style={{ animationDelay: "2.5s" }}>
          See the work
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden><path d="M4 12h15" /><path d="M13 6l6 6-6 6" /></svg>
        </a>
      </div>
    </section>
  );
}
