import { motion } from 'framer-motion'
import { AMENITY_META } from '../lib/amenities'
import DualRangeSlider from './DualRangeSlider'

export const PROPERTY_TYPES = ['Villa', 'Apartment', 'Farmhouse', 'Commercial']
export const PURPOSE_OPTIONS = ['Any', 'Buy', 'Rent']
const BED_OPTIONS = ['All', 'Studio', '1', '2', '3', '4']
const BATH_OPTIONS = ['All', '1', '2', '3', '4']

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
  notation: 'compact',
})
const areaFormatter = (value) => `${value.toLocaleString()} sqft`

function FilterSection({ title, children }) {
  return (
    <div className="border-b border-neutral-light py-6 first:pt-0 last:border-b-0">
      <p className="font-body text-sm font-semibold text-navy">{title}</p>
      <div className="mt-4">{children}</div>
    </div>
  )
}

function PillGroup({ options, value, onChange, layoutId }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => {
        const isActive = value === option
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`relative rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
              isActive ? 'border-gold font-medium text-navy' : 'border-neutral text-charcoal/70 hover:border-gold'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-full bg-gold"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative z-10">{option}</span>
          </button>
        )
      })}
    </div>
  )
}

function PropertyFilters({ filters, onChange, priceBounds, areaBounds, locations, views, onReset }) {
  const toggleType = (type) => {
    const types = filters.types.includes(type)
      ? filters.types.filter((t) => t !== type)
      : [...filters.types, type]
    onChange({ ...filters, types })
  }

  const toggleAmenity = (key) => {
    const amenities = filters.amenities.includes(key)
      ? filters.amenities.filter((a) => a !== key)
      : [...filters.amenities, key]
    onChange({ ...filters, amenities })
  }

  const [priceMin, priceMax] = priceBounds
  const [areaMin, areaMax] = areaBounds

  return (
    <div className="font-body">
      <div className="flex items-center justify-between">
        <p className="font-heading text-lg font-semibold text-navy">Filters</p>
        <button
          type="button"
          onClick={onReset}
          className="text-sm font-medium text-gold hover:underline"
        >
          Clear All
        </button>
      </div>

      <FilterSection title="Looking To">
        <PillGroup
          options={PURPOSE_OPTIONS}
          value={filters.purpose || 'Any'}
          onChange={(value) => onChange({ ...filters, purpose: value === 'Any' ? '' : value })}
          layoutId="filterPurposePill"
        />
      </FilterSection>

      <FilterSection title="Price Range">
        <DualRangeSlider
          min={priceMin}
          max={priceMax}
          step={250000}
          minValue={filters.priceMin}
          maxValue={filters.priceMax}
          formatValue={priceFormatter.format}
          onChange={({ min, max }) => onChange({ ...filters, priceMin: min, priceMax: max })}
        />
      </FilterSection>

      <FilterSection title="Area (sqft)">
        <DualRangeSlider
          min={areaMin}
          max={areaMax}
          step={250}
          minValue={filters.areaMin}
          maxValue={filters.areaMax}
          formatValue={areaFormatter}
          onChange={({ min, max }) => onChange({ ...filters, areaMin: min, areaMax: max })}
        />
      </FilterSection>

      <FilterSection title="Property Type">
        <div className="space-y-3">
          {PROPERTY_TYPES.map((type) => (
            <label key={type} className="flex cursor-pointer items-center gap-3 text-sm text-charcoal/80">
              <input
                type="checkbox"
                checked={filters.types.includes(type)}
                onChange={() => toggleType(type)}
                className="h-4 w-4 rounded border-neutral text-gold accent-gold focus:ring-gold"
              />
              {type}
            </label>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Bedrooms">
        <PillGroup
          options={BED_OPTIONS}
          value={filters.bedrooms}
          onChange={(value) => onChange({ ...filters, bedrooms: value })}
          layoutId="filterBedroomsPill"
        />
      </FilterSection>

      <FilterSection title="Bathrooms">
        <PillGroup
          options={BATH_OPTIONS}
          value={filters.bathrooms}
          onChange={(value) => onChange({ ...filters, bathrooms: value })}
          layoutId="filterBathroomsPill"
        />
      </FilterSection>

      <FilterSection title="Location">
        <select
          value={filters.location}
          onChange={(event) => onChange({ ...filters, location: event.target.value })}
          className="w-full rounded-lg border border-neutral bg-white px-3 py-2.5 text-sm text-charcoal focus:border-gold focus:outline-none"
        >
          <option value="">All Locations</option>
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </FilterSection>

      <FilterSection title="View">
        <select
          value={filters.view}
          onChange={(event) => onChange({ ...filters, view: event.target.value })}
          className="w-full rounded-lg border border-neutral bg-white px-3 py-2.5 text-sm text-charcoal focus:border-gold focus:outline-none"
        >
          <option value="">Any View</option>
          {views.map((view) => (
            <option key={view} value={view}>
              {view}
            </option>
          ))}
        </select>
      </FilterSection>

      <FilterSection title="Amenities">
        <div className="grid grid-cols-2 gap-3">
          {AMENITY_META.map(({ key, label, icon: Icon }) => (
            <label
              key={key}
              className="flex cursor-pointer items-center gap-2 text-sm text-charcoal/80"
            >
              <input
                type="checkbox"
                checked={filters.amenities.includes(key)}
                onChange={() => toggleAmenity(key)}
                className="h-4 w-4 rounded border-neutral text-gold accent-gold focus:ring-gold"
              />
              <Icon size={15} className="text-gold" />
              {label}
            </label>
          ))}
        </div>
      </FilterSection>
    </div>
  )
}

export default PropertyFilters
