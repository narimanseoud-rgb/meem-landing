import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import ugcPhoneVideo from "@/assets/ugc-phone-video.mp4";

const stats = [
  "Platform-native reels, UGC, and short-form content built for attention and action.",
  "Creator-led execution shaped around the brand, not forced trends.",
  "Content systems designed to help brands stay current and consistent.",
  "Creative built to support growth, trust, and stronger market presence.",
];

const UGCSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Content & Creators</span>
            </motion.div>

            {/* Headline */}
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-foreground italic">Content that feels </span>
              <span className="text-foreground italic">native to the platform, </span>
              <span className="text-primary italic">not forced for the algorithm.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Meem develops reels, UGC, and creator-led content that helps brands show up with more relevance, more clarity, and a stronger chance of being remembered.
            </motion.p>

            {/* Stats list */}
            <motion.ul
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {stats.map((stat, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{stat}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button asChild size="lg" className="px-8 py-6 text-base font-semibold">
                <a href="#contact">START YOUR PROJECT</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right content - Phone mockup */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Phone frame */}
            <div className="relative">
              {/* Phone device */}
              <div className="relative w-64 md:w-72 lg:w-80 bg-foreground rounded-[3rem] p-2 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full z-10" />
                
                {/* Screen */}
                <div className="relative bg-foreground rounded-[2.5rem] overflow-hidden aspect-[9/19]">
                  {/* Video background */}
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src={ugcPhoneVideo} type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                className="absolute -top-4 -right-8 md:-right-16 bg-primary px-4 py-3 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">UGC</div>
                <div className="text-xs text-primary-foreground/80">Creator-led content for modern brands</div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-8 md:-left-16 bg-primary px-4 py-3 rounded-xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground">REELS</div>
                <div className="text-xs text-primary-foreground/80">Short-form creative built for relevance</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UGCSection;
