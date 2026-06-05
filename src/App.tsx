import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { StorySection } from '@/components/sections/StorySection'
import { PathsSection } from '@/components/sections/PathsSection'
import { PlatformShowcase } from '@/components/sections/PlatformShowcase'
import { AIMentorSection } from '@/components/sections/AIMentorSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { FinalCTA } from '@/components/sections/FinalCTA'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StorySection />
        <PathsSection />
        <PlatformShowcase />
        <AIMentorSection />
        <StatsSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
