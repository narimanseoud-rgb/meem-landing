import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Twitter, Linkedin } from "lucide-react";
import ammarPhoto from "@/assets/ammar-montaser.jpeg";

const teamMembers = [
  {
    name: "Nariman Sarud",
    role: "Founder & CEO",
    bio: "Visionary leader driving innovation and growth",
    initials: "NS",
    image: "/nariman-sarud.png",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Ammar Montaser",
    role: "Technical Team Lead",
    bio: "Building the tech behind viral campaigns",
    initials: "AM",
    image: ammarPhoto,
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
          <span className="text-8xl font-bold text-primary/30">
            {member.initials}
          </span>
        </div>
      )}

      {/* Default gradient overlay - always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent opacity-80" />

      {/* Hover gradient overlay - stronger on hover/tap */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Default state - Name and role at bottom */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0 p-6"
        animate={{ 
          opacity: isActive ? 0 : 1,
          y: isActive ? 10 : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold text-background mb-1">
          {member.name}
        </h3>
        <p className="text-sm text-primary font-medium">
          {member.role}
        </p>
      </motion.div>

      {/* Hover/Active state - Full info */}
      <motion.div 
        className="absolute inset-0 flex flex-col justify-end p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: isActive ? 1 : 0,
          y: isActive ? 0 : 20
        }}
        transition={{ duration: 0.3 }}
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
      </motion.div>
    </motion.div>
  );
};

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-foreground overflow-hidden">

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
              className="text-background inline-block"
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
            className="text-lg text-background/70 max-w-2xl mx-auto"
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
