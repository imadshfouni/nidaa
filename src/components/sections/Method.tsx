import { motion } from 'framer-motion'
import { methodSteps } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Method() {
  return (
    <section id="method" className="section-padding bg-ivory">
      <div className="container-luxury px-5 lg:px-14">
        <SectionHeading
          eyebrow="The Nidaa Method"
          title="A Luxury Roadmap to Your Next Level"
          description="Five intentional phases designed to move you from uncertainty to clarity, action, and lasting growth."
        />

        <div className="relative mx-auto max-w-4xl">
          <div
            className="absolute bottom-0 left-8 top-0 hidden w-px bg-gradient-to-b from-gold via-gold/30 to-transparent md:left-1/2 md:block md:-translate-x-px"
            aria-hidden
          />

          {methodSteps.map((step, index) => {
            const Icon = step.icon
            const isRight = index % 2 === 1
            return (
              <ScrollReveal key={step.title} delay={index * 0.1}>
                <div
                  className={`relative mb-12 grid items-center gap-8 md:mb-16 md:grid-cols-2 md:gap-16 ${
                    isRight ? 'md:[&>div:first-child]:order-2' : ''
                  }`}
                >
                  <div className={isRight ? 'md:text-left' : 'md:text-right'}>
                    <span className="text-gradient-gold font-display text-6xl font-bold opacity-90">
                      {step.step}
                    </span>
                    <h3 className="font-display mt-2 text-2xl font-semibold text-navy sm:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted">{step.description}</p>
                  </div>

                  <motion.div
                    className="glass-card flex items-center gap-5 p-6 sm:p-8"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/35 bg-gold/10 text-gold-dark">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
                    <span className="text-xs font-semibold uppercase tracking-widest text-gold-dark">
                      Phase {index + 1}
                    </span>
                  </motion.div>

                  <div
                    className="absolute left-8 top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-gold bg-ivory md:left-1/2 md:block md:-translate-x-1/2"
                    aria-hidden
                  />
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
