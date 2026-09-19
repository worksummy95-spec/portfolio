import Hero from "@/components/sections/Hero";
import Marquee from "@/components/ui/Marquee";
import Manifesto from "@/components/sections/Manifesto";
import SelectedWork from "@/components/sections/SelectedWork";
import SocialGrid from "@/components/sections/SocialGrid";
import Systems from "@/components/sections/Systems";
import Capabilities from "@/components/sections/Capabilities";
import Experience from "@/components/sections/Experience";
import POV from "@/components/sections/POV";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Manifesto />
      <SelectedWork />
      <SocialGrid />
      <Systems />
      <Capabilities />
      <Experience />
      <POV />
      <Contact />
    </>
  );
}
