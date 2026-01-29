import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import meemLogo from "@/assets/meem-logo.png";
import meemTextLogo from "@/assets/meem-text-logo.png";
import logoMGirl from "@/assets/logo-m-girl.png";

const navLinks = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)",
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group"
          >
            <motion.img 
              src={meemLogo} 
              alt="Meme Media Hub Logo" 
              className="h-10 w-auto"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <img 
              src={meemTextLogo} 
              alt="Meme Media Hub" 
              className="h-6 w-auto hidden sm:block"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-primary transition-colors relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.4 }}
          >
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Full Screen Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            style={{ backgroundColor: "#FF8800" }}
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Navigation Links */}
            <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="text-3xl font-bold text-foreground hover:text-background transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="mt-4 bg-foreground text-primary hover:bg-foreground/90 px-10 py-6 text-lg font-bold"
                >
                  <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                  </a>
                </Button>
              </motion.div>
            </nav>

            {/* M Logo at the bottom */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 flex justify-center overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 0.2, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <img
                src={logoMGirl}
                alt=""
                className="w-[80%] h-auto object-contain translate-y-1/4"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
