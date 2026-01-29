import { motion } from "framer-motion";
import { Play } from "lucide-react";

const cards = [
  { id: 1, rotate: -8 },
  { id: 2, rotate: 5 },
  { id: 3, rotate: -3 },
  { id: 4, rotate: 8 },
  { id: 5, rotate: -5 },
  { id: 6, rotate: 4 },
];

// Duplicate for seamless loop
const allCards = [...cards, ...cards];

const HeroFloatingCards = () => {
  return (
    <div className="absolute left-4 md:left-8 lg:left-16 top-0 bottom-0 w-36 md:w-44 lg:w-52 pointer-events-none z-10 overflow-hidden">
      {/* Gradient fade at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[hsl(0,0%,8%)] to-transparent z-20" />
      
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent z-20" />
      
      {/* Scrolling container */}
      <motion.div
        className="flex flex-col gap-6 py-8"
        animate={{
          y: [0, -50 * cards.length * 4],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {allCards.map((card, index) => (
          <motion.div
            key={`${card.id}-${index}`}
            className="w-28 md:w-36 lg:w-40 h-44 md:h-52 lg:h-60 rounded-2xl bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border border-border/40 shadow-2xl overflow-hidden shrink-0"
            style={{
              rotate: card.rotate,
              marginLeft: index % 2 === 0 ? 0 : 24,
            }}
          >
            {/* Video placeholder content */}
            <div className="w-full h-full bg-gradient-to-br from-muted/60 via-muted/40 to-muted/20 relative">
              {/* Fake video thumbnail with gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              
              {/* Play button indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                  <Play className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground fill-primary-foreground ml-0.5" />
                </div>
              </div>
              
              {/* Profile/creator info at bottom */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/40" />
                  <div className="flex-1">
                    <div className="h-2 w-16 bg-foreground/30 rounded mb-1" />
                    <div className="h-1.5 w-10 bg-foreground/20 rounded" />
                  </div>
                </div>
              </div>
              
              {/* Video duration badge */}
              <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-background/70 backdrop-blur-sm rounded text-[10px] text-foreground/80 font-medium">
                0:{15 + card.id * 7}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroFloatingCards;
