"use client";

import React, { useState } from "react";
import { User, Mail, Phone, MapPin, Calendar, FileText, CheckCircle2, Lock, ChevronDown } from "lucide-react";

const SERVICES = [
  "Curtain Cleaning",
  "Sheer Cleaning",
  "Blind Cleaning",
  "Mould Treatment",
  "Stain Removal",
  "Odour Removal",
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    service: "Curtain Cleaning",
    instructions: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          services: [formData.service],
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10 space-y-4">
        <CheckCircle2 className="w-12 h-12 text-secondary mx-auto" />
        <h3 className="font-headline text-2xl font-bold text-primary">Booking Request Sent!</h3>
        <p className="text-sm text-on-surface-variant max-w-sm mx-auto">
          Thanks {formData.fullName}! We'll be in touch shortly to confirm your booking.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ fullName: "", email: "", phone: "", address: "", date: "", service: "Curtain Cleaning", instructions: "" });
          }}
          className="mt-2 px-6 py-2.5 rounded-full bg-primary text-white text-xs font-bold hover:bg-primary-dark transition-all"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Row 1 – Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-1.5">Full Name *</label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50 pointer-events-none" />
            <input
              type="text"
              required
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8fcfb] border border-primary/20 text-sm text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50"
            />
          </div>
        </div>
        <div>
          <label className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-1.5">Email *</label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50 pointer-events-none" />
            <input
              type="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8fcfb] border border-primary/20 text-sm text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50"
            />
          </div>
        </div>
      </div>

      {/* Row 2 – Phone & Address */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-1.5">Phone *</label>
          <div className="relative">
            <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50 pointer-events-none" />
            <input
              type="tel"
              required
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8fcfb] border border-primary/20 text-sm text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50"
            />
          </div>
        </div>
        <div>
          <label className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-1.5">Address *</label>
          <div className="relative">
            <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50 pointer-events-none" />
            <input
              type="text"
              required
              placeholder="Property Address"
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8fcfb] border border-primary/20 text-sm text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50"
            />
          </div>
        </div>
      </div>

      {/* Row 3 – Service & Date */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-1.5">Service *</label>
          <div className="relative">
            <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50 pointer-events-none" />
            <select
              required
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#f8fcfb] border border-primary/20 text-sm text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all appearance-none cursor-pointer"
            >
              {SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-1.5">Preferred Date *</label>
          <div className="relative">
            <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-primary/50 pointer-events-none" />
            <input
              type="date"
              required
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8fcfb] border border-primary/20 text-sm text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Row 4 – Notes */}
      <div>
        <label className="text-[11px] font-bold text-primary uppercase tracking-wider block mb-1.5">Additional Notes (Optional)</label>
        <div className="relative">
          <FileText className="absolute left-3.5 top-3.5 w-4 h-4 text-primary/50 pointer-events-none" />
          <textarea
            rows={3}
            placeholder="Stains, access notes, pets, parking, etc."
            value={formData.instructions}
            onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#f8fcfb] border border-primary/20 text-sm text-primary focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-on-surface-variant/50 resize-none"
          />
        </div>
      </div>

      {error && (
        <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-center">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 rounded-xl bg-secondary hover:bg-secondary-hover text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {loading ? "Sending..." : "Request Booking"}
        <CheckCircle2 className="w-4 h-4" />
      </button>

      <div className="flex items-center justify-center gap-2 text-on-surface-variant text-xs">
        <Lock className="w-3 h-3 text-secondary" />
        <span>No payment now · Free cancellation · We don't share your details</span>
      </div>
    </form>
  );
}
