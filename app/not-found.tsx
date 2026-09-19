import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-wrap flex-col justify-center px-6 md:px-10">
      <p className="font-mono text-[0.72rem] uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-6 font-serif text-4xl text-ink md:text-6xl">This page went off-brief.</h1>
      <Link href="/" className="mt-8 inline-flex w-fit items-center gap-3 font-mono text-[0.72rem] uppercase tracking-[0.16em] text-muted hover:text-ink">
        ← Back to work
      </Link>
    </section>
  );
}
