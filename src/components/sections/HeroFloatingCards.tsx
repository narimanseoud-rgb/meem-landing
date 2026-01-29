import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";
import videoCard1 from "@/assets/video-card-1.mp4";
import videoCard2 from "@/assets/video-card-2.mp4";
import videoCard3 from "@/assets/video-card-3.mp4";

const videos = [videoCard1, videoCard2, videoCard3];

const cardsRow1 = [
  { id: 1, video: videos[0] },
  { id: 2, video: videos[1] },
  { id: 3, video: videos[2] },
  { id: 4, video: videos[0] },
  { id: 5, video: videos[1] },
  { id: 6, video: videos[2] },
  { id: 7, video: videos[0] },
  { id: 8, video: videos[1] },
];

const cardsRow2 = [
  { id: 9, video: videos[2] },
  { id: 10, video: videos[0] },
  { id: 11, video: videos[1] },
  { id: 12, video: videos[2] },
  { id: 13, video: videos[0] },
  { id: 14, video: videos[1] },
  { id: 15, video: videos[2] },
  { id: 16, video: videos[0] },
];

const VideoCard = ({ video }: { video: string }) => (
  <div className="relative w-32 md:w-40 lg:w-48 h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden shrink-0 shadow-lg group cursor-pointer">
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className="w-full h-full object-cover"
    >
      <source src={video} type="video/mp4" />
    </video>
    {/* Interactive overlay */}
    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300 flex items-center justify-center">
      <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Play className="w-5 h-5 text-primary fill-primary" />
      </div>
    </div>
  </div>
);

const HeroFloatingCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Increased parallax intensity - Row 1 moves right as user scrolls
  const x1 = useTransform(scrollYProgress, [0, 1], [-100, 400]);
  // Increased parallax intensity - Row 2 moves left as user scrolls
  const x2 = useTransform(scrollYProgress, [0, 1], [100, -400]);

  return (
    <section ref={containerRef} className="py-16 overflow-hidden bg-background">
      <div className="flex flex-col gap-6 py-4">
        {/* First row - moves right on scroll */}
        <div className="relative px-8">
          {/* Separate gradient for row 1 */}
          <div 
            className="absolute -left-8 top-0 bottom-0 w-56 md:w-64 z-10 pointer-events-none" 
            style={{ background: "linear-gradient(to right, #FF8800 0%, rgba(255, 136, 0, 0.8) 50%, transparent 100%)" }} 
          />
          <div 
            className="absolute -right-8 top-0 bottom-0 w-56 md:w-64 z-10 pointer-events-none" 
            style={{ background: "linear-gradient(to left, #FF8800 0%, rgba(255, 136, 0, 0.8) 50%, transparent 100%)" }} 
          />
          <motion.div
            className="flex gap-4 px-12"
            style={{ x: x1 }}
          >
            {cardsRow1.map((card, index) => (
              <VideoCard key={`row1-${card.id}-${index}`} video={card.video} />
            ))}
          </motion.div>
        </div>
        
        {/* Second row - moves left on scroll */}
        <div className="relative px-8">
          {/* Separate gradient for row 2 */}
          <div 
            className="absolute -left-8 top-0 bottom-0 w-56 md:w-64 z-10 pointer-events-none" 
            style={{ background: "linear-gradient(to right, #FF8800 0%, rgba(255, 136, 0, 0.8) 50%, transparent 100%)" }} 
          />
          <div 
            className="absolute -right-8 top-0 bottom-0 w-56 md:w-64 z-10 pointer-events-none" 
            style={{ background: "linear-gradient(to left, #FF8800 0%, rgba(255, 136, 0, 0.8) 50%, transparent 100%)" }} 
          />
          <motion.div
            className="flex gap-4 px-12 -ml-20"
            style={{ x: x2 }}
          >
            {cardsRow2.map((card, index) => (
              <VideoCard key={`row2-${card.id}-${index}`} video={card.video} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroFloatingCards;
