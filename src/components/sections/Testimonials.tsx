import { Quote } from 'lucide-react'
import { testimonials } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-cream">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Testimonials"
          title="Leaders Who Chose Growth"
          description="Replace these sample quotes with real client stories when ready."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <ScrollReveal key={item.name} delay={index * 0.1}>
              <article className="glass-light relative flex h-full flex-col p-8">
                <Quote className="mb-4 text-gold/60" size={32} strokeWidth={1.25} />
                <p className="flex-1 text-base leading-relaxed text-charcoal/80 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-8 border-t border-gold/20 pt-6">
                  <p className="font-semibold text-navy">{item.name}</p>
                  <p className="mt-1 text-sm text-charcoal/60">{item.role}</p>
                </footer>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
