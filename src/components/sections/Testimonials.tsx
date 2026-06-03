import { Quote } from 'lucide-react'
import { testimonials } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="container-luxury px-5 lg:px-14">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Ambitious Leaders"
          description="Replace with verified client stories when ready — structured for easy updates in content.ts."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <article className="glass-card flex h-full flex-col p-8 lg:p-10">
                <Quote className="text-gold/50" size={36} strokeWidth={1.25} />
                <p className="mt-6 flex-1 text-base leading-[1.75] text-charcoal/85">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-10 border-t border-gold/25 pt-6">
                  <p className="font-semibold text-navy">{t.name}</p>
                  <p className="mt-1 text-sm uppercase tracking-wider text-gold-dark">{t.role}</p>
                </footer>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
