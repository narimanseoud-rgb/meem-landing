import { motion } from "framer-motion";
import { Play } from "lucide-react";

// Sample video URLs (using free stock videos)
const videoUrls = [
  "https://videos.pexels.com/video-files/3015510/3015510-sd_506_960_25fps.mp4",
  "https://videos.pexels.com/video-files/4057411/4057411-sd_506_960_25fps.mp4",
  "https://videos.pexels.com/video-files/4536533/4536533-sd_506_960_25fps.mp4",
  "https://videos.pexels.com/video-files/6394054/6394054-sd_506_960_24fps.mp4",
  "https://videos.pexels.com/video-files/5537790/5537790-sd_506_960_25fps.mp4",
  "https://videos.pexels.com/video-files/4434242/4434242-sd_506_960_24fps.mp4",
];

const cardsRow1 = [
  { id: 1, video: videoUrls[0] },
  { id: 2, video: videoUrls[1] },
  { id: 3, video: videoUrls[2] },
  { id: 4, video: videoUrls[3] },
  { id: 5, video: videoUrls[4] },
  { id: 6, video: videoUrls[5] },
];

const cardsRow2 = [
  { id: 7, video: videoUrls[2] },
  { id: 8, video: videoUrls[4] },
  { id: 9, video: videoUrls[0] },
  { id: 10, video: videoUrls[5] },
  { id: 11, video: videoUrls[1] },
  { id: 12, video: videoUrls[3] },
];

// Duplicate for seamless loop
const allCardsRow1 = [...cardsRow1, ...cardsRow1];
const allCardsRow2 = [...cardsRow2, ...cardsRow2];

const VideoCard = ({ id, video }: { id: number; video: string }) => (
  <div 
    className="w-36 md:w-44 lg:w-52 h-52 md:h-64 lg:h-72 rounded-2xl overflow-hidden shrink-0"
    style={{
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 12px 24px -8px rgba(0, 0, 0, 0.4)"
    }}
  >
    {/* Actual video */}
    <div className="w-full h-full relative bg-muted">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      
      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
      
      {/* Play button indicator */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <Play className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground fill-primary-foreground ml-0.5" />
        </div>
      </div>
      
      {/* Video duration badge */}
      <div className="absolute top-2 right-2 px-1.5 py-0.5 bg-background/70 backdrop-blur-sm rounded text-[10px] md:text-xs text-foreground/80 font-medium">
        0:{15 + id * 3}
      </div>
    </div>
  </div>
);

const HeroFloatingCards = () => {
  return (
    <div 
      className="absolute left-0 md:left-4 lg:left-12 top-0 bottom-0 w-80 md:w-96 lg:w-[28rem] pointer-events-none z-10 overflow-hidden"
      style={{ transform: "rotate(-12deg)", transformOrigin: "top left" }}
    >
      {/* Gradient fade at top only */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-[hsl(0,0%,8%)] to-transparent z-20" />
      
      {/* Two columns container - extends beyond the hero */}
      <div className="flex gap-4 md:gap-5 lg:gap-6 h-[200%] -mt-16">
        {/* First column - scrolling down faster */}
        <motion.div
          className="flex flex-col gap-5 md:gap-6"
          animate={{
            y: [0, -78 * cardsRow1.length * 4],
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
          {allCardsRow1.map((card, index) => (
            <VideoCard key={`row1-${card.id}-${index}`} id={card.id} video={card.video} />
          ))}
        </motion.div>
        
        {/* Second column - scrolling down slower */}
        <motion.div
          className="flex flex-col gap-5 md:gap-6 mt-16"
          animate={{
            y: [0, -78 * cardsRow2.length * 4],
          }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 32,
              ease: "linear",
            },
          }}
        >
          {allCardsRow2.map((card, index) => (
            <VideoCard key={`row2-${card.id}-${index}`} id={card.id} video={card.video} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroFloatingCards;
