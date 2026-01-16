import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/images/service-1.jpg", alt: "Garden Cleanup After" },
    { src: "/images/service-2.jpg", alt: "Palm Maintenance" },
    { src: "/images/service-4.jpg", alt: "Tree Pruning" },
    { src: "/images/service-5.jpg", alt: "Large Tree Removal" },
    { src: "/images/service-6.jpg", alt: "Stump Grinding" },
    { src: "/images/service-7.jpg", alt: "Complex Climbing Job" },
    { src: "/images/service-3.jpg", alt: "Admire Tree Service Flyer" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground"
          >
            Our Work Gallery
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See the quality and precision we bring to every project.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-gray-100 shadow-sm hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(img.src)}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-transparent border-none p-0 shadow-none">
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center p-4">
               <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
