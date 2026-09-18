"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GALLERY_DATA } from "@/data/gallery";
import { ArrowRight, Sparkles, Filter } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredItems = activeCategory === "all"
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">Visual Proof</span>
          <h1 className="font-headline text-4xl lg:text-5xl font-bold mt-2">
            Curtain Cleaning Gallery & Results
          </h1>
          <p className="font-body text-base text-white/80 max-w-2xl mt-4 leading-relaxed">
            See real before & after transformations achieved in Brisbane residences using our low-moisture steam extraction.
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="max-w-[1240px] mx-auto px-4 md:px-6 py-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          <span className="text-xs font-semibold text-primary flex items-center gap-1 mr-2">
            <Filter className="w-3.5 h-3.5 text-secondary" /> Filter:
          </span>
          {[
            { id: "all", label: "All Works" },
            { id: "linen", label: "Linen Sheers" },
            { id: "sheer", label: "Voile & Lace" },
            { id: "velvet", label: "Velvet & Drapes" },
            { id: "before-after", label: "Before & After" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-sm"
                  : "bg-white text-on-surface hover:bg-surface-container border border-outline-variant"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-[1240px] mx-auto px-4 md:px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-primary/10 shadow-stitch hover:shadow-active transition-all space-y-4 p-6"
            >
              {/* Dual Before / After Image comparison */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface-container">
                  <Image
                    src={item.beforeImage}
                    alt={`${item.title} Before`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface-container">
                  <Image
                    src={item.afterImage}
                    alt={`${item.title} After`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-secondary backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    AFTER
                  </div>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline text-xl font-bold text-primary">{item.title}</h3>
                  <span className="text-[11px] font-semibold bg-surface-container text-primary px-3 py-1 rounded-full">
                    {item.suburb}
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-primary text-white py-12 text-center">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6 space-y-4">
          <h2 className="font-headline text-3xl font-bold">Want Your Curtains Looking This Fresh?</h2>
          <p className="text-sm text-white/80 max-w-md mx-auto">Get an instant quote online or schedule an on-site service date today.</p>
          <Link
            href="/book-now"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-white font-bold text-sm hover:bg-secondary-hover shadow-md transition-all"
          >
            <span>Book Your Cleaning</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
