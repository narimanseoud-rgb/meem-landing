import { motion } from "framer-motion";
import { Zap, Flame, Star, Diamond, Crown, Sparkles, Rocket, Heart, Globe, Hexagon } from "lucide-react";
const brands = [{
  name: "TechFlow",
  icon: Zap
}, {
  name: "UrbanEats",
  icon: Flame
}, {
  name: "CryptoVault",
  icon: Diamond
}, {
  name: "StyleHouse",
  icon: Star
}, {
  name: "GamersUnite",
  icon: Crown
}, {
  name: "EcoLife",
  icon: Globe
}, {
  name: "MediaPulse",
  icon: Sparkles
}, {
  name: "NextGen",
  icon: Rocket
}, {
  name: "CloudNine",
  icon: Heart
}, {
  name: "BrightIdea",
  icon: Hexagon
}];
const TrustedByScroll = () => {
  // Duplicate the brands array for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];
  return <section className="py-16 overflow-hidden bg-background">
      <div className="container mx-auto px-6 mb-10">
        <motion.p className="text-center text-sm font-semibold text-foreground uppercase tracking-widest" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          Trusted By Leading Brands
        </motion.p>
      </div>
      
      <div className="relative">
        {/* Orange gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-40 z-10" style={{
        background: "linear-gradient(to right, hsl(32, 100%, 50%) 0%, hsl(32, 100%, 50%, 0.5) 40%, transparent 100%)"
      }} />
        <div className="absolute right-0 top-0 bottom-0 w-40 z-10" style={{
        background: "linear-gradient(to left, hsl(32, 100%, 50%) 0%, hsl(32, 100%, 50%, 0.5) 40%, transparent 100%)"
      }} />
        
        {/* Scrolling container */}
        <motion.div className="flex gap-20 items-center px-8" animate={{
        x: [0, -80 * brands.length]
      }} transition={{
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear"
        }
      }}>
          {duplicatedBrands.map((brand, index) => {
          const IconComponent = brand.icon;
          return <div key={`${brand.name}-${index}`} className="shrink-0 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                <IconComponent className="w-12 h-12 text-foreground" strokeWidth={1.5} />
              </div>;
        })}
        </motion.div>
      </div>
    </section>;
};
export default TrustedByScroll;