import { useRef } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

const canHover =
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches

const springConfig = { stiffness: 220, damping: 20, mass: 0.5 }

export function useTilt({ max = 8, hoverScale = 1.015 } = {}) {
  const ref = useRef(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const scale = useMotionValue(1)
  const glareOpacity = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [0, 1], [max, -max]), springConfig)
  const rotateY = useSpring(useTransform(x, [0, 1], [-max, max]), springConfig)
  const scaleSpring = useSpring(scale, springConfig)
  const glareOpacitySpring = useSpring(glareOpacity, springConfig)
  const glareX = useTransform(x, [0, 1], ['0%', '100%'])
  const glareY = useTransform(y, [0, 1], ['0%', '100%'])

  const handlers = canHover
    ? {
        onMouseMove: (event) => {
          const rect = ref.current?.getBoundingClientRect()
          if (!rect) return
          x.set((event.clientX - rect.left) / rect.width)
          y.set((event.clientY - rect.top) / rect.height)
        },
        onMouseEnter: () => {
          scale.set(hoverScale)
          glareOpacity.set(0.16)
        },
        onMouseLeave: () => {
          x.set(0.5)
          y.set(0.5)
          scale.set(1)
          glareOpacity.set(0)
        },
      }
    : {}

  return {
    ref,
    handlers,
    style: { rotateX, rotateY, scale: scaleSpring, transformPerspective: 1000 },
    glareX,
    glareY,
    glareOpacity: glareOpacitySpring,
    enabled: canHover,
  }
}
