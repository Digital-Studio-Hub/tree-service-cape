import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const values = [
    "Safety First - Strict adherence to safety protocols",
    "Professional Excellence - Qualified and experienced team",
    "Customer Satisfaction - We don't leave until you're happy",
    "Eco-Friendly - Responsible waste management",
    "Reliability - We show up on time, every time",
    "Local Expertise - Deep knowledge of Cape Town flora"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-secondary/30">
        <div className="container px-4 md:px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6 text-foreground"
          >
            About Admire Tree Service
          </motion.h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner for professional tree care and garden maintenance in Cape Town.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-primary">
                Passionate About Trees, Committed to Quality
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  At Admire Tree Service, we believe that proper tree care is essential not just for the aesthetics of your property, but for the safety and health of your environment. Based in Cape Town, we understand the unique challenges posed by our local climate and diverse tree species.
                </p>
                <p>
                  Our team consists of highly trained professionals who bring years of experience to every job. Whether it's a delicate pruning task to preserve a heritage tree or the safe removal of a dangerous stump, we approach every project with the same level of dedication and precision.
                </p>
                <p>
                  We take pride in our "clean site guarantee" – ensuring that once our work is done, your property is left spotless, with all green waste responsibly removed and recycled where possible.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/service-7.jpg" // Climbing/Action shot
                  alt="Our Team in Action" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-border">
                <p className="font-display text-4xl font-bold text-primary mb-2">10+</p>
                <p className="text-muted-foreground font-medium">Years of dedicated service in the Western Cape region</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#1a2e1a] text-white">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Choose Us?</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We strive for excellence in every cut, ensuring safety and satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors flex items-start gap-4"
              >
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <p className="font-medium text-lg">{value}</p>
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
