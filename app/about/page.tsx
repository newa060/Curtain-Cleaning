import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
  Leaf,
  MapPin,
  Shield,
  ThumbsUp,
  Search,
  Wind,
  Droplets,
  ClipboardCheck,
  Eye,
  Pipette,
  Sparkles,
  CloudDrizzle,
  Eraser,
  HandMetal,
  Wrench,
  Flower2,
  ScanEye,
  BadgeCheck,
} from "lucide-react";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "About Us | Curtain Cleaning Brisbane",
  description: "Learn about Brisbane's premier curtain cleaning specialists. Dedicated to eco-friendly, zero-dismantling in-situ fabric care since 2018.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. HERO BANNER */}
      <section className="relative w-full overflow-hidden bg-[#1B3C59] text-white py-20 lg:py-28">
        <div className="absolute inset-0 w-full h-full opacity-20">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3THR8EQBJHvkowo7UuLF0gMp0pF7vWHhbZKZceQueRnQbMG8FYB2v9gXF28CqNgzEOpt_T9oNOvCqFHwKz7NRZz7DTUvKRfTWc0nMw7y28bAZd1jkxsMN8yAPGq4dmQmDGepUOWfX35OKsfSA2LJt-Lzd2-i3O2Mzo9j7dZa1oEmcl9wVxpl7K7mwO9QQCSYnjxXdNRwERYQzAEpezgo29VXzXR7mGD7NDzA5Hm99MBJ9yi9w9bWdew"
            alt="Technician steam cleaning sheer curtains in sunlit room"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B3C59]/95 via-[#1B3C59]/85 to-[#1B3C59]"></div>

        <div className="relative w-full max-w-[1240px] mx-auto px-4 md:px-6 text-center flex flex-col items-center z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-sm mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-white">Brisbane Curtain Cleaning</span>
          </div>
          <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-white max-w-4xl tracking-tight leading-tight mb-4">
            Curtain Cleaning Done at Your Place, Not a Factory
          </h1>
          <p className="font-body text-base sm:text-lg text-white/85 max-w-2xl text-center leading-relaxed font-normal mb-8">
            We clean curtains at your home while they hang on the rail. No removing them, no dropping them off somewhere, no waiting days to get them back. Just one visit and they&apos;re done.
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
              className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm shadow-xs px-6 py-3.5 rounded-full transition-all"
            >
              STEP BY STEP
            </a>
            <a
              href="#difference"
              className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm shadow-xs px-6 py-3.5 rounded-full transition-all"
            >
              Why People Use Us
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-sm shadow-xs px-6 py-3.5 rounded-full transition-all"
            >
              The Process
            </a>
          </div>
        </div>
      </section>

      {/* 2. TRUST STAT STRIP */}
      <section className="w-full bg-white py-14 border-b border-primary/10">
        <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Leaf className="w-6 h-6" />,
                title: "Eco-Friendly Solutions",
                desc: "The products we use are plant-based and non-toxic — safe around kids, pets, and delicate fabrics.",
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: "Local Brisbane-Based",
                desc: "We're Brisbane locals, not a call centre. We know the suburbs and we show up on time.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Fully Insured",
                desc: "Fully covered with public liability insurance for every job, big or small.",
              },
              {
                icon: <ThumbsUp className="w-6 h-6" />,
                title: "100% Satisfaction",
                desc: "We don't leave until you're happy with the result. No shrinkage, no surprises.",
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-[#FAF8F5] p-6 rounded-2xl border border-primary/8 flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-primary mb-4 border border-primary/10">
                    {card.icon}
                  </div>
                  <h3 className="font-headline text-lg font-bold text-primary mb-1">{card.title}</h3>
                  <p className="text-xs text-on-surface-variant leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. "STRUCTURED APPROACH" PANEL — Dark navy */}
      <section className="w-full bg-[#1B3C59] text-white py-20 lg:py-28 scroll-mt-20" id="approach">
        <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#FFA877] font-bold">HOW WE APPROACH EACH JOB</span>
              <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white leading-tight">
                We Check Before We Clean
              </h2>
              <div className="space-y-3 text-white/85 text-sm leading-relaxed">
                <p>
                  Every set of curtains is different. The fabric, the age, how much sun they get, whether there&apos;s mould near the window — it all affects how we clean them.
                </p>
                <p>
                  Before we start, we check the fabric, the stitching, and any problem spots. That way we know exactly how to treat each panel without guessing — and you know what to expect from the result.
                </p>
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-6 text-[#C8643B] text-xs font-semibold">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>No shrinkage or fading</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Safe for blackout linings</span>
                </div>
              </div>
            </div>

            {/* Right Column: 4-Step Vertical Card Strip */}
            <div className="lg:col-span-6 space-y-3">
              {[
                {
                  num: "01",
                  icon: <Search className="w-[18px] h-[18px]" />,
                  title: "We check the fabric first",
                  desc: "We test the fabric and dye on a hidden spot before applying any heat or moisture. No guesswork.",
                },
                {
                  num: "02",
                  icon: <Wind className="w-[18px] h-[18px]" />,
                  title: "Dry vacuum to clear the surface",
                  desc: "We vacuum the curtain first to lift out loose dust, hair, and surface debris before the steam goes on.",
                },
                {
                  num: "03",
                  icon: <Droplets className="w-[18px] h-[18px]" />,
                  title: "Steam clean while hanging",
                  desc: "Low-moisture steam cleans through the fabric without soaking it — no drips on your walls or floors.",
                },
                {
                  num: "04",
                  icon: <ClipboardCheck className="w-[18px] h-[18px]" />,
                  title: "Check it over with you",
                  desc: "We walk through the finished result with you before we leave. If something needs a second pass, we do it.",
                },
              ].map((step, idx) => (
                <div key={idx} className="bg-white/[0.08] backdrop-blur-md p-5 rounded-2xl flex items-start gap-4 border border-white/15 hover:bg-white/[0.12] transition-colors">
                  <div className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {step.num}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-[#C8643B]">{step.icon}</span>
                      <h4 className="font-headline text-base font-semibold text-white">{step.title}</h4>
                    </div>
                    <p className="text-xs text-white/85 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MID-PAGE BOOKING CTA — Light warm background */}
      <section className="w-full bg-[#F3EDE2] py-20 lg:py-24 px-4 md:px-6">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 space-y-5">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-secondary text-xs font-bold uppercase tracking-wider border border-primary/10 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Book a Clean
            </span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary leading-tight">
              Get Your Curtains Cleaned This Week
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              No taking curtains down. No upfront payment. We come to you, clean everything on the rail, and leave the same day.
            </p>
            <ul className="space-y-3 text-sm text-on-surface font-medium">
              {["Same-week appointments available", "Free quote before we start", "Safe for all fabric types"].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7 bg-white rounded-3xl shadow-xl border border-primary/10 overflow-hidden">
            <div className="bg-[#FAF8F5] px-8 py-5 border-b border-primary/10">
              <h3 className="font-headline text-xl font-bold text-primary">Request a Booking</h3>
              <p className="text-xs text-on-surface-variant mt-0.5">We&apos;ll confirm the same day — no payment needed now.</p>
            </div>
            <div className="p-6 sm:p-8">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR 8-STEP CLEANING PROCESS PANEL — White card on cream */}
      <section className="w-full bg-[#FAF8F5] py-20 lg:py-28 scroll-mt-20" id="process">
        <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="bg-white rounded-3xl p-8 lg:p-14 shadow-md border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {/* Sticky Left Descriptor */}
              <div className="lg:col-span-4 flex flex-col items-start gap-6 lg:sticky lg:top-32 self-start">
                <div>
                  <span className="text-xs uppercase tracking-wider text-secondary font-bold block mb-2">STEP BY STEP</span>
                  <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary tracking-tight leading-tight mb-3">
                    What Happens on the Day
                  </h2>
                  <p className="text-sm text-on-surface-variant leading-relaxed">
                    Here&apos;s exactly what we do from the moment we arrive to when we pack up and leave.
                  </p>
                </div>

                <div className="flex flex-col items-start gap-2.5 pt-1">
                  <Link
                    href="/book-now"
                    className="inline-flex items-center justify-center gap-2 text-sm font-bold text-white bg-secondary hover:bg-secondary-hover px-7 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all"
                  >
                    <span>Book Your Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    <span>Same-week bookings available</span>
                  </div>
                </div>
              </div>

              {/* 8 Sequential Steps */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    num: "01",
                    icon: <Eye className="w-5 h-5" />,
                    title: "Fabric check",
                    desc: "We look at what the curtains are made of and how they've been holding up — sun damage, backing condition, any weak spots.",
                  },
                  {
                    num: "02",
                    icon: <ScanEye className="w-5 h-5" />,
                    title: "Spot check for stains",
                    desc: "We identify mould spots, water rings, grease marks, or anything that needs a bit of extra attention before we start.",
                  },
                  {
                    num: "03",
                    icon: <Wind className="w-5 h-5" />,
                    title: "Dry vacuum",
                    desc: "A dry vacuum run along the headers and face of the curtain to pull out loose dust before the steam touches it.",
                  },
                  {
                    num: "04",
                    icon: <Pipette className="w-5 h-5" />,
                    title: "Spot treatment",
                    desc: "Any stubborn stains get a gentle treatment first — safe for the fabric, no harsh chemicals.",
                  },
                  {
                    num: "05",
                    icon: <CloudDrizzle className="w-5 h-5" />,
                    title: "Steam clean",
                    desc: "Low-moisture steam goes through the weave, killing bacteria and loosening anything the vacuum didn't catch.",
                  },
                  {
                    num: "06",
                    icon: <Droplets className="w-5 h-5" />,
                    title: "Extract the moisture",
                    desc: "We extract the moisture straight away so the fabric isn't left damp — curtains are usually dry within 2 to 4 hours.",
                  },
                  {
                    num: "07",
                    icon: <Sparkles className="w-5 h-5" />,
                    title: "Odour treatment",
                    desc: "If there are lingering smells from cooking, pets, or moisture, we treat the source in the fabric — not just mask it.",
                  },
                  {
                    num: "08",
                    icon: <ClipboardCheck className="w-5 h-5" />,
                    title: "Walk-through with you",
                    desc: "We check the pleats are sitting right, the fabric looks good, and walk through everything with you before we go.",
                  },
                ].map((step, idx) => (
                  <div key={idx} className="bg-[#FAF8F5] p-5 rounded-2xl flex flex-col justify-between hover:shadow-md transition-all border border-primary/5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold text-secondary bg-secondary/15 px-2.5 py-0.5 rounded-full">{step.num}</span>
                      <span className="text-primary">{step.icon}</span>
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

      {/* 5. "THE BRISBANE DIFFERENCE" (Why People Use Us) — Dark navy */}
      <section className="w-full bg-[#1B3C59] text-white py-20 lg:py-28 scroll-mt-20" id="difference">
        <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider text-[#FFA877] font-bold block mb-1">Why People Use Us</span>
            <h2 className="font-headline text-3xl lg:text-4xl font-bold text-white mb-3">
              What Makes Us Different
            </h2>
            <p className="text-sm text-white/70 leading-relaxed">
              Honest work, the right equipment, and no shortcuts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: <Wrench className="w-6 h-6" />,
                title: "The Right Gear",
                desc: "We use proper commercial steam units made for hanging fabrics — not carpet machines or hire-shop equipment that can over-wet and stretch your curtains.",
              },
              {
                icon: <Flower2 className="w-6 h-6" />,
                title: "Products That Won't Damage Your Fabrics",
                desc: "Everything we use is non-toxic and pH-neutral. It keeps the fabric in good condition and doesn't leave a chemical smell behind.",
              },
              {
                icon: <ScanEye className="w-6 h-6" />,
                title: "We Actually Inspect Before We Start",
                desc: "We check the seams, stitching, and any sun-damaged spots before touching anything. We've seen what Brisbane sun does to fabric over a few years, and we work accordingly.",
              },
              {
                icon: <BadgeCheck className="w-6 h-6" />,
                title: "Straight Pricing, No Add-Ons",
                desc: "You get a clear quote before we start. If there are old stains we can't guarantee removal on, we tell you that upfront — not after the job.",
              },
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white/[0.06] backdrop-blur-sm p-6 rounded-2xl flex flex-col sm:flex-row gap-4 items-start border border-white/15 hover:bg-white/[0.1] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#FFA877] shrink-0 border border-white/15">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="font-headline text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-white/75 leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL BOOKING FORM SECTION — Light warm background */}
      <section className="w-full bg-[#F3EDE2] py-20 lg:py-28 px-4 md:px-6">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-4 space-y-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white text-secondary text-xs font-bold uppercase tracking-wider border border-primary/10 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                BOOK A CLEAN
              </span>
              <h2 className="font-headline text-3xl lg:text-5xl font-bold text-primary leading-tight">
                Ready to Book?
              </h2>
              <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Fill in your details and we&apos;ll confirm your booking the same day. No payment required upfront.
              </p>
              <ul className="space-y-3 pt-2 text-sm text-on-surface font-medium">
                {["Curtains stay on the rail", "Same-week bookings available", "Free quote, no obligation"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-8 bg-white rounded-3xl shadow-2xl border border-primary/10 overflow-hidden">
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
