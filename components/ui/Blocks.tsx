"use client";
import type { Block, Img } from "@/lib/content";
import Reveal from "./Reveal";
import Shot from "./Shot";
import Sequence from "./Sequence";
import Stack from "./Stack";

const WallItem = (it: Img & { size?: string }) => {
  const span =
    it.size === "big" ? "md:col-span-2 md:row-span-2" :
    it.size === "tall" ? "md:row-span-2" :
    it.size === "wide" ? "md:col-span-2" : "";
  return <div className={span}><Shot img={{ ...it, ratio: it.size === "tall" ? "3/4" : it.size === "big" ? "1/1" : "4/3" }} /></div>;
};

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col gap-20 md:gap-28">
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
          case "coverage":
            return (
              <div key={i} className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
                <Shot img={b.clip} sizes="(max-width:768px) 100vw, 50vw" />
                <div className="flex flex-col gap-8">
                  <Shot img={b.online} sizes="(max-width:768px) 100vw, 40vw" />
                  <Reveal><p className="text-base leading-relaxed text-muted">{b.outlets}</p></Reveal>
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
