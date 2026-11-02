"use client";

import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight, MessageSquareHeart } from "lucide-react";
import GoogleReviewCard, { GoogleGLogo } from "@/components/GoogleReviewCard";

const TESTIMONIALS = [
  {
    id: "nine-handajani",
    name: "Nine Handajani",
    initial: "N",
    avatarBg: "bg-[#5c6bc0]",
    timeAgo: "11 months ago",
    rating: 5,
    quote:
      "Excellent work. These guys are very professional and quick services on Brisbane for carpet cleaning, curtain cleaning and fabric repairs. Restored our heavy drapes to pristine condition without having to take them down.",
    suburb: "Brisbane City",
    tag: "Curtains & Fabric Care",
    verified: true,
  },
  {
    id: "sarah-m",
    name: "Sarah Mitchell",
    initial: "S",
    avatarBg: "bg-[#0b8043]",
    timeAgo: "2 months ago",
    rating: 5,
    quote:
      "We have floor-to-ceiling linens in New Farm and I'd been putting off cleaning them for ages — too scared of shrinkage. The technician sorted them right on the rail. They came out looking brand new.",
    suburb: "New Farm",
    tag: "Linen Sheers",
    verified: true,
  },
  {
    id: "david-k",
    name: "David Kelly",
    initial: "D",
    avatarBg: "bg-[#f4511e]",
    timeAgo: "4 months ago",
    rating: 5,
    quote:
      "We're close to the river in Indooroopilly and the mould on our bedroom curtains was getting bad. Completely gone after the steam treatment — couldn't believe it honestly.",
    suburb: "Indooroopilly",
    tag: "Mould Removal",
    verified: true,
  },
  {
    id: "michelle-t",
    name: "Michelle Turner",
    initial: "M",
    avatarBg: "bg-[#8e24aa]",
    timeAgo: "5 months ago",
    rating: 5,
    quote:
      "On time, friendly, and no chemical smell at all. The pinch pleats on our living room curtains haven't looked this good since we bought them. Will book again.",
    suburb: "Paddington",
    tag: "Full Home Curtains",
    verified: true,
  },
  {
    id: "lara-f",
    name: "Lara Fletcher",
    initial: "L",
    avatarBg: "bg-[#039be5]",
    timeAgo: "6 months ago",
    rating: 5,
    quote:
      "I honestly didn't expect much but the results were incredible. The blackout curtains in the kids' room had pet hair embedded everywhere. One visit and they're totally clean. So easy too — they didn't even need to come down.",
    suburb: "Chermside",
    tag: "Pet Hair & Blackout",
    verified: true,
  },
  {
    id: "james-w",
    name: "James Wilson",
    initial: "J",
    avatarBg: "bg-[#00897b]",
    timeAgo: "8 months ago",
    rating: 5,
    quote:
      "Booked on a Monday, they came Wednesday. The technician was professional, explained everything before starting, and our Roman blinds look perfect again. Booking a second appointment for the bedroom already.",
    suburb: "Toowong",
    tag: "Roman Blinds",
    verified: true,
  },
  {
    id: "rachel-h",
    name: "Rachel Hughes",
    initial: "R",
    avatarBg: "bg-[#e040fb]",
    timeAgo: "10 months ago",
    rating: 5,
    quote:
      "We're a rental property manager and I've started recommending these guys to all our tenants. End-of-lease curtain cleans that actually pass inspections. No drama, no damage, no complaints.",
    suburb: "Morningside",
    tag: "End of Lease",
    verified: true,
  },
  {
    id: "cynthia-a",
    name: "Cynthia Adams",
    initial: "C",
    avatarBg: "bg-[#e67c73]",
    timeAgo: "1 year ago",
    rating: 5,
    quote:
      "My velvet curtains are irreplaceable and I was terrified to clean them. The team was incredibly careful — they tested a small section first, explained exactly what they were doing, and the results were stunning.",
    suburb: "Ascot",
    tag: "Luxury Velvet",
    verified: true,
  },
  {
    id: "tom-karen",
    name: "Tom & Karen Bennett",
    initial: "T",
    avatarBg: "bg-[#3949ab]",
    timeAgo: "1 year ago",
    rating: 5,
    quote:
      "We moved into a home that had been smoked in for years. The curtains reeked. After one treatment the smell is completely gone. I didn't think it was possible. Absolute lifesavers.",
    suburb: "Wynnum",
    tag: "Smoke Odour",
    verified: true,
  },
];

