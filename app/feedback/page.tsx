"use client";

import React, { useState } from "react";
import { Star, Send, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export default function FeedbackPage() {
  const [rating, setRating] = useState<number>(5);
  const [name, setName] = useState<string>("");
  const [suburb, setSuburb] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comments) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-white py-14">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">Client Feedback</span>
          <h1 className="font-headline text-4xl font-bold mt-1">Customer Reviews & Feedback</h1>
          <p className="text-xs text-white/80 max-w-lg mt-2">
            Read verified reviews from Brisbane residents or share your recent experience with our team.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-[1240px] mx-auto px-4 md:px-6 py-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Form */}
        <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-3xl border border-primary/10 shadow-stitch space-y-4">
          <h2 className="font-headline text-2xl font-bold text-primary">Leave a Review</h2>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-surface-container text-center space-y-2">
              <CheckCircle2 className="w-10 h-10 text-secondary mx-auto" />
              <h3 className="font-headline font-bold text-primary text-lg">Thank You!</h3>
              <p className="text-xs text-on-surface-variant">Your review has been submitted for verification.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold text-primary block mb-1">Star Rating:</label>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className="p-1 text-secondary hover:scale-110 transition-transform"
                    >
                      <Star className={`w-6 h-6 ${star <= rating ? "fill-secondary text-secondary" : "text-gray-300"}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-primary block mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. David Smith"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-outline border-opacity-30 text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-primary block mb-1">Brisbane Suburb</label>
                <input
                  type="text"
                  placeholder="e.g. Teneriffe"
                  value={suburb}
                  onChange={(e) => setSuburb(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-outline border-opacity-30 text-xs"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-primary block mb-1">Your Feedback *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="How was the on-site curtain cleaning service?"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-outline border-opacity-30 text-xs"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-white text-xs font-bold hover:bg-secondary-hover shadow-sm"
              >
                <span>Submit Feedback</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Existing Reviews */}
        <div className="lg:col-span-7 space-y-4">
          <h2 className="font-headline text-2xl font-bold text-primary mb-4">Verified Customer Testimonials</h2>
          <div className="space-y-4">
            {TESTIMONIALS_DATA.map((t) => (
              <div key={t.id} className="bg-white p-6 rounded-2xl border border-primary/10 shadow-stitch space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-secondary">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary" />
                    ))}
                  </div>
                  <span className="text-[10px] text-on-surface-variant">{t.date}</span>
                </div>
                <p className="text-xs text-on-surface leading-relaxed italic">"{t.quote}"</p>
                <div className="pt-2 border-t border-outline-variant/20 flex items-center justify-between">
                  <div>
                    <span className="font-bold text-xs text-primary block">{t.name}</span>
                    <span className="text-[11px] text-on-surface-variant">{t.suburb}</span>
                  </div>
                  <span className="text-[10px] font-semibold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded-full">
                    {t.service}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
