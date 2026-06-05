import { testimonials } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function TestimonialsSection() {
  return (
    <section className="bg-mesh-subtle section-padding">
      <div className="container-premium">
        <ScrollReveal className="mb-14 text-center">
          <p className="eyebrow mb-4">Testimonials</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Loved by learners</h2>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08}>
              <blockquote className="card-light flex h-full flex-col p-8">
                <p className="flex-1 text-base leading-relaxed text-ink">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 border-t border-border pt-6">
                  <p className="font-semibold text-ink">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
