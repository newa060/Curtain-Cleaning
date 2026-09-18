import React from "react";

export const metadata = {
  title: "Terms & Conditions | Curtain Cleaning Brisbane",
};

export default function TermsPage() {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-16 space-y-6">
      <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary">Terms & Conditions</h1>
      <p className="text-xs text-on-surface-variant">Last updated: September 2026</p>

      <div className="space-y-4 text-xs text-on-surface leading-relaxed max-w-3xl">
        <p>
          By booking or requesting services from Curtain Cleaning Brisbane, you agree to the following terms and conditions.
        </p>

        <h2 className="font-headline text-lg font-bold text-primary pt-2">Service Guarantee</h2>
        <p>
          We guarantee that our in-situ low-moisture steam extraction method will not shrink fabric or distort pleat folds when performed under standard operating recommendations. Pre-inspection checks are conducted to confirm fabric suitability.
        </p>

        <h2 className="font-headline text-lg font-bold text-primary pt-2">Estimates & Quotes</h2>
        <p>
          Online estimates are calculated based on standard drop dimensions (up to 2.8m height per drop). Oversized drapery or custom theater tracks may require on-site confirmation prior to service commencement.
        </p>

        <h2 className="font-headline text-lg font-bold text-primary pt-2">Cancellation Policy</h2>
        <p>
          We request at least 24 hours notice for booking rescheduling or cancellations.
        </p>
      </div>
    </div>
  );
}
