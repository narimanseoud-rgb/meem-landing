import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
];

const cardsRow2 = [
  { id: 7, video: videos[2] },
  { id: 8, video: videos[0] },
  { id: 9, video: videos[1] },
  { id: 10, video: videos[2] },
  { id: 11, video: videos[0] },
  { id: 12, video: videos[1] },
];

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
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Column 1 moves down as user scrolls
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  // Column 2 moves up as user scrolls
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <section ref={containerRef} className="py-16 overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="flex justify-center gap-4 md:gap-6 lg:gap-8">
          {/* First column - moves down on scroll */}
          <motion.div
            className="flex flex-col gap-4"
            style={{ y: y1 }}
          >
            {cardsRow1.map((card, index) => (
              <VideoCard key={`row1-${card.id}-${index}`} video={card.video} />
            ))}
          </motion.div>
          
          {/* Second column - moves up on scroll */}
          <motion.div
            className="flex flex-col gap-4 mt-12"
            style={{ y: y2 }}
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
