import { LuxuryBackground } from '@/components/ui/LuxuryBackground'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { MissionVision } from '@/components/sections/MissionVision'
import { CoachingServices } from '@/components/sections/CoachingServices'
import { WhyWorkWith } from '@/components/sections/WhyWorkWith'
import { SignatureApproach } from '@/components/sections/SignatureApproach'
import { Testimonials } from '@/components/sections/Testimonials'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Contact } from '@/components/sections/Contact'

function App() {
  return (
    <>
      <LuxuryBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <CoachingServices />
        <WhyWorkWith />
        <SignatureApproach />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
