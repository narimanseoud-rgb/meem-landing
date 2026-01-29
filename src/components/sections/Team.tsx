import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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
  {
    name: "Jordan Taylor",
    role: "Social Media Director",
    bio: "Built communities of 1M+ engaged followers",
    initials: "JT",
    social: { twitter: "#", linkedin: "#" },
  },
];

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

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
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              className="group relative p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden"
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Avatar */}
              <motion.div 
                className="relative w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300 overflow-hidden"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {'image' in member && member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-2xl font-bold text-primary">
                    {member.initials}
                  </span>
                )}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/60 transition-colors" />
              </motion.div>

              {/* Info */}
              <div className="relative text-center">
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  {member.bio}
                </p>

                {/* Social links */}
                <div className="flex justify-center gap-3">
                  <motion.a
                    href={member.social.twitter}
                    className="w-8 h-8 rounded-full bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    whileHover={{ scale: 1.2, y: -2 }}
                  >
                    <Twitter className="w-3.5 h-3.5" />
                  </motion.a>
                  <motion.a
                    href={member.social.linkedin}
                    className="w-8 h-8 rounded-full bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                    whileHover={{ scale: 1.2, y: -2 }}
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;