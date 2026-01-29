import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import TrustedByScroll from "@/components/sections/TrustedByScroll";
import UGCSection from "@/components/sections/UGCSection";
import HeroFloatingCards from "@/components/sections/HeroFloatingCards";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import CreatorCTA from "@/components/sections/CreatorCTA";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import TrustedBy from "@/components/sections/TrustedBy";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main>
      <Header />
      <Hero />
      <TrustedByScroll />
      <UGCSection />
      <HeroFloatingCards />
      <section id="about">
        <About />
        <Team />
      </section>
      <CreatorCTA />
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
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