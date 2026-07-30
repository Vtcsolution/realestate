import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/motion'

function AboutHero() {
  return (
    <section className="relative -mt-20 flex min-h-[70vh] items-center pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1920&q=80"
          alt="The VIP Estates team collaborating in the office"
          initial={{ scale: 1 }}
          animate={{ scale: 1.12 }}
          transition={{ duration: 22, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/80 via-navy-900/60 to-navy-900/85" />
      </div>

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8"
      >
        <motion.span
          variants={fadeInUp}
          className="font-body text-sm font-medium uppercase tracking-[0.3em] text-gold"
        >
          Our Story
        </motion.span>
        <motion.h1 variants={fadeInUp} className="mt-6 text-offwhite">
          Redefining Luxury Real Estate, One Relationship at a Time
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-6 font-body text-lg text-offwhite/80">
          For over a decade, VIP Estates has connected discerning buyers with the world's
          most extraordinary properties — built on trust, discretion, and an obsession
          with getting every detail right.
        </motion.p>
      </motion.div>
    </section>
  )
}

export default AboutHero
