import { ArrowRight } from 'lucide-react'
import { finalCta } from '@/data/content'
import { EXPLORE_PATHS_URL, START_LEARNING_URL } from '@/config/site'
import { AppStoreButtons } from '@/components/ui/AppStoreButtons'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function CTASection() {
  return (
    <section className="relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-cyan/5 to-violet/8 animate-gradient" />
      <div className="container-premium relative">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">{finalCta.subtext}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" href={START_LEARNING_URL} className="!px-10 !py-4">
              {finalCta.ctaPrimary}
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" href={EXPLORE_PATHS_URL} className="!px-10 !py-4">
              {finalCta.ctaSecondary}
            </Button>
          </div>
          <AppStoreButtons className="mt-8 justify-center" />
        </ScrollReveal>
      </div>
    </section>
  )
}
