"use client";
import type { Block, Img } from "@/lib/content";
import Reveal from "./Reveal";
import Shot from "./Shot";
import Sequence from "./Sequence";
import Stack from "./Stack";
import SocialWall from "./SocialWall";

const WallItem = (it: Img & { size?: string }) => {
  const span =
    it.size === "big" ? "md:col-span-2 md:row-span-2" :
    it.size === "tall" ? "md:row-span-2" :
    it.size === "wide" ? "md:col-span-2" : "";
  return <div className={span}><Shot img={{ ...it, ratio: it.size === "tall" ? "3/4" : it.size === "big" ? "1/1" : "4/3" }} /></div>;
};

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-12 md:gap-16">
      {blocks.map((b, i) => {
        switch (b.t) {
          case "statement":
            return (
              <Reveal key={i}>
                <p className="max-w-4xl font-serif text-3xl leading-[1.18] text-ink md:text-5xl md:leading-[1.12]">
                  {b.text}{b.em && <em className="text-accent not-italic">{b.em}</em>}
                </p>
              </Reveal>
            );
          case "para":
            return <Reveal key={i}><p className="max-w-2xl text-lg leading-relaxed text-muted md:text-xl">{b.text}</p></Reveal>;
          case "heading":
            return <Reveal key={i}><h3 className="max-w-3xl font-serif text-2xl leading-tight text-ink md:text-3xl">{b.text}</h3></Reveal>;
          case "sequence":
            return <Reveal key={i}><Sequence items={b.items} /></Reveal>;
          case "stack":
            return <Reveal key={i}><div className="max-w-2xl"><Stack items={b.items} /></div></Reveal>;
          case "image":
            return <Shot key={i} img={b.img} className={b.full ? "w-full" : "max-w-4xl"} sizes={b.full ? "100vw" : "80vw"} />;
          case "split":
            return (
              <div key={i} className={"grid items-center gap-10 md:grid-cols-2 " + (b.reverse ? "" : "")}>
                <div className={b.reverse ? "md:order-2" : ""}><Shot img={b.img} sizes="(max-width:768px) 100vw, 45vw" /></div>
                <div className={b.reverse ? "md:order-1" : ""}>
                  {b.heading && <Reveal><h3 className="font-serif text-2xl leading-tight text-ink md:text-3xl">{b.heading}</h3></Reveal>}
                  {b.para && <Reveal delay={0.08}><p className="mt-5 text-lg leading-relaxed text-muted">{b.para}</p></Reveal>}
                </div>
              </div>
            );
          case "pair":
            return (
              <div key={i} className="grid gap-6 md:grid-cols-2 md:gap-8">
                <Shot img={b.a} sizes="(max-width:768px) 100vw, 45vw" />
                <Shot img={b.b} sizes="(max-width:768px) 100vw, 45vw" />
              </div>
            );
          case "wall":
            return (
              <div key={i}>
                {b.title && <Reveal><p className="mb-6 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-faint">{b.title}</p></Reveal>}
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5 [grid-auto-flow:dense]">
                  {b.items.map((it, k) => <WallItem key={k} {...it} />)}
                </div>
              </div>
            );
          case "essay":
            return (
              <div key={i} className="grid grid-cols-2 gap-4 md:gap-6">
                {b.items.map((it, k) => (
                  <div key={k} className={k === 0 ? "col-span-2" : ""}><Shot img={{ ...it, ratio: k === 0 ? "16/9" : "4/3" }} /></div>
                ))}
              </div>
            );
          case "gallery":
            return (
              <div key={i}>
                {b.title && <Reveal><p className="mb-6 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-faint">{b.title}</p></Reveal>}
                <div className="grid grid-cols-2 items-start gap-4 md:grid-cols-3 md:gap-5">
                  {b.items.map((it, k) => <Shot key={k} img={it} sizes="(max-width:768px) 50vw, 30vw" />)}
                </div>
              </div>
            );
          case "metrics":
            return (
              <Reveal key={i}>
                <dl className="grid grid-cols-1 pl-px pt-px sm:grid-cols-2 lg:grid-cols-3">
                  {b.items.map((m) => (
                    <div key={m.label} className="-ml-px -mt-px flex flex-col gap-3 border border-line bg-bg p-6 md:p-7">
                      <dt className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">{m.label}</dt>
                      <dd className="m-0 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        {m.from && (
                          <span className="font-mono text-sm tabular-nums text-muted">
                            {m.from} <span aria-hidden className="text-faint">→</span><span className="sr-only">to</span>
                          </span>
                        )}
                        <span className="font-serif text-4xl leading-none tabular-nums text-ink md:text-5xl">{m.to}</span>
                        {m.delta && <span className="font-mono text-[0.72rem] uppercase tracking-[0.12em] text-accent">{m.delta}</span>}
                      </dd>
                    </div>
                  ))}
                </dl>
                {b.note && <p className="mt-5 max-w-2xl text-sm leading-relaxed text-faint">{b.note}</p>}
              </Reveal>
            );
          case "social":
            return <SocialWall key={i} posts={b.posts} title={b.title} />;
          case "decision":
            return (
              <Reveal key={i}>
                <aside className="relative max-w-3xl overflow-hidden rounded-[2px] border border-line bg-bgalt p-7 md:p-9" aria-label="Key decision">
                  <span aria-hidden className="absolute inset-y-0 left-0 w-0.5 bg-accent" />
                  <p className="mb-4 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-accentsoft">Key decision</p>
                  <p className="font-serif text-2xl leading-snug text-ink md:text-3xl">{b.h}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{b.p}</p>
                </aside>
              </Reveal>
            );
          case "status":
            return (
              <Reveal key={i}>
                <div className="max-w-3xl">
                  <p className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-faint">Status by component</p>
                  <ul className="border-t border-line">
                    {b.items.map((s) => (
                      <li key={s.item} className="grid gap-2 border-b border-line py-4 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-6">
                        <span className="text-base text-ink">
                          {s.item}
                          {s.note && <span className="mt-0.5 block text-sm text-faint">{s.note}</span>}
                        </span>
                        <span className="justify-self-start whitespace-nowrap rounded-full border border-accent/40 bg-accent/[0.06] px-3 py-1 font-mono text-[0.64rem] uppercase tracking-[0.14em] text-accentsoft sm:justify-self-end">{s.status}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
