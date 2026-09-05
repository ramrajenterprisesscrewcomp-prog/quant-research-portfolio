import React from 'react';

/**
 * Site mark — three ascending candlesticks on a baseline.
 *
 * Drawn rather than imported so it inherits the page's brass token and stays
 * crisp at any size. Kept to three bodies and one rule: anything more detailed
 * turns to mush at the 16px favicon size, which is the real constraint.
 *
 * The first candle is deliberately muted — the site publishes its losing runs,
 * and the mark says the same thing in miniature.
 */
export default function Logo({ size = 26, className = '' }) {
  return (
    <svg
      className={`logo ${className}`}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label="Anand P — quantitative research"
    >
      {/* baseline */}
      <path d="M3 28.25h26" stroke="currentColor" strokeOpacity="0.28" strokeWidth="1.25" strokeLinecap="round" />

      {/* first candle — down, muted */}
      <path d="M8 14.5v11" stroke="currentColor" strokeOpacity="0.42" strokeWidth="1.3" strokeLinecap="round" />
      <rect x="5.25" y="17" width="5.5" height="6.5" rx="0.9" fill="currentColor" fillOpacity="0.42" />

      {/* second candle — up */}
      <path d="M16 9v12.5" stroke="var(--brass)" strokeOpacity="0.75" strokeWidth="1.3" strokeLinecap="round" />
      <rect x="13.25" y="11.5" width="5.5" height="7.5" rx="0.9" fill="var(--brass)" fillOpacity="0.75" />

      {/* third candle — up, full strength */}
      <path d="M24 3.5v13" stroke="var(--brass)" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="21.25" y="6" width="5.5" height="8" rx="0.9" fill="var(--brass)" />
    </svg>
  );
}
