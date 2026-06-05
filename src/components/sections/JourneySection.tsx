import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { journeySteps } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0.15, 0.85], ['0%', '100%'])

  return (
    <section id="journey" ref={containerRef} className="relative overflow-hidden bg-deep section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(47,124,255,0.06),transparent_60%)]" />

      <div className="container-premium relative">
        <ScrollReveal className="mb-24 max-w-3xl">
          <p className="eyebrow mb-5">The Journey</p>
          <h2 className="font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            From curiosity to{' '}
            <span className="text-gradient">mastery</span>
          </h2>
          <p className="mt-6 text-lg text-muted">
            A transformation designed for the AI generation — not another content library.
          </p>
        </ScrollReveal>

        <div className="relative mx-auto max-w-4xl">
          {!reduced && (
            <div className="absolute left-6 top-0 hidden h-full w-px bg-white/[0.06] md:left-1/2 md:block md:-translate-x-px">
              <motion.div
                className="w-full origin-top bg-gradient-to-b from-blue via-violet to-cyan"
                style={{ height: lineHeight, boxShadow: '0 0 20px rgba(47,124,255,0.4)' }}
              />
            </div>
          )}

          <div className="flex flex-col gap-20 md:gap-32">
            {journeySteps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0

              return (
                <ScrollReveal key={step.title} delay={i * 0.1}>
                  <div
                    className={`relative flex flex-col gap-8 md:flex-row md:items-center md:gap-16 ${
                      isEven ? '' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="font-display text-6xl font-bold text-white/[0.06] sm:text-7xl">
                        {step.step}
                      </span>
                      <h3 className="font-display -mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                        {step.title}
                      </h3>
                      <p className="mt-5 text-lg leading-relaxed text-muted">{step.description}</p>
                    </div>

                    <div className="relative flex shrink-0 justify-center md:w-24">
                      <div className="glow-ring flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl sm:h-24 sm:w-24">
                        <Icon className="h-9 w-9 text-blue sm:h-10 sm:w-10" strokeWidth={1.25} />
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
