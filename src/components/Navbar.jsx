import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/navLinks'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const desktopLinkClass = ({ isActive }) =>
    `group relative py-1 font-body text-sm tracking-wide transition-colors duration-300 hover:text-gold ${
      isActive ? 'font-medium text-gold' : 'text-navy/80'
    }`

  const mobileLinkClass = ({ isActive }) =>
    `font-body text-base transition-colors hover:text-gold ${
      isActive ? 'font-medium text-gold' : 'text-navy/80'
    }`

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-offwhite/85 backdrop-blur-sm"
        animate={{
          boxShadow: scrolled
            ? '0 8px 24px -12px rgba(11, 31, 58, 0.25)'
            : '0 0 0 rgba(0, 0, 0, 0)',
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="shrink-0 font-heading text-xl font-bold text-navy">
            VIP <span className="text-gold">Estates</span>
          </NavLink>

          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={desktopLinkClass}
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full origin-left scale-x-0 bg-gold transition-transform duration-300 ease-out group-hover:scale-x-100 ${
                        isActive ? 'scale-x-100' : ''
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <NavLink
              to="/contact"
              className="hidden rounded-full bg-gold px-5 py-2.5 font-body text-sm font-medium text-navy transition-all duration-300 hover:scale-[1.05] hover:bg-gold-600 active:scale-[0.96] lg:inline-block"
            >
              Book a Visit
            </NavLink>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
              className="text-navy lg:hidden"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-navy/40 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col bg-offwhite px-6 py-6 shadow-2xl lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg font-bold text-navy">Menu</span>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="text-navy"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={mobileLinkClass}
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>

              <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-10 rounded-full bg-gold px-5 py-3 text-center font-body text-sm font-medium text-navy transition-colors hover:bg-gold-600"
              >
                Book a Visit
              </NavLink>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
