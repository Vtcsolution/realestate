import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/motion'

const milestones = [
  {
    year: '2011',
    title: 'Founded in New York',
    description:
      'VIP Estates opens its doors with a single office and three agents dedicated to the ultra-luxury market.',
  },
  {
    year: '2014',
    title: 'West & South Expansion',
    description:
      'New offices open in Los Angeles and Miami, doubling our active portfolio of listings.',
  },
  {
    year: '2017',
    title: 'Going International',
    description:
      'We begin representing luxury estates across Europe, from the Cotswolds to Lake Como.',
  },
  {
    year: '2020',
    title: 'Digital-First Concierge',
    description:
      'Launch of our remote concierge platform, enabling private tours and closings from anywhere.',
  },
  {
    year: '2023',
    title: '$2B in Transactions',
    description:
      'VIP Estates crosses $2 billion in cumulative sales volume across 500+ closed properties.',
  },
  {
    year: '2026',
    title: 'Global Reach',
    description:
      'Now serving clients across 12 countries, with a network of vetted local specialists worldwide.',
  },
]

function Timeline() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-medium uppercase tracking-widest text-gold">
            Our Journey
          </span>
          <h2 className="mt-4">A History of Excellence</h2>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-neutral sm:left-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                variants={fadeInUp}
                className={`relative flex flex-col gap-4 pl-12 sm:flex-row sm:pl-0 ${
                  index % 2 === 0 ? 'sm:text-right' : 'sm:flex-row-reverse sm:text-left'
                }`}
              >
                <div className="absolute left-4 top-1 h-3 w-3 -translate-x-1/2 rounded-full bg-gold sm:left-1/2" />

                <div className="sm:w-1/2 sm:px-8">
                  <p className="font-heading text-2xl font-bold text-gold">{milestone.year}</p>
                  <p className="mt-1 font-heading text-lg font-semibold text-navy">
                    {milestone.title}
                  </p>
                  <p className="mt-2 font-body text-sm text-charcoal/70">
                    {milestone.description}
                  </p>
                </div>
                <div className="hidden sm:block sm:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Timeline
