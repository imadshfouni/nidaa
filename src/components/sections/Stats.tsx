import { stats } from '@/data/content'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function Stats() {
  return (
    <section className="border-y border-white/[0.06] bg-navy-mid/60">
      <div className="container-wide section-padding !py-14 sm:!py-16">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 0.1}>
              <div className="text-center">
                <p className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={'decimals' in stat ? stat.decimals : 0}
                  />
                </p>
                <p className="mt-2 text-sm text-slate-500">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
