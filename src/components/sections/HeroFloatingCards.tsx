import { motion } from "framer-motion";
import { Play } from "lucide-react";

const cardsRow1 = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

const cardsRow2 = [
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
];

// Duplicate for seamless loop
const allCardsRow1 = [...cardsRow1, ...cardsRow1];
const allCardsRow2 = [...cardsRow2, ...cardsRow2];

const VideoCard = ({ id }: { id: number }) => (
  <div className="w-24 md:w-28 lg:w-32 h-36 md:h-44 lg:h-48 rounded-xl bg-gradient-to-br from-card/95 to-card/80 backdrop-blur-sm border border-border/50 shadow-2xl overflow-hidden shrink-0">
    {/* Video placeholder content */}
    <div className="w-full h-full bg-gradient-to-br from-muted/70 via-muted/50 to-muted/30 relative">
      {/* Fake video thumbnail with gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      
      {/* Play button indicator */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <Play className="w-3 h-3 md:w-4 md:h-4 text-primary-foreground fill-primary-foreground ml-0.5" />
        </div>
      </div>
      
      {/* Profile/creator info at bottom */}
      <div className="absolute bottom-2 left-2 right-2">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-primary/40" />
          <div className="flex-1">
            <div className="h-1.5 w-12 bg-foreground/30 rounded mb-0.5" />
            <div className="h-1 w-8 bg-foreground/20 rounded" />
          </div>
        </div>
      </div>
      
      {/* Video duration badge */}
      <div className="absolute top-1.5 right-1.5 px-1 py-0.5 bg-background/70 backdrop-blur-sm rounded text-[8px] md:text-[10px] text-foreground/80 font-medium">
        0:{15 + id * 5}
      </div>
    </div>
  </div>
);

const HeroFloatingCards = () => {
  return (
    <div 
      className="absolute left-0 md:left-4 lg:left-8 top-0 bottom-0 w-56 md:w-72 lg:w-80 pointer-events-none z-10 overflow-hidden"
      style={{ transform: "rotate(-12deg)", transformOrigin: "top left" }}
    >
      {/* Gradient fade at top */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[hsl(0,0%,8%)] via-[hsl(0,0%,8%,0.8)] to-transparent z-20" />
      
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-primary via-primary/80 to-transparent z-20" />
      
      {/* Two columns container */}
      <div className="flex gap-3 md:gap-4 h-full pt-16">
        {/* First column - scrolling down */}
        <motion.div
          className="flex flex-col gap-4 md:gap-5"
          animate={{
            y: [0, -48 * cardsRow1.length * 4],
          }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {allCardsRow1.map((card, index) => (
            <VideoCard key={`row1-${card.id}-${index}`} id={card.id} />
          ))}
        </motion.div>
        
        {/* Second column - scrolling down (offset) */}
        <motion.div
          className="flex flex-col gap-4 md:gap-5 mt-20"
          animate={{
            y: [0, -48 * cardsRow2.length * 4],
          }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {allCardsRow2.map((card, index) => (
            <VideoCard key={`row2-${card.id}-${index}`} id={card.id} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroFloatingCards;
