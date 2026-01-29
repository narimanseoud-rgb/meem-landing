import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import videoCard1 from "@/assets/video-card-1.mp4";
import videoCard2 from "@/assets/video-card-2.mp4";
import videoCard3 from "@/assets/video-card-3.mp4";
import videoCard4 from "@/assets/video-card-4.mp4";
import videoCard5 from "@/assets/video-card-5.mp4";
import videoCard6 from "@/assets/video-card-6.mp4";

const videos = [videoCard1, videoCard2, videoCard3, videoCard4, videoCard5, videoCard6];

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
      className="relative w-64 md:w-80 lg:w-96 h-80 md:h-96 lg:h-[28rem] rounded-xl overflow-hidden shrink-0 shadow-lg group cursor-pointer"
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = useCallback(() => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      return () => container.removeEventListener("scroll", checkScrollButtons);
    }
  }, [checkScrollButtons]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-16 overflow-hidden bg-background">
      {/* Header */}
      <div ref={headerRef} className="text-center mb-12 px-6">
        <motion.span 
          className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/10" 
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
        >
          Our Work
        </motion.span>

        <motion.h2 
          className="text-5xl md:text-5xl lg:text-6xl font-bold mb-6" 
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="text-primary-foreground">Campaigns That </span>
          <span className="text-primary">Broke Through</span>
        </motion.h2>

        <motion.p 
          className="text-lg text-muted-foreground max-w-2xl mx-auto" 
          initial={{ opacity: 0, y: 20 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A selection of our most impactful work. Each project represents 
          a unique challenge solved with creativity and cultural intelligence.
        </motion.p>
      </div>

      <div className="relative">
        {/* White to transparent gradients */}
        <div 
          className="absolute left-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none" 
          style={{ background: "linear-gradient(to right, hsl(var(--background)) 0%, transparent 100%)" }} 
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-32 md:w-48 z-10 pointer-events-none" 
          style={{ background: "linear-gradient(to left, hsl(var(--background)) 0%, transparent 100%)" }} 
        />

        {/* Left Arrow */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/90 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-lg disabled:opacity-50 transition-colors"
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Right Arrow */}
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-background/90 backdrop-blur-sm border-border hover:bg-primary hover:text-primary-foreground hover:border-primary shadow-lg disabled:opacity-50 transition-colors"
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Scrollable container - centered */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 px-16 md:px-24 overflow-x-auto scrollbar-hide justify-center"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {videos.map((video, index) => (
            <VideoCard key={`video-${index}`} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroFloatingCards;
