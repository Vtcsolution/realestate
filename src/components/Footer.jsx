import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Briefcase,
  Camera,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PlayCircle,
  Send,
  Users,
} from 'lucide-react'

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'Properties', to: '/properties' },
  { label: 'About', to: '/about' },
  { label: 'Agents', to: '/agents' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

const socialLinks = [
  { label: 'Facebook', href: '#', icon: Users },
  { label: 'Instagram', href: '#', icon: Camera },
  { label: 'Twitter', href: '#', icon: MessageCircle },
  { label: 'LinkedIn', href: '#', icon: Briefcase },
  { label: 'YouTube', href: '#', icon: PlayCircle },
]

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-navy text-offwhite">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <span className="font-heading text-2xl font-bold text-offwhite">
            VIP <span className="text-gold">Estates</span>
          </span>
          <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-offwhite/70">
            Curated luxury properties and white-glove service for discerning
            clients, worldwide.
          </p>
          <ul className="mt-6 space-y-3 font-body text-sm text-offwhite/70">
            <li className="flex items-center gap-3">
              <MapPin size={16} className="shrink-0 text-gold" />
              123 Park Avenue, New York, NY 10017
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-gold" />
              +1 (212) 555-0198
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-gold" />
              concierge@vipestates.com
            </li>
          </ul>
        </div>

        <div>
          <h6 className="text-offwhite">Quick Links</h6>
          <ul className="mt-5 space-y-3 font-body text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="text-offwhite/70 transition-colors hover:text-gold"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h6 className="text-offwhite">Newsletter</h6>
          <p className="mt-5 font-body text-sm text-offwhite/70">
            Get first access to new listings and market insights.
          </p>
          <form onSubmit={handleSubmit} className="mt-4 flex items-center gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email"
              aria-label="Email address"
              className="w-full rounded-full border border-white/20 bg-white/5 px-4 py-2.5 font-body text-sm text-offwhite placeholder:text-offwhite/40 focus:border-gold focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold text-navy transition-colors hover:bg-gold-600"
            >
              <Send size={16} />
            </button>
          </form>
          {subscribed && (
            <p className="mt-2 font-body text-xs text-gold">
              Thanks for subscribing.
            </p>
          )}
        </div>

        <div>
          <h6 className="text-offwhite">Follow Us</h6>
          <div className="mt-5 flex gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-offwhite/80 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-center font-body text-xs text-offwhite/60 sm:flex-row sm:px-6 sm:text-left lg:px-8">
          <p>&copy; {new Date().getFullYear()} VIP Estates. All rights reserved.</p>
          <div className="flex gap-6">
            <NavLink to="/faq" className="hover:text-gold">
              Privacy Policy
            </NavLink>
            <NavLink to="/faq" className="hover:text-gold">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
