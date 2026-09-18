import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Curtain Cleaning Brisbane",
  description: "Learn about Brisbane's premier curtain cleaning specialists. Dedicated to eco-friendly, zero-dismantling in-situ fabric care since 2018.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO BANNER */}
      <section className="relative w-full overflow-hidden bg-primary text-white py-20 lg:py-28">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3THR8EQBJHvkowo7UuLF0gMp0pF7vWHhbZKZceQueRnQbMG8FYB2v9gXF28CqNgzEOpt_T9oNOvCqFHwKz7NRZz7DTUvKRfTWc0nMw7y28bAZd1jkxsMN8yAPGq4dmQmDGepUOWfX35OKsfSA2LJt-Lzd2-i3O2Mzo9j7dZa1oEmcl9wVxpl7K7mwO9QQCSYnjxXdNRwERYQzAEpezgo29VXzXR7mGD7NDzA5Hm99MBJ9yi9w9bWdew"
            alt="Technician steam cleaning sheer curtains in sunlit room"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary"></div>

        <div className="relative w-full max-w-[1240px] mx-auto px-4 md:px-6 text-center flex flex-col items-center z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-secondary-container mb-4">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span className="text-xs font-semibold uppercase tracking-wider">Brisbane Dedicated In-Situ Specialists</span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl tracking-tight leading-tight mb-4">
            Professional Curtain Cleaners Serving Brisbane
          </h1>
          <p className="font-body text-base sm:text-lg text-on-primary-container max-w-2xl text-center leading-relaxed mb-8">
            A dedicated Brisbane fabric care team delivering respectful, meticulous in-situ curtain steam cleaning for private homes, heritage Queenslanders, and residences. We arrive on time, treat your home with care, and restore delicate fabrics right on the rail.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/book-now"
              className="inline-flex items-center justify-center font-semibold text-sm text-white bg-secondary hover:bg-secondary-hover px-8 py-3.5 rounded-full shadow-md transition-all"
            >
              Enquire Now
            </Link>
            <a
              href="#approach"
              className="inline-flex items-center justify-center text-sm font-semibold text-white hover:bg-white/10 border border-white/30 px-6 py-3.5 rounded-full transition-all"
            >
              Our Approach
            </a>
            <a
              href="#difference"
              className="inline-flex items-center justify-center text-sm font-semibold text-white hover:bg-white/10 border border-white/30 px-6 py-3.5 rounded-full transition-all"
            >
              Why Choose Us
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center text-sm font-semibold text-white hover:bg-white/10 border border-white/30 px-6 py-3.5 rounded-full transition-all"
            >
              Our Process
            </a>
          </div>
        </div>
      </section>

      {/* 2. TRUST STAT STRIP */}
      <section className="w-full bg-surface-container py-12">
        <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "eco",
                title: "Eco-Friendly Solutions",
                desc: "Plant-based, non-toxic sanitising steam treatments safe for children, pets, and delicate fibres.",
              },
              {
                icon: "explore",
                title: "Local Brisbane-Based",
                desc: "Master fabric specialists serving Brisbane North, South, Western Suburbs, and Bayside.",
              },
              {
                icon: "security",
                title: "Fully Insured",
                desc: "Comprehensive public liability & specialized textile care coverage for total peace of mind.",
              },
              {
                icon: "thumb_up",
                title: "100% Satisfaction",
                desc: "Guaranteed zero fabric shrinkage, thorough in-situ inspection, and pristine results.",
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-primary/10 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-primary mb-4">
                    <span className="material-symbols-outlined text-[24px]">{card.icon}</span>
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary mb-1">{card.title}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DARK TEAL "STRUCTURED APPROACH" PANEL */}
      <section className="w-full bg-primary text-white py-20 lg:py-28 scroll-mt-20" id="approach">
        <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">FABRIC CARE PHILOSOPHY</span>
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white leading-tight">
                A Structured Approach to Every Job
              </h2>
              <div className="space-y-3 text-on-primary-container text-sm leading-relaxed">
                <p>
                  No two window treatments in a subtropical climate age identically. From humidity cycles across Moreton Bay to intense afternoon sun filtering through traditional Queenslander verandas, fabric fibres undergo constant microscopic stress.
                </p>
                <p>
                  We meticulously assess raw linen weaves, silk blends, open-weave sheers, rubberized thermal backings, and intricate pinch pleats prior to steam application. This upfront scrutiny determines the exact thermal range, moisture volume, and targeted botanical treatment needed to rejuvenate fibres safely without removal or damage.
                </p>
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-6 text-secondary-container text-xs font-semibold">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>Zero Fabric Distortion</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  <span>Safe for Coated Backings</span>
                </div>
              </div>
            </div>

            {/* Right Column: 4-Step Vertical Card Strip */}
            <div className="lg:col-span-6 space-y-3">
              {[
                {
                  num: "01",
                  icon: "search",
                  title: "Professional Fabric & Track Inspection",
                  desc: "Detailed fibre testing, track weight review, and dye stability assessment before any moisture contacts the drapery.",
                },
                {
                  num: "02",
                  icon: "air",
                  title: "Pre-Treatment & Micro-Dust Extraction",
                  desc: "Targeted loosening of airborne grime, dust mites, and environmental allergens trapped deep inside woven threads.",
                },
                {
                  num: "03",
                  icon: "water_drop",
                  title: "Gentle Low-Moisture Steam Extraction",
                  desc: "In-situ thermal vapor sanitisation without soaking fabrics, dampening walls, or unhooking delicate pleats.",
                },
                {
                  num: "04",
                  icon: "assignment_turned_in",
                  title: "Final Walkthrough & Quality Verification",
                  desc: "Complete pleat grooming, natural drape alignment, and client sign-off before leaving your home spotless.",
                },
              ].map((step, idx) => (
                <div key={idx} className="bg-primary-container/80 backdrop-blur-sm p-5 rounded-2xl flex items-start gap-4 border border-white/10 hover:bg-primary-container transition-colors">
                  <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {step.num}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="material-symbols-outlined text-secondary-container text-[18px]">{step.icon}</span>
                      <h4 className="font-headline text-base font-semibold text-white">{step.title}</h4>
                    </div>
                    <p className="text-xs text-on-primary-container leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR 8-STEP CLEANING PROCESS PANEL */}
      <section className="w-full bg-surface py-20 lg:py-28 scroll-mt-20" id="process">
        <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl p-8 lg:p-14 shadow-stitch border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Sticky Left Descriptor */}
              <div className="lg:col-span-4 flex flex-col justify-between items-start space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-wider text-secondary font-semibold block mb-1">HOW WE WORK</span>
                  <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight mb-4">
                    Our 8-Step Curtain Care Process
                  </h2>
                  <p className="text-xs text-on-surface-variant leading-relaxed">
                    A meticulous, step-by-step protocol ensuring your window furnishings receive bespoke attention with zero risk of shrinkage, colour fading, or hardware disruption.
                  </p>
                </div>
                <div className="w-full pt-4 hidden lg:block">
                  <Link
                    href="/book-now"
                    className="inline-flex items-center justify-center w-full text-xs font-bold text-white bg-secondary hover:bg-secondary-hover px-8 py-3.5 rounded-full shadow-sm transition-all"
                  >
                    Book Your Service
                  </Link>
                  <p className="text-[11px] text-on-surface-variant text-center mt-3">
                    Prompt Brisbane scheduling & in-situ service
                  </p>
                </div>
              </div>

              {/* 8 Sequential Steps Mosaic */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    num: "01",
                    icon: "manage_search",
                    title: "Fabric & Weave Inspection",
                    desc: "Assessing fibre composition, sun exposure levels, and thermal backing stability before setting temperature parameters.",
                  },
                  {
                    num: "02",
                    icon: "troubleshoot",
                    title: "Stain & Problem Identification",
                    desc: "Pinpointing water rings, mould spores, cooking residue, and pet dander spots requiring tailored spot emulsifiers.",
                  },
                  {
                    num: "03",
                    icon: "filter_alt",
                    title: "Pre-Vacuuming & Dust Extraction",
                    desc: "HEPA-filter dry lifting of surface dust, allergen reservoirs, and loose environmental particulates along the headers.",
                  },
                  {
                    num: "04",
                    icon: "science",
                    title: "Pre-Treatment Application",
                    desc: "pH-neutral gentle botanical solutions formulated specifically for raw and delicate textiles to dissolve grime gently.",
                  },
                  {
                    num: "05",
                    icon: "heat_pump",
                    title: "Professional Steam Sanitisation",
                    desc: "Controlled temperature dry-vapor application that neutralises dust mites and loosens trapped atmospheric residue.",
                  },
                  {
                    num: "06",
                    icon: "opacity",
                    title: "Gentle Moisture Extraction",
                    desc: "Immediate low-pressure extraction preventing over-wetting, ensuring complete 2 to 4 hour drying directly on the track.",
                  },
                  {
                    num: "07",
                    icon: "view_in_ar_new",
                    title: "Odour Neutralisation & Spot Care",
                    desc: "Elimination of persistent humidity mustiness, pet dander, and cooking fumes directly at the core fibre structure.",
                  },
                  {
                    num: "08",
                    icon: "verified_user",
                    title: "Final Quality Walkthrough",
                    desc: "Pleat alignment check, fabric feel inspection, and immediate walkthrough conducted alongside the homeowner.",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="bg-surface-container p-5 rounded-2xl flex flex-col justify-between hover:bg-surface-container/80 transition-colors border border-primary/5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold text-secondary bg-secondary/15 px-2.5 py-0.5 rounded-full">{step.num}</span>
                      <span className="material-symbols-outlined text-primary text-[20px]">{step.icon}</span>
                    </div>
                    <h4 className="font-headline text-sm font-bold text-primary mb-1">{step.title}</h4>
                    <p className="text-[11px] text-on-surface-variant leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. "THE BRISBANE DIFFERENCE" (WHY CHOOSE US) */}
      <section className="w-full bg-surface-container py-20 lg:py-28 scroll-mt-20" id="difference">
        <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider text-secondary font-semibold block mb-1">WHY CHOOSE US</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mb-3">
              The Curtain Cleaning Brisbane Difference
            </h2>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Professional craftsmanship driven by specialized commercial equipment, safe solutions, and genuine care for your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "precision_manufacturing",
                title: "Proper Equipment",
                desc: "We use specialized low-moisture continuous steam extraction units calibrated specifically for hanging fabrics, never aggressive carpet wands or supermarket hire gear that can stretch delicate headers or leave fabric soggy.",
              },
              {
                icon: "spa",
                title: "Safe Fabric-Friendly Products",
                desc: "pH-neutral, non-toxic, allergen-free botanical solutions that preserve natural linen oils, silk sheens, and rubberized blackout backings without leaving synthetic chemical odours behind.",
              },
              {
                icon: "visibility",
                title: "We Look Properly",
                desc: "Thorough pre-inspection of delicate seams, stitching integrity, and sun-weakened fibres before any treatment touches your curtains. We understand where Brisbane UV degradation typically concentrates.",
              },
              {
                icon: "verified",
                title: "No Hidden Surprises",
                desc: "Clear upfront quotes, zero track unhooking fees, and honest assessments of expected outcomes for old stains or water marks before work commences.",
              },
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-stitch flex flex-col sm:flex-row gap-4 items-start border border-primary/10">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined text-[26px]">{pillar.icon}</span>
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold text-primary mb-2">{pillar.title}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FOOTER BANNER */}
      <section className="max-w-[1240px] mx-auto px-4 md:px-6 py-16 text-center">
        <div className="bg-primary text-white p-10 rounded-3xl space-y-4">
          <h2 className="font-headline text-3xl font-bold text-white">Experience Fresh Drapery Today</h2>
          <p className="text-xs text-white/80 max-w-lg mx-auto">
            Book online or speak with our Brisbane technicians for a free, transparent estimate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/book-now"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-white font-bold text-xs hover:bg-secondary-hover shadow-md transition-all"
            >
              <span>Book Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
