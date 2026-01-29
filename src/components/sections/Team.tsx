import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Twitter, Linkedin } from "lucide-react";
import ammarPhoto from "@/assets/ammar-montaser.jpeg";

const teamMembers = [
  {
    name: "Ammar Montaser",
    role: "Co-Founder & CEO",
    bio: "Visionary leader driving innovation and growth",
    initials: "AM",
    image: ammarPhoto,
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Alex Chen",
    role: "Founder & Creative Director",
    bio: "10+ years turning brands into cultural phenomena",
    initials: "AC",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Sarah Kim",
    role: "Head of Strategy",
    bio: "Ex-Google, master of viral campaigns",
    initials: "SK",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Marcus Rivera",
    role: "Lead Content Creator",
    bio: "Meme lord with 50M+ organic impressions",
    initials: "MR",
    social: { twitter: "#", linkedin: "#" },
  },
];

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
  image?: string;
  social: { twitter: string; linkedin: string };
}

const TeamCard = ({ member, isInView, index }: { member: TeamMember; isInView: boolean; index: number }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      className="group relative h-80 md:h-96 rounded-2xl overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15, 
        delay: index * 0.15 
      }}
      whileHover={{ y: -10 }}
      onClick={() => setIsActive(!isActive)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {/* Background image */}
      {member.image ? (
        <img 
          src={member.image} 
          alt={member.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <span className="text-6xl font-bold text-primary/40">
            {member.initials}
          </span>
        </div>
      )}

      {/* Gradient overlay - always visible but stronger on hover/tap */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-foreground via-foreground/60 to-transparent transition-opacity duration-300 ${
          isActive ? 'opacity-90' : 'opacity-40'
        }`}
      />

      {/* Content - visible on hover/tap */}
      <div 
        className={`absolute inset-0 flex flex-col justify-end p-6 transition-all duration-300 ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <h3 className="text-xl font-semibold text-background mb-1">
          {member.name}
        </h3>
        <p className="text-sm text-primary font-medium mb-2">
          {member.role}
        </p>
        <p className="text-sm text-background/80 mb-4">
          {member.bio}
        </p>

        {/* Social links */}
        <div className="flex gap-3">
          <motion.a
            href={member.social.twitter}
            className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all"
            whileHover={{ scale: 1.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Twitter className="w-3.5 h-3.5" />
          </motion.a>
          <motion.a
            href={member.social.linkedin}
            className="w-8 h-8 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all"
            whileHover={{ scale: 1.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Linkedin className="w-3.5 h-3.5" />
          </motion.a>
        </div>
      </div>

      {/* Name badge - always visible at bottom when not active */}
      <div 
        className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 ${
          isActive ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2">
          <h3 className="text-sm font-semibold text-foreground">
            {member.name}
          </h3>
          <p className="text-xs text-primary">
            {member.role}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-background overflow-hidden">
      {/* Background accents */}
      <motion.div
        className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/10"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            Meet The Team
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <motion.span 
              className="text-foreground inline-block"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              The Minds Behind{" "}
            </motion.span>
            <motion.span 
              className="text-primary inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              The Magic
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A collective of culture obsessives, meme connoisseurs, and marketing 
            strategists who live and breathe the internet.
          </motion.p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={member.name} 
              member={member} 
              isInView={isInView} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
