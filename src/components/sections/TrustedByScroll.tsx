import { motion } from "framer-motion";
import hypeLogo from "@/assets/hype-logo.png";

const TrustedByScroll = () => {
  // Create array with hype logo duplicated several times for marquee
  const logos = Array(10).fill(hypeLogo);
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 overflow-hidden bg-background">
      <div className="container mx-auto px-6 mb-10">
        <motion.p
          className="text-center text-sm font-semibold text-foreground uppercase tracking-widest"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Trusted By Leading Brands
        </motion.p>
      </div>
      
      <div className="relative">
        {/* Scrolling container */}
        <motion.div
          className="flex gap-20 items-center px-8"
          animate={{ x: [0, -120 * logos.length] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear"
            }
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`logo-${index}`}
              className="shrink-0 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <img
                src={logo}
                alt="Hype"
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedByScroll;