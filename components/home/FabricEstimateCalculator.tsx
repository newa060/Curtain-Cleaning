"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, ArrowRight, CheckCircle2, Shield } from "lucide-react";

export const FabricEstimateCalculator: React.FC = () => {
  const [drops, setDrops] = useState<number>(4);
  const [fabricType, setFabricType] = useState<string>("sheer");
  const [mouldTreatment, setMouldTreatment] = useState<boolean>(false);

  // Pricing formula based on drops & fabric
  const getRatePerDrop = () => {
    switch (fabricType) {
      case "sheer":
        return 40;
      case "linen":
        return 48;
      case "silk":
        return 55;
      case "velvet":
        return 65;
      default:
        return 45;
    }
  };

  const basePrice = drops * getRatePerDrop();
  const mouldAddon = mouldTreatment ? drops * 12 : 0;
  const totalPrice = basePrice + mouldAddon;

  return (
    <div className="w-full bg-surface-container/60 border border-primary/10 rounded-2xl p-6 lg:p-8 shadow-stitch">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-secondary/15 flex items-center justify-center text-secondary">
          <Calculator className="w-5 h-5" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold text-secondary">Instant Pricing Tool</span>
          <h3 className="font-headline text-2xl font-bold text-primary">Instant Curtain Cleaning Estimator</h3>
        </div>
      </div>

      <p className="font-body text-sm text-on-surface-variant mb-6">
        Select your curtain drops and fabric blend for an instant on-site cleaning estimate across Brisbane.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Inputs */}
        <div className="space-y-5">
          {/* Drops Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="font-body text-sm font-semibold text-primary">
                Number of Curtain Drops / Panels:
              </label>
              <span className="text-lg font-bold text-secondary">{drops} Panels</span>
            </div>
            <input
              type="range"
              min="2"
              max="16"
              step="1"
              value={drops}
              onChange={(e) => setDrops(parseInt(e.target.value))}
              className="w-full h-2 bg-primary/20 rounded-lg appearance-none cursor-pointer accent-secondary"
            />
            <div className="flex justify-between text-xs text-on-surface-variant mt-1">
              <span>2 drops (small room)</span>
              <span>8 drops</span>
              <span>16+ drops (full house)</span>
            </div>
          </div>

          {/* Fabric Type selector */}
          <div>
            <label className="font-body text-sm font-semibold text-primary block mb-2">
              Fabric Type:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "sheer", label: "Sheer / Voile ($40/drop)" },
                { id: "linen", label: "Linen / Cotton ($48/drop)" },
                { id: "silk", label: "Delicate Silk ($55/drop)" },
                { id: "velvet", label: "Heavy Velvet ($65/drop)" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setFabricType(item.id)}
                  className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all text-left ${
                    fabricType === item.id
                      ? "bg-primary text-white border-primary shadow-sm"
                      : "bg-white text-on-surface border-outline-variant hover:border-primary"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mould Add-on checkbox */}
          <div className="flex items-center gap-3 bg-white p-3 rounded-xl border border-outline-variant">
            <input
              type="checkbox"
              id="mould"
              checked={mouldTreatment}
              onChange={(e) => setMouldTreatment(e.target.checked)}
              className="w-4 h-4 rounded text-secondary focus:ring-secondary accent-secondary"
            />
            <label htmlFor="mould" className="text-xs font-body text-on-surface cursor-pointer">
              Add Subtropical Mould & Spore Sanitisation (+$12/drop)
            </label>
          </div>
        </div>

        {/* Right Output Box */}
        <div className="bg-white border-2 border-primary/15 rounded-2xl p-6 text-center shadow-md flex flex-col items-center justify-between h-full">
          <div>
            <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">Estimated Total</span>
            <div className="text-4xl lg:text-5xl font-headline font-bold text-primary my-2">
              ${totalPrice} <span className="text-xs text-on-surface-variant font-normal">AUD</span>
            </div>
            <p className="text-xs text-tertiary font-semibold flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Includes On-Site Track Cleaning & Fast 2–4 Hr Drying
            </p>
          </div>

          <div className="w-full pt-6 border-t border-outline-variant/30 mt-6 space-y-3">
            <Link
              href={{
                pathname: "/book-now",
                query: { drops, fabricType, mouldTreatment },
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-secondary text-white font-semibold text-sm hover:bg-secondary-hover transition-all shadow-md"
            >
              <span>Book This Estimate</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-[11px] text-on-surface-variant flex items-center justify-center gap-1">
              <Shield className="w-3 h-3 text-secondary" /> No hidden fees • Fixed on-site quote guaranteed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
