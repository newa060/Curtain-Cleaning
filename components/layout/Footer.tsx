import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary text-white pt-16 pb-12 border-t border-primary-container">
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-[20px]">curtains</span>
              </div>
              <span className="font-headline text-2xl font-bold tracking-tight text-white">
                Curtain Cleaning Brisbane
              </span>
            </div>
            <p className="font-body text-sm text-white/80 leading-relaxed max-w-sm">
              Brisbane’s trusted specialist in gentle, in-situ curtain steam cleaning and ultrasonic sanitisation. Safe for delicate sheers, silk, and linen right on your tracks.
            </p>
            <div className="flex items-center gap-2 text-xs text-secondary-container bg-white/5 px-3 py-2 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Fully Insured & Brisbane Family Owned</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-headline text-lg font-semibold text-secondary-container">Navigation</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog & Tips</Link></li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Service Areas</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-headline text-lg font-semibold text-secondary-container">Our Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/services#steam-cleaning" className="hover:text-white transition-colors">On-Site Steam Cleaning</Link></li>
              <li><Link href="/services#ultrasonic" className="hover:text-white transition-colors">Ultrasonic Deep Sanitisation</Link></li>
              <li><Link href="/services#mould-removal" className="hover:text-white transition-colors">Subtropical Mould Removal</Link></li>
              <li><Link href="/services#sheer-care" className="hover:text-white transition-colors">Delicate Sheer & Voile Care</Link></li>
              <li><Link href="/services#commercial" className="hover:text-white transition-colors">Commercial & Hotel Drapery</Link></li>
              <li><Link href="/feedback" className="hover:text-white transition-colors">Reviews & Testimonials</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-headline text-lg font-semibold text-secondary-container">Contact Brisbane HQ</h4>
            <div className="space-y-2 text-sm text-white/80">
              <a href="tel:0405849841" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <span>0405 849 841</span>
              </a>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>info@curtaincleaningbrisbane.com.au</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>Servicing Greater Brisbane, QLD (New Farm, Ascot, Bulimba, Paddington & surrounds)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60 pt-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Mon – Sat: 7:00 AM – 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© {new Date().getFullYear()} Curtain Cleaning Brisbane. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
