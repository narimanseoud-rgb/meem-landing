import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const companies = [
  { name: "TechFlow", initials: "TF" },
  { name: "UrbanEats", initials: "UE" },
  { name: "CryptoVault", initials: "CV" },
  { name: "StyleHouse", initials: "SH" },
  { name: "GamersUnite", initials: "GU" },
  { name: "EcoLife", initials: "EL" },
  { name: "MediaPulse", initials: "MP" },
  { name: "NextGen", initials: "NG" },
];

const AnimatedStat = ({ value, suffix, label, isInView, delay }: { value: number; suffix: string; label: string; isInView: boolean; delay: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const controls = animate(0, value, {
        duration: 2,
        delay: delay,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest));
        },
      });
      return () => controls.stop();
    }
  }, [isInView, value, delay]);

  return (
    <div className="text-center">
      <motion.div
        className="text-3xl md:text-4xl font-bold text-primary mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: delay }}
      >
        {displayValue}{suffix}
      </motion.div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
};

const TrustedBy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-background overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Trusted By Industry Leaders
          </span>
        </motion.div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              className="group flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-full h-20 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 group-hover:bg-card/80">
                <div className="flex items-center gap-3">
                  {/* Logo placeholder */}
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold text-sm group-hover:bg-primary/20 transition-colors">
                    {company.initials}
                  </div>
                  <span className="text-foreground font-medium text-sm group-hover:text-primary transition-colors">
                    {company.name}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-border/50"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { value: 50, suffix: "+", label: "Brands Served" },
            { value: 200, suffix: "M+", label: "Total Impressions" },
            { value: 340, suffix: "%", label: "Avg. Engagement Lift" },
            { value: 98, suffix: "%", label: "Client Retention" },
          ].map((stat, index) => (
            <AnimatedStat 
              key={stat.label} 
              value={stat.value} 
              suffix={stat.suffix} 
              label={stat.label} 
              isInView={isInView} 
              delay={0.6 + index * 0.1} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;