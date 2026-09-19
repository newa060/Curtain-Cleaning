"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Calendar as CalendarIcon, 
  Lock, 
  CheckCircle2, 
  Clock, 
  Compass, 
  Blinds, 
  Wind, 
  Droplets,
  Layers
} from "lucide-react";

const SERVICES_OPTIONS = [
  {
    id: "Curtain Cleaning",
    title: "Curtain Cleaning",
    desc: "Lined, thermal, blackout and heavy curtains.",
    icon: Layers,
  },
  {
    id: "Sheer Cleaning",
    title: "Sheer Cleaning",
    desc: "Voile, lace, linen sheers — anything lightweight and delicate.",
    icon: Sparkles,
  },
  {
    id: "Blind Cleaning",
    title: "Blind Cleaning",
    desc: "Roman, vertical, roller, and fabric blinds.",
    icon: Blinds,
  },
  {
    id: "Odour Removal",
    title: "Odour Removal",
    desc: "Cooking smells, pet odours, mustiness.",
    icon: Wind,
  },
  {
    id: "Stain Treatment",
    title: "Stain Treatment",
    desc: "Water marks, mould spots, and specific stains.",
    icon: Droplets,
    colSpan: "sm:col-span-2 lg:col-span-1",
  },
];

export default function BookNowPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Curtain Cleaning"]);
  const [preferredDate, setPreferredDate] = useState<string>("");
  const [dateFlexibility, setDateFlexibility] = useState<string>("Exact day only");
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    instructions: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const toggleService = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== serviceId));
      }
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="w-full bg-[#f1fcf8] min-h-screen">
      {/* Subtle Hero / Top Banner */}
      <section className="relative bg-[#0f4c4c] text-white overflow-hidden py-14 px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: "radial-gradient(#d7e8c8 1px, transparent 1px)", 
            backgroundSize: "24px 24px" 
          }}
        />
        <div className="relative max-w-[1240px] mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-sm text-[#d7e8c8] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#fc9267]"></span>
            BOOK A CLEAN
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-semibold text-white max-w-2xl tracking-tight">
            Book a Curtain Clean
          </h1>
          <p className="font-sans text-sm sm:text-base text-[#85bbbb] max-w-xl mt-3 font-normal leading-relaxed">
            No payment upfront. We'll confirm your booking and run through the details with you before the day.
          </p>

          <div className="mt-8 pt-6 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-[#85bbbb] text-xs sm:text-sm">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#fc9267]" />
              <span className="text-white font-medium">Cleaned at your home</span>
            </div>
            <span className="text-[#85bbbb]/40 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#fc9267]" />
              <span className="text-white font-medium">No shrinkage</span>
            </div>
            <span className="text-[#85bbbb]/40 hidden sm:inline">•</span>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#fc9267]" />
              <span className="text-white font-medium">All of Brisbane</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Booking Form Card Container */}
      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8 bg-[#f1fcf8]">
        <div className="max-w-3xl mx-auto">
          <form 
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 space-y-10 transition-all border border-[#0F4C4C]/10"
          >
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-[#fc9267]/20 text-[#9a4521] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-[#0F4C4C]" />
                </div>
                <h3 className="font-headline text-2xl font-bold text-[#003434]">Request Sent!</h3>
                <p className="text-sm text-[#404848] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName || "valued client"}</strong>! We'll be in touch within a couple of hours to confirm your booking for <strong>{selectedServices.join(", ")}</strong> 
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#0F4C4C] text-white text-xs font-semibold hover:bg-[#003434] transition-all"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* STEP 1: What do you need cleaned? */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f4c4c] text-white flex items-center justify-center font-semibold text-sm">
                      1
                    </span>
                    <div>
                      <h2 className="font-headline text-xl sm:text-2xl font-semibold text-[#003434] tracking-tight">
                        What do you need cleaned?
                      </h2>
                      <p className="text-xs sm:text-sm text-[#404848] mt-1">
                        Pick everything that applies — you can select more than one.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-1">
                    {SERVICES_OPTIONS.map((srv) => {
                      const IconComponent = srv.icon;
                      const isSelected = selectedServices.includes(srv.id);
                      return (
                        <div
                          key={srv.id}
                          onClick={() => toggleService(srv.id)}
                          className={`group relative flex flex-col justify-between p-4 rounded-xl transition-all cursor-pointer select-none border ${
                            isSelected
                              ? "bg-[#e5f0ed] border-[#0F4C4C] shadow-sm"
                              : "bg-[#ebf6f3] border-transparent hover:bg-[#e5f0ed]"
                          } ${srv.colSpan || ""}`}
                        >
                          <div className="flex items-start justify-between">
                            <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center text-[#0f4c4c] group-hover:scale-105 transition-transform shadow-xs">
                              <IconComponent className="w-5 h-5" />
                            </div>
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                                isSelected
                                  ? "bg-[#0f4c4c] text-white"
                                  : "bg-white text-transparent border border-[#bfc8c8]"
                              }`}
                            >
                              <Check className="w-3.5 h-3.5" />
                            </div>
                          </div>
                          <div className="mt-4">
                            <span className="block font-sans text-sm font-semibold text-[#003434]">
                              {srv.title}
                            </span>
                            <span className="block text-xs text-[#404848] mt-0.5">
                              {srv.desc}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="w-full h-px bg-[#e5f0ed]"></div>

                {/* STEP 2: When suits you? */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f4c4c] text-white flex items-center justify-center font-semibold text-sm">
                      2
                    </span>
                    <div>
                      <h2 className="font-headline text-xl sm:text-2xl font-semibold text-[#003434] tracking-tight">
                        When suits you?
                      </h2>
                      <p className="text-xs sm:text-sm text-[#404848] mt-1">
                        Pick a day that works for you and we'll confirm whether we can make it work.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-1">
                    <div>
                      <label 
                        className="block text-xs font-semibold uppercase tracking-wider text-[#003434] mb-2" 
                        htmlFor="preferred-date"
                      >
                        Preferred date
                      </label>
                      <input
                        id="preferred-date"
                        type="date"
                        required
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#ebf6f3] text-[#141d1c] font-sans text-sm focus:outline-none focus:bg-[#e5f0ed] transition-all border border-transparent focus:border-[#0F4C4C]"
                      />
                    </div>

                    <div className="pt-2">
                      <span className="block text-xs uppercase tracking-wider text-[#404848] mb-2.5 font-semibold">
                        Flexibility Option
                      </span>
                      <div className="flex flex-wrap gap-2.5">
                        {[
                          "Exact day only",
                          "Flexible (± 1 day)",
                          "As soon as possible",
                        ].map((option) => {
                          const isChecked = dateFlexibility === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setDateFlexibility(option)}
                              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all ${
                                isChecked
                                  ? "bg-[#e5f0ed] text-[#141d1c] font-semibold border border-[#0F4C4C]"
                                  : "bg-[#ebf6f3] text-[#141d1c] hover:bg-[#e5f0ed] border border-transparent"
                              }`}
                            >
                              <span
                                className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                  isChecked ? "bg-[#0f4c4c]" : "bg-[#bfc8c8]"
                                }`}
                              />
                              <span>{option}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-[#e5f0ed]"></div>

                {/* STEP 3: Your Details */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0f4c4c] text-white flex items-center justify-center font-semibold text-sm">
                      3
                    </span>
                    <div>
                      <h2 className="font-headline text-xl sm:text-2xl font-semibold text-[#003434] tracking-tight">
                        Your Details
                      </h2>
                      <p className="text-xs sm:text-sm text-[#404848] mt-1">
                        So we can confirm the booking and get in touch if we need anything.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#003434] mb-1.5" htmlFor="full-name">
                          Full Name *
                        </label>
                        <input
                          id="full-name"
                          type="text"
                          required
                          placeholder="Full Name"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#ebf6f3] text-[#141d1c] placeholder-[#707978] text-sm focus:outline-none focus:bg-[#e5f0ed] transition-all border border-transparent focus:border-[#0F4C4C]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#003434] mb-1.5" htmlFor="email-address">
                          Email Address *
                        </label>
                        <input
                          id="email-address"
                          type="email"
                          required
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#ebf6f3] text-[#141d1c] placeholder-[#707978] text-sm focus:outline-none focus:bg-[#e5f0ed] transition-all border border-transparent focus:border-[#0F4C4C]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#003434] mb-1.5" htmlFor="mobile-phone">
                          Mobile Phone *
                        </label>
                        <input
                          id="mobile-phone"
                          type="tel"
                          required
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#ebf6f3] text-[#141d1c] placeholder-[#707978] text-sm focus:outline-none focus:bg-[#e5f0ed] transition-all border border-transparent focus:border-[#0F4C4C]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#003434] mb-1.5" htmlFor="property-address">
                          Property Address & Suburb *
                        </label>
                        <input
                          id="property-address"
                          type="text"
                          required
                          placeholder="Property Address & Suburb"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#ebf6f3] text-[#141d1c] placeholder-[#707978] text-sm focus:outline-none focus:bg-[#e5f0ed] transition-all border border-transparent focus:border-[#0F4C4C]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#003434] mb-1.5" htmlFor="special-instructions">
                        Anything else we should know? \(Optional\)
                      </label>
                      <textarea
                        id="special-instructions"
                        rows={4}
                        placeholder="Fabric type, ceiling height, parking, mould or stain concerns — anything that helps us prepare."
                        value={formData.instructions}
                        onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#ebf6f3] text-[#141d1c] placeholder-[#707978] text-sm focus:outline-none focus:bg-[#e5f0ed] transition-all resize-none border border-transparent focus:border-[#0F4C4C]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button & Trust Disclaimers */}
                <div className="pt-4 space-y-4">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-full bg-[#003434] hover:bg-[#0f4c4c] text-white font-semibold text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer"
                  >
                    <span>Request Booking</span>
                    <CalendarIcon className="w-5 h-5" />
                  </button>

                  <div className="text-center space-y-1.5">
                    <p className="text-xs text-[#404848]">
                      No payment now. We'll call to confirm the details before the visit.
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-[#707978] text-xs">
                      <Lock className="w-3.5 h-3.5" />
                      <span>No obligation · We don't share your details</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Quick Trust Strip / Guarantees */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-[#f1fcf8]">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-xs flex flex-col items-start gap-3 border border-[#0F4C4C]/5">
              <div className="w-10 h-10 rounded-lg bg-[#ebf6f3] flex items-center justify-center text-[#0f4c4c]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold text-[#003434]">Quick Response</h3>
                <p className="text-xs text-[#404848] mt-1 leading-relaxed">
                  We get back to most enquiries within a couple of hours during business hours.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xs flex flex-col items-start gap-3 border border-[#0F4C4C]/5">
              <div className="w-10 h-10 rounded-lg bg-[#ebf6f3] flex items-center justify-center text-[#0f4c4c]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold text-[#003434]">We Come to You</h3>
                <p className="text-xs text-[#404848] mt-1 leading-relaxed">
                  Curtains stay hanging the whole time. No removing, no lugging them anywhere.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-xs flex flex-col items-start gap-3 border border-[#0F4C4C]/5">
              <div className="w-10 h-10 rounded-lg bg-[#ebf6f3] flex items-center justify-center text-[#0f4c4c]">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold text-[#003434]">Based in Brisbane</h3>
                <p className="text-xs text-[#404848] mt-1 leading-relaxed">
                  We cover Brisbane North, South, Western Suburbs, and the Bayside.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Textile Context Split Card */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 bg-[#f1fcf8]">
        <div className="max-w-3xl mx-auto rounded-2xl bg-[#ebf6f3] p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 border border-[#0F4C4C]/10">
          <div className="w-full sm:w-1/3 aspect-[4/3] rounded-xl overflow-hidden shadow-sm flex-shrink-0 relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3dFhhTTuHT_UIHWANJSzfqCUTPwkOXbVGKM188lXKwfqQwaEdL-A5xNDbfcB1GcTSXkKvQr-ggovqnyaUgTzacVvvlDtYkLV-dVu4YJo6V54b6RYyoVuDhFnXyuzZIPq6F25nqMWWjyb6acUrNrYRVc7GPXy6o31fSRrmbVLPTutjXBFGtlnXem2_yvMJJ6WYeR5Q_JEl98UocHmRExic2txwOSse4g-J7R70HVJxJWZa0OYMEN65kA"
              alt="Sunlit Australian living room in Brisbane with elegant floor to ceiling cream linen curtains"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#9a4521]">
              WHY LEAVE THEM HANGING
            </span>
            <h4 className="font-headline text-lg sm:text-xl font-semibold text-[#003434]">
              Taking Curtains Down Often Causes More Damage
            </h4>
            <p className="text-xs sm:text-sm text-[#404848] leading-relaxed">
              Heavy curtains are awkward to remove and easy to damage in the process — tracks get bent, seams tear, pleats lose their shape. Cleaning them while they hang avoids all of that.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