const VISIBLE = 3;

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;
  const maxIndex = total - 1;

  const dragStartX = useRef<number | null>(null);
  const dragDelta = useRef(0);
  const isDragging = useRef(false);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? maxIndex : c - 1));
  }, [maxIndex]);

  const next = useCallback(() => {
    setCurrent((c) => (c === maxIndex ? 0 : c + 1));
  }, [maxIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || dragStartX.current === null) return;
    dragDelta.current = e.touches[0].clientX - dragStartX.current;
  };
  const onTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragDelta.current < -50) next();
    else if (dragDelta.current > 50) prev();
    dragDelta.current = 0;
    dragStartX.current = null;
  };

  const onMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = true;
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || dragStartX.current === null) return;
    dragDelta.current = e.clientX - dragStartX.current;
  };
  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (dragDelta.current < -50) next();
    else if (dragDelta.current > 50) prev();
    dragDelta.current = 0;
    dragStartX.current = null;
  };

  const getVisibleIndexes = () => {
    const indexes: number[] = [];
    for (let i = 0; i < VISIBLE; i++) {
      indexes.push((current + i) % total);
    }
    return indexes;
  };

  const visibleIndexes = getVisibleIndexes();

  return (
    <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#e8eaed] shadow-sm mb-3">
            <GoogleGLogo className="w-4 h-4" />
            <span className="text-xs font-bold text-gray-800">Google Reviews</span>
            <div className="flex items-center text-[#fbbc04]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-[#fbbc04]" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="text-xs font-semibold text-gray-600">4.9 / 5.0</span>
          </div>

          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary">
            Real Reviews from Brisbane Homes
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
            Verified feedback from homeowners and property managers across Greater Brisbane.
          </p>
        </div>

        {/* Prev / Next Arrows + counter */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-11 h-11 rounded-full border-2 border-primary/20 bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="text-xs font-semibold text-on-surface-variant tabular-nums">
            {current + 1} / {total}
          </span>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-11 h-11 rounded-full border-2 border-primary/20 bg-white text-primary flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Draggable area */}
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {visibleIndexes.map((tIdx, slotIdx) => {
            const t = TESTIMONIALS[tIdx];
            return (
              <div
                key={`${tIdx}-${slotIdx}`}
                className={`h-full ${slotIdx >= 1 ? "hidden md:block" : "block"} ${
                  slotIdx >= 2 ? "md:hidden lg:block" : ""
                }`}
              >
                <GoogleReviewCard
                  name={t.name}
                  initial={t.initial}
                  avatarBg={t.avatarBg}
                  timeAgo={t.timeAgo}
                  rating={t.rating}
                  quote={t.quote}
                  suburb={t.suburb}
                  tag={t.tag}
                  verified={t.verified}
                  truncateLength={120}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? "w-6 h-2.5 bg-secondary"
                : "w-2.5 h-2.5 bg-primary/20 hover:bg-primary/40"
            }`}
          />
        ))}
      </div>

      {/* Review Summary & Feedback CTA Card */}
      <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-primary/10 shadow-stitch flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="space-y-1.5">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <GoogleGLogo className="w-5 h-5 shrink-0" />
            <span className="text-[#fbbc04] text-base font-bold tracking-wider">★★★★★</span>
            <span className="text-xs font-bold text-primary">
              4.9 / 5.0 Google Rating from Brisbane Residents
            </span>
          </div>
          <h3 className="font-headline text-xl sm:text-2xl font-bold text-primary">
            Had your curtains cleaned with us?
          </h3>
          <p className="text-xs sm:text-sm text-on-surface-variant max-w-lg leading-relaxed">
            We value your experience. Read authentic Google reviews from your Brisbane neighbours or share your feedback with our team.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3 shrink-0">
          <Link
            href="/feedback"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-bold shadow-sm hover:shadow transition-all duration-200 group"
          >
            <MessageSquareHeart className="w-4 h-4 text-secondary-container" />
            <span>Read All Reviews & Leave Feedback</span>
            <ArrowRight className="w-4 h-4 text-secondary-container group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
