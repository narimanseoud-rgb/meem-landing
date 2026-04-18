import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, Linkedin, Phone } from "lucide-react";
import meemCover from "@/assets/meem-cover.png";
import meemTextLogo from "@/assets/meem-text-logo.png";
import heroVideo from "@/assets/hero-video.mp4";

const socialLinks = [{
  icon: Instagram,
  href: "#",
  label: "Instagram"
}, {
  icon: Facebook,
  href: "#",
  label: "Facebook"
}, {
  icon: Mail,
  href: "mailto:info@meemmedia.io",
  label: "Email"
}, {
  icon: Linkedin,
  href: "#",
  label: "LinkedIn"
}, {
  icon: Phone,
  href: "tel:+1234567890",
  label: "Phone"
}];
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden dark bg-[hsl(0,0%,8%)] pt-16 md:pt-20">
      {/* Video background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay for video */}
      <div className="absolute inset-0 bg-background/40" />

      {/* Half-height orange to transparent gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none" style={{
      background: "linear-gradient(to top, hsl(32, 100%, 50%) 0%, hsl(32, 100%, 50%, 0.6) 40%, transparent 100%)"
    }} />

      {/* Animated gradient orbs */}
      <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl" animate={{
      x: [0, 50, 0],
      y: [0, 30, 0],
      scale: [1, 1.2, 1]
    }} transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      <motion.div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-primary/15 blur-3xl" animate={{
      x: [0, -40, 0],
      y: [0, -40, 0],
      scale: [1, 1.3, 1]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }} />


      {/* Overlay logo at bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-0 opacity-40">
        <img src={meemCover} alt="" className="w-full h-auto object-cover" />
      </div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Text logo above headline */}
        <motion.div initial={{
        opacity: 0,
        y: 30,
        scale: 0.9
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} transition={{
        duration: 0.8,
        ease: "easeOut"
      }} className="mb-8">
          <motion.img src={meemTextLogo} alt="Meem Media" className="h-8 md:h-10 lg:h-12 w-auto mx-auto" initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }} />
        </motion.div>

        <motion.h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-5xl mx-auto mb-6 text-white leading-tight" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.55,
        duration: 0.8,
        ease: "easeOut"
      }}>
          We turn culture into growth, and brands into memories.
        </motion.h1>

        <motion.p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-primary-foreground" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.8,
        duration: 0.8,
        ease: "easeOut"
      }}>
          Meem Media blends strategy, content, creators, and digital execution to help brands stay current, stand out, and grow with intention.
        </motion.p>
      </div>

      {/* Social links - left side, centered on mobile */}
      <motion.div 
        className="absolute bottom-8 left-0 right-0 flex justify-center md:justify-start md:left-6 md:right-auto z-20 px-4 md:px-0"
        initial={{
          opacity: 0,
          x: -20
        }} 
        animate={{
          opacity: 1,
          x: 0
        }} 
        transition={{
          delay: 1.2,
          duration: 0.6
        }}
      >
        <div className="flex flex-row gap-3 px-4 py-3 rounded-full bg-background/20 backdrop-blur-md border border-background/30">
          {socialLinks.map((social, index) => (
          <motion.a 
            key={social.label} 
            href={social.href} 
            className="w-10 h-10 rounded-full bg-background/30 backdrop-blur-sm flex items-center justify-center text-white hover:text-primary hover:bg-background/50 transition-all duration-300"
            aria-label={social.label} 
            whileHover={{
              scale: 1.15,
              y: -5
            }} 
            initial={{
              opacity: 0,
              y: 20
            }} 
            animate={{
              opacity: 1,
              y: 0
            }} 
            transition={{
              duration: 0.4,
              delay: 1.3 + index * 0.1
            }}
          >
            <social.icon className="w-4 h-4" />
          </motion.a>
        ))}
        </div>
      </motion.div>

    </section>;
};
export default Hero;