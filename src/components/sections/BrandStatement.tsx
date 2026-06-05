import { brandStatement, educators } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function BrandStatement() {
  return (
    <section id="features" className="relative overflow-hidden bg-deep">
      <div className="container-premium px-5 pb-16 lg:px-14 lg:pb-24">
        <ScrollReveal>
          <div className="mb-20 rounded-2xl border border-blue/12 bg-gradient-to-br from-[rgba(4,76,143,0.6)] to-[rgba(15,34,65,0.96)] px-6 py-10 text-center sm:px-12">
            <p className="font-display text-xl font-bold leading-snug text-white sm:text-2xl">
              {brandStatement.headline}
              <br />
              <span className="text-blue">{brandStatement.accent}</span>
            </p>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {brandStatement.subtext}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mb-12 text-center">
          <p className="eyebrow mb-4 !text-emerald-200/80">Meet your educators</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            AI experts. Real specialties.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted">
            Seven educators, each leading the path they&apos;ve actually lived.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-4">
          {educators.map((edu, i) => (
            <ScrollReveal key={edu.name} delay={i * 0.05}>
              <div className="group flex w-[130px] flex-col items-center gap-2.5 rounded-2xl border border-blue/20 bg-gradient-to-br from-[#0d1f40] to-[#091428] px-3.5 py-5 shadow-lg transition-transform duration-300 hover:scale-[1.04] sm:w-[140px]">
                <div className="h-20 w-20 overflow-hidden rounded-full ring-2 ring-blue/30">
                  <img
                    src={edu.image}
                    alt={edu.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-semibold text-white">{edu.name}</p>
                <p className="-mt-1 text-center text-[11px] text-muted">{edu.specialty}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
