import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import videoCard1 from "@/assets/video-card-1.mp4";
import videoCard2 from "@/assets/video-card-2.mp4";
import videoCard3 from "@/assets/video-card-3.mp4";
import videoCard4 from "@/assets/video-card-4.mp4";
import videoCard5 from "@/assets/video-card-5.mp4";
import videoCard6 from "@/assets/video-card-6.mp4";

const videos = [videoCard1, videoCard2, videoCard3, videoCard4, videoCard5, videoCard6];

const cardsRow1 = [
  { id: 1, video: videos[0] },
  { id: 2, video: videos[1] },
  { id: 3, video: videos[2] },
  { id: 4, video: videos[3] },
  { id: 5, video: videos[4] },
  { id: 6, video: videos[5] },
  { id: 7, video: videos[0] },
  { id: 8, video: videos[1] },
];

const cardsRow2 = [
  { id: 9, video: videos[2] },
  { id: 10, video: videos[3] },
  { id: 11, video: videos[4] },
  { id: 12, video: videos[5] },
  { id: 13, video: videos[0] },
  { id: 14, video: videos[1] },
  { id: 15, video: videos[2] },
  { id: 16, video: videos[3] },
];

const VideoCard = ({ video }: { video: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current && isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div 
      className="relative w-32 md:w-40 lg:w-48 h-48 md:h-56 lg:h-64 rounded-xl overflow-hidden shrink-0 shadow-lg group cursor-pointer"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video 
        ref={videoRef}
        loop 
        muted 
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* Interactive overlay */}
      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-all duration-300 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity duration-300">
          {isPlaying ? (
            <Pause className="w-5 h-5 text-primary fill-primary" />
          ) : (
            <Play className="w-5 h-5 text-primary fill-primary" />
          )}
        </div>
      </div>
    </div>
  );
};

const HeroFloatingCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Stronger parallax intensity - Row 1 moves right as user scrolls
  const x1 = useTransform(scrollYProgress, [0, 1], [-200, 600]);
  // Stronger parallax intensity - Row 2 moves left as user scrolls
  const x2 = useTransform(scrollYProgress, [0, 1], [200, -600]);

  return (
    <section ref={containerRef} className="py-16 overflow-hidden bg-background">
      <div className="flex flex-col gap-6 py-4">
        {/* First row - moves right on scroll */}
        <div className="relative px-12">
          {/* Separate gradient for row 1 - bigger */}
          <div 
            className="absolute -left-12 top-0 bottom-0 w-64 md:w-80 z-10 pointer-events-none" 
            style={{ background: "linear-gradient(to right, #FF8800 0%, rgba(255, 136, 0, 0.9) 60%, transparent 100%)" }} 
          />
          <div 
            className="absolute -right-12 top-0 bottom-0 w-64 md:w-80 z-10 pointer-events-none" 
            style={{ background: "linear-gradient(to left, #FF8800 0%, rgba(255, 136, 0, 0.9) 60%, transparent 100%)" }} 
          />
          <motion.div
            className="flex gap-4 px-16"
            style={{ x: x1 }}
          >
            {cardsRow1.map((card, index) => (
              <VideoCard key={`row1-${card.id}-${index}`} video={card.video} />
            ))}
          </motion.div>
        </div>
        
        {/* Second row - moves left on scroll */}
        <div className="relative px-12">
          {/* Separate gradient for row 2 - bigger */}
          <div 
            className="absolute -left-12 top-0 bottom-0 w-64 md:w-80 z-10 pointer-events-none" 
            style={{ background: "linear-gradient(to right, #FF8800 0%, rgba(255, 136, 0, 0.9) 60%, transparent 100%)" }} 
          />
          <div 
            className="absolute -right-12 top-0 bottom-0 w-64 md:w-80 z-10 pointer-events-none" 
            style={{ background: "linear-gradient(to left, #FF8800 0%, rgba(255, 136, 0, 0.9) 60%, transparent 100%)" }} 
          />
          <motion.div
            className="flex gap-4 px-16 -ml-20"
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
