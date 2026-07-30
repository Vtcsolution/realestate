const authors = {
  richard: {
    name: 'Richard Ellison',
    role: 'Senior Luxury Advisor',
    avatar:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80',
  },
  isabella: {
    name: 'Isabella Reyes',
    role: 'Luxury Estate Specialist',
    avatar:
      'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&w=200&q=80',
  },
  diane: {
    name: 'Diane Foster',
    role: 'Residential Broker',
    avatar:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80',
  },
  camille: {
    name: 'Camille Dupont',
    role: 'Residential Sales Director',
    avatar:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
  },
  marcus: {
    name: 'Marcus Whitfield',
    role: 'Commercial Investment Lead',
    avatar:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
  },
  james: {
    name: 'James Okafor',
    role: 'Commercial Leasing Advisor',
    avatar:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&q=80',
  },
  charlotte: {
    name: 'Charlotte Bennett',
    role: 'International Luxury Advisor',
    avatar:
      'https://images.unsplash.com/photo-1541823709867-1b206113eafd?auto=format&fit=crop&w=200&q=80',
  },
  thomas: {
    name: 'Thomas Adler',
    role: 'Residential Sales Associate',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
  },
}

export const blogPosts = [
  {
    id: 1,
    title: 'The State of Luxury Real Estate in 2026',
    excerpt:
      'Inventory is tightening across every major market we track. Here is what that means for buyers and sellers heading into the second half of the year.',
    category: 'Market Insights',
    date: 'Jul 18, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    author: authors.richard,
    content: [
      {
        type: 'paragraph',
        text: 'Every summer we sit down with our senior advisors across every market we serve and compare notes. This year, one theme came up in nearly every conversation: inventory. Or rather, the lack of it.',
      },
      {
        type: 'paragraph',
        text: "Listings in the ultra-luxury tier — properties above $5M — are down roughly 14% year over year in the markets we track most closely. That scarcity is not evenly distributed. Coastal markets with strict zoning are feeling it hardest, while newer-build metros are holding steadier inventory levels.",
      },
      { type: 'heading', text: 'What tightening inventory means for buyers' },
      {
        type: 'paragraph',
        text: 'Buyers who have the flexibility to move quickly are winning. We are seeing well-prepared offers — pre-arranged financing, flexible closing timelines, minimal contingencies — close in under three weeks in markets where six-to-eight weeks used to be standard.',
      },
      {
        type: 'quote',
        text: 'The buyers who win in a tight market are not the ones who bid highest — they are the ones who remove friction from the transaction.',
      },
      {
        type: 'paragraph',
        text: 'For sellers, this is arguably the strongest positioning we have seen in several years. But pricing discipline still matters: overpriced listings sit, and a property that sits past 30 days on market starts to carry a psychological discount regardless of its actual value.',
      },
      { type: 'heading', text: 'Our outlook for the back half of the year' },
      {
        type: 'paragraph',
        text: 'We expect the tightening to continue through the third quarter before easing slightly as new construction inventory reaches the market in Q4. If you are weighing a move on either side of the transaction, the next 90 days are worth a serious conversation with your advisor.',
      },
    ],
  },
  {
    id: 2,
    title: "5 Signs You're Ready to Buy Your First Luxury Home",
    excerpt:
      'Beyond the down payment — the financial and lifestyle signals that suggest it might be time to make a move.',
    category: 'Buying Guide',
    date: 'Jul 04, 2026',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    author: authors.isabella,
    content: [
      {
        type: 'paragraph',
        text: 'Clients often ask us how they will know when they are truly ready to buy at the luxury tier. The down payment is the obvious checkpoint, but in our experience it is rarely the deciding factor. Here are the five signals we actually look for.',
      },
      { type: 'heading', text: '1. Your reserve fund is separate from your down payment' },
      {
        type: 'paragraph',
        text: 'Luxury properties come with luxury carrying costs — staff, grounds, insurance, HOA dues. You should have six to twelve months of these costs set aside, untouched by the purchase itself.',
      },
      { type: 'heading', text: '2. You have financing pre-approved, not just pre-qualified' },
      {
        type: 'paragraph',
        text: 'Pre-qualification is a conversation. Pre-approval is underwriting. In a competitive market, only the latter lets you move at the speed a strong offer requires.',
      },
      { type: 'heading', text: '3. You know your non-negotiables — and they fit on one hand' },
      {
        type: 'paragraph',
        text: 'The buyers who search longest are usually the ones with the longest wish list. Narrow it to three or four true non-negotiables and treat everything else as negotiable.',
      },
      { type: 'heading', text: '4. Your timeline has flexibility on both ends' },
      {
        type: 'paragraph',
        text: 'The best properties rarely align perfectly with a hard move-out date. A little slack on when you buy — and when you need to close — opens up meaningfully more inventory.',
      },
      { type: 'heading', text: "5. You've walked at least a dozen properties in your target area" },
      {
        type: 'paragraph',
        text: "There is no substitute for in-person calibration. Buyers who have toured widely make faster, more confident decisions when the right property appears — because they instantly recognize it.",
      },
    ],
  },
  {
    id: 3,
    title: 'How to Stage a Property for a Record Sale',
    excerpt:
      'Small, deliberate staging choices can add meaningful value to a listing. Our design team shares what actually moves the needle.',
    category: 'Selling Tips',
    date: 'Jun 22, 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80',
    author: authors.diane,
    content: [
      {
        type: 'paragraph',
        text: 'We staged 46 listings last year. The ones that sold above asking shared a handful of specific choices in common — and it was rarely the most expensive furniture in the room.',
      },
      { type: 'heading', text: 'Light first, furniture second' },
      {
        type: 'paragraph',
        text: 'Before a single piece of furniture is placed, we audit every light source in the home. Warm-white bulbs, cleaned fixtures, and sheer window treatments consistently outperform any staging budget spent on decor.',
      },
      { type: 'heading', text: 'Stage the primary suite like a hotel room' },
      {
        type: 'paragraph',
        text: 'Buyers linger longest in the primary bedroom. A hotel-style bed made with crisp, neutral linens photographs and shows better than any bedroom that reflects a lived-in, personal style.',
      },
      {
        type: 'quote',
        text: 'Staging is not decorating. It is removing everything that keeps a buyer from picturing themselves in the space.',
      },
      { type: 'heading', text: 'Empty at least one room on purpose' },
      {
        type: 'paragraph',
        text: 'Counterintuitively, one deliberately sparse room — a home office with just a desk and chair, for instance — reads as aspirational rather than empty, and gives buyers a canvas to project onto.',
      },
      { type: 'heading', text: "Don't neglect the exterior" },
      {
        type: 'paragraph',
        text: 'First impressions are formed in the driveway. Fresh mulch, pressure-washed walkways, and a single well-placed planting near the entry consistently rank among our highest-ROI staging line items.',
      },
    ],
  },
  {
    id: 4,
    title: "Understanding Jumbo Mortgages: A Buyer's Guide",
    excerpt:
      'Jumbo loans come with different underwriting rules than conventional mortgages. Here is what qualifies — and what to prepare.',
    category: 'Financing',
    date: 'Jun 09, 2026',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80',
    author: authors.camille,
    content: [
      {
        type: 'paragraph',
        text: 'Any loan above the conforming loan limit set annually by the Federal Housing Finance Agency is classified as a jumbo mortgage. In most of the markets we serve, that threshold sits well below the price point of a typical luxury purchase — which means jumbo financing is the norm, not the exception, for our buyers.',
      },
      { type: 'heading', text: 'How underwriting differs from a conventional loan' },
      {
        type: 'paragraph',
        text: 'Because jumbo loans cannot be sold to Fannie Mae or Freddie Mac, lenders hold more of the risk themselves. Expect a deeper review of income documentation, larger cash-reserve requirements — often 6 to 12 months of payments — and a lower maximum debt-to-income ratio than a conventional loan would allow.',
      },
      { type: 'heading', text: 'What to have ready before you apply' },
      {
        type: 'paragraph',
        text: 'Two years of tax returns, recent statements for every asset account, a clear paper trail for any large deposits, and documentation of any additional income streams. Self-employed buyers should expect the most scrutiny and should start this process earliest.',
      },
      { type: 'heading', text: 'Rate expectations' },
      {
        type: 'paragraph',
        text: 'Jumbo rates have historically tracked close to, and sometimes below, conforming rates, though the spread moves with market conditions. A rate lock strategy matters more here than on a smaller loan simply because of the dollar amounts involved.',
      },
      {
        type: 'paragraph',
        text: 'Our advisors work alongside a small group of private banking partners who specialize in jumbo underwriting for exactly this reason — ask your agent for an introduction before you begin touring.',
      },
    ],
  },
  {
    id: 5,
    title: "The Investor's Checklist Before Closing",
    excerpt:
      'Cap rates, comps, and contingencies — the due-diligence checklist our investment clients run through before every offer.',
    category: 'Investment',
    date: 'May 27, 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
    author: authors.marcus,
    content: [
      {
        type: 'paragraph',
        text: 'Every investment client we work with runs through the same due-diligence framework before an offer goes out — regardless of asset class. Here is the checklist, condensed.',
      },
      { type: 'heading', text: 'Underwrite the cap rate conservatively' },
      {
        type: 'paragraph',
        text: "Run the numbers using trailing twelve-month actuals, not the seller's pro forma. Stress-test against a vacancy rate at least two points higher than current market average before you commit to a purchase price.",
      },
      { type: 'heading', text: 'Pull true comparables, not just nearby listings' },
      {
        type: 'paragraph',
        text: 'A comparable needs to match on asset class, condition, and lease structure — not just proximity. We weight closed sales from the trailing six months far more heavily than active listings, which reflect asking prices, not achieved ones.',
      },
      { type: 'heading', text: 'Build contingencies around what you actually cannot verify pre-close' },
      {
        type: 'paragraph',
        text: 'Financing and inspection contingencies are standard, but investment buyers should also consider contingencies tied to estoppel certificates, existing lease review, and any pending zoning or environmental matters specific to the asset.',
      },
      {
        type: 'quote',
        text: 'The deals that go wrong are rarely the ones that were priced wrong. They are the ones where nobody read the leases.',
      },
      { type: 'heading', text: 'Have your exit strategy before you have the keys' },
      {
        type: 'paragraph',
        text: 'Hold period, refinance timeline, and target disposition value should all be modeled before closing — not decided reactively three years in.',
      },
    ],
  },
  {
    id: 6,
    title: 'What Every Contract Clause Actually Means',
    excerpt:
      'Contingency, escrow, easement — we break down the dense legal language buyers see most often in a purchase agreement.',
    category: 'Legal',
    date: 'May 11, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
    author: authors.james,
    content: [
      {
        type: 'paragraph',
        text: 'A luxury purchase agreement can run 40 pages or more. Most of it is boilerplate — but a handful of clauses genuinely change your exposure, and buyers should be able to explain them in plain language before signing.',
      },
      { type: 'heading', text: 'Contingency clauses' },
      {
        type: 'paragraph',
        text: 'A contingency is a condition that must be satisfied for the contract to remain binding — financing, inspection, and appraisal being the three most common. Each one you waive removes a legal off-ramp if something goes wrong later in the process.',
      },
      { type: 'heading', text: 'Escrow and earnest money' },
      {
        type: 'paragraph',
        text: 'Earnest money is a good-faith deposit held by a neutral third party — the escrow agent — until closing. It is credited toward your purchase price at close, or returned per the terms of the contract if a contingency is invoked correctly.',
      },
      { type: 'heading', text: 'Easements' },
      {
        type: 'paragraph',
        text: 'An easement grants someone other than the owner a legal right to use part of the property — a shared driveway or a utility line, for example. Always review the title report for existing easements before closing; they run with the land, not the seller.',
      },
      { type: 'heading', text: 'Liquidated damages clauses' },
      {
        type: 'paragraph',
        text: 'This clause caps what a seller can recover if a buyer defaults — typically limited to the earnest money deposit. Without it, a defaulting buyer could theoretically be pursued for the seller\'s full actual damages.',
      },
      {
        type: 'paragraph',
        text: 'None of this replaces independent legal counsel, and we always recommend a real estate attorney review any agreement before signature — but understanding these terms going in makes that conversation far more productive.',
      },
    ],
  },
  {
    id: 7,
    title: 'Remote Closings: How Digital Deals Work Now',
    excerpt:
      'Notarization, e-signatures, and wire verification — a look at how a luxury closing can now happen from anywhere.',
    category: 'Market Insights',
    date: 'Apr 30, 2026',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    author: authors.charlotte,
    content: [
      {
        type: 'paragraph',
        text: 'A growing share of our international clients now close on U.S. properties without ever setting foot in the country during the transaction. Here is how a fully remote closing actually works.',
      },
      { type: 'heading', text: 'Remote online notarization' },
      {
        type: 'paragraph',
        text: 'In states that permit it, a commissioned online notary verifies your identity over live video — usually via a government ID check plus knowledge-based verification questions — before witnessing your signature electronically.',
      },
      { type: 'heading', text: 'E-signatures on the closing package' },
      {
        type: 'paragraph',
        text: 'The bulk of the closing package can be signed electronically ahead of the funding date, with only the documents that legally require wet-ink or notarized signatures handled through the remote notary session.',
      },
      { type: 'heading', text: 'Wire verification, twice' },
      {
        type: 'paragraph',
        text: 'Wire fraud targeting closings has increased industry-wide, so we verify wiring instructions twice through independently sourced contact information — never by replying to the email that contains them — before any funds move.',
      },
      {
        type: 'quote',
        text: 'The technology makes a remote closing possible. Verification discipline is what makes it safe.',
      },
      {
        type: 'paragraph',
        text: 'For buyers purchasing from abroad, we coordinate the entire sequence — title, notary, lender, and attorney — so that closing day requires nothing more than a laptop and a stable internet connection.',
      },
    ],
  },
  {
    id: 8,
    title: 'Celebrating Another Record Year',
    excerpt:
      'A look back at our biggest milestones, from new city offices to the clients who made it all possible.',
    category: 'Company News',
    date: 'Apr 15, 2026',
    readTime: '3 min read',
    image:
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80',
    author: authors.thomas,
    content: [
      {
        type: 'paragraph',
        text: 'Every spring we take a moment to look back at the year behind us, and this one was our biggest yet — in transaction volume, in team growth, and in the markets we now call home.',
      },
      { type: 'heading', text: 'Three new city offices' },
      {
        type: 'paragraph',
        text: 'We opened advisory offices in two new metro markets this year, bringing our total footprint to twelve cities and extending our reach into several fast-growing luxury corridors our clients had been asking about.',
      },
      { type: 'heading', text: 'A record year in transaction volume' },
      {
        type: 'paragraph',
        text: 'Our advisors closed more transactions this year than in any prior year in the firm\'s history — a milestone we credit almost entirely to referrals from past clients, which now account for the majority of new engagements.',
      },
      { type: 'heading', text: 'Investing further in our advisory team' },
      {
        type: 'paragraph',
        text: 'We welcomed several new senior advisors this year, each bringing specialized expertise — from international transactions to complex commercial investment structures — that directly benefits every client we serve.',
      },
      {
        type: 'paragraph',
        text: 'None of this would be possible without the clients who trusted us with what is, for most people, the largest financial decision of their lives. Thank you for another record year — we are already looking ahead to the next one.',
      },
    ],
  },
]
