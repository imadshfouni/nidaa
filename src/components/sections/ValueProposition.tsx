import { valueProps, trustedStrip } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function ValueProposition() {
  const partners = [...trustedStrip.partners, ...trustedStrip.partners]

  return (
    <section className="bg-page section-padding">
      <div className="container-premium">
        <ScrollReveal className="mb-16 text-center">
          <p className="eyebrow mb-4">Why brAInify</p>
          <h2 className="font-display mx-auto max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            A guided ecosystem — not another course library
          </h2>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {valueProps.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="card-light h-full p-8 transition-shadow duration-300 hover:shadow-[0_16px_48px_-16px_rgba(37,99,235,0.15)]">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-lg font-bold text-primary">
                  {i + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-12">
          <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted">
            {trustedStrip.label}
          </p>
          <div
            className="overflow-hidden"
            style={{ maskImage: 'linear-gradient(90deg, transparent, black 10%, black 90%, transparent)' }}
          >
            <div className="flex w-max animate-marquee gap-12">
              {partners.map((name, i) => (
                <span key={`${name}-${i}`} className="shrink-0 text-sm font-semibold text-ink/20">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
