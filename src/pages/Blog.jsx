import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import BlogCard from '../components/BlogCard'
import { blogPosts } from '../data/blogPosts'
import { fadeInUp, staggerContainer } from '../lib/motion'
import { usePageMeta } from '../lib/usePageMeta'

const POSTS_PER_PAGE = 3

const categories = ['All', ...new Set(blogPosts.map((post) => post.category))]
const featuredPost = blogPosts.find((post) => post.featured)
const remainingPosts = blogPosts.filter((post) => !post.featured)

function Blog() {
  usePageMeta(
    'The Journal',
    'Market insights, buying guides, and stories from the world of luxury real estate.',
  )

  const [category, setCategory] = useState('All')
  const [page, setPage] = useState(1)

  const filteredPosts = useMemo(
    () =>
      category === 'All' ? remainingPosts : remainingPosts.filter((post) => post.category === category),
    [category],
  )

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE))
  const paginatedPosts = filteredPosts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  )

  const handleCategoryChange = (value) => {
    setCategory(value)
    setPage(1)
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-2xl text-center"
      >
        <motion.span
          variants={fadeInUp}
          className="font-body text-sm font-medium uppercase tracking-widest text-gold"
        >
          Insights
        </motion.span>
        <motion.h1 variants={fadeInUp} className="mt-2">
          The Journal
        </motion.h1>
        <motion.p variants={fadeInUp} className="mt-4 font-body text-charcoal/70">
          Market insights, buying guides, and stories from the world of luxury real estate.
        </motion.p>
      </motion.div>

      {featuredPost && (
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mt-12 grid grid-cols-1 overflow-hidden rounded-2xl border border-neutral-light bg-white shadow-sm lg:grid-cols-2"
        >
          <div className="relative aspect-[16/10] lg:aspect-auto">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="h-full w-full object-cover"
            />
            <span className="absolute left-5 top-5 rounded-full bg-gold px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-wide text-navy">
              Featured
            </span>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <span className="font-body text-xs font-medium uppercase tracking-widest text-gold">
              {featuredPost.category}
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl">{featuredPost.title}</h2>
            <p className="mt-4 font-body text-charcoal/70">{featuredPost.excerpt}</p>
            <div className="mt-5 flex items-center gap-5 font-body text-xs text-charcoal/50">
              <span className="flex items-center gap-1.5">
                <Calendar size={13} className="text-gold" />
                {featuredPost.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-gold" />
                {featuredPost.readTime}
              </span>
            </div>
            <Link
              to={`/blog/${featuredPost.id}`}
              className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-navy px-6 py-3 font-body text-sm font-semibold text-offwhite transition-colors hover:bg-navy-600"
            >
              Read Article
              <ArrowRight size={15} />
            </Link>
          </div>
        </motion.div>
      )}

      <div className="mt-14 flex flex-wrap justify-center gap-3">
        {categories.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => handleCategoryChange(option)}
            className={`rounded-full border px-5 py-2 font-body text-sm font-medium transition-colors ${
              category === option
                ? 'border-gold bg-gold text-navy'
                : 'border-neutral text-charcoal/70 hover:border-gold'
            }`}
          >
            {option}
          </button>
        ))}
      </div>

      <motion.div
        key={`${category}-${page}`}
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {paginatedPosts.map((post) => (
          <motion.div key={post.id} variants={fadeInUp}>
            <BlogCard post={post} />
          </motion.div>
        ))}
      </motion.div>

      {paginatedPosts.length === 0 && (
        <p className="mt-10 text-center font-body text-charcoal/60">
          No articles in this category yet.
        </p>
      )}

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral text-navy transition-colors hover:border-gold disabled:opacity-30"
            aria-label="Previous page"
          >
            <ChevronLeft size={16} />
          </button>

          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setPage(index + 1)}
              className={`flex h-10 w-10 items-center justify-center rounded-full font-body text-sm font-medium transition-colors ${
                page === index + 1
                  ? 'bg-gold text-navy'
                  : 'text-charcoal/70 hover:bg-neutral-light'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral text-navy transition-colors hover:border-gold disabled:opacity-30"
            aria-label="Next page"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </div>
  )
}

export default Blog
