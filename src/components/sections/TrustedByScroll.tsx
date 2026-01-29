import { motion } from "framer-motion";

const brands = [
  { name: "TechFlow", initials: "TF" },
  { name: "UrbanEats", initials: "UE" },
  { name: "CryptoVault", initials: "CV" },
  { name: "StyleHouse", initials: "SH" },
  { name: "GamersUnite", initials: "GU" },
  { name: "EcoLife", initials: "EL" },
  { name: "MediaPulse", initials: "MP" },
  { name: "NextGen", initials: "NG" },
  { name: "CloudNine", initials: "CN" },
  { name: "BrightIdea", initials: "BI" },
];

const TrustedByScroll = () => {
  // Duplicate the brands array for seamless infinite scroll
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-muted/50 overflow-hidden border-y border-border">
      <div className="container mx-auto px-6 mb-10">
        <motion.p
          className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted By Leading Brands
        </motion.p>
      </div>
      
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/50 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/50 to-transparent z-10" />
        
        {/* Scrolling container */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: [0, -50 * brands.length * 8],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedBrands.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex items-center gap-4 shrink-0 px-6 py-3 rounded-full bg-card border border-border/50 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                {brand.initials}
              </div>
              <span className="text-foreground font-medium whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedByScroll;
