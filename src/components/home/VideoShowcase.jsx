import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../../lib/motion'

const VIDEO_SRC = 'https://videos.pexels.com/video-files/17224715/17224715-hd_1920_1080_30fps.mp4'

const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function VideoShowcase() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const handlePlay = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = false
    video.controls = true
    video.currentTime = 0
    video.play()
    setPlaying(true)
  }

  return (
    <section className="relative h-[520px] overflow-hidden bg-navy sm:h-[600px]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SRC}
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
        preload="metadata"
      />

      {!playing && (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/70 via-navy-900/40 to-navy-900/80" />

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center"
          >
            <motion.span
              variants={fadeInUp}
              className="font-body text-sm font-medium uppercase tracking-[0.3em] text-gold"
            >
              Video Tour
            </motion.span>
            <motion.h2 variants={fadeInUp} className="mt-4 max-w-2xl text-offwhite">
              Step Inside Before You Step In
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 max-w-xl font-body text-offwhite/80"
            >
              A closer look at the craftsmanship, light, and space that define every VIP Estates
              listing — no visit required to get a feel for it.
            </motion.p>
            <motion.button
              variants={fadeInUp}
              type="button"
              onClick={handlePlay}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              aria-label="Play video tour with sound"
              className="relative mt-8 flex h-20 w-20 items-center justify-center rounded-full bg-gold/90 text-navy shadow-2xl"
            >
              <span className="absolute inset-0 animate-ping rounded-full bg-gold/40" />
              <Play size={26} className="relative ml-1" fill="currentColor" />
            </motion.button>
          </motion.div>
        </>
      )}
    </section>
  )
}

export default VideoShowcase
