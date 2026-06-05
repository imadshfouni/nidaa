import { stats } from '@/data/content'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function StatsSection() {
  return (
    <section className="relative overflow-hidden border-y border-white/8 bg-navy section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(47,124,255,0.06),transparent_60%)]" />

      <div className="container-premium relative">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-8">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.08} className="text-center">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="font-display block text-4xl font-bold tracking-tight text-gradient sm:text-5xl lg:text-6xl"
              />
              <p className="mt-2 text-sm font-medium uppercase tracking-wider text-muted">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
