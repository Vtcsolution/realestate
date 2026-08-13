import { motion } from 'framer-motion'
import { fadeInUp } from '../../lib/motion'

const rowOne = [
  'Marchetti & Vale',
  'Solstice Realty Partners',
  'The Cordell Group',
  'Fairmont Lending Co.',
  'Ashwood Capital',
  'Bellcrest Estates',
  'Northlane Mortgage',
  'The Regency Trust',
]

const rowTwo = [
  'Harrow & Wren Realty',
  'Cascade Wealth Advisors',
  'Pinnacle Title & Escrow',
  'Verity Home Loans',
  'Ledger Financial Group',
  'Ivory & Stone Realty',
  'Meridian Trust Bank',
  'Aurelius Property Partners',
]

function MarqueeRow({ items, direction = 'left' }) {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-5 pr-5 ${
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        }`}
      >
        {doubled.map((name, index) => (
          <span
            key={`${name}-${index}`}
            className="shrink-0 whitespace-nowrap rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 font-heading text-base font-semibold tracking-wide text-white/60 transition-all duration-300 hover:border-gold/70 hover:bg-gold/5 hover:text-gold sm:text-lg"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

function PartnerMarquee() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0d] pb-24 pt-14 sm:pb-32 sm:pt-16 lg:pt-36">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-white/40"
        >
          Trusted by Leading Names in Real Estate
        </motion.p>
      </div>

      <div className="relative mt-10 space-y-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0b0b0d] to-transparent sm:w-32" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0b0b0d] to-transparent sm:w-32" />

        <MarqueeRow items={rowOne} direction="left" />
        <MarqueeRow items={rowTwo} direction="right" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent to-offwhite sm:h-44" />
    </section>
  )
}

export default PartnerMarquee
