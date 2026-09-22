import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-primary text-white pt-16 pb-12 border-t border-primary-container">
      <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
        {/* Columns row: flex + justify-between so free space is shared evenly (no dead gap in the middle) */}
        <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap xl:justify-between gap-10 xl:gap-16 pb-12 border-b border-white/10">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="relative w-48 h-14 flex items-center justify-start shrink-0">
                <Image
                  src="/logo2.png"
                  alt="Curtain Cleaning Brisbane"
                  width={192}
                  height={56}
                  className="w-full h-full object-contain brightness-0 invert"
                />
              </div>
            </div>
            <p className="font-body text-sm text-white/80 leading-relaxed max-w-sm">
              Brisbane's on-site curtain cleaning specialists. We clean your
              curtains while they're still hanging — no taking them down, no
              transport, no hassle.
            </p>
            <div className="flex items-center gap-2 text-xs text-secondary-container bg-white/5 px-3 py-2 rounded-lg w-fit">
              <ShieldCheck className="w-4 h-4 text-secondary" />
              <span>Fully Insured · Brisbane Based</span>
            </div>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-3 xl:shrink-0">
            <h4 className="font-headline text-lg font-semibold text-white">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Support */}
          <div className="space-y-3 xl:shrink-0">
            <h4 className="font-headline text-lg font-semibold text-white">
              Contact & Support
            </h4>
            <div className="space-y-2 text-sm text-white/80">
              <a
                href="tel:0405849841"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-secondary-container shrink-0" />
                <span>0405 849 841</span>
              </a>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-secondary-container shrink-0 mt-0.5" />
                <span className="break-all">
                  hello@curtaincleaningbrisbane.com.au
                </span>
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
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
