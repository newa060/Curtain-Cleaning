"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BRISBANE_SUBURBS } from "@/data/locations";
import BookingForm from "@/components/BookingForm";
import BrisbaneMap from "@/components/BrisbaneMap";
import { MapPin, Search, ArrowRight, ShieldCheck, CheckCircle2, Phone } from "lucide-react";

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeRegion, setActiveRegion] = useState("All");

  const regions = [
    "All",
    "Brisbane CBD & Inner",
    "Northside",
    "Southside",
    "Western Suburbs",
    "Bayside & Redlands",
  ];

  const filteredSuburbs = BRISBANE_SUBURBS.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.postcode.includes(searchTerm) ||
      s.region.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeRegion === "All") return matchesSearch;
    return matchesSearch && s.region.toLowerCase().includes(activeRegion.toLowerCase().replace(" & inner", "").replace(" & redlands", ""));
  });

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#1B3C59] text-white py-16">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#FFA877] text-xs font-bold uppercase tracking-wider mb-3 border border-[#22201E]/10 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            SERVICE COVERAGE
          </div>
          <h1 className="font-headline text-4xl lg:text-5xl font-bold mt-1">
            Brisbane Service Locations
          </h1>
          <p className="font-body text-sm sm:text-base text-white/80 max-w-2xl mt-3 leading-relaxed">
            Mobile on-site curtain and blind cleaning specialists servicing all of Greater Brisbane, Moreton Bay, and the Bayside directly at your door.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white/80">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-secondary-container" />
              <span>Cleaned on your track — no removal</span>
            </div>
            <span className="text-white/30 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-secondary-container" />
              <span>No travel surcharge for Greater Brisbane</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 py-12 space-y-12">
        {/* Suburb Search & Directory */}
        <section className="bg-white p-6 md:p-8 rounded-3xl border border-primary/10 shadow-stitch space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div>
              <h2 className="font-headline text-2xl lg:text-3xl font-bold text-primary">
                Find Your Suburb or Postcode
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                Showing {filteredSuburbs.length} serviced locations across Brisbane
              </p>
            </div>
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-on-surface-variant absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="Search suburb name or postcode (e.g. New Farm, 4005)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-primary/20 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 bg-surface/50"
              />
            </div>
          </div>

          {/* Region Filter Chips */}
          <div className="flex flex-wrap gap-2 pt-1 border-t border-primary/5 pt-4">
            {regions.map((reg) => (
              <button
                key={reg}
                type="button"
                onClick={() => setActiveRegion(reg)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeRegion === reg
                    ? "bg-primary text-white shadow-sm"
                    : "bg-surface hover:bg-surface-container text-on-surface-variant border border-primary/10"
                }`}
              >
                {reg}
              </button>
            ))}
          </div>

          {/* Suburb Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 max-h-[480px] overflow-y-auto pr-1">
            {filteredSuburbs.length > 0 ? (
              filteredSuburbs.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-surface/70 border border-primary/10 flex items-center justify-between hover:border-primary/40 hover:bg-white hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <MapPin className="w-4 h-4 text-secondary shrink-0" />
                    <div className="truncate">
                      <span className="font-bold text-xs sm:text-sm text-primary block truncate">
                        {sub.name}
                      </span>
                      <span className="text-[10px] text-on-surface-variant block">
                        {sub.region} ({sub.postcode})
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/book-now?suburb=${encodeURIComponent(sub.name)}`}
                    className="text-[11px] text-secondary font-bold hover:underline shrink-0 pl-2"
                  >
                    Book →
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-span-full py-10 text-center space-y-3">
                <p className="text-sm text-on-surface-variant">
                  No suburbs matched &ldquo;{searchTerm}&rdquo;. We likely still service your home!
                </p>
                <a
                  href="tel:0405849841"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white text-xs font-bold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call 0405 849 841 to Confirm</span>
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Interactive Brisbane Map Section */}
        <section className="bg-white p-6 md:p-8 rounded-3xl border border-primary/10 shadow-stitch space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs uppercase font-bold text-secondary tracking-wider">
                LIVE INTERACTIVE COVERAGE
              </span>
              <h2 className="font-headline text-2xl lg:text-3xl font-bold text-primary mt-1">
                Greater Brisbane Mobile Map
              </h2>
            </div>
            <p className="text-xs text-on-surface-variant max-w-sm">
              Our mobile technicians travel throughout all zones daily.
            </p>
          </div>
          <div className="pt-2">
            <BrisbaneMap showCardHeader={false} showSuburbsList={true} height="480px" />
          </div>
        </section>
      </div>

      {/* Single, Clean Booking Form Section */}
      <section className="w-full bg-surface-container py-16 lg:py-20 px-4 md:px-6 mt-8">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-4 lg:pt-4">
              <span className="text-xs uppercase tracking-wider text-secondary font-semibold">
                SCHEDULE ON-SITE VISIT
              </span>
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary leading-tight">
                Ready to Book for Your Suburb?
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Send your details and our team will confirm availability and provide a transparent, fixed price quote before work begins.
              </p>
              <ul className="space-y-2 pt-2 text-sm text-on-surface">
                {[
                  "Curtains stay on the rail — no removal hassle",
                  "Same-week appointments across Brisbane",
                  "100% fabric-safe, no shrinkage guarantee",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-8 bg-white rounded-3xl shadow-stitch border border-primary/10 overflow-hidden">
              <div className="bg-surface-tinted px-8 py-5 border-b border-primary/10">
                <h3 className="font-headline text-xl font-bold text-primary">Request a Booking</h3>
                <p className="text-xs text-on-surface-variant mt-0.5">We'll get back to you the same day.</p>
              </div>
              <div className="p-6 sm:p-8">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
