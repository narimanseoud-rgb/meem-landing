import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutCatImage from "@/assets/about-cat-image.png";
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section ref={ref} className="relative py-32 overflow-hidden" style={{ background: "linear-gradient(to bottom, transparent 0%, rgba(255, 136, 0, 0.7) 30%, rgba(255, 136, 0, 0.7) 70%, transparent 100%)" }}>
      {/* Abstract accent shapes */}
      <motion.div className="absolute top-20 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" initial={{
      opacity: 0,
      x: 100
    }} animate={isInView ? {
      opacity: 1,
      x: 0
    } : {}} transition={{
      duration: 1,
      ease: "easeOut"
    }} />
      <motion.div className="absolute bottom-20 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" initial={{
      opacity: 0,
      x: -100
    }} animate={isInView ? {
      opacity: 1,
      x: 0
    } : {}} transition={{
      duration: 1,
      ease: "easeOut",
      delay: 0.3
    }} />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-background border border-background/50 rounded-full bg-background/10" initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.6
          }}>
              About Us
            </motion.span>

            <motion.h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" initial={{
            opacity: 0,
            y: 30
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.8,
            delay: 0.1
          }}>
              <span className="text-background">Marketing for the </span>
              <span className="text-foreground font-black">Meme Generation</span>
            </motion.h2>

            <motion.p className="text-lg leading-relaxed text-foreground/90" initial={{
            opacity: 0,
            y: 20
          }} animate={isInView ? {
            opacity: 1,
            y: 0
          } : {}} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              Meme Media Hub was born from a simple truth: traditional marketing 
              doesn't cut it anymore. In a world where attention is the new currency, 
              you need a team that understands how culture really works online.
            </motion.p>
          </div>

          {/* Right content - Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img 
              src={aboutCatImage} 
              alt="Cat mascot" 
              className="max-w-full h-auto max-h-[500px] object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>;
};
export default About;