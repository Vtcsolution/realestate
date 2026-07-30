import { motion } from 'framer-motion'
import { Award, Building2, Globe, Users } from 'lucide-react'
import { useCountUp } from '../../lib/useCountUp'
import { fadeInUp, staggerContainer } from '../../lib/motion'

const stats = [
  { icon: Building2, target: 512, suffix: '+', label: 'Properties Sold' },
  { icon: Users, target: 2400, suffix: '+', label: 'Happy Clients' },
  { icon: Award, target: 15, suffix: '+', label: 'Years of Experience' },
  { icon: Globe, target: 12, suffix: '', label: 'Cities Covered' },
]

function Counter({ icon: Icon, target, suffix, label }) {
  const { ref, value } = useCountUp(target)

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10 text-gold">
        <Icon size={26} />
      </span>
      <p className="mt-5 font-heading text-4xl font-bold text-offwhite">
        {value.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 font-body text-sm text-offwhite/70">{label}</p>
    </div>
  )
}

function StatsCounter() {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 gap-10 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeInUp}>
              <Counter {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default StatsCounter
