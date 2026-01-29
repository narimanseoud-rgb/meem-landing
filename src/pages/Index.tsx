import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import TrustedByScroll from "@/components/sections/TrustedByScroll";
import ScrollingText from "@/components/sections/ScrollingText";
import UGCSection from "@/components/sections/UGCSection";
import HeroFloatingCards from "@/components/sections/HeroFloatingCards";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import CreatorCTA from "@/components/sections/CreatorCTA";
import Services from "@/components/sections/Services";

import TrustedBy from "@/components/sections/TrustedBy";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const topScrollingWords = [
  "STRATEGY", "BRANDING", "CAMPAIGNS", "DIGITAL", "SOCIAL", 
  "CONTENT", "CREATIVE", "ANALYTICS", "GROWTH", "ENGAGEMENT"
];

const bottomScrollingWords = [
  "CREATORS", "VIRAL", "TRENDING", "INFLUENCE", "REACH", 
  "IMPACT", "CULTURE", "INNOVATION", "STORYTELLING", "RESULTS",
  "CONVERSION", "AUDIENCE", "ENGAGEMENT", "VISIBILITY", "BRAND AWARENESS"
];

const Index = () => {
  return (
    <main>
      <Header />
      <Hero />
      <TrustedByScroll />
      <UGCSection />
      <ScrollingText words={topScrollingWords} direction="left" />
      <HeroFloatingCards />
      <ScrollingText words={bottomScrollingWords} direction="right" />
      <section id="about">
        <About />
        <Team />
      </section>
      <CreatorCTA />
      <section id="services">
        <Services />
      </section>
      <TrustedBy />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default Index;