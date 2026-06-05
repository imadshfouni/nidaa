import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { ValueProposition } from '@/components/sections/ValueProposition'
import { LearningPathsSection } from '@/components/sections/LearningPathsSection'
import { AIMentorPreview } from '@/components/sections/AIMentorPreview'
import { PlatformShowcase } from '@/components/sections/PlatformShowcase'
import { JourneySection } from '@/components/sections/JourneySection'
import { StatsSection } from '@/components/sections/StatsSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { CertificationSection } from '@/components/sections/CertificationSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ValueProposition />
        <LearningPathsSection />
        <AIMentorPreview />
        <PlatformShowcase />
        <JourneySection />
        <StatsSection />
        <TestimonialsSection />
        <CertificationSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default App
