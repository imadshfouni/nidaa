import { Check } from 'lucide-react'
import { certification } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function CertificationSection() {
  return (
    <section id="certification" className="bg-white section-padding">
      <div className="container-premium">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <p className="eyebrow mb-3">Certification</p>
            <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">{certification.title}</h2>
            <p className="mt-5 text-muted">{certification.description}</p>
            <ul className="mt-8 space-y-3">
              {certification.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{p}
                </li>
              ))}
            </ul>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="card-elevated overflow-hidden p-4">
              <img src={certification.image} alt={certification.imageAlt} className="w-full rounded-xl" loading="lazy" />
              <p className="mt-3 text-center text-xs text-muted">{certification.caption}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
