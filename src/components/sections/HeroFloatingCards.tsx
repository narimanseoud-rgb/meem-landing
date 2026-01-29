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

const cardsRow = [
  { id: 1, video: videos[0] },
  { id: 2, video: videos[1] },
  { id: 3, video: videos[2] },
  { id: 4, video: videos[3] },
  { id: 5, video: videos[4] },
  { id: 6, video: videos[5] },
  { id: 7, video: videos[0] },
  { id: 8, video: videos[1] },
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
      className="relative w-48 md:w-64 lg:w-80 h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden shrink-0 shadow-lg group cursor-pointer"
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
        <div className="w-14 h-14 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity duration-300">
          {isPlaying ? (
            <Pause className="w-6 h-6 text-primary fill-primary" />
          ) : (
            <Play className="w-6 h-6 text-primary fill-primary" />
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

  // Parallax - Row moves right as user scrolls
  const x = useTransform(scrollYProgress, [0, 1], [-300, 500]);

  return (
    <section ref={containerRef} className="py-16 overflow-hidden bg-background">
      <div className="py-4">
        {/* Single row - moves right on scroll */}
        <div className="relative px-12">
          {/* Black to transparent gradients */}
          <div 
            className="absolute -left-12 top-0 bottom-0 w-64 md:w-80 z-10 pointer-events-none" 
            style={{ background: "linear-gradient(to right, hsl(var(--background)) 0%, hsl(var(--background) / 0.9) 50%, transparent 100%)" }} 
          />
          <div 
            className="absolute -right-12 top-0 bottom-0 w-64 md:w-80 z-10 pointer-events-none" 
            style={{ background: "linear-gradient(to left, hsl(var(--background)) 0%, hsl(var(--background) / 0.9) 50%, transparent 100%)" }} 
          />
          <motion.div
            className="flex gap-6 px-16"
            style={{ x }}
          >
            {cardsRow.map((card, index) => (
              <VideoCard key={`row-${card.id}-${index}`} video={card.video} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroFloatingCards;
