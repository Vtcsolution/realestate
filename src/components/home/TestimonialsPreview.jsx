import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { testimonials } from '../../data/testimonials'
import { fadeInUp, staggerContainer } from '../../lib/motion'
import 'swiper/css'
import 'swiper/css/pagination'

const previewTestimonials = testimonials.slice(0, 3)

function TestimonialsPreview() {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-4xl px-4 py-24 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={fadeInUp} className="mx-auto max-w-2xl text-center">
            <span className="font-body text-sm font-medium uppercase tracking-widest text-gold">
              Client Stories
            </span>
            <h2 className="mt-4 text-offwhite">What Our Clients Say</h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-14">
            <Swiper
              modules={[Pagination, Autoplay]}
              style={{ '--swiper-theme-color': '#C9A227' }}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5500, disableOnInteraction: false, pauseOnMouseEnter: true }}
              loop
              className="!pb-12"
            >
              {previewTestimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="flex flex-col items-center px-4 text-center">
                    <Quote size={36} className="text-gold" />
                    <p className="mt-6 font-body text-lg italic text-offwhite/90 sm:text-xl">
                      "{testimonial.quote}"
                    </p>
                    <div className="mt-6 flex gap-1 text-gold">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <div className="mt-5 flex items-center gap-3">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <p className="font-body text-sm font-semibold text-offwhite">
                          {testimonial.name}
                        </p>
                        <p className="font-body text-xs text-offwhite/60">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsPreview
