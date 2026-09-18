"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BRISBANE_SUBURBS } from "@/data/locations";
import { MapPin, Search, ArrowRight, CheckCircle2 } from "lucide-react";

export default function LocationsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSuburbs = BRISBANE_SUBURBS.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.postcode.includes(searchTerm) ||
      s.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-white py-14">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">Service Map</span>
          <h1 className="font-headline text-4xl font-bold mt-1">Brisbane Service Locations</h1>
          <p className="text-xs text-white/80 max-w-lg mt-2">
            Mobile curtain cleaning technicians servicing Greater Brisbane, Moreton Bay, and Redlands.
          </p>
        </div>
      </section>

      {/* Suburb Search */}
      <section className="max-w-[1240px] mx-auto px-4 md:px-6 py-12">
        <div className="bg-white p-6 rounded-3xl border border-primary/10 shadow-stitch space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h2 className="font-headline text-2xl font-bold text-primary">Search Your Suburb or Postcode</h2>
            <div className="relative max-w-md w-full">
              <Search className="w-4 h-4 text-on-surface-variant absolute left-3 top-3" />
              <input
                type="text"
                placeholder="e.g. New Farm, 4005, or Northside"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-full border border-outline border-opacity-30 text-xs focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Suburb Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredSuburbs.map((sub, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-surface border border-primary/10 flex items-center justify-between hover:border-primary transition-all"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-secondary shrink-0" />
                  <div>
                    <span className="font-bold text-sm text-primary block">{sub.name}</span>
                    <span className="text-[10px] text-on-surface-variant">{sub.region} ({sub.postcode})</span>
                  </div>
                </div>
                <Link
                  href={`/book-now?suburb=${sub.name}`}
                  className="text-[11px] text-secondary font-bold hover:underline"
                >
                  Book
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder UI */}
        <div className="mt-12 bg-white rounded-3xl border border-primary/10 overflow-hidden shadow-stitch p-6 text-center space-y-4">
          <h3 className="font-headline text-xl font-bold text-primary">Greater Brisbane Service Coverage Map</h3>
          <div className="relative aspect-[16/7] w-full rounded-2xl bg-surface-container overflow-hidden flex items-center justify-center border border-primary/10">
            <div className="text-center p-6 space-y-2">
              <MapPin className="w-8 h-8 text-secondary mx-auto animate-bounce" />
              <span className="font-headline font-bold text-primary text-base block">Servicing All 15km Radius from Brisbane CBD</span>
              <p className="text-xs text-on-surface-variant max-w-md mx-auto">
                Including Hamilton, Ascot, New Farm, Bulimba, Paddington, Indooroopilly, Clayfield, Chermside, and Carindale.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
