import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Briefcase, Camera, Mail, MessageCircle, Phone } from 'lucide-react'

const socialLinks = [
  { label: 'Instagram', icon: Camera },
  { label: 'LinkedIn', icon: Briefcase },
  { label: 'Twitter', icon: MessageCircle },
]

function AgentCard({ agent }) {
  const { name, title, phone, email, photo } = agent

  return (
    <motion.div className="group overflow-hidden rounded-2xl border border-neutral-light bg-white shadow-sm">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={photo}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-navy/80 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <a
            href={`mailto:${email}`}
            className="w-40 translate-y-2 rounded-full bg-gold py-2.5 text-center font-body text-sm font-semibold text-navy opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            Contact
          </a>
          <Link
            to="/properties"
            className="w-40 translate-y-2 rounded-full border border-offwhite/60 py-2.5 text-center font-body text-sm font-semibold text-offwhite opacity-0 transition-all delay-75 duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            View Listings
          </Link>
        </div>
      </div>

      <div className="p-5 text-center">
        <p className="font-heading text-lg font-semibold text-navy">{name}</p>
        <p className="font-body text-sm text-charcoal/60">{title}</p>

        <div className="mt-4 space-y-1.5 font-body text-sm text-charcoal/70">
          <a href={`tel:${phone}`} className="flex items-center justify-center gap-1.5 hover:text-gold">
            <Phone size={14} className="text-gold" />
            {phone}
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-center gap-1.5 hover:text-gold"
          >
            <Mail size={14} className="text-gold" />
            {email}
          </a>
        </div>

        <div className="mt-4 flex justify-center gap-2.5">
          {socialLinks.map(({ label, icon: Icon }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral text-charcoal/60 transition-colors hover:border-gold hover:text-gold"
            >
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default AgentCard
