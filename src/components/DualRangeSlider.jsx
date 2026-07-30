const THUMB_STYLES =
  '[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-gold [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:cursor-pointer ' +
  '[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-gold [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow [&::-moz-range-thumb]:cursor-pointer ' +
  '[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent'

function DualRangeSlider({ min, max, step = 1, minValue, maxValue, onChange, formatValue = (v) => v }) {
  const range = max - min || 1
  const minPercent = ((minValue - min) / range) * 100
  const maxPercent = ((maxValue - min) / range) * 100

  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), maxValue - step)
    onChange({ min: value, max: maxValue })
  }

  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), minValue + step)
    onChange({ min: minValue, max: value })
  }

  return (
    <div>
      <div className="flex items-center justify-between font-body text-xs text-charcoal/60">
        <span className="font-medium text-navy">{formatValue(minValue)}</span>
        <span className="font-medium text-navy">{formatValue(maxValue)}</span>
      </div>
      <div className="relative mt-3 h-4">
        <div className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-neutral" />
        <div
          className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-gold"
          style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={minValue}
          onChange={handleMinChange}
          className={`pointer-events-none absolute inset-x-0 top-1/2 z-10 h-1.5 w-full -translate-y-1/2 appearance-none bg-transparent ${THUMB_STYLES}`}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={maxValue}
          onChange={handleMaxChange}
          className={`pointer-events-none absolute inset-x-0 top-1/2 z-20 h-1.5 w-full -translate-y-1/2 appearance-none bg-transparent ${THUMB_STYLES}`}
        />
      </div>
    </div>
  )
}

export default DualRangeSlider
