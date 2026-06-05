import { languages } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function MultilingualSection() {
  const marqueeItems = [...languages, ...languages]

  return (
    <section className="relative overflow-hidden bg-deep py-8">
      <div className="container-premium px-5 lg:px-14">
        <ScrollReveal>
          <div className="overflow-hidden rounded-2xl border border-blue/20 bg-gradient-to-br from-[rgba(7,28,70,0.6)] to-[rgba(5,18,50,0.8)] px-6 py-10 shadow-[0_0_40px_rgba(74,158,255,0.05)]">
            <p className="eyebrow mb-4 text-center !text-emerald-200/80">Multilingual by design</p>
            <h2 className="font-display mb-8 text-center text-2xl font-bold sm:text-3xl">
              Available in <span className="text-blue">11 languages</span>, live in 175 countries.
            </h2>

            <div
              className="relative overflow-hidden"
              style={{
                maskImage:
                  'linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)',
              }}
            >
              <div className="animate-marquee flex w-max gap-3">
                {marqueeItems.map((lang, i) => (
                  <span
                    key={`${lang}-${i}`}
                    className="shrink-0 whitespace-nowrap rounded-full border border-blue/30 bg-blue/[0.05] px-5 py-2 text-sm font-medium text-white"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
