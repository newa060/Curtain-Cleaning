import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, Heart, Award, ArrowRight, Phone } from "lucide-react";

export const metadata = {
  title: "About Us | Curtain Cleaning Brisbane",
  description: "Learn about Brisbane's premier curtain cleaning specialists. Dedicated to eco-friendly, zero-dismantling in-situ fabric care since 2018.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="bg-primary text-white py-16 lg:py-20">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">Our Heritage & Expertise</span>
          <h1 className="font-headline text-4xl lg:text-5xl font-bold mt-2 text-balance">
            Preserving Brisbane’s Finest Drapery & Window Textiles
          </h1>
          <p className="font-body text-base text-white/80 max-w-2xl mt-4 leading-relaxed">
            Founded with a vision to eliminate the frustration of unhooking, dry cleaning transport, and fabric shrinkage, Curtain Cleaning Brisbane delivers boutique in-situ steam and ultrasonic sanitisation.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="max-w-[1240px] mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-wider text-secondary font-semibold">The In-Situ Difference</span>
            <h2 className="font-headline text-3xl font-bold text-primary">
              Why We Never Take Your Curtains Down
            </h2>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Traditional dry cleaners force homeowners to unhook complex pleats, transport heavy drapes across town, and wait up to two weeks — only to return shrunk curtains with damaged linings.
            </p>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              Our micro-steam and ultrasonic extraction technology treats your curtains right where they hang. By maintaining natural gravity hang during the gentle warm steam injection, your drapes retain their exact length, crisp pleat alignment, and luxury drape fold.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "100% Guarantee against fabric shrinkage",
                "Gentle temperature-controlled micro-steam wands",
                "Non-toxic botanical anti-mould formulations",
                "Convenient 2-4 hour drying time",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-primary font-medium">
                  <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-primary/10">
              <Image
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop"
                alt="Curtain fabric inspection in sunny Brisbane living room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="bg-surface-container/60 border-y border-primary/10 py-16">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-secondary font-semibold">Our Commitments</span>
            <h2 className="font-headline text-3xl font-bold text-primary mt-1">
              Driven by Quality & Trust
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-primary/10 shadow-stitch space-y-3">
              <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-headline text-xl font-bold text-primary">Fabric Safety Guaranteed</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                We test every fiber weave before treatment, ensuring delicate silk, organza, or Belgian linen is treated with bespoke pressure settings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-primary/10 shadow-stitch space-y-3">
              <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-headline text-xl font-bold text-primary">Eco-Friendly & Non-Toxic</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Our plant-derived botanical formulas eradicate mould spores and allergens without harsh chemicals, keeping children and pets safe.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-primary/10 shadow-stitch space-y-3">
              <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-headline text-xl font-bold text-primary">Local Brisbane Experts</h3>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Our technicians understand Brisbane’s subtropical climate challenges, from humid summer mould build-up to riverfront pollen dust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="max-w-[1240px] mx-auto px-4 md:px-6 py-16 text-center">
        <div className="bg-primary text-white p-10 rounded-3xl space-y-4">
          <h2 className="font-headline text-3xl font-bold text-white">Experience Fresh Drapery Today</h2>
          <p className="text-sm text-white/80 max-w-lg mx-auto">
            Book online or speak with our Brisbane technicians for a free, transparent estimate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/book-now"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-white font-bold text-sm hover:bg-secondary-hover shadow-md transition-all"
            >
              <span>Book Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:0405849841"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-all"
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
