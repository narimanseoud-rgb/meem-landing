import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import TrustedBy from "@/components/sections/TrustedBy";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <main className="dark">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <TrustedBy />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;