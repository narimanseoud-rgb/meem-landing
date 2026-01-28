import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, TrendingUp, Users, Sparkles } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Internet Culture Experts",
    description: "We live online. We understand the language, the trends, and the moments that matter.",
  },
  {
    icon: TrendingUp,
    title: "Viral Strategy",
    description: "Every campaign is built for shareability. We engineer content that spreads organically.",
  },
  {
    icon: Users,
    title: "Community Building",
    description: "We don't just reach audiences—we build engaged communities around your brand.",
  },
  {
    icon: Sparkles,
    title: "Creative Excellence",
    description: "Bold ideas, flawless execution. Every piece of content is crafted to stand out.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 bg-secondary overflow-hidden">
      {/* Abstract accent shapes */}
      <motion.div
        className="absolute top-20 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl"
        initial={{ opacity: 0, x: -100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.span
              className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/10"
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
              <span className="text-foreground">Marketing for the </span>
              <span className="text-primary">Meme Generation</span>
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Meme Media Hub was born from a simple truth: traditional marketing 
              doesn't cut it anymore. In a world where attention is the new currency, 
              you need a team that understands how culture really works online.
            </motion.p>

            <motion.p
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              We blend deep internet knowledge with strategic thinking to create 
              campaigns that don't just reach people—they resonate, they engage, 
              and they convert. No corporate jargon, just results.
            </motion.p>
          </div>

          {/* Right content - Feature cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 transition-colors duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;