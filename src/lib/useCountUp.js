import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export function useCountUp(target, { duration = 2 } = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const controls = animate(0, target, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(Math.round(latest)),
    })
    return () => controls.stop()
  }, [isInView, target, duration])

  return { ref, value }
}
