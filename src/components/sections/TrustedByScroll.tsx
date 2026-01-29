import { motion } from "framer-motion";
import { useRef } from "react";
import { 
  Zap, 
  TrendingUp, 
  Rocket, 
  Target, 
  Sparkles, 
  Globe, 
  MessageCircle, 
  BarChart3,
  Flame,
  Star,
  Crown,
  Diamond,
  Award,
  Megaphone
} from "lucide-react";

const brands = [
  { name: "Hype", Icon: Zap },
  { name: "Viral Co", Icon: TrendingUp },
  { name: "TrendSet", Icon: Rocket },
  { name: "Buzz Media", Icon: Target },
  { name: "Meme Labs", Icon: Sparkles },
  { name: "Culture Hub", Icon: Globe },
  { name: "Social Pop", Icon: MessageCircle },
  { name: "Engage Inc", Icon: BarChart3 },
  { name: "BrandWave", Icon: Flame },
  { name: "ClickMagnet", Icon: Star },
  { name: "Influence+", Icon: Crown },
  { name: "ReachMax", Icon: Diamond },
  { name: "TrendRider", Icon: Award },
  { name: "ViralEdge", Icon: Megaphone },
];

const TrustedByScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section ref={containerRef} className="py-16 overflow-hidden bg-background">
      {/* Bold header */}
      <div className="container mx-auto px-6 mb-12">
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <div className="h-px w-12 md:w-24 bg-gradient-to-r from-transparent to-primary" />
            <h2 className="text-2xl md:text-4xl font-black text-primary uppercase tracking-tight">
              Trusted By Leading Brands
            </h2>
            <div className="h-px w-12 md:w-24 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </motion.div>
      </div>
      
      {/* Logos Row - Auto-animating marquee */}
      <div className="relative my-6 overflow-visible py-4">
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
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-muted/50 flex items-center justify-center">
                <brand.Icon className="w-8 h-8 md:w-10 md:h-10 text-foreground/70" />
              </div>
              <span className="text-xs md:text-sm font-medium text-muted-foreground whitespace-nowrap">
                {brand.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedByScroll;
