import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Briefcase,
  Camera,
  ChevronsRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PlayCircle,
  Send,
  Users,
} from 'lucide-react'
import Logo from './Logo'

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

const instagramShots = [
  'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=500&q=80',
  'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=500&q=80',
]

const instagramShotsFull = instagramShots.map((src) => src.replace('w=500', 'w=1600'))

function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [featuredIndex, setFeaturedIndex] = useState(0)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer className="bg-navy text-offwhite">
      {/* Bold CTA band */}
      <div className="border-b border-white/10 bg-navy-900 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Get In Touch
          </span>
          <h2 className="mt-6 text-offwhite">
            Your Next Address <span className="text-gold">Starts Here.</span>
          </h2>
          <div className="mt-9 flex items-center justify-center gap-3">
            <NavLink
              to="/contact"
              className="rounded-full bg-white/10 px-7 py-3.5 font-body text-sm font-semibold uppercase tracking-wide text-offwhite transition-colors hover:bg-white/15"
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/contact"
              aria-label="Contact us"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold text-navy transition-transform duration-300 hover:scale-105 hover:bg-gold-600"
            >
              <ChevronsRight size={20} />
            </NavLink>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <Logo wordmarkClassName="text-offwhite" markSize={36} />
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

      {/* Instagram strip */}
      <div className="border-t border-white/10 bg-navy-900 pt-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 pb-6 sm:px-6 lg:px-8">
          <p className="font-body text-xs text-offwhite/60">
            <span className="text-gold">#StayCurrent</span> with us{' '}
            <span className="text-offwhite/80">@vipestates</span>
          </p>
          <a
            href="#"
            className="font-body text-xs font-semibold uppercase tracking-wide text-offwhite underline decoration-gold/60 underline-offset-4 transition-colors hover:text-gold"
          >
            Follow Us on Instagram
          </a>
        </div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40">
            <AnimatePresence mode="wait">
              <motion.img
                key={featuredIndex}
                src={instagramShotsFull[featuredIndex]}
                alt={`Featured photo ${featuredIndex + 1}`}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="h-[280px] w-full object-cover sm:h-[380px]"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent" />
          </div>

          <div className="mt-4 flex justify-center gap-2.5 pb-10 sm:gap-3">
            {instagramShots.map((src, index) => {
              const isFeatured = index === featuredIndex
              return (
                <button
                  key={src}
                  type="button"
                  onClick={() => setFeaturedIndex(index)}
                  aria-label={`Show photo ${index + 1} of ${instagramShots.length}`}
                  aria-current={isFeatured}
                  className={`relative h-14 w-14 shrink-0 appearance-none overflow-hidden rounded-xl border-2 transition-all duration-300 sm:h-16 sm:w-16 ${
                    isFeatured
                      ? 'scale-110 border-gold opacity-100'
                      : 'border-transparent opacity-50 hover:opacity-90'
                  }`}
                >
                  <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
                </button>
              )
            })}
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
