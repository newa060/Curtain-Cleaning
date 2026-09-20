"use client";

import React from "react";
import { ExternalLink, MapPin, CheckCircle2 } from "lucide-react";

interface BrisbaneMapProps {
  height?: string;
  className?: string;
  showCardHeader?: boolean;
  showSuburbsList?: boolean;
}

export default function BrisbaneMap({
  height = "460px",
  className = "",
  showCardHeader = false,
  showSuburbsList = false,
}: BrisbaneMapProps) {
  const mapSearchUrl = "https://www.google.com/maps/search/?api=1&query=Brisbane+QLD+Australia";
  
  // Google Maps embed URL specifically querying Brisbane QLD Australia, which highlights the entire Brisbane city boundary with the red outline.
  const embedMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453478.2127083049!2d152.7132225!3d-27.3818625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915a155f58693d%3A0xe00e5e0d297a8e7e!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2sau!4v1710000000000!5m2!1sen!2sau";

  return (
    <div className={`w-full overflow-hidden rounded-3xl border border-primary/15 bg-white shadow-stitch ${className}`}>
      {showCardHeader && (
        <div className="p-5 border-b border-primary/10 bg-[#f8fcfb] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-secondary">
                SERVICE COVERAGE AREA
              </span>
            </div>
            <h3 className="font-headline text-xl font-bold text-primary mt-1">
              Greater Brisbane & Surrounds Coverage Map
            </h3>
          </div>
          <a
            href={mapSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-primary/20 text-primary text-xs font-bold hover:bg-primary hover:text-white shadow-sm transition-all shrink-0 w-fit"
          >
            <span>Open in Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Map Container */}
      <div className="relative w-full overflow-hidden bg-surface-container" style={{ height }}>
        {/* Floating "Open in Maps" button matching reference screenshot */}
        <div className="absolute top-4 left-4 z-10">
          <a
            href={mapSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/95 backdrop-blur-md text-primary font-headline text-xs font-bold shadow-md hover:bg-white border border-primary/15 transition-all text-primary hover:text-secondary group"
          >
            <span>Open in Maps</span>
            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Live Google Maps Iframe */}
        <iframe
          src={embedMapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Brisbane Coverage Map"
          className="w-full h-full"
        ></iframe>

        {/* Floating Coverage Legend Pill at Bottom Right */}
        <div className="absolute bottom-4 right-4 z-10 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/95 backdrop-blur-md border border-primary/15 shadow-sm text-[11px] text-primary font-bold">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500 border border-red-600 inline-block"></span>
          <span>Brisbane Boundary & Surrounds</span>
        </div>
      </div>

      {showSuburbsList && (
        <div className="p-5 bg-surface border-t border-primary/10 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-primary flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-secondary" />
              Full Service Region (Same as Highlighted Red Area):
            </span>
            <span className="text-[11px] text-on-surface-variant font-medium">
              Caboolture to Logan · Moreton Bay to Ipswich
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div className="flex items-center gap-1.5 text-on-surface">
              <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span>Inner City & CBD</span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface">
              <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span>Northside & Caboolture</span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface">
              <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span>Southside & Logan</span>
            </div>
            <div className="flex items-center gap-1.5 text-on-surface">
              <CheckCircle2 className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span>Western Suburbs & Ipswich</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
