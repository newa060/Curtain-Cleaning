"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import { ArrowRight, Phone, Clock, Calendar, User } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filterCategories = [
    { id: "all", label: "All Articles" },
    { id: "schedule", label: "Care Schedule" },
    { id: "climate", label: "Climate & Mould" },
  ];

  const filteredArticles =
    activeCategory === "all"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((art) => art.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO SECTION */}
      <section className="relative w-full bg-primary text-white pt-12 pb-20 px-4 md:px-6 overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>
        <div className="relative max-w-[1240px] mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container text-secondary-container text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            TIPS & ADVICE
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-3xl mb-4">
            Curtain Care & Cleaning Articles
          </h1>
          <p className="font-body text-base sm:text-lg text-on-primary-container max-w-2xl leading-relaxed">
            Practical guides and fabric care tips from our Brisbane team — covering cleaning schedules, mould prevention, fabric safety, and Brisbane climate advice.
          </p>

          {/* Trust Highlights Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-on-primary-container text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container text-[18px]">
                verified_user
              </span>
              <span>Tested in Brisbane conditions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container text-[18px]">
                dry_cleaning
              </span>
              <span>Safe for sheers & delicates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary-container text-[18px]">
                nest_eco_leaf
              </span>
              <span>Zero fabric shrinkage</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTER TOOLBAR */}
      <section className="relative z-10 -mt-7 w-full max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="bg-white rounded-full p-2 shadow-md flex items-center justify-center gap-2 overflow-x-auto border border-primary/10 scrollbar-none max-w-md mx-auto">
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-surface text-on-surface-variant hover:text-primary hover:bg-surface-container"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. MAIN ARTICLES GRID (2 ARTICLES) */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-16">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-primary/10">
            <h3 className="font-headline text-xl font-bold text-primary mb-2">
              No articles found in this category
            </h3>
            <p className="text-xs text-on-surface-variant mb-4">
              Try selecting another topic filter above to explore our curtain care articles.
            </p>
            <button
              onClick={() => setActiveCategory("all")}
              className="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-dark transition-all"
            >
              View All Articles
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-4xl mx-auto">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-primary/10 group"
              >
                <Link href={`/blog/${art.slug}`} className="relative w-full h-64 overflow-hidden block">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    {art.categoryLabel}
                  </span>
                </Link>

                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-3 text-on-surface-variant text-xs mb-3 font-medium">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-secondary" />
                        {art.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-secondary" />
                        {art.readTime}
                      </span>
                    </div>

                    <h2 className="font-headline text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-3 leading-snug">
                      <Link href={`/blog/${art.slug}`}>{art.title}</Link>
                    </h2>

                    <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-surface-container flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-medium">
                      <User className="w-3.5 h-3.5 text-primary" />
                      <span>{art.author}</span>
                    </div>
                    <Link
                      href={`/blog/${art.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary hover:text-secondary-hover transition-colors"
                    >
                      <span>Read Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* MID-PAGE BOOKING CTA */}
      <section className="w-full bg-primary py-16 lg:py-20 px-4 md:px-6 my-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-secondary-container text-xs font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Book a Clean
            </span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white leading-tight">
              Get Your Curtains Cleaned This Week
            </h2>
            <p className="text-sm text-on-primary-container leading-relaxed">
              No taking curtains down. No upfront payment. We come to you, clean everything on the rail, and leave the same day.
            </p>
            <ul className="space-y-2.5 text-sm text-on-primary-container">
              {["Same-week appointments available", "Free quote before we start", "Safe for all fabric types"].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-secondary-container text-base">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl border border-primary/10 overflow-hidden">
            <div className="bg-[#f0f7f5] px-8 py-5 border-b border-primary/10">
              <h3 className="font-headline text-xl font-bold text-primary">Request a Booking</h3>
              <p className="text-xs text-on-surface-variant mt-0.5">We'll confirm the same day — no payment needed now.</p>
            </div>
            <div className="p-6 sm:p-8">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* 4. BRISBANE CLIMATE FACTS STRIP */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 mb-16">
        <div className="bg-surface-container rounded-3xl p-8 lg:p-12 border border-primary/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              <span className="text-secondary font-semibold text-xs uppercase tracking-widest block">
                BRISBANE CONDITIONS
              </span>
              <h3 className="font-headline text-2xl font-bold text-primary">
                Why Brisbane Homes Need Specialized Curtain Care
              </h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Sub-tropical humidity, high UV index, and pollen cycles require tailored fabric care techniques to keep curtains fresh and long-lasting.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between border border-primary/10">
                <div>
                  <span className="material-symbols-outlined text-secondary text-3xl mb-3">
                    water_drop
                  </span>
                  <div className="font-headline text-xl font-bold text-primary mb-1">
                    76%
                  </div>
                  <div className="font-bold text-xs text-on-surface mb-2">
                    Average Summer Humidity
                  </div>
                  <p className="text-[11px] text-on-surface-variant">
                    Heavy drapery absorbs ambient humidity, promoting mould spores if uncleaned.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-surface-container text-tertiary text-xs font-semibold">
                  Anti-fungal steam prevents this
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between border border-primary/10">
                <div>
                  <span className="material-symbols-outlined text-secondary text-3xl mb-3">
                    flare
                  </span>
                  <div className="font-headline text-xl font-bold text-primary mb-1">
                    UV Index 11+
                  </div>
                  <div className="font-bold text-xs text-on-surface mb-2">
                    UV Exposure
                  </div>
                  <p className="text-[11px] text-on-surface-variant">
                    Dust bakes under harsh solar heat, causing thread rot and yellowing.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-surface-container text-tertiary text-xs font-semibold">
                  Regular steam extends fabric life
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between border border-primary/10">
                <div>
                  <span className="material-symbols-outlined text-secondary text-3xl mb-3">
                    air
                  </span>
                  <div className="font-headline text-xl font-bold text-primary mb-1">
                    98.4%
                  </div>
                  <div className="font-bold text-xs text-on-surface mb-2">
                    Pollen Extraction
                  </div>
                  <p className="text-[11px] text-on-surface-variant">
                    Sheer curtains capture window pollen — steam extraction lifts allergens safely.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-surface-container text-tertiary text-xs font-semibold">
                  Safe for allergy sufferers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA BOTTOM BANNER */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 pb-16">
        <div className="relative bg-primary text-white rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden shadow-xl">
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative max-w-2xl mx-auto text-center flex flex-col items-center space-y-4 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container text-secondary-container text-xs font-semibold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">support_agent</span>
              NEED PROFESSIONAL ADVICE?
            </div>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Have Questions About Your Curtains?
            </h2>
            <p className="text-xs sm:text-sm text-on-primary-container leading-relaxed">
              Contact our Brisbane curtain cleaning team today for a free estimate or expert advice on your specific curtain fabrics.
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

      {/* BOOKING FORM SECTION */}
      <section className="w-full bg-surface-container py-16 lg:py-20 px-4 md:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4 space-y-4 lg:pt-4">
              <span className="text-xs uppercase tracking-wider text-secondary font-semibold">BOOK A CLEAN</span>
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary leading-tight">
                Ready to Book?
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Fill in your details and we'll confirm the same day. No payment required upfront.
              </p>
              <ul className="space-y-2 pt-2 text-sm text-on-surface">
                {["Curtains stay on the rail", "Same-week bookings available", "Free quote, no obligation"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-8 bg-white rounded-3xl shadow-md border border-primary/10 overflow-hidden">
              <div className="bg-[#f0f7f5] px-8 py-5 border-b border-primary/10">
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
