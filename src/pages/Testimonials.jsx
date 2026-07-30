import { motion } from 'framer-motion'
import TestimonialReviewCard from '../components/TestimonialReviewCard'
import FaqAccordion from '../components/FaqAccordion'
import { testimonials } from '../data/testimonials'
import { faqs } from '../data/faqs'
import { fadeInUp, staggerContainer } from '../lib/motion'
import { usePageMeta } from '../lib/usePageMeta'

function Testimonials() {
  usePageMeta(
    'Testimonials',
    'Real stories from buyers, sellers, and investors we’ve had the privilege to work with.',
  )

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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
            Client Stories
          </motion.span>
          <motion.h1 variants={fadeInUp} className="mt-2">
            What Our Clients Say
          </motion.h1>
          <motion.p variants={fadeInUp} className="mt-4 font-body text-charcoal/70">
            Real stories from buyers, sellers, and investors we've had the privilege to work
            with.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 columns-1 gap-6 sm:columns-2 lg:columns-3"
        >
          {testimonials.map((testimonial) => (
            <TestimonialReviewCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>

      <div className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <span className="font-body text-sm font-medium uppercase tracking-widest text-gold">
                Have Questions?
              </span>
              <h2 className="mt-4">Frequently Asked Questions</h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10">
              <FaqAccordion items={faqs} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Testimonials
