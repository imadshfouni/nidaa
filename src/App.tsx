import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { TrustedStrip } from '@/components/sections/TrustedStrip'
import { JourneySection } from '@/components/sections/JourneySection'
import { LearningPathsSection } from '@/components/sections/LearningPathsSection'
import { PlatformShowcase } from '@/components/sections/PlatformShowcase'
import { AIMentorPreview } from '@/components/sections/AIMentorPreview'
import { ToolsSection } from '@/components/sections/ToolsSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { CertificationSection } from '@/components/sections/CertificationSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrustedStrip />
        <JourneySection />
        <LearningPathsSection />
        <PlatformShowcase />
        <AIMentorPreview />
        <ToolsSection />
        <StatsSection />
        <CertificationSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

export default App
