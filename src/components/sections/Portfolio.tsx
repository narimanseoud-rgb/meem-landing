import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    brand: "Hype",
    description:
      "Ongoing creative work across reels, social content, graphic design, and digital assets for a bold social networking app targeting younger audiences.",
    category: "Content & Social",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    brand: "Hype Website Work",
    description:
      "Website and digital execution designed to support Hype’s positioning, user experience, and overall brand presence online.",
    category: "Web Experience",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 3,
    brand: "Brand One-Offs",
    description:
      "Selected one-off creative and digital projects developed for brands outside Meem’s current client roster.",
    category: "Selected Work",
    color: "from-yellow-500/20 to-orange-500/20",
  },
];

const Portfolio = () => {
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
            <span className="text-primary-foreground">Selected Work </span>
            <span className="text-primary">In Progress</span>
          </motion.h2>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We’re building this section with real work, not filler. For now, this is a snapshot of the projects Meem is actively shaping, with more case studies and links to be added.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} bg-card`} />

              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,136,0,0.1)_0%,transparent_50%)]" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

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
                    {project.brand}
                  </h3>

                  <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {project.description}
                  </p>
                </motion.div>

                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-sm text-muted-foreground text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Once you share the URLs, I’ll turn these into proper linked case studies with real visuals, reels, and websites.
        </motion.p>
      </div>
    </section>
  );
};

export default Portfolio;
