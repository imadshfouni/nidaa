import { ArrowRight } from 'lucide-react'
import { finalCta } from '@/data/content'
import { BOOK_SESSION_URL } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function FinalCTA() {
  return (
    <section className="section-padding bg-navy py-28">
      <div className="container-luxury px-5 text-center lg:px-14">
        <ScrollReveal>
          <p className="eyebrow mb-4 text-gold-light">Your Next Chapter</p>
          <h2 className="font-display mx-auto max-w-3xl text-3xl font-semibold text-ivory sm:text-4xl lg:text-5xl">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ivory/70">
            {finalCta.text}
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="secondary" href={BOOK_SESSION_URL}>
              {finalCta.primary}
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="outline"
              href="#contact"
              className="!border-ivory/30 !text-ivory hover:!border-gold"
            >
              {finalCta.secondary}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
