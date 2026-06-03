import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { BrandStatement } from '@/components/sections/BrandStatement'
import { Services } from '@/components/sections/Services'
import { Method } from '@/components/sections/Method'
import { WhyWorkWith } from '@/components/sections/WhyWorkWith'
import { Testimonials } from '@/components/sections/Testimonials'
import { InstagramSection } from '@/components/sections/InstagramSection'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { Contact } from '@/components/sections/Contact'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <BrandStatement />
        <Services />
        <Method />
        <WhyWorkWith />
        <Testimonials />
        <InstagramSection />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
