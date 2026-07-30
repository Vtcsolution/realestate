import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Bath,
  Bed,
  BarChart3,
  Building2,
  CalendarDays,
  Hash,
  Layers,
  MapPin,
  Printer,
  Ruler,
  ShieldCheck,
} from 'lucide-react'
import { properties } from '../data/properties'
import FloorPlanChart from '../components/FloorPlanChart'
import AmenityGrid from '../components/AmenityGrid'
import NearbyList from '../components/NearbyList'
import PagePlaceholder from '../components/PagePlaceholder'
import { usePageMeta } from '../lib/usePageMeta'
import { fadeInUp, staggerContainer } from '../lib/motion'
import { getReferenceId } from '../lib/reference'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const reportDate = new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
})

function SpecRow({ label, value }) {
  return (
    <tr className="border-b border-neutral-light last:border-b-0">
      <th className="w-1/2 py-2.5 pr-4 text-left font-body text-sm font-medium text-charcoal/60">
        {label}
      </th>
      <td className="py-2.5 text-left font-body text-sm font-semibold text-navy">{value}</td>
    </tr>
  )
}

function SectionHeading({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/10 text-gold">
        <Icon size={16} />
      </span>
      <h2 className="text-xl font-semibold text-navy">{children}</h2>
    </div>
  )
}

function PropertyReport() {
  const { id } = useParams()
  const property = properties.find((item) => String(item.id) === id)

  usePageMeta(
    property ? `${property.title} — Investment Report` : 'Report Not Found',
    property
      ? `Full investment report and structural breakdown for ${property.title} in ${property.location}.`
      : undefined,
  )

  if (!property) {
    return (
      <PagePlaceholder
        title="Report Not Found"
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

  const referenceId = getReferenceId(property.id)

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        to={`/properties/${property.id}`}
        className="no-print mb-6 inline-flex items-center gap-2 font-body text-sm text-charcoal/60 transition-colors hover:text-gold"
      >
        <ArrowLeft size={16} />
        Back to Property
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="overflow-hidden rounded-2xl border border-neutral-light bg-white shadow-xl ring-1 ring-gold/10"
      >
        <div className="h-1.5 bg-gradient-to-r from-gold-600 via-gold to-gold-300" />

        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-light sm:aspect-[21/9]">
          <motion.img
            src={images[0]}
            alt={title}
            initial={{ scale: 1.08, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/30 to-navy-900/10" />

          <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2 sm:left-8 sm:top-8">
            <span className="rounded-full bg-gold px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-wide text-navy">
              {type}
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-offwhite/40 bg-navy/60 px-4 py-1.5 font-body text-xs font-medium text-offwhite backdrop-blur-sm">
              <ShieldCheck size={13} className="text-gold" />
              Confidential
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-8">
            <div>
              <p className="font-body text-xs font-medium uppercase tracking-widest text-gold">
                Property Investment Report
              </p>
              <h1 className="mt-2 text-2xl text-offwhite sm:text-4xl">{title}</h1>
              <p className="mt-2 flex items-center gap-1.5 font-body text-offwhite/70">
                <MapPin size={14} className="text-gold" />
                {location}
              </p>
            </div>
            <div className="hidden gap-4 font-body text-xs text-offwhite/70 sm:flex sm:flex-col sm:items-end sm:text-right sm:text-sm">
              <p className="flex items-center gap-1.5 sm:justify-end">
                <Hash size={13} className="text-gold" />
                <span className="font-semibold text-offwhite">{referenceId}</span>
              </p>
              <p className="flex items-center gap-1.5 sm:justify-end">
                <CalendarDays size={13} className="text-gold" />
                <span className="font-semibold text-offwhite">{reportDate}</span>
              </p>
              <p className="font-heading text-lg font-bold text-gold sm:text-xl">
                {currencyFormatter.format(price)}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-light bg-offwhite/60 px-6 py-4 font-body text-xs text-charcoal/70 sm:hidden">
          <p className="flex items-center gap-1.5">
            <Hash size={13} className="text-gold" />
            <span className="font-semibold text-navy">{referenceId}</span>
          </p>
          <p className="flex items-center gap-1.5">
            <CalendarDays size={13} className="text-gold" />
            <span className="font-semibold text-navy">{reportDate}</span>
          </p>
          <p className="font-heading text-base font-bold text-gold">
            {currencyFormatter.format(price)}
          </p>
        </div>

        <div className="p-6 sm:p-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="flex flex-wrap items-center gap-6 rounded-2xl border border-neutral-light bg-offwhite/60 px-6 py-4 font-body text-sm text-charcoal/70"
          >
            {bedrooms > 0 && (
              <span className="flex items-center gap-2">
                <Bed size={17} className="text-gold" />
                {bedrooms} Bedrooms
              </span>
            )}
            <span className="flex items-center gap-2">
              <Bath size={17} className="text-gold" />
              {bathrooms} Bathrooms
            </span>
            <span className="flex items-center gap-2">
              <Ruler size={17} className="text-gold" />
              {area.toLocaleString()} sqft
            </span>
            <span className="flex items-center gap-2">
              <Layers size={17} className="text-gold" />
              {floors} {floors === 1 ? 'Floor' : 'Floors'}
            </span>
          </motion.div>

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2"
          >
            <motion.div variants={fadeInUp}>
              <SectionHeading icon={Building2}>Structural Details</SectionHeading>
              <table className="mt-4 w-full border-collapse">
                <tbody>
                  <SpecRow label="Property Type" value={type} />
                  {bedrooms > 0 && <SpecRow label="Bedrooms" value={bedrooms} />}
                  <SpecRow label="Bathrooms" value={bathrooms} />
                  <SpecRow label="Covered Area" value={`${area.toLocaleString()} sqft`} />
                  <SpecRow label="Total Floors" value={floors} />
                  <SpecRow label="Plot Width" value={`${plotWidth} ft`} />
                  <SpecRow label="Plot Length" value={`${plotLength} ft`} />
                  <SpecRow label="Doors" value={amenities.doors} />
                  <SpecRow label="Year Built" value={yearBuilt} />
                </tbody>
              </table>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <SectionHeading icon={ShieldCheck}>Amenities</SectionHeading>
              <div className="mt-4">
                <AmenityGrid amenities={amenities} columns="" />
              </div>

              <div className="mt-8">
                <SectionHeading icon={MapPin}>Nearby Landmarks</SectionHeading>
                <div className="mt-4">
                  <NearbyList nearby={nearby} columns="" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="mt-10"
          >
            <SectionHeading icon={BarChart3}>Floor Area Breakdown</SectionHeading>
            <div className="mt-4 rounded-2xl border border-neutral-light p-6">
              <FloorPlanChart floorPlan={floorPlan} height={340} />
            </div>
          </motion.div>

          <div className="mt-10 border-t border-neutral-light pt-6 font-body text-xs text-charcoal/50">
            This report is generated for informational purposes only and does not constitute a
            binding valuation. Figures are approximate and subject to verification by a licensed
            surveyor. &copy; {new Date().getFullYear()} VIP Estates.
          </div>
        </div>
      </motion.div>

      <div className="no-print mt-6 flex justify-end">
        <motion.button
          type="button"
          onClick={() => window.print()}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-body text-sm font-semibold text-offwhite transition-colors hover:bg-navy-600"
        >
          <Printer size={16} />
          Print / Download Report
        </motion.button>
      </div>
    </div>
  )
}

export default PropertyReport
