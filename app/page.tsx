import Hero from "@/components/sections/Hero";
import HowIWork from "@/components/sections/HowIWork";
import SelectedWork from "@/components/sections/SelectedWork";
import Systems from "@/components/sections/Systems";
import Builds from "@/components/sections/Builds";
import Capabilities from "@/components/sections/Capabilities";
import Experience from "@/components/sections/Experience";
import POV from "@/components/sections/POV";
import Contact from "@/components/sections/Contact";
import JsonLd from "@/components/seo/JsonLd";
import { meta, site } from "@/lib/content";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: meta.name,
      url: site.url,
      jobTitle: meta.role,
      description: site.description,
      image: `${site.url}/assets/global/sumanth.jpg`,
      address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressCountry: "IN" },
      sameAs: [meta.linkedin],
      knowsAbout: ["Digital strategy", "Digital transformation", "Website governance", "SEO", "Business process improvement", "Marketing operations", "Governance", "AI-assisted business systems", "Brand strategy", "Corporate communications"],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: meta.name,
      description: site.description,
      inLanguage: "en-IN",
      publisher: { "@id": `${site.url}/#person` },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={structuredData} />
      <Hero />
      <HowIWork />
      <SelectedWork />
      <Systems />
      <Builds />
      <Capabilities />
      <Experience />
      <POV />
      <Contact />
    </>
  );
}
