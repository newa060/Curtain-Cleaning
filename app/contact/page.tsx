"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Lock } from "lucide-react";
import BrisbaneMap from "@/components/BrisbaneMap";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 800);
  };

  return (
    <div className="flex flex-col w-full bg-surface min-h-screen">
      {/* 1. HERO HEADER SECTION */}
      <section className="relative w-full bg-primary text-white py-14 sm:py-20 lg:py-24 px-4 md:px-6 overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[620px] h-[320px] bg-primary-container rounded-full blur-3xl opacity-40 pointer-events-none"></div>
        <div className="relative max-w-[900px] mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-secondary-container text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            CONTACT US
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
            Get in <span className="italic font-headline text-secondary-container">Touch</span>
          </h1>
          <p className="mt-4 max-w-[640px] font-body text-base sm:text-lg text-on-primary-container leading-relaxed">
            Have a question or want a price for your curtains? Drop us a message and we'll get back to you shortly.
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
              href="#contact-card"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-secondary hover:bg-secondary-hover text-white font-semibold text-xs shadow-md transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Send a Message</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID */}
      <section className="w-full py-12 lg:py-20 px-4 md:px-6">
        <div className="max-w-[1140px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 w-full">
            {/* Email Card */}
            <div className="w-full bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow border border-primary/10">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-outline font-bold block mb-0.5">
                  Email Support
                </span>
                <a
                  href="mailto:hello@curtaincleaningbrisbane.com.au"
                  className="font-headline text-sm sm:text-base text-primary font-bold hover:text-secondary transition-colors truncate block"
                >
                  hello@curtaincleaningbrisbane.com.au
                </a>
                <div className="mt-2 flex items-center gap-1.5 text-tertiary text-xs font-semibold">
                  <span className="material-symbols-outlined text-sm text-secondary">schedule</span>
                  <span>We usually reply within 2 hours</span>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="w-full bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow border border-primary/10">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-secondary">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-wider text-outline font-bold block mb-0.5">
                  Give Us a Call
                </span>
                <a
                  href="tel:0405849841"
                  className="font-headline text-lg text-primary font-bold hover:text-secondary transition-colors block"
                >
                  0405 849 841
                </a>
                <p className="mt-1 text-on-surface-variant text-xs">
                  Mon–Sat, 7:30am – 6:00pm
                </p>
              </div>
            </div>

            {/* Service Area Card */}
            <div className="w-full bg-white rounded-2xl p-6 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow border border-primary/10">
              <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] uppercase tracking-wider text-outline font-bold block mb-0.5">
                  Service Area
                </span>
                <div className="font-headline text-base text-primary font-bold">
                  Brisbane & Surrounds
                </div>
                <p className="mt-1 text-on-surface-variant text-xs leading-relaxed">
                  We cover all of Greater Brisbane — Inner City, Northside, Southside, Western Suburbs, Redlands, and Moreton Bay.
                </p>
              </div>
            </div>

            {/* Info Banner Card */}
            <div className="w-full bg-primary text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
              <div className="relative z-10 flex flex-col gap-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/10 text-secondary-container w-fit text-[10px] uppercase font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                  <span>ON-SITE CONVENIENCE</span>
                </div>
                <h3 className="font-headline text-xl text-white font-bold">
                  No Need to Dismantle Your Curtains
                </h3>
                <p className="text-xs text-on-primary-container leading-relaxed">
                  We arrive at your property and clean your hanging curtains directly on your tracks — zero taking down, zero hassle.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form Module (Matching Requested Design) */}
          <div
            className="lg:col-span-7 w-full bg-white rounded-3xl overflow-hidden shadow-xl border border-primary/15"
            id="contact-card"
          >
            {/* Form Top Header Banner */}
            <div className="bg-[#f0f7f5] px-6 sm:px-8 py-6 border-b border-primary/10">
              <h2 className="font-headline text-2xl sm:text-3xl text-primary font-bold tracking-tight">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-1 font-body">
                We'll get back to you shortly.
              </p>
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              {success ? (
                <div className="p-8 rounded-2xl bg-surface-container border border-primary/20 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-secondary mx-auto" />
                  <h3 className="font-headline text-2xl font-bold text-primary">
                    Message Sent!
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. Our Brisbane team will get back to you shortly during business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        address: "",
                        message: "",
                      });
                    }}
                    className="mt-4 px-8 py-3 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary-dark transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] font-bold font-headline text-primary tracking-wider uppercase block mb-2">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fcfb] border border-primary/20 text-xs sm:text-sm text-primary font-medium focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold font-headline text-primary tracking-wider uppercase block mb-2">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fcfb] border border-primary/20 text-xs sm:text-sm text-primary font-medium focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50"
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone Number & Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[11px] font-bold font-headline text-primary tracking-wider uppercase block mb-2">
                        PHONE NUMBER *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fcfb] border border-primary/20 text-xs sm:text-sm text-primary font-medium focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-bold font-headline text-primary tracking-wider uppercase block mb-2">
                        ADDRESS
                      </label>
                      <input
                        type="text"
                        placeholder="Your Address"
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({ ...formData, address: e.target.value })
                        }
                        className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fcfb] border border-primary/20 text-xs sm:text-sm text-primary font-medium focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50"
                      />
                    </div>
                  </div>

                  {/* Row 3: Your Message */}
                  <div>
                    <label className="text-[11px] font-bold font-headline text-primary tracking-wider uppercase block mb-2">
                      YOUR MESSAGE
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#f8fcfb] border border-primary/20 text-xs sm:text-sm text-primary font-medium focus:outline-none focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50 min-h-[140px] resize-y"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-8 rounded-2xl bg-primary hover:bg-primary-dark active:scale-[0.99] text-white font-headline text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{loading ? "Sending..." : "Send Message"}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-on-surface-variant text-xs pt-1">
                    <Lock className="w-3.5 h-3.5 text-secondary" />
                    <span>Your information is kept 100% confidential.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. SUBURB COVERAGE HUB */}
      <section className="w-full bg-surface-container py-12 px-4 md:px-6 border-t border-primary/10">
        <div className="max-w-[1140px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider text-secondary font-semibold">
                WHERE WE WORK
              </span>
              <h3 className="font-headline text-2xl font-bold text-primary mt-1">
                Areas We Cover Across Brisbane
              </h3>
            </div>
            <p className="text-xs text-on-surface-variant max-w-md">
              We travel to residential homes and commercial premises throughout Greater Brisbane.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/10">
              <div className="flex items-center gap-2 mb-2 text-primary font-bold text-xs">
                <span className="material-symbols-outlined text-base">north_east</span>
                <h4>Brisbane North</h4>
              </div>
              <p className="text-on-surface-variant text-[11px]">
                Ascot, Hamilton, Chermside, Clayfield, Bridgeman Downs, Sandgate, Caboolture
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/10">
              <div className="flex items-center gap-2 mb-2 text-primary font-bold text-xs">
                <span className="material-symbols-outlined text-base">south_east</span>
                <h4>Brisbane South</h4>
              </div>
              <p className="text-on-surface-variant text-[11px]">
                South Brisbane, Sunnybank, Carindale, Woolloongabba, Mount Gravatt, Logan
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/10">
              <div className="flex items-center gap-2 mb-2 text-primary font-bold text-xs">
                <span className="material-symbols-outlined text-base">west</span>
                <h4>Western Suburbs</h4>
              </div>
              <p className="text-on-surface-variant text-[11px]">
                Indooroopilly, St Lucia, Toowong, Kenmore, Brookfield, Chapel Hill, Ipswich
              </p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm border border-primary/10">
              <div className="flex items-center gap-2 mb-2 text-primary font-bold text-xs">
                <span className="material-symbols-outlined text-base">waves</span>
                <h4>Inner & Bayside</h4>
              </div>
              <p className="text-on-surface-variant text-[11px]">
                New Farm, Teneriffe, Kangaroo Point, Manly, Wynnum, Cleveland, Redlands
              </p>
            </div>
          </div>

          {/* Interactive Brisbane Coverage Map */}
          <BrisbaneMap height="420px" showCardHeader={true} />
        </div>
      </section>
    </div>
  );
}
