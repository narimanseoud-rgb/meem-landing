import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Share2, 
  Smile, 
  Palette, 
  FileText, 
  Lightbulb 
} from "lucide-react";

const services = [
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Strategic social media management that builds engaged communities and drives real business results across all major platforms.",
  },
  {
    icon: Smile,
    title: "Meme Marketing & Viral Content",
    description: "We craft content designed to spread. Memes, trends, and cultural moments that put your brand in the conversation.",
  },
  {
    icon: Palette,
    title: "Branding & Creative Direction",
    description: "Bold visual identities and creative strategies that make your brand impossible to ignore in crowded feeds.",
  },
  {
    icon: FileText,
    title: "Content Strategy",
    description: "Data-driven content planning that ensures every post, story, and video serves your bigger business goals.",
  },
  {
    icon: Lightbulb,
    title: "Campaign Ideation",
    description: "Big ideas that break through. We conceptualize campaigns that capture attention and drive action at scale.",
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
            <span className="text-background">Services That </span>
            <span className="text-foreground">Move Culture</span>
          </motion.h2>

          <motion.p
            className="text-lg text-foreground/90 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            From strategy to execution, we offer end-to-end marketing solutions 
            designed for the digital age. Every service is built around one goal: 
            making your brand unforgettable.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative p-8 bg-background rounded-2xl border border-foreground/20 hover:border-foreground/50 transition-all duration-500 overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ 
                y: -8,
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