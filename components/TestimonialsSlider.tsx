"use client";

import React, { useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    stars: "★★★★★",
    quote:
      "We have floor-to-ceiling linens in New Farm and I'd been putting off cleaning them for ages — too scared of shrinkage. The technician sorted them right on the rail. They came out looking brand new.",
    name: "Sarah M.",
    suburb: "New Farm",
    tag: "Linen Sheers",
    initial: "S",
  },
  {
    stars: "★★★★★",
    quote:
      "We're close to the river in Indooroopilly and the mould on our bedroom curtains was getting bad. Completely gone after the steam treatment — couldn't believe it honestly.",
    name: "David K.",
    suburb: "Indooroopilly",
    tag: "Mould Removal",
    initial: "D",
  },
  {
    stars: "★★★★★",
    quote:
      "On time, friendly, and no chemical smell at all. The pinch pleats on our living room curtains haven't looked this good since we bought them. Will book again.",
    name: "Michelle T.",
    suburb: "Paddington",
    tag: "Full Home Curtains",
    initial: "M",
  },
  {
    stars: "★★★★★",
    quote:
      "I honestly didn't expect much but the results were incredible. The blackout curtains in the kids' room had pet hair embedded everywhere. One visit and they're totally clean. So easy too — they didn't even need to come down.",
    name: "Lara F.",
    suburb: "Chermside",
    tag: "Pet Hair & Blackout",
    initial: "L",
  },
  {
    stars: "★★★★★",
    quote:
      "Booked on a Monday, they came Wednesday. The technician was professional, explained everything before starting, and our Roman blinds look perfect again. Booking a second appointment for the bedroom already.",
    name: "James W.",
    suburb: "Toowong",
    tag: "Roman Blinds",
    initial: "J",
  },
  {
    stars: "★★★★★",
    quote:
      "We're a rental property manager and I've started recommending these guys to all our tenants. End-of-lease curtain cleans that actually pass inspections. No drama, no damage, no complaints.",
    name: "Rachel H.",
    suburb: "Morningside",
    tag: "End of Lease",
    initial: "R",
  },
  {
    stars: "★★★★★",
    quote:
      "My velvet curtains are irreplaceable and I was terrified to clean them. The team was incredibly careful — they tested a small section first, explained exactly what they were doing, and the results were stunning.",
    name: "Cynthia A.",
    suburb: "Ascot",
    tag: "Luxury Velvet",
    initial: "C",
  },
  {
    stars: "★★★★★",
    quote:
      "We moved into a home that had been smoked in for years. The curtains reeked. After one treatment the smell is completely gone. I didn't think it was possible. Absolute lifesavers.",
    name: "Tom & Karen B.",
    suburb: "Wynnum",
    tag: "Smoke Odour",
    initial: "T",
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
          <span className="text-xs text-secondary uppercase font-semibold tracking-wider">
            WHAT CUSTOMERS SAY
          </span>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mt-2">
            Real Reviews from Brisbane Homes
          </h2>
          <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
            Customers from across Brisbane — Queenslanders, apartments, family homes.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleIndexes.map((tIdx, slotIdx) => {
            const t = TESTIMONIALS[tIdx];
            return (
              <div
                key={`${tIdx}-${slotIdx}`}
                className={`p-8 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 border border-primary/10
                  ${slotIdx >= 1 ? "hidden md:flex" : "flex"}
                  ${slotIdx >= 2 ? "md:hidden lg:flex" : ""}`}
              >
                <div className="space-y-4">
                  <div className="text-secondary text-base font-bold tracking-widest">
                    {t.stars}
                  </div>
                  <p className="text-sm text-on-surface italic leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/10 text-primary font-bold text-sm flex items-center justify-center shrink-0">
                      {t.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-primary">{t.name}</h4>
                      <span className="text-[11px] text-on-surface-variant">
                        {t.suburb}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-semibold shrink-0">
                    {t.tag}
                  </span>
                </div>
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
    </section>
  );
}
