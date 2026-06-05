import { aiTools } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TiltCard } from '@/components/ui/TiltCard'

export function ToolsSection() {
  return (
    <section className="relative overflow-hidden bg-deep section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_50%,rgba(34,211,238,0.06),transparent_50%)]" />

      <div className="container-premium relative">
        <ScrollReveal className="mb-16 text-center">
          <p className="eyebrow mb-5">Real Tools</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            The AI models you&apos;ll{' '}
            <span className="text-gradient">master</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted">
            Production-quality walkthroughs — not toy demos. The tools professionals bill for.
          </p>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {aiTools.map((tool, i) => (
            <ScrollReveal key={tool.name} delay={i * 0.06}>
              <TiltCard intensity={6}>
                <div className="glass group flex flex-col items-center rounded-2xl p-6 text-center transition-all duration-300 hover:border-blue/30 hover:shadow-[0_0_40px_-12px_rgba(47,124,255,0.35)]">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.05]">
                    <img src={tool.logo} alt={tool.name} className="h-8 w-8 object-contain" loading="lazy" />
                  </div>
                  <p className="font-semibold">{tool.name}</p>
                  <p className="mt-1 text-xs text-muted">{tool.description}</p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
