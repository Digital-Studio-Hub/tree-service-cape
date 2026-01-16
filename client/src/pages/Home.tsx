import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronRight, Star, TreePine, Shield, Clock, ThumbsUp } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ContactForm } from "@/components/ContactForm";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  const services = [
    {
      title: "Tree Felling",
      description: "Safe and professional removal of unwanted or dangerous trees, regardless of size or location.",
      image: "/images/service-5.jpg", // Tree felling/climbing
      features: ["Certified Arborists", "Safety First Approach", "Complete Removal"]
    },
    {
      title: "Trimming & Pruning",
      description: "Expert pruning to promote healthy growth, improve structure, and enhance the beauty of your trees.",
      image: "/images/service-4.jpg", // Palm tree (often pruned)
      features: ["Health Assessment", "Structural Pruning", "Deadwood Removal"]
    },
    {
      title: "Stump Removal",
      description: "Complete removal of unsightly tree stumps to reclaim your garden space and prevent pests.",
      image: "/images/service-6.jpg", // Machinery/stump removal
      features: ["Specialized Machinery", "Deep Grinding", "Site Cleanup"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/service-1.jpg" // Main hero image
            alt="Cape Town Tree Service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/90 text-white text-sm font-semibold mb-6 backdrop-blur-sm border border-white/20">
              Your Local Cape Town Experts
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-shadow-lg">
              Expert Tree Care <br className="hidden md:block" />
              <span className="text-primary-foreground italic">You Can Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              Professional tree felling, maintenance, and garden cleanup services across Cape Town. 
              Safe, efficient, and reliable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-primary hover:bg-primary/90 border-0 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Quote
              </Button>
              <Link href="/services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto text-lg h-14 px-8 rounded-full bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-primary transition-all"
                >
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Fully Insured", desc: "Complete peace of mind with our comprehensive liability coverage." },
              { icon: Clock, title: "Fast Response", desc: "Quick turnaround times and emergency services when you need them." },
              { icon: ThumbsUp, title: "Expert Team", desc: "Highly trained professionals with years of local experience." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 text-foreground">
                Comprehensive Tree Services
              </h2>
            </div>
            <Link href="/services">
              <Button variant="ghost" className="group text-primary hover:text-primary/80 hover:bg-primary/5">
                View All Services <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section id="contact" className="py-24 bg-[#1a2e1a] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 transform origin-top pointer-events-none" />
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to transform your landscape?
              </h2>
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Contact us today for a free consultation. Our team is ready to assist with all your tree care needs in Cape Town.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Top Rated Service</h4>
                    <p className="text-white/70 text-sm">Hundreds of satisfied customers across Cape Town</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <TreePine className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Sustainable Practices</h4>
                    <p className="text-white/70 text-sm">Eco-friendly disposal and recycling of green waste</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
