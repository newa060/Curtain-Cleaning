"use client";

import React, { useState } from "react";

export interface GoogleReviewProps {
  id?: string;
  name: string;
  initial?: string;
  avatarBg?: string;
  avatarUrl?: string;
  timeAgo: string;
  rating?: number;
  quote: string;
  suburb?: string;
  tag?: string;
  verified?: boolean;
  truncateLength?: number;
}

export function GoogleGLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-label="Google Review">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

export function GoogleVerifiedBadge({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-label="Verified Google Review">
      <path
        fill="#1a73e8"
        d="M12 1L9.27 3.59L5.61 3.28L4.35 6.72L1 8.25L2.35 11.66L1.18 15.13L4.65 16.42L6.15 19.78L9.77 19.24L12.3 22L14.77 19.29L18.39 19.74L19.82 16.35L23.27 15.01L22.04 11.57L23.33 8.13L19.95 6.66L18.63 3.24L14.98 3.62L12 1Z"
      />
      <path
        fill="#ffffff"
        d="M10.09 15.59L6.5 12L7.91 10.59L10.09 12.77L16.09 6.77L17.5 8.18L10.09 15.59Z"
      />
    </svg>
  );
}

export function GoogleStars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex items-center gap-0.5 text-[#fbbc04]">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-[18px] h-[18px] fill-[#fbbc04]" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

export default function GoogleReviewCard({
  name,
  initial,
  avatarBg = "bg-[#5c6bc0]",
  avatarUrl,
  timeAgo,
  rating = 5,
  quote,
  suburb,
  tag,
  verified = true,
  truncateLength = 120,
}: GoogleReviewProps) {
  const [expanded, setExpanded] = useState(false);
  const letter = initial || name.charAt(0).toUpperCase();
  const shouldTruncate = quote.length > truncateLength;
  const displayedText = shouldTruncate && !expanded ? `${quote.slice(0, truncateLength).trim()}...` : quote;

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-[#e8eaed] flex flex-col justify-between hover:shadow-[0_4px_20px_rgba(0,0,0,0.09)] transition-all duration-300 h-full">
      <div className="space-y-3">
        {/* Top Header: Avatar + User Info + Google G Icon */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={name}
                className="w-11 h-11 rounded-full object-cover shrink-0"
              />
            ) : (
              <div
                className={`w-11 h-11 rounded-full ${avatarBg} text-white font-bold text-lg flex items-center justify-center shrink-0 shadow-sm select-none`}
              >
                {letter}
              </div>
            )}
            <div className="min-w-0">
              <h3 className="font-bold text-[15px] sm:text-[16px] text-[#202124] leading-snug tracking-tight">
                {name}
              </h3>
              <p className="text-xs sm:text-[13px] text-[#70757a] font-normal leading-tight mt-0.5">
                {timeAgo}
              </p>
            </div>
          </div>

          {/* Google Multi-Color G Logo */}
          <div className="shrink-0 pt-0.5">
            <GoogleGLogo className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        </div>

        {/* Rating Stars + Blue Verified Badge */}
        <div className="flex items-center gap-2 pt-0.5">
          <GoogleStars count={rating} />
          {verified && <GoogleVerifiedBadge className="w-4 h-4 ml-0.5 shrink-0" />}
        </div>

        {/* Review Text */}
        <div className="pt-1">
          <p className="text-[14px] sm:text-[15px] text-[#3c4043] leading-relaxed font-normal">
            {displayedText}
          </p>
          {shouldTruncate && (
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="text-[13px] sm:text-sm text-[#70757a] hover:text-[#202124] font-medium inline-block mt-1 cursor-pointer transition-colors focus:outline-none"
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>

      {/* Optional Suburb & Service Badges */}
      {(suburb || tag) && (
        <div className="pt-4 mt-4 border-t border-[#f1f3f4] flex items-center justify-between text-xs text-[#70757a]">
          {suburb && (
            <span className="flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              {suburb}
            </span>
          )}
          {tag && (
            <span className="bg-[#f1f3f4] text-[#3c4043] px-2.5 py-0.5 rounded-full text-[11px] font-medium">
              {tag}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

