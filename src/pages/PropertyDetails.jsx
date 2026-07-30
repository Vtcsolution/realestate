import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Bath,
  Bed,
  CalendarDays,
  FileText,
  Images,
  LandPlot,
  Layers,
  MapPin,
  Ruler,
  ZoomIn,
} from 'lucide-react'
import { properties } from '../data/properties'
import { fadeInUp, staggerContainer } from '../lib/motion'
import StatCard from '../components/StatCard'
import FloorPlanChart from '../components/FloorPlanChart'
import ImageLightbox from '../components/ImageLightbox'
import AmenityGrid from '../components/AmenityGrid'
import NearbyList from '../components/NearbyList'
import PagePlaceholder from '../components/PagePlaceholder'
import { usePageMeta } from '../lib/usePageMeta'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

function PropertyDetails() {
  const { id } = useParams()
  const property = properties.find((item) => String(item.id) === id)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  usePageMeta(
    property ? property.title : 'Property Not Found',
    property
      ? `${property.title} — ${property.location}. ${property.bedrooms > 0 ? `${property.bedrooms} bed, ` : ''}${property.bathrooms} bath, ${property.area.toLocaleString()} sqft.`
      : undefined,
  )

  if (!property) {
    return (
      <PagePlaceholder
        title="Property Not Found"
        description="We couldn't find a property with that ID."
      />
    )
  }

  const {
    title,
    location,
    price,
    type,
    bedrooms,
    bathrooms,
    area,
    floors,
    plotWidth,
    plotLength,
    yearBuilt,
    amenities,
    nearby,
    images,
    floorPlan,
  } = property

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-3"
      >
        <motion.button
          type="button"
          variants={fadeInUp}
          onClick={() => setLightboxIndex(0)}
          whileHover={{ scale: 1.01 }}
          className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-2xl bg-neutral-light shadow-sm"
        >
          <img
            src={images[0]}
            alt={`${title} — view 1`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-navy/80 px-4 py-1.5 font-body text-xs font-medium uppercase tracking-wide text-offwhite backdrop-blur-sm">
            {type}
          </span>
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition-all duration-300 group-hover:bg-navy/20 group-hover:opacity-100">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-offwhite/90 text-navy shadow-lg">
              <ZoomIn size={20} />
            </span>
          </div>
        </motion.button>

        <motion.button
          type="button"
          variants={fadeInUp}
          onClick={() => setLightboxIndex(1)}
          whileHover={{ scale: 1.01 }}
          className="group relative aspect-[4/3] cursor-zoom-in overflow-hidden rounded-2xl bg-neutral-light shadow-sm"
        >
          <img
            src={images[1]}
            alt={`${title} — view 2`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition-all duration-300 group-hover:bg-navy/20 group-hover:opacity-100">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-offwhite/90 text-navy shadow-lg">
              <ZoomIn size={20} />
            </span>
          </div>
        </motion.button>

        <motion.button
          type="button"
          variants={fadeInUp}
          onClick={() => setLightboxIndex(2)}
          whileHover={{ scale: 1.02 }}
          className="group relative aspect-[16/10] cursor-zoom-in overflow-hidden rounded-2xl bg-neutral-light shadow-sm"
        >
          <img
            src={images[2]}
            alt={`${title} thumbnail 3`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-navy/0 opacity-0 transition-all duration-300 group-hover:bg-navy/20 group-hover:opacity-100">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-offwhite/90 text-navy shadow-lg">
              <ZoomIn size={18} />
            </span>
          </div>
        </motion.button>

        <motion.button
          type="button"
          variants={fadeInUp}
          onClick={() => setLightboxIndex(0)}
          whileHover={{ scale: 1.02 }}
          className="group relative aspect-[16/10] cursor-zoom-in overflow-hidden rounded-2xl bg-neutral-light shadow-sm"
        >
          <img
            src={images[3]}
            alt={`${title} thumbnail 4`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-navy/70 backdrop-blur-sm transition-colors duration-300 group-hover:bg-navy/80">
            <span className="flex items-center gap-2 rounded-full bg-offwhite px-4 py-2 font-body text-xs font-semibold text-navy shadow transition-transform duration-200 group-hover:scale-105">
              <Images size={15} />
              View More
            </span>
            <span className="font-body text-xs text-offwhite/80">{images.length} Photos</span>
          </div>
        </motion.button>
      </motion.div>

      <p className="mt-3 font-body text-sm text-charcoal/50">
        {images.length} Photos — click any image to view the full gallery
      </p>

      <ImageLightbox
        images={images}
        index={lightboxIndex}
        onIndexChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
        title={title}
      />

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]"
      >
        <div>
          <motion.div variants={fadeInUp} className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1>{title}</h1>
              <p className="mt-2 flex items-center gap-1.5 font-body text-charcoal/60">
                <MapPin size={16} className="text-gold" />
                {location}
              </p>
            </div>
            <p className="font-heading text-3xl font-bold text-gold">
              {currencyFormatter.format(price)}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-6 flex flex-wrap items-center gap-6 rounded-2xl border border-neutral-light bg-white px-6 py-4 font-body text-sm text-charcoal/70"
          >
            {bedrooms > 0 && (
              <span className="flex items-center gap-2">
                <Bed size={18} className="text-gold" />
                {bedrooms} Bedrooms
              </span>
            )}
            <span className="flex items-center gap-2">
              <Bath size={18} className="text-gold" />
              {bathrooms} Bathrooms
            </span>
            <span className="flex items-center gap-2">
              <Ruler size={18} className="text-gold" />
              {area.toLocaleString()} sqft
            </span>
            <span className="flex items-center gap-2">
              <Layers size={18} className="text-gold" />
              {floors} {floors === 1 ? 'Floor' : 'Floors'}
            </span>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10">
            <h2 className="text-2xl">Overview</h2>
            <p className="mt-4 font-body leading-relaxed text-charcoal/70">
              {title} is an exceptional {bedrooms > 0 ? `${bedrooms}-bedroom ` : ''}
              {type.toLowerCase()} set in {location}, offering {area.toLocaleString()} sqft of
              thoughtfully designed living space across {floors}{' '}
              {floors === 1 ? 'level' : 'levels'}. Built in {yearBuilt}, the property pairs
              refined architecture with a full suite of amenities, making it a rare
              opportunity for discerning buyers.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10">
            <h2 className="text-2xl">Amenities</h2>
            <div className="mt-4">
              <AmenityGrid amenities={amenities} />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10">
            <h2 className="text-2xl">What's Nearby</h2>
            <div className="mt-4">
              <NearbyList nearby={nearby} />
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl">Building Overview</h2>
              <Link
                to={`/properties/${property.id}/report`}
                className="flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 font-body text-sm font-medium text-offwhite transition-colors hover:bg-navy-600"
              >
                <FileText size={16} />
                More Details
              </Link>
            </div>

            <div className="mt-6 rounded-2xl border border-neutral-light bg-white p-6">
              <FloorPlanChart floorPlan={floorPlan} />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              <StatCard icon={Layers} value={floors} label="Total Floors" />
              <StatCard icon={LandPlot} value={`${plotWidth} ft`} label="Plot Width" />
              <StatCard icon={LandPlot} value={`${plotLength} ft`} label="Plot Length" />
              <StatCard icon={Ruler} value={area.toLocaleString()} label="Covered Area (sqft)" />
              <StatCard icon={CalendarDays} value={yearBuilt} label="Year Built" />
            </div>
          </motion.div>
        </div>

        <motion.aside variants={fadeInUp} className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-neutral-light bg-white p-6">
            <p className="font-heading text-lg font-semibold text-navy">Interested in this property?</p>
            <p className="mt-2 font-body text-sm text-charcoal/60">
              Speak with a senior agent to schedule a private viewing.
            </p>
            <Link
              to="/contact"
              className="mt-5 block w-full rounded-full bg-gold py-3 text-center font-body text-sm font-semibold text-navy transition-colors hover:bg-gold-600"
            >
              Book a Visit
            </Link>
            <Link
              to={`/properties/${property.id}/report`}
              className="mt-3 block w-full rounded-full border border-navy py-3 text-center font-body text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-offwhite"
            >
              View Full Report
            </Link>
          </div>
        </motion.aside>
      </motion.div>
    </div>
  )
}

export default PropertyDetails
