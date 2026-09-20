"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#f1fcf8]/95 backdrop-blur-md border-b border-[#0F4C4C]/10 transition-colors">
      <div className="h-20 w-full max-w-[1240px] mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
        {/* Logo & Brand Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center shrink-0">
            <Image
              src="/assets/logo.png"
              alt="Curtain Cleaning Brisbane Logo"
              width={44}
              height={44}
              className="w-full h-full object-contain group-hover:scale-105 transition-transform"
              priority
            />
          </div>
          <span className="font-headline text-xl md:text-2xl text-primary font-bold tracking-tight">
            Curtain Cleaning Brisbane
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-body text-sm tracking-wide transition-colors ${
                  isActive
                    ? "text-primary font-semibold border-b-2 border-primary pb-0.5"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/book-now"
            className="hidden sm:inline-flex items-center justify-center font-body text-xs md:text-sm text-white bg-secondary hover:bg-secondary-hover px-6 py-2.5 rounded-full shadow-sm transition-all duration-200"
          >
            Enquire Now
          </Link>
          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-primary hover:bg-primary/5 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#f1fcf8] border-b border-[#0F4C4C]/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-body text-base py-2 transition-colors border-b border-[#0F4C4C]/5 ${
                    isActive
                      ? "text-primary font-bold pl-2 border-l-4 border-l-primary"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/book-now"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center font-body text-sm font-semibold text-white bg-secondary hover:bg-secondary-hover px-6 py-3 rounded-full shadow-md transition-all"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
