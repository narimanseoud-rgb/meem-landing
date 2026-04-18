import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Share2, 
  PenTool, 
  BarChart3, 
  Globe 
} from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Branding & Positioning",
    description: "We shape how your brand looks, feels, and shows up in the market, building clarity, consistency, and a presence people remember.",
  },
  {
    icon: Share2,
    title: "Content & Social",
    description: "From strategy to execution, we create platform-native content, reels, and social systems that keep your brand current and performing.",
  },
  {
    icon: BarChart3,
    title: "Creator & Campaign Strategy",
    description: "We source the right voices, build smart collaborations, and manage campaigns that feel culturally relevant and commercially sharp.",
  },
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "We build clean, conversion-focused websites and landing pages that translate your brand into a seamless digital experience.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" style={{ backgroundColor: "#FF8800" }}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/5 via-transparent to-foreground/5" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-background border border-background/50 rounded-full bg-background/10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            What We Do
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-background">What We Build </span>
            <span className="text-foreground">For Growth</span>
          </motion.h2>

          <motion.p
            className="text-lg text-foreground/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our work sits across brand, content, creators, and digital execution. Every service is designed to help your business stay relevant, show up clearly, and grow with direction.
          </motion.p>
        </div>

        {/* Services grid - centered when incomplete row */}
        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-8 bg-background rounded-2xl border-2 border-transparent hover:border-foreground/40 transition-all duration-500 overflow-hidden w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;