import { motion } from 'framer-motion'
import { Award, Building2, ShieldCheck, Users } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/motion'
import { useCountUp } from '../../lib/useCountUp'

const stats = [
  { icon: Award, target: 15, suffix: '+', label: 'Years of Experience' },
  { icon: Users, target: 2400, suffix: '+', label: 'Happy Clients' },
  { icon: Building2, target: 500, suffix: '+', label: 'Properties Sold' },
  { icon: ShieldCheck, target: 100, suffix: '%', label: 'Verified Listings' },
]

function StatCard({ icon: Icon, target, suffix, label }) {
  const { ref, value } = useCountUp(target, { duration: 1.8 })

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="flex flex-col items-center rounded-2xl border border-neutral-light p-8 text-center shadow-sm transition-shadow duration-300 hover:shadow-xl"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
        <Icon size={26} />
      </span>
      <span className="mt-5 font-heading text-3xl font-bold text-navy">
        {value.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-2 font-body text-sm text-charcoal/70">{label}</span>
    </motion.div>
  )
}

function WhyChooseUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <span className="font-body text-sm font-medium uppercase tracking-widest text-gold">
              Our Promise
            </span>
            <h2 className="mt-4">Why Choose Us</h2>
            <p className="mt-4 font-body text-charcoal/70">
              A dedicated team, a discreet process, and a track record built
              on trust.
            </p>
          </motion.div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
