"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, ArrowLeft, Calendar, Clock, MapPin, User, CheckCircle2, ShieldCheck } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";

export default function BookNowPage() {
  const [step, setStep] = useState<number>(1);

  // Form State
  const [selectedService, setSelectedService] = useState<string>("steam-cleaning");
  const [dropsCount, setDropsCount] = useState<number>(4);
  const [fabricType, setFabricType] = useState<string>("sheer");
  const [mouldAddon, setMouldAddon] = useState<boolean>(false);
  const [preferredDate, setPreferredDate] = useState<string>("");
  const [preferredTime, setPreferredTime] = useState<string>("Morning (8am - 12pm)");

  const [customer, setCustomer] = useState({
    name: "",
    phone: "",
    email: "",
    suburb: "",
    address: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Estimate calculation
  const getRate = () => {
    switch (fabricType) {
      case "sheer": return 40;
      case "linen": return 48;
      case "silk": return 55;
      case "velvet": return 65;
      default: return 45;
    }
  };

  const calculatedEstimate = (dropsCount * getRate()) + (mouldAddon ? dropsCount * 12 : 0);

  const handleNextStep = () => {
    if (step === 4 && (!customer.name || !customer.phone || !customer.email)) {
      alert("Please fill in your name, phone number, and email.");
      return;
    }
    if (step < 5) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleConfirmBooking = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Page Banner */}
      <section className="bg-primary text-white py-12">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">Online Booking System</span>
          <h1 className="font-headline text-3xl lg:text-4xl font-bold mt-1">
            Book Your On-Site Curtain Cleaning
          </h1>
          <p className="text-xs text-white/80 max-w-lg mt-2">
            Instant online booking with transparent pricing. No rail removal required.
          </p>
        </div>
      </section>

      {/* Booking Form Container */}
      <section className="max-w-[1240px] mx-auto px-4 md:px-6 py-12">
        {/* Progress Indicator */}
        <div className="mb-10 max-w-3xl mx-auto">
          <div className="flex items-center justify-between relative">
            {[1, 2, 3, 4, 5].map((sNum) => (
              <div key={sNum} className="flex flex-col items-center z-10">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                    step >= sNum
                      ? "bg-secondary text-white shadow-sm"
                      : "bg-surface-container text-on-surface-variant border border-outline-variant"
                  }`}
                >
                  {sNum}
                </div>
                <span className="text-[10px] font-semibold text-primary mt-1 hidden sm:block">
                  {sNum === 1 && "Service"}
                  {sNum === 2 && "Curtain Details"}
                  {sNum === 3 && "Date & Time"}
                  {sNum === 4 && "Contact"}
                  {sNum === 5 && "Confirm"}
                </span>
              </div>
            ))}
            <div className="absolute top-4 left-4 right-4 h-0.5 bg-outline-variant -z-0"></div>
          </div>
        </div>

        {/* Wizard Steps */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-primary/10 shadow-stitch p-6 md:p-10">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="font-headline text-3xl font-bold text-primary">Booking Confirmed!</h2>
              <p className="text-sm text-on-surface-variant max-w-md mx-auto">
                Thank you, <strong>{customer.name}</strong>. Your on-site curtain cleaning booking for <strong>{customer.suburb}</strong> has been received.
              </p>
              <div className="bg-surface-container p-4 rounded-2xl max-w-sm mx-auto text-xs text-primary space-y-1 text-left">
                <p><strong>Estimate:</strong> ${calculatedEstimate} AUD</p>
                <p><strong>Panels:</strong> {dropsCount} drops ({fabricType})</p>
                <p><strong>Preferred Slot:</strong> {preferredDate || "As soon as possible"} ({preferredTime})</p>
              </div>
              <div className="pt-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-primary text-white text-xs font-bold"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <>
              {/* STEP 1: SELECT SERVICE */}
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="font-headline text-2xl font-bold text-primary">Step 1: Select Service</h2>
                  <p className="text-xs text-on-surface-variant">Choose the primary curtain cleaning treatment required:</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SERVICES_DATA.slice(0, 4).map((srv) => (
                      <button
                        key={srv.id}
                        type="button"
                        onClick={() => setSelectedService(srv.id)}
                        className={`p-4 rounded-2xl border text-left transition-all ${
                          selectedService === srv.id
                            ? "bg-primary/5 border-2 border-primary shadow-sm"
                            : "border-outline-variant hover:border-primary"
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-headline font-bold text-primary text-base">{srv.title}</span>
                          <span className="text-[10px] bg-secondary/15 text-secondary font-bold px-2 py-0.5 rounded-full">
                            {srv.priceStart}
                          </span>
                        </div>
                        <p className="text-xs text-on-surface-variant">{srv.shortDesc}</p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: CURTAIN DETAILS */}
              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="font-headline text-2xl font-bold text-primary">Step 2: Curtain & Fabric Details</h2>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-primary">Number of Curtain Drops / Panels:</label>
                      <span className="text-sm font-bold text-secondary">{dropsCount} Panels</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="16"
                      value={dropsCount}
                      onChange={(e) => setDropsCount(parseInt(e.target.value))}
                      className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-secondary"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-primary block mb-2">Fabric Weave Type:</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: "sheer", name: "Sheer / Voile / Organza" },
                        { id: "linen", name: "Natural Linen / Cotton" },
                        { id: "silk", name: "Delicate Silk Blend" },
                        { id: "velvet", name: "Heavy Velvet / Drapes" },
                      ].map((fab) => (
                        <button
                          key={fab.id}
                          type="button"
                          onClick={() => setFabricType(fab.id)}
                          className={`p-3 rounded-xl text-xs font-semibold border text-left ${
                            fabricType === fab.id
                              ? "bg-primary text-white border-primary"
                              : "bg-surface text-on-surface border-outline-variant"
                          }`}
                        >
                          {fab.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-surface border border-outline-variant">
                    <input
                      type="checkbox"
                      id="mouldBook"
                      checked={mouldAddon}
                      onChange={(e) => setMouldAddon(e.target.checked)}
                      className="w-4 h-4 text-secondary accent-secondary"
                    />
                    <label htmlFor="mouldBook" className="text-xs text-on-surface cursor-pointer">
                      Add Botanical Mould & Spore Sanitisation (+$12/drop)
                    </label>
                  </div>
                </div>
              )}

              {/* STEP 3: DATE & TIME */}
              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="font-headline text-2xl font-bold text-primary">Step 3: Date & Preferred Time</h2>

                  <div>
                    <label className="text-xs font-bold text-primary block mb-1">Preferred Date:</label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-outline border-opacity-30 text-xs text-primary"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-primary block mb-2">Time Slot:</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {["Morning (8am - 12pm)", "Afternoon (12pm - 4pm)", "Late Afternoon (4pm - 6pm)"].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setPreferredTime(slot)}
                          className={`p-3 rounded-xl text-xs font-semibold border ${
                            preferredTime === slot
                              ? "bg-primary text-white border-primary"
                              : "bg-surface text-on-surface border-outline-variant"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: CONTACT INFO */}
              {step === 4 && (
                <div className="space-y-4">
                  <h2 className="font-headline text-2xl font-bold text-primary">Step 4: Customer Details</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-primary block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Vance"
                        value={customer.name}
                        onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl border border-outline border-opacity-30 text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-primary block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0400 000 000"
                        value={customer.phone}
                        onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl border border-outline border-opacity-30 text-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-primary block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@example.com"
                        value={customer.email}
                        onChange={(e) => setCustomer({ ...customer, email: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl border border-outline border-opacity-30 text-xs"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-primary block mb-1">Brisbane Suburb</label>
                      <input
                        type="text"
                        placeholder="e.g. New Farm"
                        value={customer.suburb}
                        onChange={(e) => setCustomer({ ...customer, suburb: e.target.value })}
                        className="w-full px-4 py-2 rounded-xl border border-outline border-opacity-30 text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-primary block mb-1">Street Address</label>
                    <input
                      type="text"
                      placeholder="123 James Street"
                      value={customer.address}
                      onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-outline border-opacity-30 text-xs"
                    />
                  </div>
                </div>
              )}

              {/* STEP 5: SUMMARY & CONFIRMATION */}
              {step === 5 && (
                <div className="space-y-6">
                  <h2 className="font-headline text-2xl font-bold text-primary">Step 5: Review & Confirm</h2>

                  <div className="bg-surface p-5 rounded-2xl border border-primary/10 space-y-3 text-xs">
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-on-surface-variant">Panels / Drops:</span>
                      <span className="font-bold text-primary">{dropsCount} drops ({fabricType})</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-on-surface-variant">Selected Treatment:</span>
                      <span className="font-bold text-primary">{selectedService}</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-on-surface-variant">Date & Time:</span>
                      <span className="font-bold text-primary">{preferredDate || "Flexible"} ({preferredTime})</span>
                    </div>
                    <div className="flex justify-between border-b border-primary/10 pb-2">
                      <span className="text-on-surface-variant">Customer:</span>
                      <span className="font-bold text-primary">{customer.name} ({customer.phone})</span>
                    </div>
                    <div className="flex justify-between pt-2 text-sm">
                      <span className="font-bold text-primary">Estimated Total:</span>
                      <span className="font-bold text-secondary text-base">${calculatedEstimate} AUD</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-8 border-t border-outline-variant/30 mt-8">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:text-secondary"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                ) : <div />}

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-white font-bold text-xs hover:bg-secondary-hover transition-all"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleConfirmBooking}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-white font-bold text-sm hover:bg-secondary-hover transition-all shadow-md"
                  >
                    <span>Confirm Booking</span>
                    <CheckCircle2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
