import { finalCta } from '@/data/content'
import { AppStoreButtons } from '@/components/ui/AppStoreButtons'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-deep section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(47,124,255,0.15),transparent_60%)]" />

      <div className="container-premium relative">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-4 !text-emerald-200/80">{finalCta.eyebrow}</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">{finalCta.subtext}</p>

          <AppStoreButtons className="mt-10 justify-center" />

          <p className="mt-6 text-xs text-muted">{finalCta.footer}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
