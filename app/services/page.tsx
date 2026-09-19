import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import { Check, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export const metadata = {
  title: "Services | Curtain Cleaning Brisbane",
  description: "Explore our range of specialised curtain cleaning services including on-site steam extraction, ultrasonic sanitisation, and subtropical mould removal.",
};

export default function ServicesPage() {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6">
          <span className="text-xs uppercase tracking-wider text-secondary-container font-semibold">WHAT WE DO</span>
          <h1 className="font-headline text-4xl lg:text-5xl font-bold mt-2 text-balance">
            Our Curtain Cleaning Services
          </h1>
          <p className="font-body text-base text-white/80 max-w-2xl mt-4 leading-relaxed">
            We handle all types of curtains and blinds — from lightweight sheers to heavy blackouts. Every job is done at your home, no removal needed.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-[1240px] mx-auto px-4 md:px-6 py-16 space-y-12">
        {SERVICES_DATA.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={service.id}
              id={service.id}
              className={`bg-white rounded-3xl overflow-hidden border border-primary/10 shadow-stitch p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                !isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-6 space-y-4 ${!isEven ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
                    <span className="material-symbols-outlined text-[22px]">{service.icon}</span>
                  </div>
                  <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                    Starting from {service.priceStart}
                  </span>
                </div>

                <h2 className="font-headline text-2xl lg:text-3xl font-bold text-primary">
                  {service.title}
                </h2>

                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  {service.fullDesc}
                </p>

                {/* Fabric types tags */}
                <div className="pt-2">
                  <span className="text-xs font-semibold text-primary block mb-2">Suitable Fabrics:</span>
                  <div className="flex flex-wrap gap-2">
                    {service.fabricTypes.map((fab, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-3 py-1 rounded-full bg-surface-container text-primary font-semibold text-xs border border-primary/10"
                      >
                        {fab}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features list */}
                <ul className="space-y-2 pt-2">
                  {service.features.map((feat, featIdx) => (
                    <li key={featIdx} className="flex items-center gap-2 text-xs font-medium text-on-surface">
                      <Check className="w-4 h-4 text-secondary shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    href={`/book-now?service=${service.slug}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-secondary-hover shadow-md transition-all"
                  >
                    <span>Book {service.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className={`lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden ${!isEven ? "lg:order-1" : ""}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </section>

      {/* Guarantee Banner */}
      <section className="bg-surface-container/60 border-t border-primary/10 py-12">
        <div className="max-w-[1240px] mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-secondary-container" />
            </div>
            <div>
              <h3 className="font-headline text-xl font-bold text-primary">Not Sure Which Service You Need?</h3>
              <p className="text-xs text-on-surface-variant">Give us a call or send a message — we'll ask a few quick questions and point you in the right direction.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold text-sm transition-all shrink-0"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

