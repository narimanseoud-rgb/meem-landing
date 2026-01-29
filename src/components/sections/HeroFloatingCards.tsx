import { motion } from "framer-motion";

const cards = [
  { id: 1, delay: 0, x: 20, y: 80, rotate: -8, size: "w-32 h-40" },
  { id: 2, delay: 0.2, x: 60, y: 200, rotate: 5, size: "w-28 h-36" },
  { id: 3, delay: 0.4, x: 10, y: 320, rotate: -3, size: "w-36 h-44" },
  { id: 4, delay: 0.6, x: 80, y: 440, rotate: 8, size: "w-24 h-32" },
  { id: 5, delay: 0.3, x: 120, y: 140, rotate: -12, size: "w-26 h-34" },
];

const HeroFloatingCards = () => {
  return (
    <div className="absolute left-4 md:left-12 lg:left-20 top-24 bottom-24 w-48 md:w-56 lg:w-64 pointer-events-none z-10">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          className={`absolute ${card.size} rounded-xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border border-border/30 shadow-2xl overflow-hidden`}
          style={{
            left: card.x,
            top: card.y,
            rotate: card.rotate,
          }}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            y: 0, 
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: card.delay,
            ease: "easeOut",
          }}
        >
          {/* Card content - placeholder image effect */}
          <motion.div 
            className="w-full h-full bg-gradient-to-br from-primary/20 via-muted/30 to-primary/10 flex items-center justify-center"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4 + card.id * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: card.delay,
            }}
          >
            {/* Fake profile/content placeholder */}
            <div className="absolute inset-2 rounded-lg bg-gradient-to-b from-muted/40 to-transparent">
              <div className="absolute bottom-3 left-3 right-3">
                <div className="w-8 h-8 rounded-full bg-primary/30 mb-2" />
                <div className="h-2 w-3/4 bg-foreground/20 rounded mb-1" />
                <div className="h-2 w-1/2 bg-foreground/10 rounded" />
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute top-2 right-2 w-6 h-6 rounded-full bg-primary/40"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: card.delay + 0.5,
              }}
            />
          </motion.div>
        </motion.div>
      ))}
      
      {/* Connecting lines/decorative elements */}
      <motion.div
        className="absolute left-1/2 top-1/4 w-px h-32 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scaleY: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute left-1/3 bottom-1/4 w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scaleX: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
    </div>
  );
};

export default HeroFloatingCards;
