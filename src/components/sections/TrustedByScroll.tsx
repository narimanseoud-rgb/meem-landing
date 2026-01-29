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

const topScrollingWords = [
  "STRATEGY", "BRANDING", "CAMPAIGNS", "DIGITAL", "SOCIAL", 
  "CONTENT", "CREATIVE", "ANALYTICS", "GROWTH", "ENGAGEMENT"
];

const bottomScrollingWords = [
  "CREATORS", "VIRAL", "TRENDING", "INFLUENCE", "REACH", 
  "IMPACT", "CULTURE", "INNOVATION", "STORYTELLING", "RESULTS"
];

const ScrollingWords = ({ words, direction }: { words: string[]; direction: "left" | "right" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const duplicatedWords = [...words, ...words];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    direction === "left" ? [0, -600] : [-300, 300]
  );

  return (
    <div ref={containerRef} className="relative overflow-hidden py-4">
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
        className="flex gap-4 items-center px-8"
        style={{ x }}
      >
        {duplicatedWords.map((word, index) => (
          <div key={`word-${index}`} className="flex items-center gap-4 shrink-0">
            <span className="text-4xl md:text-6xl font-black text-primary/40 tracking-widest">
              {word}
            </span>
            {index < duplicatedWords.length - 1 && (
              <span className="text-4xl md:text-6xl text-primary/40">•</span>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TrustedByScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section ref={containerRef} className="py-16 overflow-hidden bg-background">
      <div className="container mx-auto px-6 mb-6">
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

      {/* Top scrolling words */}
      <ScrollingWords words={topScrollingWords} direction="left" />
      
      {/* Logos Row - Auto-animating marquee */}
      <div className="relative my-6 overflow-hidden">
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
          className="flex gap-12 items-center px-8"
          animate={{ x: [0, -120 * brands.length] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear"
            }
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <motion.div
              key={`brand-${index}`}
              className="shrink-0 flex flex-col items-center gap-3 cursor-pointer"
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 md:h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <span className="text-xs md:text-sm font-medium text-muted-foreground whitespace-nowrap">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom scrolling words */}
      <ScrollingWords words={bottomScrollingWords} direction="right" />
    </section>
  );
};

export default TrustedByScroll;