import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hypeLogo from "@/assets/hype-logo.png";

const brands = [
  { name: "Hype", logo: hypeLogo },
  { name: "Viral Co", logo: hypeLogo },
  { name: "TrendSet", logo: hypeLogo },
  { name: "Buzz Media", logo: hypeLogo },
  { name: "Meme Labs", logo: hypeLogo },
  { name: "Culture Hub", logo: hypeLogo },
  { name: "Social Pop", logo: hypeLogo },
  { name: "Engage Inc", logo: hypeLogo },
];

const scrollingWords = [
  "CREATORS", "ENGAGING", "CONVERSION", "VIRAL", "TRENDING", 
  "INFLUENCE", "REACH", "GROWTH", "IMPACT", "CULTURE"
];

const TrustedByScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const duplicatedBrands = [...brands, ...brands];
  const duplicatedWords = [...scrollingWords, ...scrollingWords];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Logos move left, words move right (opposite directions)
  const logosX = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const wordsX = useTransform(scrollYProgress, [0, 1], [-200, 400]);

  return (
    <section ref={containerRef} className="py-16 overflow-hidden bg-background">
      <div className="container mx-auto px-6 mb-10">
        <motion.p
          className="text-center text-sm font-semibold text-foreground uppercase tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted By Leading Brands
        </motion.p>
      </div>
      
      {/* Logos Row */}
      <div className="relative">
        {/* White gradients on sides */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none" 
          style={{ background: "linear-gradient(to right, hsl(var(--background)) 0%, transparent 100%)" }} 
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none" 
          style={{ background: "linear-gradient(to left, hsl(var(--background)) 0%, transparent 100%)" }} 
        />
        
        <motion.div
          className="flex gap-6 items-center px-8"
          style={{ x: logosX }}
        >
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={`brand-${index}`}
              className="shrink-0 flex flex-col items-center gap-3 p-4 md:p-6 bg-card rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-border/30"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-10 md:h-12 w-auto object-contain"
              />
              <span className="text-xs md:text-sm font-medium text-muted-foreground whitespace-nowrap">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scrolling Words Row */}
      <div className="relative mt-8">
        {/* White gradients on sides */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none" 
          style={{ background: "linear-gradient(to right, hsl(var(--background)) 0%, transparent 100%)" }} 
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none" 
          style={{ background: "linear-gradient(to left, hsl(var(--background)) 0%, transparent 100%)" }} 
        />
        
        <motion.div
          className="flex gap-8 items-center px-8"
          style={{ x: wordsX }}
        >
          {duplicatedWords.map((word, index) => (
            <span
              key={`word-${index}`}
              className="shrink-0 text-2xl md:text-4xl font-black text-primary/30 tracking-widest"
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedByScroll;