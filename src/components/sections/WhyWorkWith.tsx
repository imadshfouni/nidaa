import { benefits } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function WhyWorkWith() {
  return (
    <section className="section-padding relative overflow-hidden bg-navy text-cream">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_0%_50%,rgba(201,169,98,0.12),transparent)]" />
      <div className="container-wide relative">
        <SectionHeading
          eyebrow="Why Nidaa"
          title="Why Work With Nidaa"
          description="A partnership built on trust, strategy, and the belief that your next level is already within reach."
          light
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item, index) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={item.title} delay={index * 0.05}>
                <div className="glass-dark h-full rounded-2xl p-8">
                  <Icon className="mb-4 text-gold-light" size={28} strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-semibold text-cream">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/70">{item.description}</p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
