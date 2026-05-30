import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

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
              <p className="mt-4 text-slate-400 leading-relaxed">
                Earn credentials backed by real projects in the Application Lab.
                Show employers and clients what you can build — not just what you
                watched.
              </p>
              <Button href="#cta" className="mt-8">
                Start building your portfolio
              </Button>
            </div>
            <div className="relative flex min-h-[280px] items-center justify-center bg-gradient-to-br from-blue-600/10 to-cyan-500/5 p-8">
              <div className="glass-panel w-full max-w-sm rotate-1 p-6 shadow-2xl">
                <p className="text-xs uppercase tracking-wider text-cyan-400">
                  brAInify Certificate
                </p>
                <p className="mt-4 text-lg font-bold text-white">AI Path — Level 3</p>
                <p className="mt-2 text-sm text-slate-500">
                  Verified project completion · Application Lab
                </p>
                <div className="mt-6 h-1 rounded-full bg-white/10">
                  <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
