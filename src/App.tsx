import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { BrandStatement } from '@/components/sections/BrandStatement'
import { PathsSection } from '@/components/sections/PathsSection'
import { PlatformShowcase } from '@/components/sections/PlatformShowcase'
import { ToolsSection } from '@/components/sections/ToolsSection'
import { MultilingualSection } from '@/components/sections/MultilingualSection'
import { CertificationSection } from '@/components/sections/CertificationSection'
import { StatsSection } from '@/components/sections/StatsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStatement />
        <PathsSection />
        <PlatformShowcase />
        <ToolsSection />
        <MultilingualSection />
        <CertificationSection />
        <StatsSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}

export default App
