import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import PropertyFilters from './PropertyFilters'

function MobileFilterModal({ isOpen, onClose, resultCount, ...filterProps }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-navy/50 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-x-0 bottom-0 z-50 flex max-h-[88vh] flex-col rounded-t-3xl bg-white shadow-2xl lg:hidden"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex items-center justify-between border-b border-neutral-light px-6 py-4">
              <p className="font-heading text-lg font-semibold text-navy">Filters</p>
              <button type="button" aria-label="Close filters" onClick={onClose} className="text-navy">
                <X size={22} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-2">
              <PropertyFilters {...filterProps} />
            </div>

            <div className="border-t border-neutral-light p-4">
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-full bg-gold py-3 text-center font-body text-sm font-semibold text-navy transition-colors hover:bg-gold-600"
              >
                Show {resultCount} {resultCount === 1 ? 'Property' : 'Properties'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileFilterModal
