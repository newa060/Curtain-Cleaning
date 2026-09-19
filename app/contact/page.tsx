"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, Lock, Timer, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    suburb: "",
    serviceType: "curtains",
    message: "",
  });

  const [selectedChips, setSelectedChips] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const toggleChip = (chipName: string) => {
    if (selectedChips.includes(chipName)) {
      setSelectedChips(selectedChips.filter((c) => c !== chipName));
    } else {
      setSelectedChips([...selectedChips, chipName]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 800);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO HEADER SECTION */}
      <section className="relative w-full bg-primary text-white py-16 sm:py-20 lg:py-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[620px] h-[320px] bg-primary-container rounded-full blur-3xl opacity-40 pointer-events-none"></div>
        <div className="relative max-w-[900px] mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-secondary-container text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            We're Here to Help
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Get In <span className="italic font-headline text-secondary-container">Touch</span>
          </h1>
          <p className="mt-4 max-w-[640px] font-body text-base sm:text-lg text-on-primary-container leading-relaxed">
            Have questions about our on-site curtain cleaning service or want a complimentary quote? Send us a message and our Brisbane fabric specialists will respond promptly.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 w-full">
            <a
              href="tel:0405849841"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-secondary-container" />
              <span>0405 849 841</span>
            </a>
            <a
              href="mailto:hello@curtaincleaningbrisbane.com.au"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4 text-secondary-container" />
              <span>Email Us</span>
            </a>
            <a
              href="#quote-form"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary hover:bg-secondary-hover text-white font-semibold text-xs shadow-md transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              <span>Enquire Online</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID */}
      <section className="w-full bg-surface py-12 lg:py-20 px-4 md:px-6">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 4 Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            <div className="w-full bg-white rounded-xl p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow border border-primary/10">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-outline font-bold block mb-0.5">Email Support</span>
                <a
                  href="mailto:hello@curtaincleaningbrisbane.com.au"
                  className="font-headline text-sm sm:text-base text-primary font-bold hover:text-secondary transition-colors truncate block"
                >
                  hello@curtaincleaningbrisbane.com.au
                </a>
                <div className="mt-2 flex items-center gap-1.5 text-tertiary text-xs font-semibold">
                  <span className="material-symbols-outlined text-sm text-secondary">schedule</span>
                  <span>Average response: under 2 hours</span>
                </div>
              </div>
            </div>

            <div className="w-full bg-white rounded-xl p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow border border-primary/10">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-wider text-outline font-bold block mb-0.5">Service Area</span>
                <div className="font-headline text-base text-primary font-bold">Brisbane & Surrounds</div>
                <p className="mt-1 text-on-surface-variant text-xs leading-relaxed">
                  Servicing all of Greater Brisbane — Inner City, Northside, Southside, Western Suburbs, Redlands, and Moreton Bay.
                </p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  <span className="material-symbols-outlined text-sm">home_pin</span>
                  <span>100% In-Situ On-Site Service</span>
                </div>
              </div>
            </div>

            <div className="w-full bg-white rounded-xl p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow border border-primary/10">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-secondary">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-wider text-outline font-bold block mb-0.5">Telephone Consultations</span>
                <a href="tel:0405849841" className="font-headline text-base text-primary font-bold hover:text-secondary transition-colors block">
                  0405 849 841
                </a>
                <p className="mt-1 text-on-surface-variant text-xs">
                  Mon–Sat: 7:30 am – 6:00 pm AEST
                </p>
              </div>
            </div>

            <div className="w-full bg-primary text-white rounded-xl p-6 shadow-md relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 text-secondary-container w-fit text-[10px] uppercase font-bold">
                  <span className="material-symbols-outlined text-xs">bolt</span>
                  <span>Fastest Response</span>
                </div>
                <h3 className="font-headline text-xl text-white font-bold">
                  Ready to book? Request an in-home quote in 2 minutes.
                </h3>
                <p className="text-xs text-on-primary-container leading-relaxed">
                  No need to unhook heavy curtains. We test fabric type, measure track width, and steam extract safely right on the rail.
                </p>
                <div className="pt-2">
                  <a
                    href="#quote-form"
                    className="inline-flex items-center justify-center gap-1.5 px-6 py-3 rounded-full bg-secondary hover:bg-secondary-hover text-white text-xs font-bold shadow-sm transition-all"
                  >
                    <span>Complete the Form Below</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Module */}
          <div className="lg:col-span-7 w-full bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-stitch border border-primary/10" id="quote-form">
            <div className="flex flex-col mb-6">
              <div className="inline-flex items-center gap-1.5 text-secondary text-xs uppercase tracking-wider mb-1 font-bold">
                <span className="material-symbols-outlined text-sm">edit_note</span>
                <span>Free On-Site Quotation</span>
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl text-primary font-bold tracking-tight">
                Send Us a Message
              </h2>
              <p className="text-xs text-on-surface-variant mt-1">
                Fill out the details below and our Brisbane master fabric technician will review and reply promptly.
              </p>
            </div>

            {success ? (
              <div className="p-6 rounded-2xl bg-surface-container border border-primary/20 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-secondary mx-auto" />
                <h3 className="font-headline text-xl font-bold text-primary">Thank you for your enquiry!</h3>
                <p className="text-xs text-on-surface-variant max-w-sm mx-auto">
                  Your message has reached our Brisbane team. We will review your drapery specifications and contact you shortly.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 px-6 py-2 rounded-full bg-primary text-white text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-primary block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-outline border-opacity-30 focus:border-primary text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-primary block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-outline border-opacity-30 focus:border-primary text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-primary block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-outline border-opacity-30 focus:border-primary text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-primary block mb-1">Brisbane Suburb / Address</label>
                    <input
                      type="text"
                      placeholder="Suburb / Address"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-outline border-opacity-30 focus:border-primary text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-primary block mb-1">Primary Service Required *</label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline border-opacity-30 focus:border-primary text-xs text-primary font-semibold"
                  >
                    <option value="curtains">On-Site Curtain Steam & Deep Clean</option>
                    <option value="sheers">Delicate Sheer & Voile Revitalisation</option>
                    <option value="blackout">Thermal & Rubber-Backed Blackout Care</option>
                    <option value="blinds">Roman & Fabric Blinds Cleaning</option>
                    <option value="mould">Mould, Mildew & Stain Remediation</option>
                    <option value="odour">Odour Neutralisation & Sanitisation</option>
                    <option value="full-house">Full Home Drapery Assessment</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-primary block mb-2">Fabric Classification (Optional)</label>
                  <div className="flex flex-wrap gap-2">
                    {["Linen / Cotton", "Silk / Velvet", "Voile / Sheer", "Blockout / Rubber Back", "Not Sure"].map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => toggleChip(chip)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                          selectedChips.includes(chip)
                            ? "bg-primary text-white"
                            : "bg-surface-container text-on-surface-variant hover:bg-surface-container/80"
                        }`}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-primary block mb-1">Window & Curtain Details</label>
                  <textarea
                    rows={4}
                    placeholder="Mention number of rooms, track lengths, ceiling heights, or particular concerns like watermarks or pet odours..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline border-opacity-30 focus:border-primary text-xs"
                  ></textarea>
                </div>

                <div className="flex items-center gap-2 text-on-surface-variant text-xs pt-1">
                  <Lock className="w-3.5 h-3.5 text-tertiary" />
                  <span>Zero obligation quote. We respect your privacy and never share your data.</span>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-8 rounded-full bg-primary hover:bg-primary-dark text-white font-bold text-xs shadow-sm hover:shadow-md transition-all"
                  >
                    <span>{loading ? "Sending Message..." : "Send Message"}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. SUBURB AVAILABILITY HUB */}
      <section className="w-full bg-surface-container py-12 px-4 md:px-6">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-secondary font-semibold">PROMPT MOBILE SERVICE</span>
              <h3 className="font-headline text-2xl font-bold text-primary mt-1">Our Brisbane Service Hubs</h3>
            </div>
            <p className="text-xs text-on-surface-variant max-w-md">
              Fully equipped service vehicles bring high-temperature in-situ steam extraction directly to your residence across South East Queensland.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/10">
              <div className="flex items-center gap-2 mb-2 text-primary font-bold text-xs">
                <span className="material-symbols-outlined text-base">north_east</span>
                <h4>Brisbane North</h4>
              </div>
              <p className="text-on-surface-variant text-[11px]">Ascot, Hamilton, Chermside, Clayfield, Bridgeman Downs, Sandgate</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/10">
              <div className="flex items-center gap-2 mb-2 text-primary font-bold text-xs">
                <span className="material-symbols-outlined text-base">south_east</span>
                <h4>Brisbane South</h4>
              </div>
              <p className="text-on-surface-variant text-[11px]">South Brisbane, Sunnybank, Carindale, Woolloongabba, Mount Gravatt</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/10">
              <div className="flex items-center gap-2 mb-2 text-primary font-bold text-xs">
                <span className="material-symbols-outlined text-base">west</span>
                <h4>Western Suburbs</h4>
              </div>
              <p className="text-on-surface-variant text-[11px]">Indooroopilly, St Lucia, Toowong, Kenmore, Brookfield, Chapel Hill</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/10">
              <div className="flex items-center gap-2 mb-2 text-primary font-bold text-xs">
                <span className="material-symbols-outlined text-base">waves</span>
                <h4>Inner & Bayside</h4>
              </div>
              <p className="text-on-surface-variant text-[11px]">New Farm, Teneriffe, Kangaroo Point, Manly, Wynnum, Cleveland</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
