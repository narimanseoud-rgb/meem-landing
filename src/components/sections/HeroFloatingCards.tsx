import { motion } from "framer-motion";

// Sample video URLs (using free stock videos - vertical format)
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

const VideoCard = ({ video }: { video: string }) => (
  <div 
    className="w-28 md:w-32 lg:w-36 h-40 md:h-48 lg:h-52 rounded-xl overflow-hidden shrink-0 shadow-lg"
  >
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className="w-full h-full object-cover"
    >
      <source src={video} type="video/mp4" />
    </video>
  </div>
);

const HeroFloatingCards = () => {
  return (
    <div 
      className="absolute left-0 md:left-2 lg:left-8 top-0 h-[120vh] w-72 md:w-80 lg:w-96 pointer-events-none z-10 overflow-hidden"
      style={{ transform: "rotate(-12deg)", transformOrigin: "top left" }}
    >
      {/* Gradient fade at top only */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[hsl(0,0%,8%)] to-transparent z-20" />
      
      {/* Two columns container */}
      <div className="flex gap-3 md:gap-4 h-full">
        {/* First column - scrolling down faster */}
        <motion.div
          className="flex flex-col gap-4"
          animate={{
            y: [0, -56 * cardsRow1.length * 4],
          }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 18,
              ease: "linear",
            },
          }}
        >
          {allCardsRow1.map((card, index) => (
            <VideoCard key={`row1-${card.id}-${index}`} video={card.video} />
          ))}
        </motion.div>
        
        {/* Second column - scrolling down slower */}
        <motion.div
          className="flex flex-col gap-4 mt-12"
          animate={{
            y: [0, -56 * cardsRow2.length * 4],
          }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 28,
              ease: "linear",
            },
          }}
        >
          {allCardsRow2.map((card, index) => (
            <VideoCard key={`row2-${card.id}-${index}`} video={card.video} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroFloatingCards;
