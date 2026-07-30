import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ClipboardList,
  Handshake,
  Key,
  MessageSquare,
  Scale,
  Building2,
} from 'lucide-react'
import CtaSection from '../components/CtaSection'
import { fadeInUp, staggerContainer } from '../lib/motion'
import { usePageMeta } from '../lib/usePageMeta'

const services = [
  {
    icon: Key,
    title: 'Buying',
    description:
      'We guide you through every step of purchasing your next home or investment — from curated search to a confident close, with a senior agent by your side throughout.',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: Handshake,
    title: 'Selling',
    description:
      "Maximize your property's value with expert staging advice, data-backed pricing strategy, and access to our network of pre-qualified, motivated buyers.",
    image:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: Building2,
    title: 'Renting',
    description:
      'Find or list premium rental properties with full-service tenant screening, lease drafting, and move-in coordination handled end to end.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: ClipboardList,
    title: 'Property Management',
    description:
      'From maintenance and tenant relations to financial reporting, our management team keeps your portfolio performing without the day-to-day burden.',
    image:
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: MessageSquare,
    title: 'Consultation',
    description:
      'One-on-one strategy sessions to help you navigate market timing, financing options, and long-term investment decisions with clarity.',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: Scale,
    title: 'Legal Assistance',
    description:
      'Our in-house legal partners handle contracts, title due diligence, and closing paperwork — so every transaction is airtight.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
  },
]

function ServiceRow({ service, index }) {
  const Icon = service.icon
  const isReversed = index % 2 === 1

  return (
    <motion.div
      variants={fadeInUp}
      className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16"
    >
      <div className={`overflow-hidden rounded-2xl shadow-sm ${isReversed ? 'lg:order-2' : ''}`}>
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className={isReversed ? 'lg:order-1' : ''}>
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
          <Icon size={22} />
        </span>
        <h2 className="mt-5 text-2xl sm:text-3xl">{service.title}</h2>
        <p className="mt-4 font-body leading-relaxed text-charcoal/70">{service.description}</p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-body text-sm font-semibold text-offwhite transition-transform duration-200 hover:scale-[1.03] hover:bg-navy-600 active:scale-[0.97]"
        >
          Learn More
          <ArrowRight size={15} />
        </Link>
      </div>
    </motion.div>
  )
}

function Services() {
  usePageMeta(
    'Services',
    'Full-service support across buying, selling, renting, property management, consultation, and legal assistance.',
  )

  return (
    <>
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="font-body text-sm font-medium uppercase tracking-widest text-gold"
          >
            What We Offer
          </motion.span>
          <motion.h1 variants={fadeInUp} className="mt-2">
            Our Services
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 font-body text-charcoal/70">
            Full-service support across every stage of the property lifecycle.
          </motion.p>
        </motion.div>

        <div className="mt-16 flex flex-col gap-16 sm:mt-20 sm:gap-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <ServiceRow service={service} index={index} />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <CtaSection
          title="Ready to Get Started?"
          subtitle="Tell us what you need and a senior advisor will reach out within one business day."
          primaryLabel="Contact Us"
          primaryTo="/contact"
          secondaryLabel="Meet the Team"
          secondaryTo="/agents"
        />
      </div>
    </>
  )
}

export default Services
