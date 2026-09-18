"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const articles = [
    {
      id: "1",
      category: "schedule",
      categoryLabel: "Care Schedule",
      title: "How Often Should You Professionally Clean Your Curtains in Brisbane?",
      date: "September 14, 2026",
      readTime: "5 min read",
      excerpt: "From humid summer storm seasons to high airborne river pollen, Brisbane's unique subtropical climate dictates a distinct fabric care cycle. Discover the ideal timeline for sheers, blockouts, and living room drapes.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnBgX49e48D-ncD08CraiK9U9t1mdaw4Mrn9oe4wJWp1kUVOKCQUlb1tld4ya0qksub1sJ-TyCSq06K9nJ6IL2WXf9e_sogyv7YBk5WB4t_iP_pcS_5EGksdTUgtA5UZ1nRR56St4v_0j9Q3T6GMAy7bEQXzClrNRZWHLmyGOaZpbvQ3BjUAyuROhpT9pa3SFkcYEtG1XqxvO5NipVGe1KwRL4PDYwP8rkgJUOYNRC_yLoigFxV_O6yg",
    },
    {
      id: "2",
      category: "climate",
      categoryLabel: "Climate & Mould",
      title: "Why Brisbane Humidity Demands Regular Curtain Care",
      date: "September 02, 2026",
      readTime: "6 min read",
      excerpt: "With summer humidity levels frequently pushing beyond 75%, window drapery acts as an unintended moisture trap. Learn how to prevent mildew spores from bonding to delicate fibres before costly textile damage occurs.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDTkpu4OoAvcxme9NS1p-sdRx-nzERtYdhFot1Ynoi7wSx_T4GNG6R1_qwfjDVVE1aG1UzZtdiGZvWALOvHAZS6Mv6Be7Gwi4AENbAaOJ-1rrNZUOOfB3KsjH4RRsZTsPO2cr5nGGW1HkgissbimjOaIVp5pgCF8B951eDPlgWRvd6fFKekMjabOLhAZXEcnr_GIJHNi_pysKs5-cohE2vfJLcS7SkMEXjd5x_fbQ8Lzn-lYnfj-SBC6Q",
    },
  ];

  const filteredArticles = activeCategory === "all"
    ? articles
    : articles.filter(a => a.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-primary text-white pt-12 pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-[1240px] mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container text-secondary-container text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Fabric Care Knowledge & Insights
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-3xl mb-4">
            Curtain Care Tips & Advice
          </h1>
          <p className="font-body text-base sm:text-lg text-on-primary-container max-w-2xl leading-relaxed">
            Simple tips, helpful guides, and expert fabric care advice from our local Brisbane team for Queenslanders, modern residences, and heritage drapes.
          </p>

          {/* Trust Bar / Readership Highlights */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-on-primary-container text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container text-[18px]">verified_user</span>
              <span>Brisbane Climate Tested</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container text-[18px]">dry_cleaning</span>
              <span>Delicate & Sheer Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container text-[18px]">nest_eco_leaf</span>
              <span>Zero Fabric Shrinkage</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TOOLBAR */}
      <section className="relative z-10 -mt-7 w-full max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="bg-white rounded-full p-2 shadow-md flex items-center gap-2 overflow-x-auto border border-primary/10">
          {[
            { id: "all", label: "All Articles" },
            { id: "schedule", label: "Care Schedule" },
            { id: "climate", label: "Brisbane Climate & Mould" },
            { id: "sheers", label: "Sheers & Delicates" },
            { id: "technique", label: "DIY vs Pro" },
            { id: "protection", label: "UV & Protection" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-surface text-on-surface-variant hover:text-primary"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. MAIN ARTICLE GRID */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredArticles.map((art) => (
            <article
              key={art.id}
              className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/10 group"
            >
              <div className="relative w-full h-64 lg:h-72 overflow-hidden">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-primary/85 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                  {art.categoryLabel}
                </span>
              </div>
              <div className="p-6 lg:p-8 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-on-surface-variant text-xs mb-3 font-medium">
                    <span>{art.date}</span>
                    <span>•</span>
                    <span>Curtain Cleaning Brisbane</span>
                    <span>•</span>
                    <span>{art.readTime}</span>
                  </div>
                  <h2 className="font-headline text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-3">
                    {art.title}
                  </h2>
                  <p className="text-xs text-on-surface-variant leading-relaxed mb-4">
                    {art.excerpt}
                  </p>
                </div>
                <div>
                  <Link
                    href="/book-now"
                    className="inline-flex items-center gap-2 text-xs font-bold text-secondary hover:text-secondary-hover transition-colors"
                  >
                    <span>Read Article</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. SUBTROPICAL FABRIC INDEX QUICK FACTS BANNER */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 mb-16">
        <div className="bg-surface-container rounded-3xl p-8 lg:p-12 border border-primary/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-secondary font-semibold text-xs uppercase tracking-widest block">Subtropical Fabric Index</span>
              <h3 className="font-headline text-2xl font-bold text-primary">Local Weather & Indoor Air Health</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Brisbane's river valleys and sea breezes carry microscopic humidity and particulate layers that standard home dusting simply cannot neutralize.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between border border-primary/10">
                <div>
                  <span className="material-symbols-outlined text-secondary text-3xl mb-3">water_drop</span>
                  <div className="font-headline text-xl font-bold text-primary mb-1">76% Avg</div>
                  <div className="font-bold text-xs text-on-surface mb-2">Summer Humidity</div>
                  <p className="text-[11px] text-on-surface-variant">Absorbed directly into heavy cotton and linen drapery linings.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-surface-container text-tertiary text-xs font-semibold">Requires dry-vapour sanitisation</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between border border-primary/10">
                <div>
                  <span className="material-symbols-outlined text-secondary text-3xl mb-3">flare</span>
                  <div className="font-headline text-xl font-bold text-primary mb-1">UV Index 11+</div>
                  <div className="font-bold text-xs text-on-surface mb-2">Sun Degeneration</div>
                  <p className="text-[11px] text-on-surface-variant">Makes unmaintained dry fabric brittle and prone to shredding.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-surface-container text-tertiary text-xs font-semibold">Thermal conditioning preserves life</div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between border border-primary/10">
                <div>
                  <span className="material-symbols-outlined text-secondary text-3xl mb-3">air</span>
                  <div className="font-headline text-xl font-bold text-primary mb-1">98.4%</div>
                  <div className="font-bold text-xs text-on-surface mb-2">Pollen Trapping</div>
                  <p className="text-[11px] text-on-surface-variant">Window sheer fabric acts as natural outdoor dust filters.</p>
                </div>
                <div className="mt-4 pt-3 border-t border-surface-container text-tertiary text-xs font-semibold">Gentle in-situ pollen extraction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOTTOM ADVISORY CTA BANNER */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 pb-16">
        <div className="relative bg-primary text-white rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden shadow-xl">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative max-w-2xl mx-auto text-center flex flex-col items-center space-y-4 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container text-secondary-container text-xs font-semibold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">support_agent</span>
              Expert Brisbane Fabric Advice
            </div>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Have a Question About Your Curtains?
            </h2>
            <p className="text-xs sm:text-sm text-on-primary-container leading-relaxed">
              Our certified master technicians are always ready to assess your specific window furnishings, delicate weave types, and custom rail heights across all Brisbane suburbs.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-2">
              <Link
                href="/book-now"
                className="w-full sm:w-auto inline-flex items-center justify-center font-bold text-xs bg-secondary hover:bg-secondary-hover text-white px-8 py-3.5 rounded-full shadow-md transition-all"
              >
                Enquire Now
              </Link>
              <a
                href="tel:0405849841"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-bold bg-transparent text-white border border-white/30 hover:bg-white/10 px-8 py-3.5 rounded-full transition-all"
              >
                <Phone className="w-4 h-4 text-secondary-container" />
                <span>0405 849 841</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
