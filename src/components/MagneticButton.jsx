import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const canHover =
  typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches

const springConfig = { stiffness: 200, damping: 15, mass: 0.4 }

function MagneticButton({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, springConfig)
  const springY = useSpring(y, springConfig)

  const handleMouseMove = (event) => {
    if (!canHover) return
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((event.clientX - (rect.left + rect.width / 2)) * strength)
    y.set((event.clientY - (rect.top + rect.height / 2)) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.94 }}
      style={{ x: springX, y: springY, display: 'inline-block' }}
      className={className}
    >
      {children}
    </motion.span>
  )
}

export default MagneticButton
