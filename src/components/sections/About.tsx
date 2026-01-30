import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-image.png";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });

  return (
    <section ref={ref} className="relative min-h-[80vh] overflow-hidden flex items-center">
      {/* Full-width background image - girl spanning edge to edge */}
      <div className="absolute inset-0 w-screen left-1/2 -translate-x-1/2">
        <img 
          src={aboutImage} 
          alt="About background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark gradient overlay - transparent at top, dark at bottom */}
      <div 
        className="absolute inset-0 w-screen left-1/2 -translate-x-1/2"
        style={{ 
          background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 40%, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0.9) 100%)" 
        }}
      />

      {/* Content centered */}
      <div className="container mx-auto px-6 relative z-10 py-32">
        <div className="max-w-2xl mx-auto text-center">
          <motion.span 
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/50 rounded-full bg-primary/10" 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.span>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" 
            initial={{ opacity: 0, y: 30 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-primary">We Target the </span>
            <span className="text-background font-black">Right Clients</span>
          </motion.h2>

          <motion.p 
            className="text-lg leading-relaxed text-background/90" 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meme Media Hub was born from a simple truth: traditional marketing 
            doesn't cut it anymore. In a world where attention is the new currency, 
            you need a team that understands how culture really works online.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;