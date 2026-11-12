"use client";

import React, { useState } from "react";
import { Star, Send, CheckCircle2, ShieldCheck, MessageSquareHeart } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import BookingForm from "@/components/BookingForm";
import GoogleReviewCard, { GoogleGLogo } from "@/components/GoogleReviewCard";

export default function FeedbackPage() {
  const [rating, setRating] = useState<number>(5);
  const [name, setName] = useState<string>("");
  const [suburb, setSuburb] = useState<string>("");
  const [service, setService] = useState<string>("Linen & Sheer Cleaning");
  const [comments, setComments] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !comments) return;
    setSubmitted(true);
  };

  return (
    <div className="w-full">
      {/* Header Banner */}
      <section className="bg-[#1B3C59] text-white py-16">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#FFA877] text-xs font-bold uppercase tracking-wider mb-3 border border-white/20 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            CUSTOMER REVIEWS & FEEDBACK
          </div>
          <h1 className="font-headline text-4xl lg:text-5xl font-bold mt-1 text-white">
            Real Reviews from Brisbane Homes
          </h1>
          <p className="font-body text-sm sm:text-base text-white/85 max-w-2xl mt-3 leading-relaxed">
            Read verified Google reviews from households across Greater Brisbane or share your recent experience with our on-site curtain care team.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-white">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20 shadow-xs text-white">
              <GoogleGLogo className="w-4 h-4 shrink-0" />
              <span className="text-[#fbbc04] font-bold tracking-wider">★★★★★</span>
              <span className="font-bold">4.9 / 5 Google Review Score</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-full border border-white/20 text-white/90">
              <ShieldCheck className="w-4 h-4 text-secondary-container" />
              <span>100% Verified Local Homeowners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reviews & Feedback Form Grid */}
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Submit Feedback Form */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-primary/10 shadow-stitch space-y-6 lg:sticky lg:top-28">
            <div className="space-y-1">
              <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                SHARE YOUR EXPERIENCE
              </span>
              <h2 className="font-headline text-2xl font-bold text-primary">
                Leave a Review
              </h2>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Had your curtains cleaned recently? Tell us how our technician did.
              </p>
            </div>

            {submitted ? (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="p-5 rounded-2xl bg-surface-tinted border border-primary/15 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline font-bold text-primary text-base">Thank You, {name}!</h3>
                    <p className="text-xs text-on-surface-variant leading-relaxed">
                      Your feedback has been submitted successfully.
                    </p>
                  </div>
                </div>

                <div className="pt-1">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Preview of your review:</p>
                  <GoogleReviewCard
                    name={name}
                    initial={name.charAt(0).toUpperCase()}
                    avatarBg="bg-[#5c6bc0]"
                    timeAgo="Just now"
                    rating={rating}
                    quote={comments}
                    suburb={suburb ? `${suburb}, Brisbane` : "Brisbane"}
                    tag={service}
                    verified={true}
                  />
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Star Rating Picker */}
                <div>
                  <label className="text-xs font-bold text-primary block mb-1.5">
                    Your Rating *
                  </label>
                  <div className="flex items-center gap-1.5 bg-surface p-2.5 rounded-xl border border-primary/10">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 text-secondary hover:scale-115 transition-transform"
                        aria-label={`Rate ${star} star`}
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating
                              ? "fill-secondary text-secondary"
                              : "text-outline-variant"
                          }`}
                        />
                      </button>
                    ))}
                    <span className="ml-2 text-xs font-bold text-primary">
                      {rating} of 5 Stars
                    </span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-primary block mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Mitchell"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-primary/20 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 bg-surface/50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold text-primary block mb-1">
                      Brisbane Suburb
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. New Farm"
                      value={suburb}
                      onChange={(e) => setSuburb(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-primary/20 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 bg-surface/50"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-primary block mb-1">
                      Service Type
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl border border-primary/20 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 bg-surface/50 text-on-surface"
                    >
                      <option>Linen & Sheer Cleaning</option>
                      <option>Mould Removal & Sanitisation</option>
                      <option>Heavy Velvet & Blackout</option>
                      <option>Roman & Fabric Blinds</option>
                      <option>Whole-Home Curtain Care</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-primary block mb-1">
                    Your Feedback *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about the results, drying time, technician service..."
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-primary/20 text-xs focus:outline-none focus:ring-2 focus:ring-primary/20 bg-surface/50 leading-relaxed"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary hover:bg-secondary-hover text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all duration-200"
                >
                  <span>Submit Your Review</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Existing Verified Reviews Stream in Google Format */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-2.5">
                <GoogleGLogo className="w-5 h-5 shrink-0" />
                <div>
                  <h2 className="font-headline text-2xl font-bold text-primary">
                    Verified Google Reviews
                  </h2>
                  <p className="text-xs text-on-surface-variant">
                    Recent verified feedback from Brisbane customers
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                {TESTIMONIALS_DATA.length} Verified
              </span>
            </div>

            <div className="space-y-4">
              {TESTIMONIALS_DATA.map((t) => (
                <GoogleReviewCard
                  key={t.id}
                  name={t.name}
                  initial={t.initial}
                  avatarBg={t.avatarBg}
                  timeAgo={t.timeAgo || t.date}
                  rating={t.rating}
                  quote={t.quote}
                  suburb={t.suburb}
                  tag={t.service}
                  verified={t.verified}
                  truncateLength={130}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Single Bottom Booking Form Section */}
      <section className="w-full bg-surface-container py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-4 lg:pt-4">
              <span className="text-xs uppercase tracking-wider text-secondary font-semibold">
                BOOK A CLEAN
              </span>
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary leading-tight">
                Ready to Refresh Your Curtains?
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Join our satisfied Brisbane customers. We clean on-site while hanging with fast 2-4 hour drying.
              </p>
              <ul className="space-y-2 pt-2 text-sm text-on-surface">
                {[
                  "No need to take curtains down",
                  "Fixed upfront price — no surprises",
                  "Safe for delicate silks, linen & voiles",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-8 bg-white rounded-3xl shadow-stitch border border-primary/10 overflow-hidden">
              <div className="bg-surface-tinted px-8 py-5 border-b border-primary/10">
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
