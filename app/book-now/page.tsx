"use client";

import React from "react";
import { ShieldCheck, CheckCircle2, MapPin } from "lucide-react";
import BookingForm from "@/components/BookingForm";

export default function BookNowPage() {
  return (
    <div className="w-full bg-surface min-h-screen">
      {/* Hero */}
      <section className="relative bg-primary text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[620px] h-[320px] bg-primary-container rounded-full blur-3xl opacity-40 pointer-events-none"></div>
        <div className="relative max-w-[1240px] mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-secondary-container text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            BOOK ONLINE
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-2xl tracking-tight">
            Book Your Curtain Clean
          </h1>
          <p className="font-body text-sm sm:text-base text-on-primary-container max-w-xl mt-3 leading-relaxed">
            No payment upfront. We'll confirm your booking and give you an exact price before our visit.
          </p>
          <div className="mt-8 pt-6 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-secondary-container" />
              <span className="text-white font-medium">Cleaned at your home</span>
            </div>
            <span className="text-white/40 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-secondary-container" />
              <span className="text-white font-medium">No fabric shrinkage</span>
            </div>
            <span className="text-white/40 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-secondary-container" />
              <span className="text-white font-medium">All Greater Brisbane</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-14 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-primary/15 overflow-hidden">
            <div className="bg-[#f0f7f5] px-8 py-6 border-b border-primary/10">
              <h2 className="font-headline text-2xl font-bold text-primary">Request a Booking</h2>
              <p className="text-xs text-on-surface-variant mt-1">Fill in your details and we'll confirm the same day.</p>
            </div>
            <div className="p-6 sm:p-8">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
