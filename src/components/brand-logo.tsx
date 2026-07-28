type BrandLogoProps = {
  className?: string;
  compact?: boolean;
};

export function BrandLogo({ className = "", compact = false }: BrandLogoProps) {
  return (
    <svg
      aria-hidden="true"
      className={("brand-logo " + (compact ? "brand-logo-compact " : "") + className).trim()}
      viewBox="0 0 330 104"
      role="img"
    >
      <defs>
        <linearGradient id="dropGreen" x1="23" y1="9" x2="76" y2="72" gradientUnits="userSpaceOnUse">
          <stop stopColor="#91dc38" />
          <stop offset=".47" stopColor="#08764a" />
          <stop offset="1" stopColor="#006ba5" />
        </linearGradient>
        <linearGradient id="waveBlue" x1="21" y1="63" x2="81" y2="88" gradientUnits="userSpaceOnUse">
          <stop stopColor="#007db3" />
          <stop offset=".56" stopColor="#009dda" />
          <stop offset="1" stopColor="#0046a1" />
        </linearGradient>
      </defs>
      <g>
        <path d="M51 4C43 21 20 42 20 62c0 18 14 32 31 32s31-14 31-32C82 42 59 21 51 4Z" fill="url(#dropGreen)" />
        <path d="M21 64c15-8 27-2 38 2 9 3 16 2 23-3-1 17-14 30-31 30-16 0-29-12-30-29Z" fill="url(#waveBlue)" />
        <path d="M21 65c14-4 24 1 34 4 12 4 20 2 27-4-1 5-3 9-6 13-13 6-22 4-31 0-8-4-15-6-22-3-1-3-2-6-2-10Z" fill="#fff" />
        <path d="M25 72c12-2 20 4 30 7 8 2 15 1 21-2-5 9-14 15-25 15-12 0-22-7-26-20Z" fill="#0063b8" opacity=".92" />
        <path d="M48 26 38 42h6l-9 13h8l-11 15h31L53 55h7l-9-13h6L48 26Z" fill="#fff" />
        <path d="m60 38-7 12h5l-7 10h5l-7 10h22l-7-10h5l-7-10h5l-7-12Z" fill="#fff" opacity=".96" />
        <path d="M48 68v10M60 66v12" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g className="brand-logo-type" fill="currentColor">
        <text x="99" y="48" fontFamily="SuisseMedium, Arial, sans-serif" fontSize="24" fontWeight="500" letterSpacing="3.5">EVERGREEN</text>
        <path d="M100 65h49M272 65h42" stroke="currentColor" strokeWidth="1.5" />
        <text x="158" y="76" fontFamily="SuisseMedium, Arial, sans-serif" fontSize="29" fontWeight="500" letterSpacing="2">
          H<tspan fontSize="18" baselineShift="-5">2</tspan>O
        </text>
      </g>
    </svg>
  );
}
