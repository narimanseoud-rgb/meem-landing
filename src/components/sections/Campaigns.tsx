import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Hype Landing Page",
    description:
      "Brand and product website for Hype, a social networking app built around hangouts, discovery, and real-world connection for young people in Cairo.",
    category: "Website",
    color: "from-blue-500/20 to-purple-500/20",
    href: "https://www.hypeapp.me/",
    image: "/hype-landing-bg.jpg",
  },
  {
    id: 2,
    title: "Hype Partner Platform",
    description:
      "Partner-facing digital experience for Hype, supporting venue and business-side collaboration around the platform’s local ecosystem.",
    category: "Partner Platform",
    color: "from-green-500/20 to-emerald-500/20",
    href: "https://partners.hypeapp.me/",
    image: null,
  },
  {
    id: 3,
    title: "Maz Developments",
    description:
      "Real estate website work for a premium property brand in Jeddah, showing Meem’s ability to build clean, polished digital experiences beyond social content.",
    category: "Website",
    color: "from-yellow-500/20 to-orange-500/20",
    href: "https://mazsa9.com/",
    image: null,
  },
  {
    id: 4,
    title: "Hype Reels & Social Content",
    description:
      "Live social content and reels created for Hype, showcasing Meem’s ability to produce platform-native content that drives engagement and brand awareness.",
    category: "Social Content",
    color: "from-pink-500/20 to-rose-500/20",
    href: "https://www.instagram.com/hype/",
    image: null,
  },
];

const Campaigns = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section ref={ref} className="relative py-32 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Selected Work
          </motion.span>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-primary-foreground">Campaigns & Work </span>
            <span className="text-primary">That Moved Brands</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real websites, real content, and real campaigns built for real brands. This section shows the work Meem Media actively shapes and supports.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer block"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )}

              {!project.image && (
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} bg-card`} />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.description}
                  </p>
                </motion.div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
