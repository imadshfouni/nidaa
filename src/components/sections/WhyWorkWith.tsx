import { whyWorkWith } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function WhyWorkWith() {
  return (
    <section className="section-padding relative overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_100%_0%,rgba(196,165,116,0.15),transparent)]" />
      <div className="container-luxury relative px-5 lg:px-14">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-end">
          <SectionHeading
            align="left"
            light
            eyebrow="Why Nidaa Ryweck"
            title="Authority Built on Real Experience"
            description="A coaching partnership rooted in strategy, mindset, and the discipline it takes to build something meaningful."
            className="mb-0 lg:sticky lg:top-32"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {whyWorkWith.map((item, i) => {
              const Icon = item.icon
              return (
                <ScrollReveal key={item.title} delay={i * 0.06}>
                  <div className="glass-card-dark group h-full p-7 transition hover:border-gold/25">
                    <span className="font-display text-3xl font-bold text-gold/30">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <Icon className="mt-4 text-gold-light" size={24} strokeWidth={1.5} />
                    <h3 className="mt-4 font-display text-lg font-semibold text-ivory">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/65">{item.description}</p>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
