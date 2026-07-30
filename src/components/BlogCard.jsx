import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'

function BlogCard({ post }) {
  const { id, title, excerpt, category, date, readTime, image } = post

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="group overflow-hidden rounded-2xl border border-neutral-light bg-white shadow-sm"
    >
      <Link to={`/blog/${id}`} className="contents">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <span className="absolute left-4 top-4 rounded-full bg-gold px-3.5 py-1 font-body text-xs font-semibold uppercase tracking-wide text-navy">
            {category}
          </span>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-semibold leading-snug text-navy">{title}</h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-charcoal/60">{excerpt}</p>

          <div className="mt-5 flex items-center gap-4 border-t border-neutral-light pt-4 font-body text-xs text-charcoal/50">
            <span className="flex items-center gap-1.5">
              <Calendar size={13} className="text-gold" />
              {date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-gold" />
              {readTime}
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default BlogCard
