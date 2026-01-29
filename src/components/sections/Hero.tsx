import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, Linkedin, Phone } from "lucide-react";
import heroOverlay from "@/assets/hero-overlay.png";
import meemTextLogo from "@/assets/meem-text-logo.png";
import heroVideo from "@/assets/hero-video.mp4";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Mail, href: "mailto:hello@mememediahub.com", label: "Email" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Phone, href: "tel:+1234567890", label: "Phone" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dark bg-[hsl(0,0%,8%)] pt-16 md:pt-20">
      {/* Video background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for video */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Half-height orange to transparent gradient overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none"
        style={{
          background: "linear-gradient(to top, hsl(32, 100%, 50%) 0%, hsl(32, 100%, 50%, 0.6) 40%, transparent 100%)",
        }}
      />

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
        className="absolute top-32 right-20 w-16 h-16 border-2 border-primary/40 rotate-45"
        animate={{ y: [0, -20, 0], rotate: [45, 90, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-48 left-16 w-12 h-12 bg-primary/30 rounded-full"
        animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute top-1/3 left-10 w-20 h-20 border border-primary/20 rounded-lg"
        animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/3 right-10 w-8 h-8 bg-primary/40"
        animate={{ y: [0, -18, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-6 h-6 border border-foreground/20 rounded-full"
        animate={{ y: [0, -12, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="absolute bottom-1/2 left-1/3 w-10 h-10 border-2 border-primary/30"
        animate={{ rotate: [0, 90, 180, 270, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {/* Uploaded overlay image at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10">
        <img src={heroOverlay} alt="" className="w-full h-auto object-cover mix-blend-screen" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Text logo above headline */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.img
            src={meemTextLogo}
            alt="Meme Media Hub"
            className="h-8 md:h-10 lg:h-12 w-auto mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          We're not your average agency. We speak internet, breathe memes, and craft campaigns that break through the
          noise. Welcome to marketing that actually moves the culture.
        </motion.p>
      </div>

      {/* Social links - bottom right corner */}
      <motion.div
        className="absolute bottom-24 right-6 md:right-10 z-20 flex flex-row gap-3"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            className="w-10 h-10 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-card transition-all duration-300"
            aria-label={social.label}
            whileHover={{ scale: 1.15, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
          >
            <social.icon className="w-4 h-4" />
          </motion.a>
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center"
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
