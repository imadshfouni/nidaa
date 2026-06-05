import { stats } from '@/data/content'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-deep py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,rgba(47,124,255,0.05),transparent_70%)]" />

      <div className="container-premium relative">
        <div className="grid grid-cols-2 gap-12 lg:grid-cols-5 lg:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08} className="text-center">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="font-display block text-5xl font-bold tracking-[-0.02em] text-gradient sm:text-6xl lg:text-7xl"
              />
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
