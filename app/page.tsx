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
              <span className="text-primary font-bold">Trusted Brisbane Curtain Cleaners</span>
            </div>

            {/* Headline */}
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-primary font-bold tracking-tight text-balance leading-[1.1]">
              Professional Curtain Cleaning Brisbane
            </h1>

            {/* Supporting Paragraph */}
            <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Gentle on-site steam sanitisation that revitalises delicate curtains directly on your tracks without dismantling. No re-hanging fuss, and no risk of fabric shrinkage — just fresh, allergen-free drapery in 2 to 4 hours.
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
                <span className="font-medium">Cleaned hanging in situ</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                <span className="font-medium">Safe for silks & sheers</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-base">check_circle</span>
                <span className="font-medium">Fast 2–4 hr drying</span>
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
                  <p className="font-body text-sm font-bold text-primary leading-tight">Zero Rail Removal</p>
                  <p className="font-body text-xs text-on-surface-variant truncate">No hook detachment or transport risk</p>
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
            <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">HEALTHIER HOME & PRISTINE FABRICS</span>
            <h2 className="font-headline text-3xl lg:text-5xl font-bold text-white mt-2">
              Why Professional Curtain Cleaning Matters
            </h2>
            <p className="font-body text-base text-on-primary-container mt-3 leading-relaxed">
              Curtains act as giant passive air filters throughout your residence, absorbing airborne pollutants, dust mite allergens, cooking oils, and moisture in Brisbane's humid subtropical climate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left 6-Grid items */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "bug_report",
                  title: "Dust Mites & Allergens",
                  desc: "Microscopic triggers build up in deep thermal weaves, worsening indoor air quality and seasonal asthma.",
                },
                {
                  icon: "humidity_mid",
                  title: "Mould & Mildew Spores",
                  desc: "Brisbane humidity breeds active mould spores along glass line hems and blackout rubber backing.",
                },
                {
                  icon: "wb_sunny",
                  title: "Sun Fading & UV Wear",
                  desc: "Trapped grime accelerates fibre degradation when exposed to intense Queensland solar radiation.",
                },
                {
                  icon: "do_not_disturb_on",
                  title: "Shrinkage from DIY Washes",
                  desc: "Domestic washing machines shred header tape and shrink delicate linens by up to 10-15%.",
                },
                {
                  icon: "pets",
                  title: "Odours & Pet Dander",
                  desc: "Kitchen grease droplets and pet dander lock deep into yarns, radiating persistent room odours.",
                },
                {
                  icon: "water_drop",
                  title: "Water Rings & Mustiness",
                  desc: "Window condensation produces unsightly brownish water stains that set permanently if untreated.",
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
                  <span>SUBTROPICAL PROTECTION STANDARD</span>
                </div>
                <p className="text-xs text-on-primary-container leading-relaxed">
                  Our botanical sanitising rinse forms a breathable barrier against fungal development without leaving sticky residues that attract new dust particles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: "FROM BOOKING TO FRESH CURTAINS" (4 STEP CARDS) */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-secondary font-semibold">EASY & CONVENIENT</span>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mt-2">
            From Booking To Fresh Curtains
          </h2>
          <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
            A seamless 4-step experience designed so you never have to unhook a single pleat or transport heavy fabrics across town.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "1",
              title: "Enquire Online",
              desc: "Tell us your curtain types, track lengths, and preferred appointment window through our fast online form.",
              badge: "Fast same-day response",
              icon: "schedule",
            },
            {
              step: "2",
              title: "We Confirm",
              desc: "We confirm fabric suitability, assess specific treatments needed, and lock in your convenient arrival slot.",
              badge: "Fixed arrival window",
              icon: "event_available",
            },
            {
              step: "3",
              title: "We Clean On-Site",
              desc: "Our Master Fabric specialist brings calibrated low-moisture steam tools. Your drapes remain hanging safely.",
              badge: "Zero track removal",
              icon: "verified",
            },
            {
              step: "4",
              title: "Enjoy Fresh Curtains",
              desc: "Complete a walkthrough inspection with our technician. Curtains are dry, sanitised, and allergen-free in hours.",
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
            <span>Enquire For Your Home</span>
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
              <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">FABRIC INTEGRITY FIRST</span>
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white leading-tight">
                Gentle On-Site Steam Cleaning
              </h2>
              <p className="text-sm text-on-primary-container max-w-xl leading-relaxed">
                Our calibrated thermal extraction balances low-moisture vapor and micro-suction tailored specifically for raw Belgian linens, sensitive silks, blackout backings, pinch pleats, and sheer synthetic voiles.
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
              <h3 className="font-headline text-xl font-bold text-primary mb-3">What We Treat</h3>
              <ul className="space-y-3 text-xs text-on-surface">
                {[
                  "Sheer curtains & delicate lightweight voiles",
                  "Heavy linen drapes & blackout acrylic linings",
                  "Pinch pleats, eyelets, S-folds & pelmets",
                  "Roman blinds, roller blinds & bonded fabrics",
                  "Mould residue, cooking grease & pet odours",
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
              <h3 className="font-headline text-xl font-bold text-primary mb-3">Our Tailored Process</h3>
              <ul className="space-y-3 text-xs text-on-surface">
                {[
                  "Fibre burn/swatch testing & dye stability check",
                  "HEPA dry extraction of trapped micro-dust & dander",
                  "pH-neutral botanical spot and stain conditioning",
                  "Controlled low-moisture steam vapor extraction",
                  "Pleat grooming & natural weighted hang alignment",
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
                  "100% in-situ: zero track unhooking required",
                  "Guaranteed zero fabric shrinkage or colour fade",
                  "Child & pet safe natural formulations",
                  "Brisbane family operated with Master Fabric certs",
                  "Full public liability & textile care insurance",
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

      {/* SECTION 5: FABRIC ESTIMATE SLIDER ("MEASURE YOUR WINDOWS") */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-10">
        <div className="p-8 lg:p-12 rounded-3xl bg-white shadow-md border border-primary/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase text-secondary font-semibold">INSTANT SPACE PLANNER</span>
              <h2 className="font-headline text-3xl font-bold text-primary">Measure Your Windows</h2>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Estimate service scope by window width and fabric density. Our technicians confirm measurements on arrival with laser-guided precision.
              </p>
              <div className="flex items-center gap-2 text-tertiary text-xs font-semibold">
                <span className="material-symbols-outlined text-base">info</span>
                <span>No obligations, free quote provided before work starts</span>
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
                    <p className="text-xs font-bold text-primary">Typical Treatment Duration</p>
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
          <span className="text-xs text-secondary uppercase font-semibold">5.0 STAR RATED ACROSS BRISBANE</span>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mt-2">What Brisbane Homeowners Say</h2>
          <p className="text-xs text-on-surface-variant mt-3">
            Real feedback from residential clients and property managers in Queenslander homes and luxury riverside towers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              stars: "★★★★★",
              quote: "“I was terrified of taking down our heavy floor-to-ceiling linen drapes in New Farm. The technician cleaned them right on the tracks without a single drop on our timber floors. They look and smell brand new!”",
              name: "Sarah M.",
              suburb: "New Farm",
              tag: "Linen Sheers",
            },
            {
              stars: "★★★★★",
              quote: "“Living near the river in Indooroopilly, mould spots and musty smells were creeping onto our bedroom curtains. The steam treatment completely removed the odour and stains. Remarkable difference.”",
              name: "David K.",
              suburb: "Indooroopilly",
              tag: "Mould Removal",
            },
            {
              stars: "★★★★★",
              quote: "“Punctual, super courteous, and zero chemical smell afterwards. Having curtains cleaned without having to re-hook hundreds of pinch pleats is an absolute gamechanger.”",
              name: "Michelle T.",
              suburb: "Paddington",
              tag: "Full Home Drapes",
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
          <span className="text-xs text-secondary uppercase font-semibold">GOT QUESTIONS?</span>
          <h2 className="font-headline text-3xl font-bold text-primary mt-2">Frequently Asked Questions</h2>
          <p className="text-xs text-on-surface-variant mt-2">
            Everything you need to know about our in-situ steam curtain cleaning service.
          </p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: "Do you clean curtains while they're still hanging?",
              a: "Yes! 100% of our cleaning is performed in situ on your existing tracks, rods, or pelmets. You will never have to detach fiddly curtain hooks, climb step ladders, or risk damage during transit.",
            },
            {
              q: "How long does it take for curtains to dry?",
              a: "Curtains typically dry within 2 to 4 hours. Because we utilize controlled low-moisture thermal extraction, fabrics are left gently refreshed rather than saturated. Normal cross-ventilation or ceiling fans easily speed up the final drying.",
            },
            {
              q: "Can you remove stubborn smoke, pet, or cooking odours?",
              a: "Yes. Multi-layered fabrics tend to trap cooking oils and airborne smoke particles. Our botanical sanitising agent neutralises volatile odour molecules inside the weave rather than merely masking them with artificial fragrance.",
            },
            {
              q: "Is the steam process safe for delicate fabrics like linen or sheer voile?",
              a: "Absolutely. We conduct a preliminary fibre and dye identification test on an inconspicuous hem before commencing. Our machines allow exact micro-adjustments of heat, pressure, and moisture to ensure zero fibre distortion or dye transfer.",
            },
            {
              q: "Do I need to take curtains down or prep the room beforehand?",
              a: "No unhooking or heavy lifting is required on your part. We simply ask that small items or plants on adjacent window sills are moved aside so our technicians have easy, safe access to the tracks.",
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
                Our fully-equipped mobile fabric care units travel directly to residential properties, penthouses, and heritage homes right across the Brisbane river basin.
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
                Not sure if we cover your area? Call our friendly dispatch team on{" "}
                <a className="font-bold text-primary underline ml-1" href="tel:0405849841">
                  0405 849 841
                </a>
              </p>
            </div>
          </div>

          {/* Map View Display */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-md bg-surface-container h-[380px] border border-primary/10">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOnXh_2lJUH-oUNmAVH4VIqf3dbXrf6TtXuaKDeDggYzdMFX4zmyWrGPY_LWFcD3hhXQ7xcO-Ou89S6YCtBanGbFkCjJ13wP86KBkAYZdKg2q7BTOrVsz71nSEfDJ4teoq8vR1Um27H6vs5164KeojOENvDVY0p-mqPG2qSdBSk_dAZTE13sYKOpKuCOUMVp4rr8vQOXeotgJZ2ZSfhGtvWvwaZjbdmsxG9TcLBRflX_XNAzOSBbV-lA')",
                }}
              ></div>
              <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>

              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-between border border-primary/10">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></span>
                  <div>
                    <p className="text-xs font-bold text-primary">Mobile Vans Across Brisbane</p>
                    <p className="text-[11px] text-on-surface-variant">Same-week bookings available</p>
                  </div>
                </div>
                <Link href="/contact" className="text-xs font-bold text-primary hover:text-secondary">
                  Check Dates →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: BOTTOM CTA BANNER */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-12 mb-8">
        <div className="relative rounded-3xl bg-primary p-8 lg:p-14 text-white shadow-xl overflow-hidden">
          <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-secondary/20 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">PURE AIR & FLAWLESS FABRICS</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white leading-tight">
              Ready for Fresher, Healthier Curtains?
            </h2>
            <p className="text-sm text-on-primary-container leading-relaxed">
              Experience the effortless luxury of professional in-situ curtain steam care in your Brisbane home. Prompt service, respectful technicians, and pristine results.
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
