import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ServiceCard } from "@/components/ServiceCard";

export default function Services() {
  const allServices = [
    {
      title: "Tree Felling",
      description: "Professional removal of trees that are dead, dangerous, or unwanted. We use specialized rigging techniques to ensure safety for surrounding structures.",
      image: "/images/service-5.jpg",
      features: ["Precision Felling", "Sectional Dismantling", "Hazardous Tree Removal", "Site Clearance"]
    },
    {
      title: "Tree Trimming & Pruning",
      description: "Enhance the health and appearance of your trees. Regular pruning improves structure, allows more light, and prevents potential damage from falling branches.",
      image: "/images/service-4.jpg",
      features: ["Crown Reduction", "Crown Thinning", "Deadwooding", "Directional Pruning"]
    },
    {
      title: "Stump Removal",
      description: "Don't let ugly stumps ruin your landscape. Our grinding machinery removes stumps below ground level, allowing you to replant or pave over the area.",
      image: "/images/service-6.jpg",
      features: ["Stump Grinding", "Root Removal", "Backfilling", "No Damage to Surroundings"]
    },
    {
      title: "Palm Tree Maintenance",
      description: "Specialized care for all palm species. We handle cleaning, seed pod removal, and shaving to keep your palms looking pristine and safe.",
      image: "/images/service-2.jpg",
      features: ["Frond Removal", "Seed Pod Clearing", "Trunk Shaving", "Disease Management"]
    },
    {
      title: "Yard & Tree Cleanup",
      description: "Comprehensive garden cleanup services. We clear overgrown vegetation, remove green waste, and restore order to your outdoor space.",
      image: "/images/service-1.jpg",
      features: ["Green Waste Removal", "Overgrowth Clearing", "Site Restoration", "Storm Damage Cleanup"]
    },
    {
      title: "Emergency Services",
      description: "24/7 assistance for storm-damaged or dangerous trees that pose an immediate threat to your property or safety.",
      image: "/images/service-7.jpg",
      features: ["24/7 Availability", "Storm Response", "Immediate Risk Mitigation", "Insurance Assistance"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        <div className="container px-4 md:px-6 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground"
          >
            Our Services
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive tree care solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((service, i) => (
              <ServiceCard key={i} {...service} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#1a2e1a] text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">How It Works</h2>
            <p className="text-white/70">Simple, transparent, and efficient service delivery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Contact Us", desc: "Fill out the form or give us a call/WhatsApp." },
              { step: "02", title: "Free Quote", desc: "We assess the job and provide a transparent quote." },
              { step: "03", title: "Job Execution", desc: "Our team arrives on time and completes the work safely." },
              { step: "04", title: "Site Cleanup", desc: "We remove all debris and leave your property tidy." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative p-6 border border-white/10 rounded-2xl bg-white/5"
              >
                <span className="text-6xl font-display font-bold text-white/5 absolute top-4 right-4">{item.step}</span>
                <h3 className="text-xl font-bold text-primary mb-3 relative z-10">{item.title}</h3>
                <p className="text-white/70 relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
