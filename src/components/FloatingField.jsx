import { useState } from 'react'
import { motion } from 'framer-motion'

function FloatingField({ label, type = 'text', value, onChange, required, textarea, name }) {
  const [focused, setFocused] = useState(false)
  const isActive = focused || value.length > 0
  const Component = textarea ? 'textarea' : 'input'

  return (
    <div className="relative">
      <Component
        name={name}
        type={textarea ? undefined : type}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        rows={textarea ? 5 : undefined}
        className={`w-full resize-none rounded-xl border bg-white px-4 pb-2.5 pt-6 font-body text-sm text-charcoal outline-none transition-colors ${
          focused ? 'border-gold' : 'border-neutral'
        }`}
      />
      <motion.label
        initial={false}
        animate={{
          top: isActive ? 10 : textarea ? 22 : '50%',
          y: isActive ? 0 : textarea ? 0 : '-50%',
          fontSize: isActive ? '0.7rem' : '0.875rem',
          color: focused ? '#C9A227' : 'rgba(26,26,26,0.5)',
        }}
        transition={{ duration: 0.15 }}
        className="pointer-events-none absolute left-4 origin-left font-body"
      >
        {label}
      </motion.label>
    </div>
  )
}

export default FloatingField
