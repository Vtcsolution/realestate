import { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'

const DOT_SIZE = 8
const RING_SIZE = 36

function CustomCursor() {
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  const mouseX = useMotionValue(-100)
  const mouseY = useMotionValue(-100)
  const ringSpringConfig = { stiffness: 500, damping: 40, mass: 0.4 }

  const dotX = useTransform(mouseX, (v) => v - DOT_SIZE / 2)
  const dotY = useTransform(mouseY, (v) => v - DOT_SIZE / 2)
  const ringXRaw = useTransform(mouseX, (v) => v - RING_SIZE / 2)
  const ringYRaw = useTransform(mouseY, (v) => v - RING_SIZE / 2)
  const ringX = useSpring(ringXRaw, ringSpringConfig)
  const ringY = useSpring(ringYRaw, ringSpringConfig)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    const reduceMq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setEnabled(mq.matches && !reduceMq.matches)
  }, [])

  useEffect(() => {
    if (!enabled) return undefined

    const moveHandler = (event) => {
      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
      setVisible(true)
      const target = event.target.closest?.(
        'a, button, [role="button"], input, select, textarea, [data-cursor="link"]',
      )
      setHovering(Boolean(target))
    }
    const leaveHandler = () => setVisible(false)

    window.addEventListener('mousemove', moveHandler)
    document.documentElement.addEventListener('mouseleave', leaveHandler)
    document.body.classList.add('has-custom-cursor')

    return () => {
      window.removeEventListener('mousemove', moveHandler)
      document.documentElement.removeEventListener('mouseleave', leaveHandler)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [enabled, mouseX, mouseY])

  if (!enabled) return null

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[999] rounded-full bg-gold"
        style={{
          width: DOT_SIZE,
          height: DOT_SIZE,
          x: dotX,
          y: dotY,
          opacity: visible ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[998] rounded-full border"
        style={{
          width: RING_SIZE,
          height: RING_SIZE,
          x: ringX,
          y: ringY,
          opacity: visible ? 1 : 0,
        }}
        animate={{
          scale: hovering ? 1.7 : 1,
          backgroundColor: hovering ? 'rgba(201,162,39,0.12)' : 'rgba(201,162,39,0)',
          borderColor: hovering ? 'rgba(201,162,39,0.9)' : 'rgba(201,162,39,0.55)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      />
    </>
  )
}

export default CustomCursor
