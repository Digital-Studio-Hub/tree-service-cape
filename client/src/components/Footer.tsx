import { Link } from "wouter";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2e1a] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <img 
              src="/images/logo-white.png" 
              alt="Admire Tree Service" 
              className="h-16 w-auto object-contain brightness-0 invert"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <h3 className="text-2xl font-display text-white hidden">Admire Tree Service</h3>
            <p className="text-white/70 leading-relaxed">
              Professional tree maintenance services in Cape Town. 
              Safe, efficient, and reliable tree felling and garden cleanup.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-primary hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Gallery', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-white/70 hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Cape Town, Western Cape<br/>South Africa</span>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:0672903024" className="hover:text-white transition-colors">067 290 3024</a>
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@admiretreeservice.co.za" className="hover:text-white transition-colors">info@admiretreeservice.co.za</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Badges */}
          <div className="flex flex-col items-start gap-6">
            <h4 className="text-lg font-semibold mb-2 text-primary">Verified Business</h4>
            <a 
              href="https://lekker.network/the-lekker-network-verified" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/50 transition-all"
            >
              <img 
                src="/images/badge.png" 
                alt="Verified Badge" 
                className="w-24 h-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform"
              />
              <span className="text-xs font-medium text-white/60 uppercase tracking-widest group-hover:text-primary transition-colors text-center">
                Lekker Network Verified
              </span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Grid */}
        <div className="border-t border-white/10 pt-8 mt-8 grid grid-cols-1 md:grid-cols-5 gap-8 items-center text-center md:text-left">
          
          {/* Left: Copyright */}
          <div className="md:col-span-2 text-sm text-white/50 order-2 md:order-1">
            © {currentYear} Admire Tree Service. All rights reserved.
          </div>

          {/* Center: Lekker Logo - Powered By */}
          <div className="md:col-span-1 flex flex-col items-center justify-center gap-2 order-1 md:order-2">
             <a 
              href="https://lekker.network/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <img 
                src="/images/lekker-logo.png" 
                alt="Lekker Network" 
                className="h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-[10px] uppercase tracking-wider text-white/40 group-hover:text-primary/80 transition-colors">
                Powered by Lekker Network
              </span>
            </a>
          </div>

          {/* Right: Legal Links */}
          <div className="md:col-span-2 flex flex-col md:flex-row justify-center md:justify-end gap-4 md:gap-8 text-sm text-white/50 order-3">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
