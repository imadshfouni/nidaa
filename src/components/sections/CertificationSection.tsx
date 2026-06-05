import { Check } from 'lucide-react'
import { certification } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TiltCard } from '@/components/ui/TiltCard'

export function CertificationSection() {
  return (
    <section id="certification" className="relative overflow-hidden bg-navy section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(47,124,255,0.08),transparent_60%)]" />

      <div className="container-premium relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow mb-3">brAInify Certification</p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {certification.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">{certification.description}</p>

            <ul className="mt-8 space-y-4">
              {certification.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-white/80">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                  {point}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <TiltCard intensity={6}>
              <div className="relative mx-auto max-w-lg">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue/15 to-violet/10 blur-2xl" />
                <div className="glass-strong glow-ring relative overflow-hidden rounded-2xl p-3 sm:p-4">
                  <img
                    src={certification.image}
                    alt={certification.imageAlt}
                    className="w-full rounded-xl object-contain shadow-2xl"
                    loading="lazy"
                    width={600}
                    height={420}
                  />
                  <p className="mt-4 text-center text-xs text-muted">{certification.caption}</p>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
