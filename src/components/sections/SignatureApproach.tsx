import { motion } from 'framer-motion'
import { approachSteps } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function SignatureApproach() {
  return (
    <section id="approach" className="section-padding bg-cream-dark">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Method"
          title="The Signature Approach"
          description="A proven five-phase framework that moves you from uncertainty to clarity, action, and lasting transformation."
        />

        <div className="relative">
          <div
            className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent md:left-1/2 md:block md:-translate-x-px"
            aria-hidden
          />

          <div className="space-y-8 md:space-y-12">
            {approachSteps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 1
              return (
                <ScrollReveal key={step.title} delay={index * 0.08}>
                  <div
                    className={`relative grid items-center gap-6 md:grid-cols-2 md:gap-12 ${
                      isEven ? 'md:[&>div:first-child]:order-2' : ''
                    }`}
                  >
                    <motion.div
                      className={`${isEven ? 'md:text-left' : 'md:text-right'} flex flex-col`}
                      whileInView={{ opacity: 1, x: 0 }}
                      initial={{ opacity: 0, x: isEven ? 24 : -24 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-gradient-gold font-display text-5xl font-bold opacity-90">
                        {step.step}
                      </span>
                      <h3 className="font-display mt-2 text-2xl font-semibold text-navy">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed text-charcoal/75">
                        {step.description}
                      </p>
                    </motion.div>

                    <motion.div
                      className="glass-light flex items-center gap-5 p-6 sm:p-8"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold-dark">
                        <Icon size={28} strokeWidth={1.5} />
                      </div>
                      <div className="hidden h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent sm:block" />
                      <span className="font-display text-lg font-medium text-navy/80">
                        Phase {index + 1}
                      </span>
                    </motion.div>

                    <div
                      className="absolute left-8 top-1/2 hidden h-4 w-4 -translate-y-1/2 rounded-full border-2 border-gold bg-cream md:left-1/2 md:block md:-translate-x-1/2"
                      aria-hidden
                    />
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
