"use client";
import Reveal from "@/components/ui/Reveal";
import Magnetic from "@/components/ui/Magnetic";
import AnimatedLink from "@/components/ui/AnimatedLink";
import KineticHeading from "@/components/ui/KineticHeading";
import { meta } from "@/lib/content";
import { ArrowUpRight } from "@/components/ui/Icon";

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-wrap px-6 py-32 md:px-10 md:py-44">
      <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-[50vh] w-[80vh] -translate-x-1/2 rounded-full opacity-30 blur-[130px]"
        style={{ background: "radial-gradient(circle, rgba(214,79,97,0.16), transparent 60%)" }} />
      <div className="relative">
        <Reveal><p className="mb-8 font-mono text-[0.72rem] uppercase tracking-[0.22em] text-accent">Contact</p></Reveal>
        <KineticHeading
          as="h2"
          lines={["Have something complex", "worth making clear?"]}
          className="max-w-4xl text-balance font-serif text-4xl leading-[1.06] tracking-[-0.02em] text-ink md:text-[clamp(3rem,6vw,6.2rem)] md:leading-[1.02]"
        />
        <Reveal delay={0.1}>
          <div className="mt-16">
            <Magnetic strength={0.25}>
              <a href={"mailto:" + meta.email}
                className="group inline-flex items-center gap-4 font-serif text-2xl text-ink transition-colors hover:text-accent md:text-4xl">
                {meta.email}
                <span className="grid h-11 w-11 place-items-center rounded-full border border-line transition-all duration-500 ease-editorial group-hover:border-accent group-hover:bg-accent group-hover:text-bg md:h-14 md:w-14">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-500 ease-editorial group-hover:rotate-12" />
                </span>
              </a>
            </Magnetic>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-1 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted">
            <AnimatedLink href={meta.linkedin} external className="py-2.5">LinkedIn</AnimatedLink>
            <AnimatedLink href={meta.resume} external className="py-2.5">Résumé (PDF)</AnimatedLink>
            <span className="py-2.5 text-faint">{meta.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
