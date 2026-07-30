import { motion } from 'framer-motion'
import FaqAccordion from '../components/FaqAccordion'
import { faqs } from '../data/faqs'
import { fadeInUp, staggerContainer } from '../lib/motion'
import { usePageMeta } from '../lib/usePageMeta'

function FAQ() {
  usePageMeta('FAQ', 'Answers to what buyers and sellers ask us most — buying, financing, fees, and viewings.')

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className="text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="font-body text-sm font-medium uppercase tracking-widest text-gold"
        >
          Support
        </motion.span>
        <motion.h1 variants={fadeInUp} className="mt-2">
          Frequently Asked Questions
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-4 font-body text-charcoal/70">
          Answers to what buyers and sellers ask us most.
        </motion.p>
      </motion.div>

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-12"
      >
        <FaqAccordion items={faqs} />
      </motion.div>
    </div>
  )
}

export default FAQ
