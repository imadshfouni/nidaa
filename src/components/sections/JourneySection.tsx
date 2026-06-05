import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { journeySteps } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function JourneySection() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section id="journey" ref={ref} className="bg-page section-padding">
      <div className="container-premium">
        <ScrollReveal className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Your Journey</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Learn → Practice → Build → <span className="text-gradient">Grow</span>
          </h2>
        </ScrollReveal>

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute bottom-4 left-[22px] top-4 w-px bg-border md:left-1/2 md:-translate-x-px">
            {!reduced && (
              <motion.div className="w-full origin-top bg-gradient-to-b from-primary via-cyan to-violet" style={{ height: lineHeight }} />
            )}
          </div>

          <div className="flex flex-col gap-14 md:gap-20">
            {journeySteps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0
              return (
                <ScrollReveal key={step.title} delay={i * 0.08}>
                  <div className={`relative flex flex-col gap-6 md:flex-row md:items-center md:gap-12 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 pl-14 md:pl-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="font-display text-5xl font-bold text-ink/5">{step.step}</span>
                      <h3 className="font-display -mt-3 text-3xl font-bold text-ink">{step.title}</h3>
                      <p className="mt-3 text-muted">{step.description}</p>
                    </div>
                    <div className="absolute left-0 top-0 z-10 md:relative md:left-auto md:top-auto">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white shadow-md md:h-14 md:w-14">
                        <Icon className="h-5 w-5 text-primary md:h-6 md:w-6" />
                      </div>
                    </div>
                    <div className="hidden flex-1 md:block" />
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
