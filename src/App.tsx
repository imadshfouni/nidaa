import { BackgroundMesh } from '@/components/ui/BackgroundMesh'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { ValueProposition } from '@/components/sections/ValueProposition'
import { SpecialtyExperts } from '@/components/sections/SpecialtyExperts'
import { LearningPaths } from '@/components/sections/LearningPaths'
import { LearningEcosystem } from '@/components/sections/LearningEcosystem'
import { Languages } from '@/components/sections/Languages'
import { ToolsSection } from '@/components/sections/ToolsSection'
import { MobileLoginBar } from '@/components/layout/MobileLoginBar'
import { ProofOfSkill } from '@/components/sections/ProofOfSkill'
import { Stats } from '@/components/sections/Stats'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'

function App() {
  return (
    <>
      <BackgroundMesh />
      <Navbar />
      <main className="pb-20 lg:pb-0">
        <Hero />
        <ValueProposition />
        <SpecialtyExperts />
        <LearningPaths />
        <LearningEcosystem />
        <Languages />
        <ToolsSection />
        <ProofOfSkill />
        <Stats />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileLoginBar />
    </>
  )
}

export default App
