import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeInUp } from '../../lib/motion'

const AREAS = [
  {
    id: 'villa',
    label: 'Residential Villas',
    services:
      'Buyer Representation | Private Showings | Off-Market Access | Architectural Consultation | Concierge Closing | Relocation Support',
    image:
      'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'apartment',
    label: 'Apartments & Condos',
    services:
      'Buyer & Renter Representation | Building Due Diligence | HOA & Co-op Review | Investment Analysis | Staging & Presentation | Lease Negotiation',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'farmhouse',
    label: 'Farmhouses & Estates',
    services:
      'Land & Acreage Assessment | Water Rights Review | Equestrian & Agricultural Use | Renovation Partner Network | Estate Planning Coordination | Privacy & Security Consultation',
    image:
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'commercial',
    label: 'Commercial',
    services:
      'Tenant Representation | Landlord Representation | Site Selection & Workplace Strategy | Lease Negotiation & Transaction Management | Market Intelligence & Occupancy Analysis | Property Marketing & Leasing Materials',
    image:
      'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=900&q=80',
  },
]

function ServiceAreas() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-navy-900 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="font-body text-sm font-medium uppercase tracking-widest text-gold">
            What We Cover
          </span>
          <h2 className="mt-4 text-offwhite">Areas of Expertise</h2>
          <p className="mt-4 max-w-xl font-body text-offwhite/60">
            Hover a category to see exactly what our team handles, start to close.
          </p>
        </motion.div>

        <div className="relative mt-10 border-b border-white/10">
          {AREAS.map((area, index) => {
            const isActive = index === active
            return (
              <button
                key={area.id}
                type="button"
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`relative block w-full appearance-none overflow-hidden rounded-none border-t border-white/10 py-7 text-left transition-colors duration-500 sm:py-8 ${
                  isActive ? 'bg-gold' : 'bg-transparent'
                }`}
              >
                <div className="relative z-10 flex items-start gap-4 px-2 sm:gap-8 sm:px-4">
                  <span
                    className={`mt-2 font-body text-xs font-semibold transition-colors duration-500 ${
                      isActive ? 'text-navy/60' : 'text-white/30'
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <div className="flex-1 pr-0 sm:pr-64">
                    <h3
                      className={`font-heading text-3xl font-bold transition-colors duration-500 sm:text-5xl ${
                        isActive ? 'text-navy' : 'text-white/25'
                      }`}
                    >
                      {area.label}
                    </h3>
                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 max-w-2xl overflow-hidden font-body text-sm text-navy/70"
                        >
                          {area.services}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.img
                      key={area.id}
                      src={area.image}
                      alt={area.label}
                      initial={{ opacity: 0, scale: 0.9, x: 40 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.4, ease: 'easeOut' }}
                      className="pointer-events-none absolute right-6 top-1/2 hidden h-36 w-52 -translate-y-1/2 rounded-xl object-cover shadow-2xl sm:block lg:h-44 lg:w-60"
                    />
                  )}
                </AnimatePresence>
              </button>
            )
          })}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <span className="font-body text-xs uppercase tracking-widest text-white/40">
            Featured Listings
          </span>
          <Link
            to="/properties"
            className="font-body text-sm font-semibold text-gold underline underline-offset-4 transition-colors hover:text-gold-300"
          >
            View All Listings
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServiceAreas
