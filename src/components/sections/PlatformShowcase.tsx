import { platformFeatures } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function PlatformShowcase() {
  return (
    <section id="platform" className="bg-mesh-subtle section-padding">
      <div className="container-premium">
        <ScrollReveal className="mb-16 text-center">
          <p className="eyebrow mb-4">Platform</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Built to help you <span className="text-gradient">finish</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            A premium learning experience — project-led lessons, progress tracking, and an AI mentor in one place.
          </p>
        </ScrollReveal>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {platformFeatures.map((f, i) => (
                <div key={f.title} className="card-light p-6">
                  <span className="text-xs font-bold text-primary">0{i + 1}</span>
                  <h3 className="font-display mt-2 text-lg font-bold text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted">{f.description}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="relative flex justify-center gap-6">
              <div className="card-elevated overflow-hidden p-2">
                <img src="/phone-app-img/chapterCircles.png" alt="brAInify progress view" className="w-[200px] sm:w-[220px]" loading="lazy" />
              </div>
              <div className="card-elevated -mt-8 overflow-hidden p-2">
                <img src="/phone-app-img/AiMentor2.png" alt="brAInify AI Mentor view" className="w-[200px] sm:w-[220px]" loading="lazy" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
