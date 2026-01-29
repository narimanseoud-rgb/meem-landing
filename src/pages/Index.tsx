import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import TrustedByScroll from "@/components/sections/TrustedByScroll";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
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
      <section id="about">
        <About />
        <Team />
      </section>
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