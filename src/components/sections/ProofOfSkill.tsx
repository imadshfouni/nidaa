import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import { APP_URL } from '@/config/site'

export function ProofOfSkill() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <div className="glass-panel-glow grid gap-10 overflow-hidden lg:grid-cols-2 lg:items-center lg:gap-16">
            <div className="p-8 sm:p-10 lg:p-12">
              <p className="eyebrow">Certification</p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Proof of skill, not proof of attendance
              </h2>
              <p className="mt-4 leading-relaxed text-slate-400">
                Earn credentials backed by real projects in the Application Lab.
                Show employers and clients what you can build — not just what you
                watched.
              </p>
              <Button href={APP_URL} className="mt-8">
                Start building your portfolio
              </Button>
            </div>
            <div className="relative flex items-center justify-center bg-gradient-to-br from-blue-600/10 to-cyan-500/5 p-6 sm:p-10">
              <img
                src="/images/certificate.svg"
                alt="brAInify certificate of completion"
                className="w-full max-w-md drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
