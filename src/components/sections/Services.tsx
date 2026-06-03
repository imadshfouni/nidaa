import { motion } from 'framer-motion'
import { services } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function Services() {
  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container-luxury px-5 lg:px-14">
        <SectionHeading
          eyebrow="Services"
          title="Coaching for Leaders Who Think Bigger"
          description="Premium support across strategy, mindset, leadership, and execution — tailored to your season and ambitions."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <ScrollReveal key={s.title} delay={i * 0.06}>
                <motion.article
                  className="group glass-card flex h-full flex-col p-8 lg:p-9"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 to-transparent text-gold-dark transition group-hover:border-gold/50">
                    <Icon size={26} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-navy">{s.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                    {s.description}
                  </p>
                  <div className="mt-8 h-px w-12 bg-gold/40 transition-all group-hover:w-full" />
                </motion.article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
