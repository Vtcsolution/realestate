import AboutHero from '../components/about/AboutHero'
import Timeline from '../components/about/Timeline'
import MissionVision from '../components/about/MissionVision'
import StatsCounter from '../components/about/StatsCounter'
import { usePageMeta } from '../lib/usePageMeta'

function About() {
  usePageMeta(
    'About Us',
    'For over a decade, VIP Estates has connected discerning buyers with the world’s most extraordinary properties.',
  )

  return (
    <>
      <AboutHero />
      <Timeline />
      <MissionVision />
      <StatsCounter />
    </>
  )
}

export default About
