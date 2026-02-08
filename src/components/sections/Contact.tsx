import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Send, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import ammarPhoto from "@/assets/ammar-montaser.jpeg";
import narimanPhoto from "@/assets/nariman-seoud.jpeg";

type UserType = "brand" | "creator" | "";

const industries = [
  "E-commerce",
  "Technology",
  "Fashion & Beauty",
  "Food & Beverage",
  "Entertainment",
  "Health & Wellness",
  "Real Estate",
  "Other",
];

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone number must be less than 20 characters").optional(),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  industry: z.string().optional(),
  portfolio: z.string().trim().max(500, "Portfolio link must be less than 500 characters").optional(),
  specialty: z.string().trim().max(200, "Specialty must be less than 200 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message must be less than 2000 characters"),
});

type FormData = z.infer<typeof formSchema>;

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgweybb";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [userType, setUserType] = useState<UserType>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          userType,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset();
        toast({
          title: "Message sent!",
          description: "We'll get back to you within 24 hours.",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly at support@meemmedia.io",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section ref={ref} className="relative py-32 bg-secondary overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Message Sent Successfully!
            </h2>
            <p className="text-lg text-background mb-8">
              Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
            </p>
            <Button
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

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
              <span className="text-primary-foreground">Let's Build </span>
              <span className="text-primary">Something Viral</span>
            </motion.h2>

            <motion.p
              className="text-lg text-background mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ready to break through the noise? Whether you're a brand looking for viral campaigns
              or a creator wanting to join our community, we'd love to hear from you.
              We typically respond within 24 hours.
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex -space-x-2">
                <img
                  src={narimanPhoto}
                  alt="Nariman Seoud"
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
                <img
                  src={ammarPhoto}
                  alt="Ammar Montaser"
                  className="w-10 h-10 rounded-full border-2 border-background object-cover"
                />
              </div>
              <span className="text-sm text-background">
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-3">
                <label className="text-sm font-medium text-foreground">
                  I am a...
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setUserType("brand")}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      userType === "brand"
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-background text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <div className="font-semibold mb-1">Business</div>
                    <div className="text-xs opacity-70">Looking for marketing services</div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setUserType("creator")}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      userType === "creator"
                        ? "border-primary bg-primary/10 text-foreground"
                        : "border-border bg-background text-muted-foreground hover:border-primary/50"
                    }`}
                  >
                    <div className="font-semibold mb-1">Creator</div>
                    <div className="text-xs opacity-70">Looking to join the team</div>
                  </button>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div
                  className="space-y-2"
                  animate={focused === "name" ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input
                    {...register("name")}
                    placeholder="Your name"
                    className="bg-background border-border focus:border-primary transition-colors"
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                  {errors.name && (
                    <p className="text-xs text-destructive">{errors.name.message}</p>
                  )}
                </motion.div>

                <motion.div
                  className="space-y-2"
                  animate={focused === "email" ? { scale: 1.02 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background border-border focus:border-primary transition-colors"
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                  />
                  {errors.email && (
                    <p className="text-xs text-destructive">{errors.email.message}</p>
                  )}
                </motion.div>
              </div>

              <motion.div
                className="space-y-2"
                animate={focused === "phone" ? { scale: 1.02 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <label className="text-sm font-medium text-foreground">Phone Number <span className="text-muted-foreground">(optional)</span></label>
                <Input
                  {...register("phone")}
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="bg-background border-border focus:border-primary transition-colors"
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                />
              </motion.div>

              {/* Conditional fields based on user type */}
              {userType === "brand" && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="space-y-2"
                    animate={focused === "company" ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="text-sm font-medium text-foreground">Company</label>
                    <Input
                      {...register("company")}
                      placeholder="Your company name"
                      className="bg-background border-border focus:border-primary transition-colors"
                      onFocus={() => setFocused("company")}
                      onBlur={() => setFocused(null)}
                    />
                  </motion.div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Industry</label>
                    <div className="grid grid-cols-2 gap-2">
                      {industries.map((industry) => (
                        <label
                          key={industry}
                          className="flex items-center gap-2 p-2 rounded-lg border border-border bg-background hover:border-primary/50 cursor-pointer transition-colors"
                        >
                          <input
                            {...register("industry")}
                            type="radio"
                            value={industry}
                            className="accent-primary"
                          />
                          <span className="text-sm text-foreground">{industry}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {userType === "creator" && (
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="space-y-2"
                    animate={focused === "portfolio" ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="text-sm font-medium text-foreground">
                      Portfolio / Social Link
                    </label>
                    <Input
                      {...register("portfolio")}
                      placeholder="Link to your work or social profile"
                      className="bg-background border-border focus:border-primary transition-colors"
                      onFocus={() => setFocused("portfolio")}
                      onBlur={() => setFocused(null)}
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    animate={focused === "specialty" ? { scale: 1.02 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <label className="text-sm font-medium text-foreground">
                      Content Specialty
                    </label>
                    <Input
                      {...register("specialty")}
                      placeholder="e.g., Video, Photography, Memes, etc."
                      className="bg-background border-border focus:border-primary transition-colors"
                      onFocus={() => setFocused("specialty")}
                      onBlur={() => setFocused(null)}
                    />
                  </motion.div>
                </motion.div>
              )}

              <motion.div
                className="space-y-2"
                animate={focused === "message" ? { scale: 1.02 } : { scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <label className="text-sm font-medium text-foreground">Message</label>
                <Textarea
                  {...register("message")}
                  placeholder={
                    userType === "creator"
                      ? "Tell us about yourself and why you want to join..."
                      : "Tell us about your project..."
                  }
                  rows={4}
                  className="bg-background border-border focus:border-primary transition-colors resize-none"
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
                {errors.message && (
                  <p className="text-xs text-destructive">{errors.message.message}</p>
                )}
              </motion.div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full group bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    {userType === "creator" ? "Apply Now" : "Start Your Campaign"}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
