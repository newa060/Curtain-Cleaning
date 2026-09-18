import React from "react";

export const metadata = {
  title: "Privacy Policy | Curtain Cleaning Brisbane",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full max-w-[1240px] mx-auto px-4 md:px-6 py-16 space-y-6">
      <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary">Privacy Policy</h1>
      <p className="text-xs text-on-surface-variant">Last updated: September 2026</p>

      <div className="space-y-4 text-xs text-on-surface leading-relaxed max-w-3xl">
        <p>
          At Curtain Cleaning Brisbane, we are committed to protecting your privacy in accordance with the Australian Privacy Principles under the Privacy Act 1988 (Cth).
        </p>

        <h2 className="font-headline text-lg font-bold text-primary pt-2">Information We Collect</h2>
        <p>
          We collect personal information necessary to provide on-site curtain cleaning services, including your name, telephone number, email address, property suburb, and service request details.
        </p>

        <h2 className="font-headline text-lg font-bold text-primary pt-2">Use of Information</h2>
        <p>
          Your information is used strictly to communicate booking confirmations, deliver technicians to your address, provide instant estimates, and send follow-up service satisfaction inquiries.
        </p>

        <h2 className="font-headline text-lg font-bold text-primary pt-2">Data Protection</h2>
        <p>
          We implement secure encryption and organizational protocols to prevent unauthorized access to your contact information. We never sell or lease your personal details to third parties.
        </p>
      </div>
    </div>
  );
}
