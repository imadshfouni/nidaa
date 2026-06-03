import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { ctaSection } from '@/data/content'
import { BOOK_SESSION_URL } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function FinalCTA() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <motion.div
            className="relative overflow-hidden rounded-3xl bg-navy px-8 py-16 text-center sm:px-12 sm:py-20"
            whileInView={{ opacity: 1 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(201,169,98,0.25),transparent_55%)]" />
            <div className="relative">
              <p className="eyebrow mb-4 text-gold-light">Take the Next Step</p>
              <h2 className="font-display mx-auto max-w-2xl text-3xl font-semibold text-cream sm:text-4xl">
                {ctaSection.headline}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
                {ctaSection.text}
              </p>
              <div className="mt-10">
                <Button variant="secondary" href={BOOK_SESSION_URL}>
                  {ctaSection.button}
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
