import React from "react";
import { ShieldCheck } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import BookingForm from "@/components/BookingForm";
import GoogleReviewCard, { GoogleGLogo } from "@/components/GoogleReviewCard";
import { CheckCircle2 } from "lucide-react";

export default function FeedbackPage() {
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
            Read verified Google reviews from households across Greater Brisbane — real feedback from real customers.
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

      {/* Reviews Grid */}
      <div className="max-w-[1240px] mx-auto px-4 md:px-6 py-14">
        <div className="flex items-center justify-between pb-6 border-b border-primary/10 mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

      {/* Bottom Booking Form Section */}
      <section className="w-full bg-[#F3EDE2] py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-4 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-secondary text-xs font-bold uppercase tracking-wider border border-primary/10 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                BOOK A CLEAN
              </span>
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary leading-tight">
                Ready to Refresh Your Curtains?
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Join our satisfied Brisbane customers. We clean on-site while hanging with fast 2–4 hour drying.
              </p>
              <ul className="space-y-3 pt-1 text-sm text-on-surface font-medium">
                {[
                  "No need to take curtains down",
                  "Fixed upfront price — no surprises",
                  "Safe for delicate silks, linen & voiles",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-8 bg-white rounded-3xl shadow-xl border border-primary/10 overflow-hidden">
              <div className="bg-[#FAF8F5] px-8 py-5 border-b border-primary/10">
                <h3 className="font-headline text-xl font-bold text-primary">Request a Booking</h3>
                <p className="text-xs text-on-surface-variant mt-0.5">We&apos;ll get back to you the same day.</p>
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
