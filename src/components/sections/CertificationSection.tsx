import { Check } from 'lucide-react'
import { certification } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function CertificationSection() {
  return (
    <section id="certification" className="relative overflow-hidden bg-navy section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(47,124,255,0.08),transparent_60%)]" />

      <div className="container-premium relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <p className="eyebrow mb-3 !text-emerald-200/80">brAInify Certification</p>
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
            <div className="glass-strong relative mx-auto max-w-md overflow-hidden rounded-2xl p-8 text-center">
              <div className="absolute inset-0 bg-gradient-to-br from-blue/10 to-violet/5" />
              <div className="relative">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-blue/30 bg-blue/10">
                  <svg viewBox="0 0 24 24" className="h-10 w-10 text-blue" fill="none" aria-hidden="true">
                    <path
                      d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6L12 2z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                      fill="rgba(74,158,255,0.1)"
                    />
                  </svg>
                </div>
                <p className="font-display text-xl font-bold">brAInify Certified</p>
                <p className="mt-2 text-sm text-muted">
                  Sample certificate · Issued on real project completion
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
