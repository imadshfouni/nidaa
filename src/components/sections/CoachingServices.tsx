import { motion } from 'framer-motion'
import { services } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function CoachingServices() {
  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Coaching"
          title="Services Designed for Your Next Level"
          description="Holistic support across strategy, mindset, leadership, and execution — tailored to where you are and where you are going."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <ScrollReveal key={service.title} delay={index * 0.06}>
                <motion.article
                  className="glass-light flex h-full flex-col p-8 transition-shadow hover:shadow-2xl hover:shadow-navy/[0.06]"
                  whileHover={{ y: -6 }}
                >
                  <div className="mb-5 inline-flex rounded-xl border border-gold/25 bg-gradient-to-br from-gold/15 to-transparent p-3 text-gold-dark">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/70 sm:text-base">
                    {service.description}
                  </p>
                </motion.article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
