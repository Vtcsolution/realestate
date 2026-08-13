import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion'
import { Hash, RotateCcw, Search, SlidersHorizontal } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/motion'
import { AREA_BOUNDS, PRICE_BOUNDS, VIEWS } from '../../lib/propertyBounds'
import { AMENITY_META } from '../../lib/amenities'
import DualRangeSlider from '../DualRangeSlider'

const TABS = ['Buy', 'Rent', 'Sell', 'Manage']

const propertyTypes = [
  { value: '', label: 'Choose Property Type' },
  { value: 'villa', label: 'Villa' },
  { value: 'apartment', label: 'Apartment' },
  { value: 'farmhouse', label: 'Farmhouse' },
  { value: 'commercial', label: 'Commercial' },
]

const bedOptions = ['All', 'Studio', '1', '2', '3', '4']
const bathOptions = ['All', '1', '2', '3', '4']

const HERO_VIDEO_SRC = '/videos/realestate_idea.mp4'
const HERO_POSTER =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80'

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
  notation: 'compact',
})
const areaFormatter = (value) => `${value.toLocaleString()} sqft`

const initialPanelState = {
  price: { min: PRICE_BOUNDS[0], max: PRICE_BOUNDS[1] },
  area: { min: AREA_BOUNDS[0], max: AREA_BOUNDS[1] },
  bedrooms: 'All',
  bathrooms: 'All',
  view: '',
  reference: '',
  amenities: [],
}

