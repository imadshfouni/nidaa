import { tools } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function ToolsSection() {
  return (
    <section id="tools" className="section-padding bg-navy-mid/40">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Use real tools"
          title="The same tools the pros are billing for"
          description="Not toy projects. Production-quality walkthroughs of the AI tools you'll actually be hired to use — taught in the language you choose."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {tools.map((tool, index) => (
            <ScrollReveal key={tool.name} delay={index * 0.08}>
              <article className="glass-panel group flex h-full flex-col items-center p-6 text-center transition-all duration-300 hover:border-cyan-500/25 hover:shadow-lg hover:shadow-blue-500/10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/5 text-xl font-bold text-white transition-transform group-hover:scale-110">
                  {tool.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-white">{tool.name}</h3>
                <p className={`mt-2 text-[10px] font-semibold uppercase tracking-wider ${tool.color}`}>
                  {tool.category}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
