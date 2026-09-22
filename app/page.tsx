"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  Check,
  ChevronDown,
  Shield,
  HelpCircle,
} from "lucide-react";
import BrisbaneMap from "@/components/BrisbaneMap";
import BookingForm from "@/components/BookingForm";

export default function HomePage() {
  // Track length slider state for Section 5
  const [trackLength, setTrackLength] = useState<number>(3.5);
  const [activeFabric, setActiveFabric] = useState<string>("Linen Sheers");

  // FAQ open item state for Section 7
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const getDurationText = (val: number) => {
    if (val <= 2) return "Approx. 30 - 45 minutes on-site";
    if (val <= 5) return "Approx. 45 - 60 minutes on-site";
    if (val <= 8) return "Approx. 75 - 90 minutes on-site";
    return "Approx. 2 - 2.5 hours on-site";
  };

  const getEstimatedCost = (val: number, fabric: string) => {
    let baseRate = 45;
    if (fabric === "Linen Sheers") baseRate = 50;
    if (fabric === "Thermal Blackout") baseRate = 55;
    if (fabric === "Luxury Velvet") baseRate = 65;
    if (fabric === "Roman Blinds") baseRate = 40;
    const estMin = Math.round(val * baseRate * 0.9);
    const estMax = Math.round(val * baseRate * 1.2);
    return `$${estMin} – $${estMax} AUD`;
  };

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO SECTION */}
      <section className="relative w-full max-w-[1240px] mx-auto px-4 md:px-6 py-8 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5">
            {/* Trust badge pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container text-on-surface text-xs font-semibold shadow-sm">
              <span className="text-secondary tracking-widest text-xs">★★★★★</span>
              <span className="text-primary font-bold">5-Star Rated · Brisbane Locals</span>
            </div>

            {/* Headline */}
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-primary font-bold tracking-tight text-balance leading-[1.1]">
              Curtain Cleaning Brisbane
            </h1>

            {/* Supporting Paragraph */}
            <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              We clean your curtains right where they hang — no taking them down, no trips to the dry cleaner. Steam cleaned, dried, and back to looking great, all in one visit.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-secondary-hover shadow-md transition-all duration-200"
              >
                <span>Enquire Now</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <a
                href="tel:0405849841"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now (0405 849 841)</span>
              </a>
            </div>

            {/* Key Benefits Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-6 pt-4 w-full text-on-surface text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                <span className="font-medium">Cleaned while hanging</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                <span className="font-medium">Safe for silks & sheers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                <span className="font-medium">Dry in 2–4 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container aspect-[4/5] lg:aspect-[5/6] w-full">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEIysmVXGyFSSjQM30f-hfoLJAJkl03-FyVqDKnmnX5Va4q0tzRBpGRkA08ikEYE_3xdFetf8CAETr3oJoeiSZ404Ahs3xELp3uLA9xxCmHT7nRfeol4MqhuGN7KdyOTK5h33cFKnVoXnHPi8allNKs09MeIxwfUlXeZGWnMuquQh4GQ_yQ7kgLfm9VPP6o8ruB06gZ4Na_lngTiIg6TEZ3dqTy5hBXFfVHrcpDQLVdvt4rXqMpikiOA"
                alt="Professional technician gently steam cleaning hanging textured sheer curtains in a Brisbane home"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent"></div>

              {/* Floating Editorial Pill Tag */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">curtains</span>
                </div>
                <div className="min-w-0">
                  <p className="font-body text-sm font-bold text-primary leading-tight">No removal needed</p>
                  <p className="font-body text-xs text-on-surface-variant truncate">Curtains stay on the rail the whole time</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 -z-10 w-24 h-24 rounded-full bg-secondary-container/40 blur-xl"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DARK TEAL PANEL ("Why Professional Curtain Cleaning Matters") */}
      <section className="w-full bg-primary text-white py-16 lg:py-24 my-6">
        <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">WHY IT MATTERS</span>
            <h2 className="font-headline text-3xl lg:text-5xl font-bold text-white mt-2">
              Your Curtains Collect More Than You Think
            </h2>
            <p className="font-body text-base text-on-primary-container mt-3 leading-relaxed">
              Curtains trap dust, allergens, cooking smells and moisture every single day. In Brisbane's humidity, that buildup happens faster than most people realise.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 6-Grid items */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "bug_report",
                  title: "Dust Mites & Allergens",
                  desc: "Heavy fabrics hold onto dust mite waste and pollen, which can trigger sneezing, itchy eyes, and flare-ups for anyone with asthma.",
                },
                {
                  icon: "humidity_mid",
                  title: "Mould & Mildew",
                  desc: "Brisbane's humidity is tough on curtains near windows. Mould spots often form along the hem and rubber-backed blackouts before you notice them.",
                },
                {
                  icon: "wb_sunny",
                  title: "Sun Damage",
                  desc: "Grime trapped in the fibres speeds up fading and weakening from UV — especially on north and west-facing windows.",
                },
                {
                  icon: "do_not_disturb_on",
                  title: "Shrinkage from Home Washing",
                  desc: "A standard washing machine can shrink or warp headers and pull apart pinch pleats. It's an expensive mistake on quality curtains.",
                },
                {
                  icon: "pets",
                  title: "Odours & Pet Hair",
                  desc: "Cooking smells and pet dander work their way deep into the fabric over time. Regular airing isn't enough to get rid of them.",
                },
                {
                  icon: "water_drop",
                  title: "Water Stains",
                  desc: "Condensation from glass slowly leaves brown watermarks along the hem that set into the fabric if left too long.",
                },
              ].map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-primary-container/80 backdrop-blur-sm space-y-2 border border-white/10">
                  <div className="flex items-center gap-2 text-secondary-container">
                    <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    <h3 className="font-headline text-base font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-xs text-on-primary-container leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Right Column: Living Room Image + Subtropical Standard Callout */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/4] shadow-lg">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3hk0BeHQJ62pU7MHAgo-inOu0V78Hds7WgSOnl0dSYN8W1XUK7ASV-HD8tZhXqQJH3ogdasB4Vu6lfkvWcXcaDO4SmbBuosIK-5evsum13TGvBWMKqAkQW9KYYA8hCYwNTYRSoA1qX3b2olQ-NlclPERf_WP6HQ7G2FGsux4Fr1ce-bPjHYvGmMf79Htjj2adQTBKFvY4XHosgWuwF-cHxwLn45gQYXYJZ5JV9v_7HD_v7wlebcRxCw"
                  alt="Sun-drenched luxury Brisbane open-plan living room with natural linen sheer curtains framing open sliding doors"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
              </div>
              <div className="p-6 rounded-2xl bg-primary-container border-l-4 border-secondary-container space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-secondary-container uppercase">
                  <span className="material-symbols-outlined text-sm">shield</span>
                  <span>SAFE FOR BRISBANE HOMES</span>
                </div>
                <p className="text-xs text-on-primary-container leading-relaxed">
                  We use a gentle sanitising rinse that's safe for kids and pets — no harsh chemicals, no sticky residue left behind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: "FROM BOOKING TO FRESH CURTAINS" (4 STEP CARDS) */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-secondary font-semibold">HOW IT WORKS</span>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mt-2">
            From Booking to Fresh Curtains
          </h2>
          <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
            Four simple steps — no dismantling, no drop-offs, no stress. Just send us a message and we'll handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Send an Enquiry",
              desc: "Tell us your curtain type, rough track length, and when suits you. We'll get back to you the same day.",
              badge: "Same-day response",
              icon: "schedule",
            },
            {
              step: "2",
              title: "We Confirm the Details",
              desc: "We'll check your fabric type and any specific concerns, then lock in a time that works for you.",
              badge: "Fixed arrival window",
              icon: "event_available",
            },
            {
              step: "3",
              title: "We Clean at Your Place",
              desc: "Our technician arrives with all the gear. Curtains stay on the rail — we do everything around them.",
              badge: "No rail removal",
              icon: "verified",
            },
            {
              step: "4",
              title: "Done — Enjoy the Difference",
              desc: "Walk through with us at the end. Curtains are clean, fresh and fully dry within a few hours.",
              badge: "Dry in 2–4 hours",
              icon: "check",
            },
          ].map((card, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full border border-primary/10">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-secondary/15 text-secondary flex items-center justify-center font-headline text-2xl font-bold">
                  {card.step}
                </div>
                <h3 className="font-headline text-xl font-semibold text-primary">{card.title}</h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">{card.desc}</p>
              </div>
              <div className="pt-6 flex items-center text-primary text-xs font-semibold gap-1.5 border-t border-outline-variant/20 mt-4">
                <span className="material-symbols-outlined text-base text-secondary">{card.icon}</span>
                <span>{card.badge}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/book-now"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-secondary-hover shadow-md transition-all"
          >
            <span>Get a Free Quote</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* SECTION 4: GENTLE ON-SITE STEAM CLEANING (FEATURED BANNER + 3 CARDS) */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-12">
        {/* Featured Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-lg bg-primary text-white mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
            <div className="lg:col-span-7 p-8 lg:p-14 flex flex-col justify-center text-white space-y-4 z-10">
              <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">HOW WE CLEAN</span>
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white leading-tight">
                Steam Cleaning That's Kind to Your Fabrics
              </h2>
              <p className="text-sm text-on-primary-container max-w-xl leading-relaxed">
                We use low-moisture steam — enough heat to kill bacteria and lift grime, not enough to soak or stretch the fabric. Works on linens, silks, blackout panels, pinch pleats, sheers, and everything in between.
              </p>
            </div>
            <div className="lg:col-span-5 relative h-64 lg:h-auto">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-rRorg9xI8WAJDkLWVxWSuXxV-lKVdqmwvYxByx93ddXuub70hZEdpE88XxsQgoSlAxs3H29xqkOJClxscNyIVFvrZfmKgUfFzZnqs9Kno_z9oQCreR2gyCRYqU8-8Y7rEJCWmuSmr8Fk_EgmSVIhQwec76W1gE24MYLny2Ug6evjgJhbYq3XKAUlJRH3Z0wSup58q5Hrw8TbekY0iS8dbriV1KNs_S7PWA6kZrRq3E0cUgXPBxfK1w"
                alt="Close-up photograph of steam cleaning wand treating hanging linen curtains"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary via-primary/40 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* 3 Detail Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-8 rounded-2xl bg-surface-container flex flex-col justify-between space-y-6 border border-primary/10">
            <div>
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[20px]">style</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-primary mb-3">What We Clean</h3>
              <ul className="space-y-3 text-xs text-on-surface">
                {[
                  "Sheer curtains & lightweight voiles",
                  "Heavy linen & blackout curtains",
                  "Pinch pleats, eyelets, S-folds & pelmets",
                  "Roman blinds, roller blinds & fabric blinds",
                  "Mould, cooking grease & pet odours",
                ].map((txt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-base mt-0.5">check</span>
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-secondary font-semibold text-xs">100% fabric-safe solutions</div>
          </div>

          {/* Card 2 */}
          <div className="p-8 rounded-2xl bg-surface-container flex flex-col justify-between space-y-6 border border-primary/10">
            <div>
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[20px]">science</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-primary mb-3">How We Do It</h3>
              <ul className="space-y-3 text-xs text-on-surface">
                {[
                  "Fabric and dye test before we start",
                  "Dry vacuum to lift surface dust and dander",
                  "Gentle spot treatment for stains",
                  "Low-moisture steam extraction",
                  "Pleat straightening and hang check",
                ].map((txt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-base mt-0.5">check</span>
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-secondary font-semibold text-xs">No chemicals, no shrinkage</div>
          </div>

          {/* Card 3 */}
          <div className="p-8 rounded-2xl bg-surface-container flex flex-col justify-between space-y-6 border border-primary/10">
            <div>
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-[20px]">workspace_premium</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-primary mb-3">Why Choose Us</h3>
              <ul className="space-y-3 text-xs text-on-surface">
                {[
                  "Curtains stay hanging — we clean around them",
                  "No shrinkage, no colour fade, no surprises",
                  "Safe for kids and pets",
                  "Brisbane family-run business",
                  "Fully insured, fixed-price quotes",
                ].map((txt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-secondary text-base mt-0.5">check</span>
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-secondary font-semibold text-xs">Trusted by interior designers</div>
          </div>
        </div>
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

      {/* SECTION 5: FABRIC ESTIMATE SLIDER ("MEASURE YOUR WINDOWS") */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-10">
        <div className="p-8 lg:p-12 rounded-3xl bg-white shadow-md border border-primary/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase text-secondary font-semibold">WINDOW PLANNER</span>
              <h2 className="font-headline text-3xl font-bold text-primary">Measure Your Windows</h2>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Get a rough idea of how long your job will take. Our team checks everything on the day and gives you a fixed quote before starting.
              </p>
              <div className="flex items-center gap-2 text-tertiary text-xs font-semibold">
                <span className="material-symbols-outlined text-base">info</span>
                <span>Free quote, no obligation</span>
              </div>
            </div>

            <div className="lg:col-span-7 bg-surface-container p-6 lg:p-8 rounded-2xl space-y-6">
              {/* Track Width Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-primary">
                  <label className="text-xs font-bold">Estimated Track Length</label>
                  <span className="font-headline text-xl font-bold text-secondary">
                    {trackLength} {trackLength === 1 ? "metre" : "metres"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="0.5"
                  value={trackLength}
                  onChange={(e) => setTrackLength(parseFloat(e.target.value))}
                  className="w-full h-2 bg-outline-variant rounded-lg appearance-none cursor-pointer accent-secondary"
                />
                <div className="flex justify-between text-[11px] text-on-surface-variant font-medium">
                  <span>1m (Single window)</span>
                  <span>6m (Triple stacker)</span>
                  <span>12m+ (Whole house)</span>
                </div>
              </div>

              {/* Fabric Category Select Chips */}
              <div className="space-y-2">
                <label className="text-xs text-primary font-bold block">Fabric Style</label>
                <div className="flex flex-wrap gap-2">
                  {["Linen Sheers", "Thermal Blackout", "Luxury Velvet", "Roman Blinds"].map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => setActiveFabric(chip)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                        activeFabric === chip
                          ? "bg-primary text-white shadow-sm"
                          : "bg-white text-on-surface hover:bg-surface-container border border-outline-variant"
                      }`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              {/* Output summary indicator */}
              <div className="p-4 rounded-xl bg-white flex flex-col sm:flex-row items-center justify-between gap-4 border border-primary/10">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">schedule</span>
                  <div>
                    <p className="text-xs font-bold text-primary">How long will it take?</p>
                    <p className="text-xs text-on-surface-variant">{getDurationText(trackLength)}</p>
                  </div>
                </div>

                <Link
                  href="/book-now"
                  className="px-5 py-2.5 rounded-full bg-secondary text-white text-xs font-semibold hover:bg-secondary-hover transition-colors shrink-0"
                >
                  Book Window Slot
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs text-secondary uppercase font-semibold">WHAT CUSTOMERS SAY</span>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mt-2">Real Reviews from Brisbane Homes</h2>
          <p className="text-xs text-on-surface-variant mt-3">
            Customers from across Brisbane — Queenslanders, apartments, family homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              stars: "★★★★★",
              quote: "We have floor-to-ceiling linens in New Farm and I'd been putting off cleaning them for ages — too scared of shrinkage. The technician sorted them right on the rail. They came out looking brand new.",
              name: "Sarah M.",
              suburb: "New Farm",
              tag: "Linen Sheers",
            },
            {
              stars: "★★★★★",
              quote: "We're close to the river in Indooroopilly and the mould on our bedroom curtains was getting bad. Completely gone after the steam treatment — couldn't believe it honestly.",
              name: "David K.",
              suburb: "Indooroopilly",
              tag: "Mould Removal",
            },
            {
              stars: "★★★★★",
              quote: "On time, friendly, and no chemical smell at all. The pinch pleats on our living room curtains haven't looked this good since we bought them. Will book again.",
              name: "Michelle T.",
              suburb: "Paddington",
              tag: "Full Home Curtains",
            },
          ].map((t, i) => (
            <div key={i} className="p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6 border border-primary/10">
              <div className="space-y-4">
                <div className="text-secondary text-sm font-bold tracking-widest">{t.stars}</div>
                <p className="text-xs text-on-surface italic leading-relaxed">{t.quote}</p>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-primary">{t.name}</h4>
                  <span className="text-[11px] text-on-surface-variant">{t.suburb}</span>
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container text-on-surface-variant text-[11px] font-semibold">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: FAQ ACCORDION */}
      <section className="w-full max-w-[960px] mx-auto px-4 md:px-6 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs text-secondary uppercase font-semibold">COMMON QUESTIONS</span>
          <h2 className="font-headline text-3xl font-bold text-primary mt-2">Frequently Asked Questions</h2>
          <p className="text-xs text-on-surface-variant mt-2">
            Straight answers to the questions we get asked most.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "Do you clean curtains while they're still hanging?",
              a: "Yes — every job we do is with the curtains still hanging. No unhooking, no ladders on your part, no trips anywhere. We bring everything we need and work around your curtains where they are.",
            },
            {
              q: "How long does it take for curtains to dry?",
              a: "Usually 2 to 4 hours. We use low-moisture steam rather than soaking the fabric, so they dry much faster than you might expect. Opening a window or running a ceiling fan helps speed things up.",
            },
            {
              q: "Can you remove stubborn smoke, pet, or cooking odours?",
              a: "Yes. Cooking smells, cigarette smoke and pet odours sink deep into fabric over time. Our steam treatment works through the weave to break down the source of the smell, not just mask it.",
            },
            {
              q: "Is the steam process safe for delicate fabrics like linen or sheer voile?",
              a: "Yes. Before we start we always test the fabric on a hidden area — checking the dye and how the material responds to heat. If anything looks risky we tell you upfront, no surprises.",
            },
            {
              q: "Do I need to take curtains down or prep the room beforehand?",
              a: "Not much at all. If you can clear a bit of space along the window sill — move any ornaments, plants or furniture that's right up against the curtains — that's really all we need.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="rounded-2xl bg-white shadow-sm border border-primary/10 overflow-hidden transition-all">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 font-headline text-base text-primary font-semibold"
                type="button"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-secondary transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`} />
              </button>
              {openFaq === idx && (
                <div className="px-6 pb-6 pt-0 text-xs text-on-surface-variant leading-relaxed border-t border-primary/5 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: SERVICE AREA CHIPS & MAP CARD */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Suburb Chips & Copy */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <span className="text-xs text-secondary uppercase font-semibold">LOCAL COVERAGE</span>
              <h2 className="font-headline text-3xl font-bold text-primary mt-2">Serving Greater Brisbane & Surrounds</h2>
              <p className="text-xs text-on-surface-variant mt-3 leading-relaxed">
                We come to you. Our van is kitted out with everything needed for the job — no drop-offs, no pick-ups, just one visit from us.
              </p>
            </div>

            {/* Suburb selection chips */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                "Brisbane CBD",
                "Western Suburbs",
                "Brisbane Southside",
                "Brisbane Northside",
                "Wynnum & Bayside",
                "Redcliffe Peninsula",
                "Caboolture",
                "Ipswich",
              ].map((sub, i) => (
                <span key={i} className="px-4 py-2 rounded-full bg-white shadow-sm text-primary font-bold text-xs border border-primary/10">
                  {sub}
                </span>
              ))}
            </div>

            {/* Helper Pill */}
            <div className="p-4 rounded-xl bg-surface-container flex items-center gap-3 border border-primary/10">
              <HelpCircle className="w-5 h-5 text-secondary shrink-0" />
              <p className="text-xs text-on-surface">
                Not sure if we cover your area? Give us a ring on{" "}
                <a className="font-bold text-primary underline ml-1" href="tel:0405849841">
                  0405 849 841
                </a>
              </p>
            </div>
          </div>

          {/* Map View Display */}
          <div className="lg:col-span-6">
            <BrisbaneMap height="400px" />
          </div>
        </div>
      </section>

      {/* SECTION 9: BOOKING FORM */}
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

      {/* SECTION 10: BOTTOM CTA BANNER */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-12 mb-8">
        <div className="relative rounded-3xl bg-primary p-8 lg:p-14 text-white shadow-xl overflow-hidden">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">READY WHEN YOU ARE</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white leading-tight">
              Give Your Curtains a Proper Clean
            </h2>
            <p className="text-sm text-on-primary-container leading-relaxed">
              We show up on time, take care of your home, and leave your curtains looking great — it's that simple.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-secondary-hover shadow-md transition-all"
              >
                <span>Enquire Now</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




