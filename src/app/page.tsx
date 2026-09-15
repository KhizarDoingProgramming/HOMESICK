import Hero from "@/components/Hero";
import TaglineStrip from "@/components/TaglineStrip";
import About from "@/components/About";
import SelectedWork from "@/components/SelectedWork";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TaglineStrip variant="dark" />
      <About />
      <div className="h-20 lg:h-24 bg-cream" />
      <TaglineStrip variant="dark" />

      <SelectedWork />
      <div className="h-20 lg:h-24 bg-cream" />
      <Process />
      <FinalCTA />
    </>
  );
}
