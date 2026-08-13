function LogoMark({ size = 34, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18.25" stroke="url(#vipLogoGradient)" strokeWidth="1.15" />
      <path
        d="M12.5 13 L20 27.5 L27.5 13"
        stroke="url(#vipLogoGradient)"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="12" r="1.3" fill="#C9A227" />
      <defs>
        <linearGradient
          id="vipLogoGradient"
          x1="3"
          y1="3"
          x2="37"
          y2="37"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F3E6BE" />
          <stop offset="1" stopColor="#C9A227" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function Logo({ className = '', markSize = 34, wordmarkClassName = 'text-navy', showWordmark = true }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={markSize} />
      {showWordmark && (
        <span className={`font-heading text-xl font-bold leading-none ${wordmarkClassName}`}>
          VIP <span className="text-gold">Estates</span>
        </span>
      )}
    </span>
  )
}

export default Logo
