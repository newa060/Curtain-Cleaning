"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Locations", href: "/locations" },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/feedback" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#f1fcf8]/95 backdrop-blur-md border-b-2 border-[#0F4C4C]/15 transition-colors">
      <div className="h-20 w-full max-w-[1240px] mx-auto px-4 md:px-6 flex items-center justify-between gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <div className="relative w-48 sm:w-56 h-14 sm:h-16 flex items-center justify-center">
            <Image
              src="/logo2.png"
              alt="Curtain Cleaning Brisbane"
              width={256}
              height={64}
              className="w-full h-full object-contain group-hover:opacity-90 transition-opacity"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links (Pill Style) */}
        <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body text-xs xl:text-sm font-semibold tracking-wide transition-all duration-200 whitespace-nowrap px-3 py-1.5 rounded-full ${
                  isActive
                    ? "text-primary bg-primary/10 shadow-sm"
                    : "text-on-surface-variant hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/book-now"
            className="hidden sm:inline-flex items-center justify-center font-body text-xs md:text-sm font-bold text-white bg-secondary hover:bg-secondary-hover px-5 lg:px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200"
          >
            Enquire Now
          </Link>
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg text-primary hover:bg-primary/10 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f1fcf8] border-b-2 border-[#0F4C4C]/15 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-body text-sm font-semibold py-2.5 px-4 rounded-xl transition-all ${
                    isActive
                      ? "text-primary bg-primary/10 font-bold"
                      : "text-on-surface-variant hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-3 border-t border-primary/10 flex flex-col gap-2.5">
            <Link
              href="/book-now"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center font-body text-sm font-bold text-white bg-secondary hover:bg-secondary-hover px-6 py-3 rounded-full shadow-md transition-all"
            >
              Enquire Now
            </Link>
            <a
              href="tel:0405849841"
              className="w-full inline-flex items-center justify-center gap-2 font-body text-xs font-bold text-primary bg-primary/10 hover:bg-primary/15 px-6 py-2.5 rounded-full transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-secondary" />
              <span>Call 0405 849 841</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
