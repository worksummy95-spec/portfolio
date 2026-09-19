import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cases } from "@/lib/content";
import CaseStudy from "@/components/case/CaseStudy";

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = cases.find((c) => c.slug === slug);
  if (!data) return {};
  return {
    title: data.title,
    description: `${data.mode} — ${data.client}`,
    openGraph: { title: data.title, images: [data.cover.src] },
  };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = cases.find((c) => c.slug === slug);
  if (!data) notFound();
  return <CaseStudy data={data} />;
}
