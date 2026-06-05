import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { storySteps } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function StorySection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%'])

  return (
    <section id="story" ref={containerRef} className="relative overflow-hidden bg-navy section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(47,124,255,0.08),transparent_60%)]" />

      <div className="container-premium relative">
        <ScrollReveal className="mb-20 text-center">
          <p className="eyebrow mb-4">How It Works</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Learn. Practice. Build. <span className="text-gradient">Grow.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            A complete learning journey designed for the AI generation.
          </p>
        </ScrollReveal>

        <div className="relative mx-auto max-w-4xl">
          {!reduced && (
            <div className="absolute left-8 top-0 hidden h-full w-px bg-white/8 md:left-1/2 md:block md:-translate-x-px">
              <motion.div
                className="w-full bg-gradient-to-b from-blue to-violet"
                style={{ height: lineHeight }}
              />
            </div>
          )}

          <div className="flex flex-col gap-16 md:gap-24">
            {storySteps.map((step, i) => {
              const Icon = step.icon
              const isEven = i % 2 === 0

              return (
                <ScrollReveal key={step.title} delay={i * 0.1}>
                  <div
                    className={`relative flex flex-col gap-6 md:flex-row md:items-center md:gap-12 ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-sm font-semibold tracking-widest text-blue/60">
                        {step.step}
                      </span>
                      <h3 className="font-display mt-2 text-3xl font-bold sm:text-4xl lg:text-5xl">
                        {step.title}
                      </h3>
                      <p className="mt-4 text-lg leading-relaxed text-muted">{step.description}</p>
                    </div>

                    <div className="relative flex shrink-0 justify-center md:w-32">
                      <div className="glass-strong glow-ring flex h-20 w-20 items-center justify-center rounded-2xl">
                        <Icon className="h-9 w-9 text-blue" strokeWidth={1.5} />
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
