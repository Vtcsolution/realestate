import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../lib/motion'
import MagneticButton from './MagneticButton'

function CtaSection({
  title,
  subtitle,
  primaryLabel = 'Book a Visit',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
}) {
  return (
    <section className="bg-gradient-to-br from-gold-600 via-gold to-gold-300">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto flex max-w-4xl flex-col items-center px-4 py-24 text-center sm:px-6 lg:px-8"
      >
        <motion.h2 variants={fadeInUp} className="text-navy">
          {title}
        </motion.h2>
        {subtitle && (
          <motion.p variants={fadeInUp} className="mt-4 max-w-xl font-body text-navy/80">
            {subtitle}
          </motion.p>
        )}
        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton strength={0.35}>
            <Link
              to={primaryTo}
              className="flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 font-body text-sm font-semibold text-offwhite transition-colors hover:bg-navy-600"
            >
              {primaryLabel}
              <ArrowRight size={16} />
            </Link>
          </MagneticButton>
          {secondaryLabel && (
            <MagneticButton strength={0.35}>
              <Link
                to={secondaryTo}
                className="inline-block rounded-full border border-navy/30 px-7 py-3.5 font-body text-sm font-semibold text-navy transition-colors hover:bg-navy/10"
              >
                {secondaryLabel}
              </Link>
            </MagneticButton>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default CtaSection
