import HeroVideo from "@/components/sections/HeroVideo";
import Marquee from "@/components/ui/Marquee";
import Manifesto from "@/components/sections/Manifesto";
import SelectedWork from "@/components/sections/SelectedWork";
import SocialGrid from "@/components/sections/SocialGrid";
import Systems from "@/components/sections/Systems";
import Capabilities from "@/components/sections/Capabilities";
import Experience from "@/components/sections/Experience";
import POV from "@/components/sections/POV";
import Contact from "@/components/sections/Contact";

export const metadata = { title: "Sumanth Manjunath — Alternate hero" };

export default function V2() {
  return (
    <>
      <HeroVideo />
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
