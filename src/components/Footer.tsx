import { Link } from "wouter";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-[2px]"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/">
              <span className="text-3xl font-black tracking-tighter text-white uppercase flex items-center mb-6">
                AQNITY<span className="text-primary ml-1">.</span>
              </span>
            </Link>
            <p className="text-white/60 max-w-sm text-sm leading-relaxed mb-8">
              An international-grade creative studio in Lahore, Pakistan. We combine razor-sharp graphic design with cinematic video editing to build unforgettable brands.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-secondary/20 hover:border-secondary/50 hover:text-secondary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-wide uppercase mb-6 text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-white transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/portfolio" className="text-white/60 hover:text-white transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold tracking-wide uppercase mb-6 text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>Lahore Wapda Town<br />Lahore, Pakistan</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Phone size={18} className="text-primary shrink-0" />
                <span>03001804650</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm">
                <Mail size={18} className="text-primary shrink-0" />
                <span>aliorganito@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Aqnity Market. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-xs transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
