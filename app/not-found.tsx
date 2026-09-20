import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center py-16 px-4">
      <div className="text-center space-y-4 max-w-md flex flex-col items-center">
        <div className="w-16 h-16 relative mb-2">
          <Image
            src="/assets/logo.png"
            alt="Curtain Cleaning Brisbane Logo"
            fill
            className="object-contain"
          />
        </div>
        <span className="text-5xl font-headline font-bold text-secondary">404</span>
        <h1 className="font-headline text-3xl font-bold text-primary">Page Not Found</h1>
        <p className="text-xs text-on-surface-variant leading-relaxed">
          The requested page could not be found. Let’s get you back to our main curtain cleaning services.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold text-xs hover:bg-primary-dark transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
