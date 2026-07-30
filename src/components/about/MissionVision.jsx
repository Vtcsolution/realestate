import { motion } from 'framer-motion'
import { Eye, Target } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/motion'

const cards = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      "To deliver an unmatched, white-glove experience for every client — pairing deep market expertise with absolute discretion, so buying or selling extraordinary property feels effortless.",
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the most trusted name in luxury real estate worldwide, known for integrity, an unrivaled portfolio, and relationships that outlast any single transaction.',
  },
]

function MissionVision() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {cards.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="rounded-2xl border border-neutral-light p-10"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                <Icon size={26} />
              </span>
              <p className="mt-6 font-heading text-2xl font-semibold text-navy">{title}</p>
              <p className="mt-4 font-body leading-relaxed text-charcoal/70">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default MissionVision