function Hero() {
  const navigate = useNavigate()
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const [activeTab, setActiveTab] = useState('Buy')
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [propertyType, setPropertyType] = useState('')
  const [community, setCommunity] = useState('')
  const [panel, setPanel] = useState(initialPanelState)

  const isSearchTab = activeTab === 'Buy' || activeTab === 'Rent'

  const toggleAmenity = (key) => {
    setPanel((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(key)
        ? prev.amenities.filter((a) => a !== key)
        : [...prev.amenities, key],
    }))
  }

  const handleReset = () => {
    setPropertyType('')
    setCommunity('')
    setPanel(initialPanelState)
  }

  const handleSearch = (event) => {
    event?.preventDefault()
    const params = new URLSearchParams()
    params.set('purpose', activeTab)
    if (propertyType) params.set('type', propertyType)
    if (community) params.set('location', community)
    if (panel.price.min > PRICE_BOUNDS[0]) params.set('priceMin', panel.price.min)
    if (panel.price.max < PRICE_BOUNDS[1]) params.set('priceMax', panel.price.max)
    if (panel.area.min > AREA_BOUNDS[0]) params.set('areaMin', panel.area.min)
    if (panel.area.max < AREA_BOUNDS[1]) params.set('areaMax', panel.area.max)
    if (panel.bedrooms !== 'All') params.set('bedrooms', panel.bedrooms)
    if (panel.bathrooms !== 'All') params.set('bathrooms', panel.bathrooms)
    if (panel.view) params.set('view', panel.view)
    if (panel.reference) params.set('reference', panel.reference)
    if (panel.amenities.length) params.set('amenities', panel.amenities.join(','))
    navigate(`/properties?${params.toString()}`)
  }

  return (
    <section
      ref={sectionRef}
      className="relative -mt-20 flex flex-col pb-10 pt-32 sm:pb-14 sm:pt-36 lg:min-h-dvh lg:flex-row lg:items-center lg:pb-28 lg:pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: parallaxY }} className="absolute inset-0">
          {prefersReducedMotion ? (
            <img
              src={HERO_POSTER}
              alt="Luxury modernist villa at dusk"
              className="h-full w-full object-cover"
            />
          ) : (
            <video
              src={HERO_VIDEO_SRC}
              poster={HERO_POSTER}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="Aerial video tour of a luxury modernist villa"
              className="h-full w-full object-cover"
            />
          )}
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/50 to-navy-900/80" />
      </div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[18%] hidden h-40 w-40 rounded-full border border-gold/30 lg:block"
        animate={{ y: [0, -18, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[6%] top-[55%] hidden h-24 w-24 rounded-full border border-gold/20 lg:block"
        animate={{ y: [0, 16, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.span
          variants={fadeInUp}
          className="font-body text-sm font-medium uppercase tracking-[0.3em] text-gold"
        >
          VIP Estates
        </motion.span>
        <motion.h1 variants={fadeInUp} className="mt-6 text-offwhite">
          Discover <span className="text-shimmer">Extraordinary</span> Living
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-6 max-w-2xl font-body text-lg text-offwhite/80"
        >
          Curated luxury estates, private villas, and investment-grade
          properties for the world's most discerning buyers.
        </motion.p>
      </motion.div>

      <div className="relative z-20 mt-10 px-4 sm:px-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:mt-0 lg:translate-y-1/2 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="relative z-40 inline-flex flex-wrap gap-1 rounded-full bg-navy/70 p-1">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab)
                  setIsPanelOpen(false)
                }}
                className={`rounded-full px-5 py-2 font-body text-xs font-semibold uppercase tracking-wide transition-colors sm:text-sm ${
                  activeTab === tab
                    ? 'bg-white text-navy shadow'
                    : 'text-offwhite/80 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {isSearchTab ? (
            <form
              onSubmit={handleSearch}
              className="mt-3 rounded-2xl bg-white p-4 shadow-2xl sm:p-5"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex-1 rounded-full border border-neutral bg-offwhite/60 px-4">
                  <select
                    value={propertyType}
                    onChange={(event) => setPropertyType(event.target.value)}
                    className="w-full bg-transparent py-3 font-body text-sm text-charcoal focus:outline-none"
                  >
                    {propertyTypes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex-[1.4] rounded-full border border-neutral bg-offwhite/60 px-4">
                  <input
                    type="text"
                    value={community}
                    onChange={(event) => setCommunity(event.target.value)}
                    placeholder="Community or Building..."
                    className="w-full bg-transparent py-3 font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none"
                  />
                </div>

                <div className="flex shrink-0 items-center justify-center gap-2 sm:justify-start">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Search"
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-offwhite transition-colors hover:bg-navy-600"
                  >
                    <Search size={18} />
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => setIsPanelOpen((prev) => !prev)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Toggle advanced filters"
                    className={`flex h-12 w-12 items-center justify-center rounded-full border transition-colors ${
                      isPanelOpen
                        ? 'border-gold bg-gold text-navy'
                        : 'border-neutral text-navy hover:border-gold'
                    }`}
                  >
                    <SlidersHorizontal size={17} />
                  </motion.button>
                </div>
              </div>

              <AnimatePresence>
                {isPanelOpen && (
                  <>
                    <motion.div
                      className="fixed inset-0 z-20"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsPanelOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                      className="relative z-30 mt-4 max-h-[65vh] overflow-y-auto rounded-2xl border border-neutral-light bg-white p-6 text-left shadow-xl"
                    >
                      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div>
                          <p className="font-body text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                            Price
                          </p>
                          <div className="mt-3">
                            <DualRangeSlider
                              min={PRICE_BOUNDS[0]}
                              max={PRICE_BOUNDS[1]}
                              step={250000}
                              minValue={panel.price.min}
                              maxValue={panel.price.max}
                              formatValue={priceFormatter.format}
                              onChange={(value) => setPanel((prev) => ({ ...prev, price: value }))}
                            />
                          </div>
                        </div>
                        <div>
                          <p className="font-body text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                            Area
                          </p>
                          <div className="mt-3">
                            <DualRangeSlider
                              min={AREA_BOUNDS[0]}
                              max={AREA_BOUNDS[1]}
                              step={250}
                              minValue={panel.area.min}
                              maxValue={panel.area.max}
                              formatValue={areaFormatter}
                              onChange={(value) => setPanel((prev) => ({ ...prev, area: value }))}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                        <div>
                          <p className="font-body text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                            Bed
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {bedOptions.map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => setPanel((prev) => ({ ...prev, bedrooms: option }))}
                                className={`rounded-full border px-3.5 py-1.5 font-body text-sm transition-colors ${
                                  panel.bedrooms === option
                                    ? 'border-gold bg-gold text-navy font-medium'
                                    : 'border-neutral text-charcoal/70 hover:border-gold'
                                }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <p className="font-body text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                            Bath
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {bathOptions.map((option) => (
                              <button
                                key={option}
                                type="button"
                                onClick={() => setPanel((prev) => ({ ...prev, bathrooms: option }))}
                                className={`rounded-full border px-3.5 py-1.5 font-body text-sm transition-colors ${
                                  panel.bathrooms === option
                                    ? 'border-gold bg-gold text-navy font-medium'
                                    : 'border-neutral text-charcoal/70 hover:border-gold'
                                }`}
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <p className="font-body text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                          Other Specs
                        </p>
                        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
                          <label className="block">
                            <span className="font-body text-xs text-charcoal/50">View</span>
                            <select
                              value={panel.view}
                              onChange={(event) =>
                                setPanel((prev) => ({ ...prev, view: event.target.value }))
                              }
                              className="mt-1.5 w-full rounded-lg border border-neutral bg-white px-3 py-2.5 font-body text-sm text-charcoal focus:border-gold focus:outline-none"
                            >
                              <option value="">Any</option>
                              {VIEWS.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          </label>
                          <label className="block">
                            <span className="font-body text-xs text-charcoal/50">
                              Reference Number
                            </span>
                            <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-neutral bg-white px-3">
                              <Hash size={14} className="shrink-0 text-charcoal/40" />
                              <input
                                type="text"
                                value={panel.reference}
                                onChange={(event) =>
                                  setPanel((prev) => ({ ...prev, reference: event.target.value }))
                                }
                                placeholder="e.g. VIP-0006"
                                className="w-full bg-transparent py-2.5 font-body text-sm text-charcoal placeholder:text-charcoal/40 focus:outline-none"
                              />
                            </div>
                          </label>
                        </div>
                      </div>

                      <div className="mt-8">
                        <p className="font-body text-xs font-semibold uppercase tracking-wide text-charcoal/50">
                          Amenities
                        </p>
                        <div className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
                          {AMENITY_META.map(({ key, label }) => (
                            <label
                              key={key}
                              className="flex cursor-pointer items-center gap-2 font-body text-sm text-charcoal/80"
                            >
                              <input
                                type="checkbox"
                                checked={panel.amenities.includes(key)}
                                onChange={() => toggleAmenity(key)}
                                className="h-4 w-4 rounded border-neutral text-gold accent-gold focus:ring-gold"
                              />
                              {label}
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8 flex items-center justify-between gap-3 border-t border-neutral-light pt-6">
                        <button
                          type="button"
                          onClick={handleReset}
                          className="flex items-center gap-2 rounded-full border border-neutral px-6 py-3 font-body text-sm font-semibold text-navy transition-colors hover:border-gold"
                        >
                          <RotateCcw size={15} />
                          Reset
                        </button>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          onClick={() => setIsPanelOpen(false)}
                          className="rounded-full bg-navy px-8 py-3 font-body text-sm font-semibold text-offwhite transition-colors hover:bg-navy-600"
                        >
                          Done
                        </motion.button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </form>
          ) : (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 rounded-2xl bg-white p-8 text-center shadow-2xl sm:p-10"
            >
              {activeTab === 'Sell' ? (
                <>
                  <p className="font-heading text-xl font-semibold text-navy">
                    List Your Property With Us
                  </p>
                  <p className="mt-2 font-body text-sm text-charcoal/60">
                    Get a complimentary valuation and a tailored marketing plan from a senior
                    advisor.
                  </p>
                  <Link
                    to="/contact"
                    className="mt-5 inline-block rounded-full bg-gold px-7 py-3 font-body text-sm font-semibold text-navy transition-colors hover:bg-gold-600"
                  >
                    Get Started
                  </Link>
                </>
              ) : (
                <>
                  <p className="font-heading text-xl font-semibold text-navy">
                    Property Management Services
                  </p>
                  <p className="mt-2 font-body text-sm text-charcoal/60">
                    Maintenance, tenants, and financial reporting — handled end to end by our
                    team.
                  </p>
                  <Link
                    to="/services"
                    className="mt-5 inline-block rounded-full bg-gold px-7 py-3 font-body text-sm font-semibold text-navy transition-colors hover:bg-gold-600"
                  >
                    Explore Services
                  </Link>
                </>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
