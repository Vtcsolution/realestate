import Hero from '../components/home/Hero'
import FeaturedProperties from '../components/home/FeaturedProperties'
import WhyChooseUs from '../components/home/WhyChooseUs'
import VideoShowcase from '../components/home/VideoShowcase'
import ExploreCategories from '../components/home/ExploreCategories'
import TestimonialsPreview from '../components/home/TestimonialsPreview'
import CtaBanner from '../components/home/CtaBanner'
import { usePageMeta } from '../lib/usePageMeta'

function Home() {
  usePageMeta(
    null,
    "Curated luxury estates, private villas, and investment-grade properties for the world's most discerning buyers.",
  )

  return (
    <>
      <Hero />
      <FeaturedProperties />
      <WhyChooseUs />
      <VideoShowcase />
      <ExploreCategories />
      <TestimonialsPreview />
      <CtaBanner />
    </>
  )
}

export default Home
