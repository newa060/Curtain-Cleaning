import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
  Sparkles,
  MapPin,
  Star,
  Wind,
  Check,
} from "lucide-react";
import { FabricEstimateCalculator } from "@/components/home/FabricEstimateCalculator";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { BRISBANE_SUBURBS } from "@/data/locations";
import { SERVICES_DATA } from "@/data/services";

export default function HomePage() {
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
              Gentle on-site steam sanitisation that revitalises delicate curtains directly on your tracks. No dismantling, zero re-hanging fuss, and no risk of fabric shrinkage — just fresh, allergen-free drapery in 2 to 4 hours.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/book-now"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-secondary-hover shadow-md transition-all duration-200"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4" />
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
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span className="font-semibold">Cleaned hanging in situ</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span className="font-semibold">Safe for silks & sheers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                <span className="font-semibold">Fast 2–4 hr drying</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-surface-container aspect-[4/5] lg:aspect-[5/6] w-full">
              <Image
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop"
                alt="Professional technician gently steam cleaning hanging textured sheer curtains in a Brisbane residence"
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
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">Healthier Home & Pristine Fabrics</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white mt-2">
              Why Professional Curtain Cleaning Matters
            </h2>
            <p className="font-body text-base text-on-primary-container mt-3 leading-relaxed">
              Curtains act as giant passive air filters throughout your residence, absorbing airborne pollutants, dust mite allergens, cooking oils, and humidity in Brisbane’s climate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "bug_report",
                title: "Dust Mites & Allergens",
                desc: "Trapped fibers harbor microscopic allergens causing morning sneezing and eye irritation for families.",
              },
              {
                icon: "water_drop",
                title: "Subtropical Mildew & Mould",
                desc: "Brisbane humidity builds condensation on window glass, fueling invisible black mould spores.",
              },
              {
                icon: "smoke_free",
                title: "Traffic Exhaust Tarnish",
                desc: "City traffic and road dust deposit dull yellow film across sheer whites and linen folds.",
              },
              {
                icon: "cleaning_services",
                title: "Fabric Fiber Degradation",
                desc: "Grid grime weakens delicate threading over time. Regular steam extraction doubles fabric lifespan.",
              },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-container">
                  <span className="material-symbols-outlined text-[22px]">{item.icon}</span>
                </div>
                <h3 className="font-headline text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-xs text-white/80 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: 4-STEP IN-SITU CLEANING PROCESS */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-secondary font-semibold">How It Works</span>
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mt-2">
            Our 4-Step In-Situ Cleaning Method
          </h2>
          <p className="font-body text-sm text-on-surface-variant mt-2">
            Professional curtain restoration with zero hassle. Your drapes remain hanging on their tracks throughout the entire process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Fabric Inspection & Test",
              desc: "We analyze weave composition, lining, dye stability, and existing stains to choose the exact temperature & pressure.",
            },
            {
              step: "02",
              title: "HEPA Dust Extraction",
              desc: "Deep vacuuming with non-abrasive soft brush attachments lifts loose dust, pet hair, and surface debris.",
            },
            {
              step: "03",
              title: "Micro-Steam Sanitisation",
              desc: "Targeted thermal steam injection dissolves embedded oils, kills mould spores, and lifts stubborn yellowing.",
            },
            {
              step: "04",
              title: "Conditioning & Dry",
              desc: "Gentle fabric conditioning smooths pleats into natural drops with total drying complete in 2–4 hours.",
            },
          ].map((item, idx) => (
            <div key={idx} className="relative p-6 rounded-2xl bg-white border border-primary/10 shadow-stitch space-y-3">
              <span className="text-3xl font-headline font-bold text-secondary">{item.step}</span>
              <h3 className="font-headline text-xl font-semibold text-primary">{item.title}</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: FABRIC ESTIMATE CALCULATOR */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-10">
        <FabricEstimateCalculator />
      </section>

      {/* SECTION 5: SERVICES HIGHLIGHT GRID */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-secondary font-semibold">Specialised Care</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mt-1">
              Curtain Cleaning Solutions
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-secondary transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES_DATA.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl overflow-hidden border border-primary/10 shadow-stitch hover:shadow-active transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                    {service.priceStart}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="font-headline text-xl font-bold text-primary">{service.title}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{service.shortDesc}</p>
                  <ul className="space-y-1.5 pt-2">
                    {service.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-on-surface">
                        <Check className="w-3.5 h-3.5 text-secondary shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-6 pt-0">
                <Link
                  href="/book-now"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-white text-xs font-semibold transition-all"
                >
                  Book Service
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: TESTIMONIALS */}
      <section className="w-full bg-surface-alt border-y border-primary/10 py-16">
        <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-secondary font-semibold">Client Feedback</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary mt-2">
              Loved by Brisbane Homeowners
            </h2>
            <p className="text-sm text-on-surface-variant mt-2">
              Read real reviews from residents in New Farm, Ascot, Bulimba, and across Greater Brisbane.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.slice(0, 3).map((t) => (
              <div key={t.id} className="p-6 rounded-2xl bg-white border border-primary/10 shadow-stitch space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-secondary">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary" />
                    ))}
                  </div>
                  <p className="text-xs text-on-surface leading-relaxed italic">"{t.quote}"</p>
                </div>
                <div className="pt-4 border-t border-outline-variant/30 flex items-center justify-between">
                  <div>
                    <h4 className="font-body text-xs font-bold text-primary">{t.name}</h4>
                    <p className="text-[11px] text-on-surface-variant">{t.suburb}</p>
                  </div>
                  <span className="text-[10px] bg-secondary/10 text-secondary font-semibold px-2 py-0.5 rounded-full">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: BRISBANE SUBURB COVERAGE GRID */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-16">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider text-secondary font-semibold">Service Coverage</span>
          <h2 className="font-headline text-3xl font-bold text-primary mt-1">
            Servicing All Brisbane Suburbs
          </h2>
          <p className="text-xs text-on-surface-variant mt-2">
            Mobile technicians equipped for on-site curtain cleaning across Brisbane Northside, Southside & Inner City.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {BRISBANE_SUBURBS.map((sub, sIdx) => (
            <div
              key={sIdx}
              className="p-3 rounded-xl bg-white border border-primary/10 flex items-center gap-2 hover:border-primary transition-all text-xs"
            >
              <MapPin className="w-3.5 h-3.5 text-secondary shrink-0" />
              <div>
                <span className="font-bold text-primary block">{sub.name}</span>
                <span className="text-[10px] text-on-surface-variant">{sub.postcode}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 8: FINAL CTA BANNER */}
      <section className="w-full max-w-[1240px] mx-auto px-4 md:px-6 pb-16">
        <div className="relative rounded-3xl bg-primary text-white p-8 md:p-12 overflow-hidden shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl text-center md:text-left z-10">
            <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">Fast On-Site Booking</span>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-white">
              Ready to Refresh Your Hanging Curtains?
            </h2>
            <p className="text-sm text-white/80 leading-relaxed">
              Book online in 60 seconds or call our Brisbane team for an immediate fixed-rate estimate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto">
            <Link
              href="/book-now"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-secondary text-white font-bold text-sm hover:bg-secondary-hover shadow-lg transition-all"
            >
              <span>Book Online Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0405849841"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 font-semibold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-secondary-container" />
              <span>0405 849 841</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
