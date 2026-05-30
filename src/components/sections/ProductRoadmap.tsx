import { roadmap } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function ProductRoadmap() {
  return (
    <section id="roadmap" className="section-padding bg-navy-mid/40">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Coming soon"
          title="Product Roadmap"
          description="We're building the future of AI education — here's what's ahead."
        />

        <div className="relative">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {roadmap.map((item, index) => (
              <ScrollReveal key={item.quarter} delay={index * 0.1}>
                <article className="relative text-center lg:text-left">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-lg font-bold text-cyan-300 lg:mx-0">
                    {item.quarter}
                  </div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.description}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
