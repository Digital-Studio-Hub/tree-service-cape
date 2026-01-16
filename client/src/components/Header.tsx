import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const Logo = ({ className }: { className?: string }) => (
    <Link href="/" className={cn("flex items-center gap-3 group", className)}>
      <img 
        src="/images/logo-main.png" 
        alt="Admire Tree Service" 
        className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          // Fallback if image fails to load during dev
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerText = 'Admire Tree Service';
        }}
      />
    </Link>
  );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-border/40 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative py-1",
                location === link.href 
                  ? "text-primary font-semibold" 
                  : isScrolled ? "text-foreground" : "text-foreground" // Kept foreground for readability on hero
              )}
            >
              {link.name}
              {location === link.href && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary"
                />
              )}
            </Link>
          ))}
          <Button 
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all rounded-full px-6"
            onClick={() => window.location.href = "tel:0672903024"}
          >
            <Phone className="w-4 h-4 mr-2" />
            067 290 3024
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-50 flex flex-col p-6 md:hidden"
          >
            <div className="flex items-center justify-between mb-8">
              <Logo />
              <button
                className="p-2 text-foreground/60 hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-2xl font-display font-medium transition-colors hover:text-primary",
                    location === link.href ? "text-primary" : "text-foreground"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button 
                size="lg" 
                className="mt-4 bg-primary hover:bg-primary/90 w-full rounded-full text-lg"
                onClick={() => {
                  window.location.href = "tel:0672903024";
                  setIsMobileMenuOpen(false);
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
