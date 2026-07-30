import { motion } from 'framer-motion'
import { Award, Building2, ShieldCheck, Users } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/motion'

const stats = [
  { icon: Award, value: '15+', label: 'Years of Experience' },
  { icon: Users, value: '2,400+', label: 'Happy Clients' },
  { icon: Building2, value: '500+', label: 'Properties Sold' },
  { icon: ShieldCheck, value: '100%', label: 'Verified Listings' },
]

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
            {stats.map(({ icon: Icon, value, label }) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                className="flex flex-col items-center rounded-2xl border border-neutral-light p-8 text-center transition-shadow hover:shadow-lg"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Icon size={26} />
                </span>
                <span className="mt-5 font-heading text-3xl font-bold text-navy">
                  {value}
                </span>
                <span className="mt-2 font-body text-sm text-charcoal/70">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs
