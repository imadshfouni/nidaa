import { languages } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function Languages() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <div className="glass-panel-glow px-6 py-10 text-center sm:px-12 sm:py-14">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Available in
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-white/15 bg-navy-card px-5 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:border-cyan-500/30 hover:text-white"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
