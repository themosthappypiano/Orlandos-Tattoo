import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { SlideTabs } from "@/components/ui/slide-tabs";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Artists", href: "/artists" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location, setLocation] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Get current tab index based on location
  const currentTabIndex = LINKS.findIndex(link => link.href === location);
  const selectedIndex = currentTabIndex >= 0 ? currentTabIndex : 0;

  // Handle tab navigation
  const handleTabSelect = (index: number) => {
    const targetHref = LINKS[index]?.href;
    if (targetHref) {
      setLocation(targetHref);
    }
  };

  // Prepare tabs data for SlideTabs
  const tabsData = LINKS.map((link, index) => ({
    label: link.label,
    href: link.href,
    onClick: () => handleTabSelect(index)
  }));

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo on the left */}
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <img 
                src="https://i.ibb.co/7tKc8nfg/Chat-GPT-Image-Feb-24-2026-01-45-43-PM.png" 
                alt="Orlando's Tattoo Studio" 
                className="h-36 md:h-44 lg:h-52 w-auto"
              />
            </Link>

            {/* Desktop Nav on the right */}
            <div className="hidden md:flex items-center gap-6">
              <SlideTabs 
                tabs={tabsData}
                selectedIndex={selectedIndex}
                onTabSelect={handleTabSelect}
                className="scale-75"
              />
              <Button asChild variant="outline" size="sm" className="ml-4 text-xs">
                <a href="#messenger">Book a Session</a>
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-white flex flex-col"
          >
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-black/10">
              <img 
                src="https://i.ibb.co/7tKc8nfg/Chat-GPT-Image-Feb-24-2026-01-45-43-PM.png" 
                alt="Orlando's Tattoo Studio" 
                className="h-32 w-auto"
              />
              <button
                className="text-black p-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-condensed uppercase text-3xl tracking-widest transition-colors",
                    location === link.href ? "text-black" : "text-black/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild size="lg" className="mt-8">
                <Link href="/book">Book a Session</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
