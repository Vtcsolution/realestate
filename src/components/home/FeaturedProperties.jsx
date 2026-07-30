import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import PropertyCard from '../PropertyCard'
import { properties } from '../../data/properties'
import { fadeInUp, staggerContainer } from '../../lib/motion'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const featuredProperties = properties.slice(0, 6)

function FeaturedProperties() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-medium uppercase tracking-widest text-gold">
            Handpicked
          </span>
          <h2 className="mt-4">Featured Properties</h2>
          <p className="mt-4 font-body text-charcoal/70">
            A rotating selection of our most exceptional listings, curated by
            our senior agents.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="mt-14">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            style={{ '--swiper-theme-color': '#C9A227' }}
            spaceBetween={24}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            loop
            className="!pb-12"
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {featuredProperties.map((property) => (
              <SwiperSlide key={property.id} className="!h-auto py-2">
                <PropertyCard property={property} imageOnly />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default FeaturedProperties
