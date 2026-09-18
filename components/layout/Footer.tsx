import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

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
              Brisbane's dedicated on-site curtain and drapery cleaning specialists. We restore delicate fabrics and fresh indoor air directly in your home — no taking curtains down, no hassle.
            </p>
            <div className="flex items-center gap-2 text-xs text-secondary-container bg-white/5 px-3 py-2 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Master Fabric Care Certified</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-headline text-lg font-semibold text-white">Services</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/services#steam-cleaning" className="hover:text-white transition-colors">Curtain Cleaning</Link></li>
              <li><Link href="/services#sheer-care" className="hover:text-white transition-colors">Sheer Cleaning</Link></li>
              <li><Link href="/services#ultrasonic" className="hover:text-white transition-colors">Blind Cleaning</Link></li>
              <li><Link href="/services#stain-deodorisation" className="hover:text-white transition-colors">Odour Removal</Link></li>
              <li><Link href="/services#stain-deodorisation" className="hover:text-white transition-colors">Stain Treatment</Link></li>
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-headline text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Support */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-headline text-lg font-semibold text-white">Contact & Support</h4>
            <div className="space-y-2 text-sm text-white/80">
              <a href="tel:0405849841" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-secondary-container shrink-0" />
                <span>0405 849 841</span>
              </a>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-secondary-container shrink-0 mt-0.5" />
                <span className="break-all">hello@curtaincleaningbrisbane.com.au</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary-container shrink-0 mt-0.5" />
                <span>Brisbane QLD, Australia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <p>© 2026 Curtain Cleaning Brisbane. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
