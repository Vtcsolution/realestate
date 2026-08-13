import { Suspense, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Chatbot from './Chatbot'
import CustomCursor from './CustomCursor'
import ScrollProgressBar from './ScrollProgressBar'

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-neutral border-t-gold" />
    </div>
  )
}

function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col bg-offwhite">
      <ScrollProgressBar />
      <CustomCursor />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="flex-1 pt-20"
        >
          <Suspense fallback={<RouteFallback />}>
            <Outlet />
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <Chatbot />
    </div>
  )
}

export default Layout
