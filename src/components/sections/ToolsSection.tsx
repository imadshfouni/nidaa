import { aiTools } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function ToolsSection() {
  return (
    <section className="relative overflow-hidden bg-deep section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_50%,rgba(139,92,246,0.08),transparent_50%)]" />

      <div className="container-premium relative">
        <ScrollReveal className="mb-12 text-center">
          <p className="eyebrow mb-3 !text-emerald-200/80">Use real tools</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The same tools the pros are billing for.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Not toy projects. Production-quality walkthroughs of the AI tools you&apos;ll actually be
            hired to use — taught in the language you choose.
          </p>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {aiTools.map((tool, i) => (
            <ScrollReveal key={tool.name} delay={i * 0.06}>
              <div className="glass-strong group flex flex-col items-center rounded-2xl p-6 text-center transition-all duration-300 hover:border-blue/30 hover:shadow-[0_0_30px_-8px_rgba(47,124,255,0.3)]">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.06]">
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="h-8 w-8 object-contain"
                    loading="lazy"
                  />
                </div>
                <p className="font-semibold text-white">{tool.name}</p>
                <p className="mt-1 text-sm text-muted">{tool.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          + a growing library of tool walkthroughs in every path
        </p>
      </div>
    </section>
  )
}
