import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { cases, meta, site } from "@/lib/content";
import CaseStudy from "@/components/case/CaseStudy";
import JsonLd from "@/components/seo/JsonLd";

export const dynamicParams = false;

export function generateStaticParams() {
  return cases.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = cases.find((c) => c.slug === slug);
  if (!data) return {};
  const path = `/work/${data.slug}`;
  const image = { url: `/og/og-${data.slug}.png`, width: 1200, height: 630, alt: data.title };
  return {
    title: data.title,
    description: data.summary,
    alternates: { canonical: path },
    openGraph: { type: "article", siteName: meta.name, locale: "en_IN", url: path, title: `${data.title} — ${meta.name}`, description: data.summary, images: [image] },
    twitter: { card: "summary_large_image", title: `${data.title} — ${meta.name}`, description: data.summary, images: [image.url] },
  };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = cases.find((c) => c.slug === slug);
  if (!data) return notFound();
  const url = `${site.url}/work/${data.slug}`;
  const ld = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CreativeWork", "@id": `${url}#case`, name: data.title, headline: data.title, description: data.summary, url, inLanguage: "en-IN",
        image: `${site.url}/og/og-${data.slug}.png`, author: { "@id": `${site.url}/#person` }, isPartOf: { "@id": `${site.url}/#website` } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: "Work", item: `${site.url}/#work` },
        { "@type": "ListItem", position: 3, name: data.title, item: url },
      ]},
    ],
  };
  return (
    <>
      <JsonLd data={ld} />
      <CaseStudy data={data} />
    </>
  );
}
