import { stats } from '@/data/content'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function StatsSection() {
  return (
    <section className="border-y border-border bg-white section-padding">
      <div className="container-premium">
        <ScrollReveal className="mb-14 text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Trusted worldwide</h2>
        </ScrollReveal>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-5">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.06} className="text-center">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                className="font-display block text-5xl font-bold tracking-tight text-gradient sm:text-6xl"
              />
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
