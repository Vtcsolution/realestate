function SpokeIcon({ size = 40, className }) {
  const spokes = Array.from({ length: 20 })

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.25" />
      {spokes.map((_, index) => (
        <line
          key={index}
          x1="20"
          y1="4"
          x2="20"
          y2="9"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          transform={`rotate(${(360 / spokes.length) * index} 20 20)`}
        />
      ))}
      <circle cx="20" cy="20" r="3" fill="currentColor" />
    </svg>
  )
}

export default SpokeIcon
