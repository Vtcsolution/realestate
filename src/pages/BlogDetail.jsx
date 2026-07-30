import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'
import { fadeInUp, staggerContainer } from '../lib/motion'
import PagePlaceholder from '../components/PagePlaceholder'
import { usePageMeta } from '../lib/usePageMeta'

function ContentBlock({ block }) {
  if (block.type === 'heading') {
    return <h2 className="mt-10 text-2xl">{block.text}</h2>
  }
  if (block.type === 'quote') {
    return (
      <blockquote className="mt-8 border-l-4 border-gold bg-neutral-light/50 px-6 py-5 font-heading text-xl italic leading-relaxed text-navy">
        {block.text}
      </blockquote>
    )
  }
  return (
    <p className="mt-5 font-body leading-relaxed text-charcoal/70">{block.text}</p>
  )
}

function BlogDetail() {
  const { id } = useParams()
  const post = blogPosts.find((item) => String(item.id) === id)

  usePageMeta(post ? post.title : 'Article Not Found', post ? post.excerpt : undefined)

  if (!post) {
    return (
      <PagePlaceholder
        title="Article Not Found"
        description="We couldn't find an article with that ID."
      />
    )
  }

  const currentIndex = blogPosts.findIndex((item) => item.id === post.id)
  const previousPost = blogPosts[currentIndex - 1]
  const nextPost = blogPosts[currentIndex + 1]

  const relatedPosts = blogPosts
    .filter((item) => item.id !== post.id && item.category === post.category)
    .slice(0, 3)
  const fallbackRelated = blogPosts.filter((item) => item.id !== post.id).slice(0, 3)
  const related = relatedPosts.length ? relatedPosts : fallbackRelated

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 font-body text-sm font-medium text-charcoal/60 transition-colors hover:text-gold"
      >
        <ArrowLeft size={15} />
        Back to The Journal
      </Link>

      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]"
      >
        <div>
          <motion.div variants={fadeInUp}>
            <span className="font-body text-sm font-medium uppercase tracking-widest text-gold">
              {post.category}
            </span>
            <h1 className="mt-3">{post.title}</h1>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="font-body text-sm font-semibold text-navy">
                    {post.author.name}
                  </p>
                  <p className="font-body text-xs text-charcoal/50">{post.author.role}</p>
                </div>
              </div>
              <span className="hidden h-8 w-px bg-neutral-light sm:block" />
              <span className="flex items-center gap-1.5 font-body text-xs text-charcoal/50">
                <Calendar size={13} className="text-gold" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5 font-body text-xs text-charcoal/50">
                <Clock size={13} className="text-gold" />
                {post.readTime}
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-neutral-light shadow-sm"
          >
            <img
              src={post.image}
              alt={post.title}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-2">
            {post.content.map((block, index) => (
              <ContentBlock key={index} block={block} />
            ))}
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-14 grid grid-cols-1 gap-4 border-t border-neutral-light pt-8 sm:grid-cols-2"
          >
            {previousPost ? (
              <Link
                to={`/blog/${previousPost.id}`}
                className="group flex flex-col rounded-2xl border border-neutral-light p-5 transition-colors hover:border-gold"
              >
                <span className="flex items-center gap-1.5 font-body text-xs font-medium uppercase tracking-wide text-charcoal/40">
                  <ArrowLeft size={13} />
                  Previous
                </span>
                <span className="mt-2 font-heading text-base font-semibold text-navy transition-colors group-hover:text-gold">
                  {previousPost.title}
                </span>
              </Link>
            ) : (
              <div />
            )}
            {nextPost && (
              <Link
                to={`/blog/${nextPost.id}`}
                className="group flex flex-col rounded-2xl border border-neutral-light p-5 text-right transition-colors hover:border-gold sm:items-end"
              >
                <span className="flex items-center gap-1.5 font-body text-xs font-medium uppercase tracking-wide text-charcoal/40">
                  Next
                  <ArrowRight size={13} />
                </span>
                <span className="mt-2 font-heading text-base font-semibold text-navy transition-colors group-hover:text-gold">
                  {nextPost.title}
                </span>
              </Link>
            )}
          </motion.div>
        </div>

        <motion.aside variants={fadeInUp} className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-neutral-light bg-white p-6">
            <p className="font-heading text-lg font-semibold text-navy">
              Have a question for our advisors?
            </p>
            <p className="mt-2 font-body text-sm text-charcoal/60">
              Speak with a senior agent about buying, selling, or investing in luxury real
              estate.
            </p>
            <Link
              to="/contact"
              className="mt-5 block w-full rounded-full bg-gold py-3 text-center font-body text-sm font-semibold text-navy transition-colors hover:bg-gold-600"
            >
              Talk to an Advisor
            </Link>
          </div>

          {related.length > 0 && (
            <div className="mt-6 rounded-2xl border border-neutral-light bg-white p-6">
              <p className="font-heading text-lg font-semibold text-navy">More Articles</p>
              <div className="mt-4 flex flex-col gap-4">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    to={`/blog/${item.id}`}
                    className="group flex items-center gap-3"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-14 w-14 shrink-0 rounded-lg object-cover"
                    />
                    <div>
                      <p className="font-body text-sm font-medium leading-snug text-navy transition-colors group-hover:text-gold">
                        {item.title}
                      </p>
                      <p className="mt-1 font-body text-xs text-charcoal/50">{item.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </motion.aside>
      </motion.div>
    </div>
  )
}

export default BlogDetail
