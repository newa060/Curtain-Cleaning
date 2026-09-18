"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ChevronDown } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    suburb: "",
    serviceRequired: "On-Site Steam Cleaning",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.email) {
      setError("Please fill in all required fields.");
      return;
    }

    setError("");
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        suburb: "",
        serviceRequired: "On-Site Steam Cleaning",
        message: "",
      });
    }, 1000);
  };

  const faqs = [
    {
      q: "Do I need to take my curtains off the tracks before you arrive?",
      a: "No! Our signature process is 100% in-situ. We clean your curtains while they hang naturally on your existing runners and tracks.",
    },
    {
      q: "How long does it take for curtains to dry completely?",
      a: "Because we use regulated low-moisture steam extraction, drying typically takes only 2 to 4 hours depending on room ventilation.",
    },
    {
      q: "Is there any risk of shrinkage or fabric discoloration?",
      a: "None. We pre-test your fabric weave and adjust temperature and moisture levels specifically for delicate sheers, silk, linen, or velvet.",
    },
    {
      q: "What areas of Brisbane do you service?",
      a: "We service Greater Brisbane including Northside, Southside, Inner City (New Farm, Ascot, Bulimba, Paddington), and surrounding bayside suburbs.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">Get In Touch</span>
          <h1 className="font-headline text-4xl lg:text-5xl font-bold mt-2">
            Contact Curtain Cleaning Brisbane
          </h1>
          <p className="font-body text-base text-white/80 max-w-xl mt-3 leading-relaxed">
            Have questions or need an on-site consultation? Contact our friendly local team today.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-[1240px] mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-primary/10 shadow-stitch space-y-4">
              <h2 className="font-headline text-2xl font-bold text-primary">Direct Contact</h2>

              <a href="tel:0405849841" className="flex items-start gap-3 p-3 rounded-xl hover:bg-surface-container transition-colors">
                <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-on-surface-variant font-semibold block">Phone Line</span>
                  <span className="font-bold text-primary text-base">0405 849 841</span>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-on-surface-variant font-semibold block">Email Support</span>
                  <span className="font-bold text-primary text-sm">info@curtaincleaningbrisbane.com.au</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-on-surface-variant font-semibold block">Headquarters & Service Area</span>
                  <span className="font-bold text-primary text-sm">Brisbane QLD 4000 & Surrounding Suburbs</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl border-t border-outline-variant/30 pt-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-on-surface-variant font-semibold block">Operating Hours</span>
                  <span className="text-xs font-semibold text-primary block">Mon – Sat: 7:00 AM – 6:00 PM</span>
                  <span className="text-[11px] text-on-surface-variant">Sunday: By Appointment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-primary/10 shadow-stitch">
            <h2 className="font-headline text-2xl font-bold text-primary mb-2">Send Us a Message</h2>
            <p className="text-xs text-on-surface-variant mb-6">
              Fill out the form below and our team will get back to you within 2 business hours.
            </p>

            {success ? (
              <div className="p-6 rounded-2xl bg-surface-container border border-primary/20 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-headline text-xl font-bold text-primary">Message Received!</h3>
                <p className="text-xs text-on-surface-variant max-w-sm mx-auto">
                  Thank you for reaching out. One of our Brisbane curtain technicians will contact you shortly on <strong>{formData.phone}</strong>.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-4 px-6 py-2 rounded-full bg-primary text-white text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs font-semibold">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-primary block mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Vance"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-outline border-opacity-30 focus:border-primary focus:ring-1 focus:ring-primary text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-primary block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0400 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-outline border-opacity-30 focus:border-primary focus:ring-1 focus:ring-primary text-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-primary block mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-outline border-opacity-30 focus:border-primary focus:ring-1 focus:ring-primary text-xs"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-primary block mb-1">Suburb / Location</label>
                    <input
                      type="text"
                      placeholder="e.g. New Farm"
                      value={formData.suburb}
                      onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-outline border-opacity-30 focus:border-primary focus:ring-1 focus:ring-primary text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-primary block mb-1">Service Required</label>
                  <select
                    value={formData.serviceRequired}
                    onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline border-opacity-30 focus:border-primary text-xs"
                  >
                    <option value="On-Site Steam Cleaning">On-Site Steam Cleaning</option>
                    <option value="Ultrasonic Deep Clean">Ultrasonic Deep Clean</option>
                    <option value="Subtropical Mould Removal">Subtropical Mould Removal</option>
                    <option value="Sheer Drapery Care">Sheer Drapery Care</option>
                    <option value="Commercial Inspection">Commercial / Hotel Inspection</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-semibold text-primary block mb-1">Message / Project Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the number of curtains, fabric types, or specific stains..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-outline border-opacity-30 focus:border-primary text-xs"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-secondary text-white font-bold text-sm hover:bg-secondary-hover transition-all disabled:opacity-50 shadow-md"
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-wider text-secondary font-semibold">Common Questions</span>
            <h2 className="font-headline text-3xl font-bold text-primary mt-1">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-primary/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-headline font-bold text-primary flex items-center justify-between gap-4 text-base"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-secondary transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-on-surface-variant leading-relaxed border-t border-primary/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
