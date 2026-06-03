import { motion } from 'framer-motion'
import { about } from '@/data/content'
import { BRAND_TITLE } from '@/config/site'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PortraitImage } from '@/components/ui/PortraitImage'

export function About() {
  return (
    <section id="about" className="section-padding bg-ivory">
      <div className="container-luxury">
        <SectionHeading
          align="left"
          eyebrow="About"
          title={about.title}
          description={BRAND_TITLE}
        />

        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-5">
            <PortraitImage variant="about" />
          </ScrollReveal>

          <div className="lg:col-span-7">
            {about.paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <p className="mb-6 text-base leading-[1.8] text-muted last:mb-0 sm:text-lg">{p}</p>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.25}>
              <blockquote className="mt-12 border-l-2 border-gold pl-8">
                <p className="font-display text-2xl font-medium italic leading-snug text-navy sm:text-3xl">
                  &ldquo;{about.quote}&rdquo;
                </p>
                <cite className="mt-4 block text-sm font-semibold not-italic text-gold-dark">
                  — Nidaa Ryweck
                </cite>
              </blockquote>
            </ScrollReveal>

            <div className="mt-14 grid gap-5 sm:grid-cols-3">
              {about.highlights.map((h, i) => (
                <ScrollReveal key={h.title} delay={0.1 + i * 0.08}>
                  <motion.div
                    className="glass-card h-full p-6"
                    whileHover={{ y: -4 }}
                  >
                    <h3 className="font-display text-lg font-semibold text-navy">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{h.description}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
