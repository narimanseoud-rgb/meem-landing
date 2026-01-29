import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollingTextProps {
  words: string[];
  direction: "left" | "right";
}

const ScrollingText = ({ words, direction }: ScrollingTextProps) => {
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
    <section ref={containerRef} className="relative overflow-hidden py-6 bg-background">
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
    </section>
  );
};

export default ScrollingText;
