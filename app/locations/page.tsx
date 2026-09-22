"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BRISBANE_SUBURBS } from "@/data/locations";
import BookingForm from "@/components/BookingForm";
import { MapPin, Search, ArrowRight, CheckCircle2 } from "lucide-react";

import BrisbaneMap from "@/components/BrisbaneMap";

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

        {/* Live Brisbane Coverage Map Section */}
        <div className="mt-12">

          {/* MID-PAGE BOOKING CTA */}
          <section className="w-full bg-primary rounded-3xl py-12 lg:py-16 px-6 sm:px-10 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-secondary-container text-xs font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  Book a Clean
                </span>
                <h2 className="font-headline text-2xl lg:text-3xl font-bold text-white leading-tight">
                  Ready to Book for Your Suburb?
                </h2>
                <p className="text-sm text-on-primary-container leading-relaxed">
                  We cover all of Greater Brisbane. Fill in the form and we'll confirm whether we serve your area and lock in a date.
                </p>
                <ul className="space-y-2.5 text-sm text-on-primary-container">
                  {["Same-week appointments available", "Free quote before we start", "Safe for all fabric types"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="material-symbols-outlined text-secondary-container text-base">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-7 bg-white rounded-2xl shadow-xl border border-primary/10 overflow-hidden">
                <div className="bg-[#f0f7f5] px-8 py-5 border-b border-primary/10">
                  <h3 className="font-headline text-xl font-bold text-primary">Request a Booking</h3>
                  <p className="text-xs text-on-surface-variant mt-0.5">We'll confirm the same day — no payment needed now.</p>
                </div>
                <div className="p-6 sm:p-8">
                  <BookingForm />
                </div>
              </div>
            </div>
          </section>

          <BrisbaneMap showCardHeader={true} showSuburbsList={true} height="480px" />
        </div>
      </section>

      {/* BOOKING FORM SECTION */}
      <section className="w-full bg-surface-container py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-4 lg:pt-4">
              <span className="text-xs uppercase tracking-wider text-secondary font-semibold">BOOK A CLEAN</span>
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary leading-tight">
                Ready to Book?
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Fill in your details and we'll confirm the same day. No payment required upfront.
              </p>
              <ul className="space-y-2 pt-2 text-sm text-on-surface">
                {["Curtains stay on the rail", "Same-week bookings available", "Free quote, no obligation"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-8 bg-white rounded-3xl shadow-md border border-primary/10 overflow-hidden">
              <div className="bg-[#f0f7f5] px-8 py-5 border-b border-primary/10">
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
