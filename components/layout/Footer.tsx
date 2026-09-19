"use client";
import Link from "next/link";
import { meta } from "@/lib/content";
import { ArrowUpRight, ArrowRight } from "@/components/ui/Icon";

export default function Footer() {
  const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div className="mx-auto max-w-wrap px-6 pt-16 md:px-10 md:pt-24">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-accent">Let&rsquo;s talk</p>
            <a href={"mailto:" + meta.email}
              className="group mt-5 inline-flex items-center gap-3 font-serif text-2xl text-ink transition-colors hover:text-accent md:text-3xl">
              {meta.email}
              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 ease-editorial group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
          <nav className="flex gap-14 font-mono text-[0.72rem] uppercase tracking-[0.16em]" aria-label="Footer">
            <div className="flex flex-col gap-3">
              <span className="text-faint">Menu</span>
              <Link href="/#work" className="py-1 text-muted transition-colors hover:text-ink">Work</Link>
              <Link href="/#systems" className="py-1 text-muted transition-colors hover:text-ink">Systems</Link>
              <Link href="/#experience" className="py-1 text-muted transition-colors hover:text-ink">Experience</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-faint">Elsewhere</span>
              <a href={meta.linkedin} target="_blank" rel="noreferrer" className="py-1 text-muted transition-colors hover:text-ink">LinkedIn</a>
              <a href={meta.resume} target="_blank" rel="noreferrer" className="py-1 text-muted transition-colors hover:text-ink">Résumé</a>
              <a href={"mailto:" + meta.email} className="py-1 text-muted transition-colors hover:text-ink">Email</a>
            </div>
          </nav>
        </div>

        {/* oversized wordmark */}
        <div className="relative mt-16 select-none md:mt-24" aria-hidden>
          <span className="block bg-gradient-to-b from-ink/[0.14] to-ink/[0.03] bg-clip-text font-serif text-[22vw] leading-[0.8] tracking-[-0.03em] text-transparent">
            Sumanth
          </span>
        </div>

        <div className="flex flex-col gap-4 border-t border-line py-8 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-faint">
            © {new Date().getFullYear()} Sumanth Manjunath — {meta.location}
          </p>
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-faint">Built with intent, not templates.</p>
          <button onClick={toTop}
            className="group inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink">
            Back to top
            <span className="grid h-7 w-7 place-items-center rounded-full border border-line transition-all duration-500 ease-editorial group-hover:border-accent group-hover:bg-accent group-hover:text-bg">
              <ArrowRight className="h-3.5 w-3.5 -rotate-90" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
