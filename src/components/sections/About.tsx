import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { PortraitImage } from '@/components/ui/PortraitImage'
import { aboutParagraphs, aboutRoles } from '@/data/content'

export function About() {
  return (
    <section id="about" className="section-padding relative bg-cream">
      <div className="container-wide">
        <SectionHeading
          eyebrow="About Nidaa"
          title="Guiding Leaders to Grow With Purpose"
          description="A business coach, entrepreneur, and mentor committed to clarity, confidence, and strategic transformation."
          align="left"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <PortraitImage variant="about" className="mx-auto lg:mx-0" />
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {aboutRoles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full border border-gold/35 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold-dark"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {aboutParagraphs.map((paragraph, i) => (
              <ScrollReveal key={paragraph.slice(0, 24)} delay={0.15 + i * 0.08}>
                <p className="text-base leading-relaxed text-charcoal/80 sm:text-lg">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
