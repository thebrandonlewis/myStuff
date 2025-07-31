import HeroSection from '../components/HeroSection'
import AboutPreview from '../components/AboutPreview'
import ServicesPreview from '../components/ServicesPreview'
import TheUndoingPreview from '../components/TheUndoingPreview'
import SubstackSignup from '../components/SubstackSignup'
import PodcastTeaser from '../components/PodcastTeaser'
import NewsletterSignup from '../components/NewsletterSignup'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <TheUndoingPreview />
      <SubstackSignup />
      <PodcastTeaser />
      <NewsletterSignup />
    </div>
  )
}

export default Home