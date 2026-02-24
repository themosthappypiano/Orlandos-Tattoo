import { useState } from "react";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/Button";
import { useGallery } from "@/hooks/use-gallery";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "All Work" },
  { id: "tattoos", label: "Tattoos" },
  { id: "piercings", label: "Piercings" },
  { id: "large-pieces", label: "Large Pieces" },
  { id: "script", label: "Script" },
];

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const { data: images, isLoading } = useGallery();

  const filteredImages = images?.filter(img => filter === "all" || img.category === filter) || [];

  return (
    <PageTransition>
      <div className="pt-32 pb-0 min-h-screen bg-black flex flex-col">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
          <header className="mb-16 text-center">
            <h1 className="font-gothic text-6xl md:text-8xl text-white mb-10">OUR WORK.</h1>
            
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={cn(
                    "font-condensed uppercase tracking-widest text-sm px-6 py-2 border transition-all duration-300",
                    filter === cat.id 
                      ? "bg-white text-black border-white" 
                      : "bg-transparent text-white/60 border-white/20 hover:border-white hover:text-white"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </header>

          {/* Grid */}
          {isLoading ? (
            <div className="flex-1 flex items-center justify-center">
              <Loader2 className="w-12 h-12 text-white animate-spin" />
            </div>
          ) : (
            <motion.div 
              layout 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-24"
            >
              <AnimatePresence>
                {filteredImages.map((img) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    key={img.id}
                    className="relative aspect-square group overflow-hidden bg-[#111]"
                  >
                    <img 
                      src={img.url} 
                      alt={img.description || "Gallery Image"} 
                      className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                      <p className="font-sans text-white text-lg font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {img.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        {/* Bottom CTA Banner */}
        <section className="bg-white py-16 text-center mt-auto">
          <div className="container mx-auto px-4">
            <h2 className="font-gothic text-4xl md:text-5xl text-black mb-8">
              See something you like? Let's build yours.
            </h2>
            <Button asChild className="bg-black text-white hover:bg-black/80 border-black hover:text-white">
              <a href="#messenger">Book Your Session</a>
            </Button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
