import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="text-center space-y-5 max-w-md flex flex-col items-center">
        {/* Navbar logo */}
        <Link
          href="/"
          className="relative w-48 sm:w-56 h-14 sm:h-16 flex items-center justify-center mb-2 hover:opacity-90 transition-opacity"
        >
          <Image
            src="/logo2.png"
            alt="Curtain Cleaning Brisbane"
            width={256}
            height={64}
            className="w-full h-full object-contain"
            priority
          />
        </Link>

        <span className="text-6xl font-headline font-bold text-secondary">404</span>
        <h1 className="font-headline text-3xl sm:text-4xl font-bold text-primary">Page Not Found</h1>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          The requested page could not be found. Let&apos;s get you back to our main curtain cleaning services.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-sm shadow-sm hover:shadow transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}