import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Bath, Bed, MapPin, Ruler } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { resizeImage } from '../lib/imageUrl'
import { useTilt } from '../lib/useTilt'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
})

const WHATSAPP_NUMBER = '12125550198'

function PropertyCard({ property, imageOnly = false }) {
  const { id, title, location, price, bedrooms, bathrooms, area, images } = property
  const tilt = useTilt({ max: 6, hoverScale: 1.015 })
  const swiperRef = useRef(null)

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I'm interested in ${title} (${location}). Could you share more details?`,
  )}`

  const handleCardEnter = (event) => {
    tilt.handlers.onMouseEnter?.(event)
    swiperRef.current?.autoplay?.start()
  }
  const handleCardLeave = (event) => {
    tilt.handlers.onMouseLeave?.(event)
    swiperRef.current?.autoplay?.stop()
  }

  return (
    <motion.article
      ref={tilt.ref}
      onMouseMove={tilt.handlers.onMouseMove}
      onMouseEnter={handleCardEnter}
      onMouseLeave={handleCardLeave}
      style={tilt.style}
      className="group relative overflow-hidden rounded-2xl border border-neutral-light bg-white shadow-sm transition-shadow duration-300 will-change-transform hover:shadow-xl"
    >
      {tilt.enabled && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute z-10 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-2xl mix-blend-overlay"
          style={{ left: tilt.glareX, top: tilt.glareY, opacity: tilt.glareOpacity }}
        />
      )}
      <div className="relative aspect-[4/3] overflow-hidden">
        {imageOnly ? (
          <img
            src={resizeImage(images[0], 500)}
            alt={title}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            style={{ '--swiper-theme-color': '#C9A227', '--swiper-navigation-size': '16px' }}
            navigation
            pagination={{ clickable: true }}
            loop={images.length > 1}
            autoplay={{ delay: 1100, disableOnInteraction: false }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
              swiper.autoplay.stop()
            }}
            className="carousel-nav-hint h-full w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={image}>
                <img
                  src={resizeImage(image, 500)}
                  alt={`${title} photo ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <span className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-gold px-4 py-1.5 font-body text-sm font-semibold text-navy shadow">
          {currencyFormatter.format(price)}
        </span>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          onClick={(event) => event.stopPropagation()}
          className="absolute bottom-4 right-4 z-10 flex items-center gap-2 rounded-full bg-white py-1 pl-1 pr-3.5 shadow-lg transition-transform hover:scale-105"
        >
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
            <WhatsAppIcon size={13} />
          </span>
          <span className="font-body text-xs font-semibold text-navy">WhatsApp</span>
        </a>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-navy">{title}</h3>
        <p className="mt-2 flex items-center gap-1.5 font-body text-sm text-charcoal/60">
          <MapPin size={15} className="shrink-0 text-gold" />
          {location}
        </p>

        <div className="mt-5 flex items-center gap-5 border-t border-neutral-light pt-4 font-body text-sm text-charcoal/70">
          {bedrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <Bed size={16} className="text-gold" />
              {bedrooms} Beds
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <Bath size={16} className="text-gold" />
            {bathrooms} Baths
          </span>
          <span className="flex items-center gap-1.5">
            <Ruler size={16} className="text-gold" />
            {area.toLocaleString()} sqft
          </span>
        </div>

        <div className="mt-6">
          <Link
            to={`/properties/${id}`}
            className="block w-full rounded-full bg-navy py-2.5 text-center font-body text-sm font-medium text-offwhite transition-transform duration-200 hover:scale-[1.03] hover:bg-navy-600 active:scale-[0.97]"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.article>
  )
}

export default PropertyCard
