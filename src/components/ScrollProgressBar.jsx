import { motion, useScroll, useSpring } from 'framer-motion'

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, mass: 0.2 })

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-gold-600 via-gold to-gold-300"
      style={{ scaleX }}
    />
  )
}

export default ScrollProgressBar
