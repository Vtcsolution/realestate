import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Bath, Bed, MapPin, Ruler } from 'lucide-react'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { resizeImage } from '../lib/imageUrl'
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

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi, I'm interested in ${title} (${location}). Could you share more details?`,
  )}`

  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-light bg-white shadow-sm transition-transform duration-300 will-change-transform hover:-translate-y-2">
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
            modules={[Navigation, Pagination]}
            style={{ '--swiper-theme-color': '#C9A227', '--swiper-navigation-size': '16px' }}
            navigation
            pagination={{ clickable: true }}
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
    </article>
  )
}

export default PropertyCard
