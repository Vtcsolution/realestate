import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

function ImageLightbox({ images, index, onIndexChange, onClose, title }) {
  const isOpen = index !== null

  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onIndexChange((index + 1) % images.length)
      if (event.key === 'ArrowLeft') onIndexChange((index - 1 + images.length) % images.length)
    }

    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, index, images.length, onClose, onIndexChange])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy/95 p-4 backdrop-blur-md sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-offwhite/30 bg-navy/70 text-offwhite backdrop-blur-sm transition-colors hover:border-gold hover:text-gold"
          >
            <X size={20} />
          </button>

          <span className="absolute left-5 top-7 font-body text-sm text-offwhite/70">
            {index + 1} / {images.length}
          </span>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  onIndexChange((index - 1 + images.length) % images.length)
                }}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-offwhite/30 bg-navy/70 text-offwhite backdrop-blur-sm transition-colors hover:border-gold hover:text-gold sm:left-6 sm:h-12 sm:w-12"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  onIndexChange((index + 1) % images.length)
                }}
                aria-label="Next image"
                className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-offwhite/30 bg-navy/70 text-offwhite backdrop-blur-sm transition-colors hover:border-gold hover:text-gold sm:right-6 sm:h-12 sm:w-12"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          <AnimatePresence mode="wait">
            <motion.img
              key={index}
              src={images[index]}
              alt={`${title} — view ${index + 1}`}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(event) => event.stopPropagation()}
              className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
            />
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ImageLightbox
