import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories } from '../../data/categories'
import { fadeInUp, staggerContainer } from '../../lib/motion'

function ExploreCategories() {
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
            Browse
          </span>
          <h2 className="mt-4">Explore by Category</h2>
          <p className="mt-4 font-body text-charcoal/70">
            Whichever lifestyle you're after, our portfolio spans every
            category of luxury property.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {categories.map(({ id, label, icon: Icon, image }) => (
            <motion.div key={id} variants={fadeInUp}>
              <Link
                to={`/properties?type=${id}`}
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <img
                  src={image}
                  alt={label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-navy-900/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold text-navy">
                    <Icon size={17} />
                  </span>
                  <span className="font-heading text-lg font-semibold text-offwhite">
                    {label}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default ExploreCategories
