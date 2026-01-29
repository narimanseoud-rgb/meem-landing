import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import meemLogoRotating from "@/assets/meem-logo-rotating.png";
import logoMGirl from "@/assets/logo-m-girl.png";
import rotatingShape from "@/assets/rotating-shape.png";
import creatorGirl from "@/assets/creator-girl.png";

const CreatorCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden h-screen">
      <div className="grid lg:grid-cols-2 h-full">
        {/* Left side - Girl with M logo and rotating shape */}
        <div 
          className="relative flex items-end justify-center overflow-hidden order-2 lg:order-1"
          style={{ backgroundColor: "#FF8800" }}
        >
          {/* Rotating shape behind the girl */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <img
              src={rotatingShape}
              alt=""
              className="w-[80%] h-auto object-contain opacity-60"
            />
          </motion.div>

          {/* M logo behind the girl at the bottom */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 flex items-end justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 0.4, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <img
              src={logoMGirl}
              alt=""
              className="w-[80%] h-auto object-contain"
            />
          </motion.div>

          {/* Creator girl image */}
          <motion.img
            src={creatorGirl}
            alt="Content Creator"
            className="relative z-10 h-full w-auto max-w-full object-contain object-bottom"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </div>

        {/* Right side - Dark background with text and rotating Meem logo */}
        <div className="relative bg-foreground flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 lg:py-20 order-1 lg:order-2 overflow-hidden">
          {/* Rotating Meem logo in background */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            <img
              src={meemLogoRotating}
              alt=""
              className="w-[120%] h-auto object-contain opacity-15"
            />
          </motion.div>

          {/* Content */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold italic mb-4 relative z-10"
            style={{ color: "#FF8800" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Are you a creator?
          </motion.h2>

          <motion.h3
            className="text-2xl md:text-3xl font-bold italic text-background mb-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Turn your creativity into cash!
          </motion.h3>

          <motion.p
            className="text-background/80 text-lg mb-8 max-w-md relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our community of content creators, & start your UGC career now!
          </motion.p>

          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="px-10 py-6 text-base font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
            >
              GET STARTED
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CreatorCTA;
