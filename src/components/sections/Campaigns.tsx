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
    image: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/meem%20landing%20page%2FWhatsApp%20Image%202026-04-18%20at%2015.35.29%20(2).jpeg?alt=media&token=63b5bc7b-c1d6-4905-bd5c-fa9da72ba1d3",
  },
  {
    id: 2,
    title: "Hype Partner Platform",
    description:
      "Partner-facing digital experience for Hype, supporting venue and business-side collaboration around the platform’s local ecosystem.",
    category: "Partner Platform",
    color: "from-green-500/20 to-emerald-500/20",
    href: "https://partners.hypeapp.me/",
    image: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/meem%20landing%20page%2FWhatsApp%20Image%202026-04-18%20at%2015.35.30.jpeg?alt=media&token=193afa76-8360-48d8-b962-95e7317dddb3",
  },
  {
    id: 3,
    title: "Maz Developments",
    description:
      "Real estate website work for a premium property brand in Jeddah, showing Meem’s ability to build clean, polished digital experiences beyond social content.",
    category: "Website",
    color: "from-yellow-500/20 to-orange-500/20",
    href: "https://mazsa9.com/",
    image: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/meem%20landing%20page%2FWhatsApp%20Image%202026-04-18%20at%2015.35.29.jpeg?alt=media&token=d0e51a7b-4d6b-4c78-a059-11150f64f23e",
  },
  {
    id: 4,
    title: "Hype Reels",
    description:
      "Live social content and reels created for Hype, showcasing Meem’s ability to produce platform-native content that drives engagement and brand awareness.",
    category: "Social Content",
    color: "from-pink-500/20 to-rose-500/20",
    href: "https://www.instagram.com/hype/",
    image: "https://firebasestorage.googleapis.com/v0/b/bump-pozhf5.firebasestorage.app/o/meem%20landing%20page%2FWhatsApp%20Image%202026-04-18%20at%2015.35.29%20(3).jpeg?alt=media&token=c2435cf9-dc25-4c02-bfa5-cb364c58b5f7",
  },
];

const Campaigns = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section ref={ref} className="relative py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/75 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <motion.div
                  className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-400"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-medium text-white bg-white/10 rounded-full border border-white/20">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-sm text-white opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-300 mt-3">
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
