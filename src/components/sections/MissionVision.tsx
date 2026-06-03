import { motion } from 'framer-motion'
import { Eye, Target } from 'lucide-react'
import { missionVision } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const cards = [
  { key: 'mission', title: 'Mission', text: missionVision.mission, icon: Target },
  { key: 'vision', title: 'Vision', text: missionVision.vision, icon: Eye },
] as const

export function MissionVision() {
  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Purpose"
          title="Mission & Vision"
          description="The foundation behind every coaching relationship and every leader Nidaa serves."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {cards.map(({ key, title, text, icon: Icon }, index) => (
            <ScrollReveal key={key} delay={index * 0.1}>
              <motion.div
                className="glass-light group relative overflow-hidden p-10"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute right-6 top-6 h-20 w-20 rounded-full bg-gold/10 transition-transform group-hover:scale-110" />
                <div className="mb-6 inline-flex rounded-xl border border-gold/30 bg-gold/10 p-3 text-gold-dark">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-navy">{title}</h3>
                <p className="mt-4 text-base leading-relaxed text-charcoal/75">{text}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
