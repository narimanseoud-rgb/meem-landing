import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import meemCover from "@/assets/meem-cover.png";
import creatorGirl from "@/assets/creator-girl.png";

const CreatorCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
        {/* Left side - Dark background with text */}
        <div className="relative bg-foreground flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 lg:py-20">
          {/* Content */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold italic mb-4"
            style={{ color: "#FF8800" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Are you a creator?
          </motion.h2>

          <motion.h3
            className="text-2xl md:text-3xl font-bold italic text-background mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Turn your creativity into cash!
          </motion.h3>

          <motion.p
            className="text-background/80 text-lg mb-8 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join our community of content creators, & start your UGC career now!
          </motion.p>

          <motion.div
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

          {/* Meem logo at the bottom */}
          <motion.div
            className="absolute bottom-0 left-0 w-full overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 0.15, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img
              src={meemCover}
              alt=""
              className="w-full h-auto object-contain translate-y-1/3"
              style={{ filter: "brightness(0) invert(0.5)" }}
            />
          </motion.div>
        </div>

        {/* Right side - Image with logo background */}
        <div 
          className="relative flex items-end justify-center overflow-hidden"
          style={{ backgroundColor: "#FF8800" }}
        >
          {/* Meem logo as background */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img
              src={meemCover}
              alt=""
              className="w-[120%] h-auto object-contain"
              style={{ filter: "brightness(0)" }}
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
      </div>
    </section>
  );
};

export default CreatorCTA;
