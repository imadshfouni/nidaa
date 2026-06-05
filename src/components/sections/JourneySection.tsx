import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { journeySteps } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useReducedMotion } from '@/hooks/useReducedMotion'

function StepIcon({ icon: Icon }: { icon: (typeof journeySteps)[number]['icon'] }) {
  return (
    <div className="glow-ring flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-deep backdrop-blur-xl sm:h-14 sm:w-14 md:h-20 md:w-20 md:rounded-2xl">
      <Icon className="h-5 w-5 text-blue sm:h-6 sm:w-6 md:h-10 md:w-10" strokeWidth={1.25} />
    </div>
  )
}

export function JourneySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section id="journey" ref={containerRef} className="relative overflow-hidden bg-deep section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(47,124,255,0.06),transparent_60%)]" />

      <div className="container-premium relative">
        <ScrollReveal className="mb-16 max-w-3xl md:mb-24">
          <p className="eyebrow mb-5">The Journey</p>
          <h2 className="font-display text-3xl font-bold tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            From curiosity to <span className="text-gradient">mastery</span>
          </h2>
          <p className="mt-6 text-base text-muted sm:text-lg">
            A transformation designed for the AI generation — not another content library.
          </p>
        </ScrollReveal>

        {/* Mobile timeline — left-aligned vertical line */}
        <div className="relative mx-auto max-w-lg md:hidden">
          <div className="absolute bottom-6 left-[22px] top-2 w-px bg-white/[0.08]">
            {!reduced && (
              <motion.div
                className="w-full origin-top bg-gradient-to-b from-blue via-violet to-cyan"
                style={{ height: lineHeight }}
              />
            )}
          </div>

          <div className="flex flex-col gap-14">
            {journeySteps.map((step, i) => {
              const Icon = step.icon
              return (
                <ScrollReveal key={step.title} delay={i * 0.08}>
                  <div className="relative flex gap-5 pl-14">
                    <div className="absolute left-0 top-0 z-10">
                      <StepIcon icon={Icon} />
                    </div>
                    <div className="min-w-0 pt-1">
                      <span className="font-display text-4xl font-bold text-white/[0.06]">
                        {step.step}
                      </span>
                      <h3 className="font-display -mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-muted">{step.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>

        {/* Desktop timeline — center line, alternating layout */}
        <div className="relative mx-auto hidden max-w-4xl md:block">
          {!reduced && (
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-px bg-white/[0.06]">
              <motion.div
                className="w-full origin-top bg-gradient-to-b from-blue via-violet to-cyan"
                style={{ height: lineHeight, boxShadow: '0 0 20px rgba(47,124,255,0.4)' }}
              />
            </div>
          )}

          <div className="flex flex-col gap-32">
            {journeySteps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0

              return (
                <ScrollReveal key={step.title} delay={i * 0.1}>
                  <div
                    className={`relative flex items-center gap-16 ${
                      isEven ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${isEven ? 'text-right' : 'text-left'}`}>
                      <span className="font-display text-7xl font-bold text-white/[0.06]">
                        {step.step}
                      </span>
                      <h3 className="font-display -mt-4 text-5xl font-bold tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-5 text-lg leading-relaxed text-muted">{step.description}</p>
                    </div>

                    <div className="relative z-10 flex w-24 shrink-0 justify-center">
                      <StepIcon icon={Icon} />
                    </div>

                    <div className="flex-1" />
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
