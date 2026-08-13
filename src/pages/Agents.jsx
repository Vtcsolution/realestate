import { useState } from 'react'
import { motion } from 'framer-motion'
import AgentCard from '../components/AgentCard'
import { agents } from '../data/agents'
import { fadeInUp, staggerContainer } from '../lib/motion'
import { usePageMeta } from '../lib/usePageMeta'

const SPECIALTIES = ['All', 'Residential', 'Commercial', 'Luxury']

function Agents() {
  usePageMeta(
    'Our Agents',
    'Meet the global network of specialists behind VIP Estates — residential, commercial, and luxury property advisors.',
  )

  const [specialty, setSpecialty] = useState('All')

  const filteredAgents =
    specialty === 'All' ? agents : agents.filter((agent) => agent.specialty === specialty)

  return (
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
          Our Team
        </motion.span>
        <motion.h1 variants={fadeInUp} className="mt-2">
          Meet Our Agents
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-4 font-body text-charcoal/70">
          A global network of specialists dedicated to finding — or selling — your
          extraordinary property.
        </motion.p>
      </motion.div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {SPECIALTIES.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => setSpecialty(option)}
            className={`relative rounded-full border px-5 py-2 font-body text-sm font-medium transition-colors ${
              specialty === option ? 'border-gold text-navy' : 'border-neutral text-charcoal/70 hover:border-gold'
            }`}
          >
            {specialty === option && (
              <motion.span
                layoutId="agentsSpecialtyPill"
                className="absolute inset-0 rounded-full bg-gold"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}
            <span className="relative z-10">{option}</span>
          </button>
        ))}
      </div>

      <motion.div
        key={specialty}
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {filteredAgents.map((agent) => (
          <motion.div key={agent.id} variants={fadeInUp}>
            <AgentCard agent={agent} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default Agents
