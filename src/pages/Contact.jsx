import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from 'lucide-react'
import FloatingField from '../components/FloatingField'
import { properties } from '../data/properties'
import { fadeInUp, staggerContainer } from '../lib/motion'
import { usePageMeta } from '../lib/usePageMeta'

const contactInfo = [
  {
    icon: MapPin,
    label: 'Office Address',
    value: '123 Park Avenue, New York, NY 10017',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (212) 555-0198',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'concierge@vipestates.com',
  },
  {
    icon: Clock,
    label: 'Working Hours',
    value: 'Mon–Fri: 9am–7pm · Sat: 10am–4pm',
  },
]

const initialForm = { name: '', email: '', phone: '', propertyInterest: '', message: '' }

function Contact() {
  usePageMeta(
    'Contact Us',
    'Get in touch with VIP Estates — whether buying, selling, or just exploring, our team is here to help.',
  )

  const [form, setForm] = useState(initialForm)
  const [showToast, setShowToast] = useState(false)

  const handleChange = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }))

  const handleSubmit = (event) => {
    event.preventDefault()
    setShowToast(true)
    setForm(initialForm)
    setTimeout(() => setShowToast(false), 3500)
  }

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
          Get In Touch
        </motion.span>
        <motion.h1 variants={fadeInUp} className="mt-2">
          Contact Us
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-4 font-body text-charcoal/70">
          Whether you're buying, selling, or just exploring — our team is here to help.
        </motion.p>
      </motion.div>

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[3fr_2fr]">
        <motion.form
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-neutral-light bg-white p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <FloatingField
              name="name"
              label="Full Name"
              value={form.name}
              onChange={handleChange('name')}
              required
            />
            <FloatingField
              name="email"
              label="Email Address"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              required
            />
          </div>

          <FloatingField
            name="phone"
            label="Phone Number"
            type="tel"
            value={form.phone}
            onChange={handleChange('phone')}
          />

          <label className="block">
            <span className="font-body text-xs font-medium uppercase tracking-wide text-charcoal/50">
              Property Interested In
            </span>
            <select
              value={form.propertyInterest}
              onChange={handleChange('propertyInterest')}
              className="mt-2 w-full rounded-xl border border-neutral bg-white px-4 py-3 font-body text-sm text-charcoal focus:border-gold focus:outline-none"
            >
              <option value="">General Inquiry</option>
              {properties.map((property) => (
                <option key={property.id} value={property.title}>
                  {property.title}
                </option>
              ))}
            </select>
          </label>

          <FloatingField
            name="message"
            label="Message"
            value={form.message}
            onChange={handleChange('message')}
            textarea
            required
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 font-body text-sm font-semibold text-navy transition-colors hover:bg-gold-600"
          >
            <Send size={16} />
            Send Message
          </motion.button>
        </motion.form>

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <motion.div
                key={label}
                variants={fadeInUp}
                className="rounded-2xl border border-neutral-light bg-white p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <Icon size={18} />
                </span>
                <p className="mt-3 font-body text-xs font-medium uppercase tracking-wide text-charcoal/50">
                  {label}
                </p>
                <p className="mt-1 font-body text-sm font-medium text-navy">{value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeInUp}
            className="overflow-hidden rounded-2xl border border-neutral-light"
          >
            <iframe
              title="VIP Estates office location"
              src="https://maps.google.com/maps?q=123+Park+Avenue+New+York+NY&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-6 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-3 rounded-full bg-navy px-6 py-3.5 shadow-2xl"
          >
            <CheckCircle2 size={20} className="text-gold" />
            <span className="font-body text-sm font-medium text-offwhite">
              Message sent! We'll be in touch within one business day.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Contact
