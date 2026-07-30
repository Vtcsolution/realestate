import { useEffect, useMemo, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { SlidersHorizontal } from 'lucide-react'
import PropertyCard from '../components/PropertyCard'
import PropertyCardSkeleton from '../components/PropertyCardSkeleton'
import PropertyFilters, { PROPERTY_TYPES } from '../components/PropertyFilters'
import MobileFilterModal from '../components/MobileFilterModal'
import { properties } from '../data/properties'
import { AREA_BOUNDS, LOCATIONS, PRICE_BOUNDS, VIEWS } from '../lib/propertyBounds'
import { getReferenceId } from '../lib/reference'
import { usePageMeta } from '../lib/usePageMeta'

const PAGE_SIZE = 6
const LOAD_DELAY = 500

const defaultFilters = {
  priceMin: PRICE_BOUNDS[0],
  priceMax: PRICE_BOUNDS[1],
  areaMin: AREA_BOUNDS[0],
  areaMax: AREA_BOUNDS[1],
  types: [],
  bedrooms: 'All',
  bathrooms: 'All',
  location: '',
  view: '',
  purpose: '',
  reference: '',
  amenities: [],
}

function buildInitialFilters(searchParams) {
  const next = { ...defaultFilters }

  const typeParam = searchParams.get('type')
  if (typeParam) {
    const matched = PROPERTY_TYPES.find((type) => type.toLowerCase() === typeParam.toLowerCase())
    if (matched) next.types = [matched]
  }

  const locationParam = searchParams.get('location')
  if (locationParam) {
    const matched = LOCATIONS.find((location) =>
      location.toLowerCase().includes(locationParam.toLowerCase()),
    )
    next.location = matched || ''
    if (!matched) next.locationSearch = locationParam
  }

  const priceMinParam = searchParams.get('priceMin')
  const priceMaxParam = searchParams.get('priceMax')
  if (priceMinParam) next.priceMin = Math.max(PRICE_BOUNDS[0], Number(priceMinParam))
  if (priceMaxParam) next.priceMax = Math.min(PRICE_BOUNDS[1], Number(priceMaxParam))

  const areaMinParam = searchParams.get('areaMin')
  const areaMaxParam = searchParams.get('areaMax')
  if (areaMinParam) next.areaMin = Math.max(AREA_BOUNDS[0], Number(areaMinParam))
  if (areaMaxParam) next.areaMax = Math.min(AREA_BOUNDS[1], Number(areaMaxParam))

  const bedroomsParam = searchParams.get('bedrooms')
  if (bedroomsParam) next.bedrooms = bedroomsParam

  const bathroomsParam = searchParams.get('bathrooms')
  if (bathroomsParam) next.bathrooms = bathroomsParam

  const viewParam = searchParams.get('view')
  if (viewParam && VIEWS.includes(viewParam)) next.view = viewParam

  const purposeParam = searchParams.get('purpose')
  if (purposeParam === 'Buy' || purposeParam === 'Rent') next.purpose = purposeParam

  const referenceParam = searchParams.get('reference')
  if (referenceParam) next.reference = referenceParam

  const amenitiesParam = searchParams.get('amenities')
  if (amenitiesParam) next.amenities = amenitiesParam.split(',').filter(Boolean)

  return next
}

function Properties() {
  usePageMeta(
    'Properties',
    'Browse our full portfolio of luxury villas, apartments, farmhouses, and commercial properties.',
  )

  const [searchParams] = useSearchParams()
  const [filters, setFilters] = useState(() => buildInitialFilters(searchParams))
  const [sort, setSort] = useState('newest')
  const [revealedCount, setRevealedCount] = useState(PAGE_SIZE)
  const [isLoading, setIsLoading] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  const filteredSorted = useMemo(() => {
    const filtered = properties.filter((property) => {
      if (property.price < filters.priceMin || property.price > filters.priceMax) return false
      if (property.area < filters.areaMin || property.area > filters.areaMax) return false
      if (filters.types.length && !filters.types.includes(property.type)) return false
      if (filters.bedrooms === 'Studio' && property.bedrooms !== 0) return false
      if (
        filters.bedrooms !== 'All' &&
        filters.bedrooms !== 'Studio' &&
        property.bedrooms < Number(filters.bedrooms)
      )
        return false
      if (filters.bathrooms !== 'All' && property.bathrooms < Number(filters.bathrooms))
        return false
      if (filters.location && property.location !== filters.location) return false
      if (
        filters.locationSearch &&
        !property.location.toLowerCase().includes(filters.locationSearch.toLowerCase())
      )
        return false
      if (filters.view && property.view !== filters.view) return false
      if (filters.purpose && property.purpose !== filters.purpose) return false
      if (
        filters.reference &&
        !getReferenceId(property.id).toLowerCase().includes(filters.reference.toLowerCase())
      )
        return false
      if (
        filters.amenities.length &&
        !filters.amenities.every((amenity) => property.amenities[amenity])
      )
        return false
      return true
    })

    return [...filtered].sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      return b.id - a.id
    })
  }, [filters, sort])

  const handleFiltersChange = (next) => {
    setFilters(next)
    setIsLoading(true)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setRevealedCount(PAGE_SIZE)
      setIsLoading(false)
    }, LOAD_DELAY)
  }

  const handleReset = () => handleFiltersChange(defaultFilters)

  const handleSortChange = (value) => {
    setSort(value)
    setIsLoading(true)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setIsLoading(false), LOAD_DELAY)
  }

  const handleLoadMore = () => {
    setIsLoadingMore(true)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setRevealedCount((count) => count + PAGE_SIZE)
      setIsLoadingMore(false)
    }, LOAD_DELAY)
  }

  const visibleProperties = filteredSorted.slice(0, revealedCount)
  const hasMore = revealedCount < filteredSorted.length
  const appendSkeletonCount = Math.min(PAGE_SIZE, filteredSorted.length - revealedCount)

  const filterProps = {
    filters,
    onChange: handleFiltersChange,
    priceBounds: PRICE_BOUNDS,
    areaBounds: AREA_BOUNDS,
    locations: LOCATIONS,
    views: VIEWS,
    onReset: handleReset,
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <span className="font-body text-sm font-medium uppercase tracking-widest text-gold">
          Portfolio
        </span>
        <h1 className="mt-2">Properties</h1>
        <p className="mt-3 font-body text-charcoal/70">
          {isLoading
            ? 'Searching listings…'
            : `Showing ${visibleProperties.length} of ${filteredSorted.length} properties`}
        </p>
      </div>

      <div className="lg:grid lg:grid-cols-[280px_1fr] lg:gap-10">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-neutral-light bg-white p-6">
            <PropertyFilters {...filterProps} />
          </div>
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center gap-2 rounded-full border border-neutral px-4 py-2.5 font-body text-sm font-medium text-navy lg:hidden"
            >
              <SlidersHorizontal size={16} />
              Filters
            </button>

            <div className="ml-auto flex items-center gap-2">
              <label htmlFor="sort" className="hidden font-body text-sm text-charcoal/60 sm:inline">
                Sort by
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(event) => handleSortChange(event.target.value)}
                className="rounded-full border border-neutral bg-white px-4 py-2.5 font-body text-sm text-charcoal focus:border-gold focus:outline-none"
              >
                <option value="newest">Newest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {Array.from({ length: PAGE_SIZE }).map((_, index) => (
                <PropertyCardSkeleton key={index} />
              ))}
            </div>
          ) : visibleProperties.length === 0 ? (
            <div className="flex flex-col items-center rounded-2xl border border-neutral-light bg-white px-6 py-20 text-center">
              <p className="font-heading text-xl font-semibold text-navy">No properties match</p>
              <p className="mt-2 max-w-sm font-body text-sm text-charcoal/60">
                Try adjusting your filters to see more results.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 rounded-full bg-gold px-6 py-2.5 font-body text-sm font-semibold text-navy transition-colors hover:bg-gold-600"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
              {isLoadingMore &&
                Array.from({ length: appendSkeletonCount }).map((_, index) => (
                  <PropertyCardSkeleton key={`more-${index}`} />
                ))}
            </div>
          )}

          {!isLoading && !isLoadingMore && hasMore && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="rounded-full border border-navy px-8 py-3 font-body text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-offwhite"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>

      <MobileFilterModal
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        resultCount={filteredSorted.length}
        {...filterProps}
      />
    </div>
  )
}

export default Properties
