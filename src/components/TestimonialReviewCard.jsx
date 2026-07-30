import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { fadeInUp } from '../lib/motion'

function TestimonialReviewCard({ testimonial }) {
  const { name, role, property, quote, avatar, rating } = testimonial

  return (
    <motion.div
      variants={fadeInUp}
      className="mb-6 break-inside-avoid rounded-2xl border border-neutral-light bg-white p-6"
    >
      <Quote size={24} className="text-gold" />
      <p className="mt-4 font-body text-sm leading-relaxed text-charcoal/80">"{quote}"</p>

      <div className="mt-4 flex gap-1 text-gold">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-neutral-light pt-4">
        <img
          src={avatar}
          alt={name}
          className="h-11 w-11 rounded-full object-cover"
        />
        <div>
          <p className="font-body text-sm font-semibold text-navy">{name}</p>
          <p className="font-body text-xs text-charcoal/50">{role}</p>
        </div>
      </div>

      <p className="mt-3 font-body text-xs font-medium uppercase tracking-wide text-gold">
        Purchased: {property}
      </p>
    </motion.div>
  )
}

export default TestimonialReviewCard
