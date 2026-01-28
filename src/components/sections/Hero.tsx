import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary to-background" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/15 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 border-2 border-primary/40 rotate-45"
        animate={{ y: [0, -20, 0], rotate: [45, 90, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-32 left-16 w-12 h-12 bg-primary/30 rounded-full"
        animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/3 left-10 w-20 h-20 border border-primary/20 rounded-lg"
        animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-8 h-8 bg-primary/40"
        animate={{ y: [0, -18, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      {/* Gradient overlay - black at bottom, transparent at top */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/10"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Culture-First Marketing Agency
          </motion.span>
        </motion.div>
        
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-foreground">We Turn </span>
          <span className="text-primary">Culture</span>
          <br />
          <span className="text-foreground">Into </span>
          <span className="text-primary">Growth</span>
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          We're not your average agency. We speak internet, breathe memes, 
          and craft campaigns that break through the noise. Welcome to marketing 
          that actually moves the culture.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
        >
          <Button
            size="lg"
            className="group text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Work With Us
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1.5 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 8, 0], opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;