import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Send } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section ref={ref} className="relative py-32 bg-secondary overflow-hidden">
      {/* Background accents */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.span
              className="inline-block px-4 py-2 mb-6 text-sm font-medium text-primary border border-primary/30 rounded-full bg-primary/10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Get In Touch
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-foreground">Let's Build </span>
              <span className="text-primary">Something Viral</span>
            </motion.h2>

            <motion.p
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to break through the noise? Tell us about your brand and 
              let's create something that moves culture together. We typically 
              respond within 24 hours.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-medium text-primary"
                  >
                    {["JD", "SK", "MR"][i - 1]}
                  </div>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Our team is ready to help
              </span>
            </motion.div>
          </div>

          {/* Right content - Form */}
          <motion.div
            className="bg-card rounded-2xl p-8 border border-border/50 shadow-xl"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  className="space-y-2"
                  animate={focused === "name" ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    placeholder="Your name"
                    className="bg-background border-border focus:border-primary transition-colors"
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                </motion.div>

                <motion.div
                  className="space-y-2"
                  animate={focused === "email" ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background border-border focus:border-primary transition-colors"
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                </motion.div>
              </div>

              <motion.div
                className="space-y-2"
                animate={focused === "company" ? { scale: 1.02 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <label className="text-sm font-medium text-foreground">
                  Company
                </label>
                <Input
                  placeholder="Your company name"
                  className="bg-background border-border focus:border-primary transition-colors"
                  onFocus={() => setFocused("company")}
                  onBlur={() => setFocused(null)}
                />
              </motion.div>

              <motion.div
                className="space-y-2"
                animate={focused === "message" ? { scale: 1.02 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  className="bg-background border-border focus:border-primary transition-colors resize-none"
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </motion.div>

              <Button
                type="submit"
                size="lg"
                className="w-full group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                <Send className="w-4 h-4 mr-2" />
                Start Your Campaign
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;