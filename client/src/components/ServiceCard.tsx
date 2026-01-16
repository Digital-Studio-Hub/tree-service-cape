import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  delay?: number;
}

export function ServiceCard({ title, description, image, features, delay = 0 }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-border/50 transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative h-48 sm:h-64 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary uppercase tracking-wider shadow-sm">
          Service
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((feature, i) => (
            <li key={i} className="flex items-center text-sm text-foreground/80">
              <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Link 
          href="/contact"
          className="inline-flex items-center justify-center w-full px-4 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-primary hover:text-white transition-all group-hover:shadow-md"
        >
          Get Quote
          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
