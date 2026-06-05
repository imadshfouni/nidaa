import { useState } from 'react'
import { ChevronRight, Play } from 'lucide-react'
import { learningPaths } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function PathsSection() {
  const [active, setActive] = useState(0)
  const path = learningPaths[active]

  return (
    <section id="paths" className="relative overflow-hidden bg-deep section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(47,124,255,0.08),transparent_50%)]" />

      <div className="container-premium relative">
        <ScrollReveal className="mb-10 max-w-2xl">
          <p className="eyebrow mb-3 !text-emerald-200/80">Courses & Paths</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Six learning paths. Which one is yours?
          </h2>
          <p className="mt-4 text-muted">
            Each path is a complete career arc — designed to take you from beginner to a real,
            monetizable skill, with project-led learning at every step.
          </p>
        </ScrollReveal>

        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[340px] lg:shrink-0">
            {learningPaths.map((p, i) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(i)}
                className={`flex w-full items-center gap-3 rounded-xl px-4 py-3.5 text-left transition-all duration-200 ${
                  active === i
                    ? 'border-[1.5px] border-blue/50 bg-gradient-to-br from-[rgba(10,40,90,0.95)] to-[rgba(7,25,60,0.95)] shadow-[0_0_20px_rgba(74,158,255,0.12)]'
                    : 'border-[1.5px] border-white/7 bg-gradient-to-br from-[rgba(13,31,64,0.6)] to-[rgba(9,20,40,0.6)]'
                }`}
              >
                <img
                  src={p.image}
                  alt=""
                  className="h-9 w-9 shrink-0 rounded-lg object-cover"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">{p.title}</p>
                  <p
                    className="text-[11px] font-bold uppercase tracking-wider"
                    style={{ color: p.accentColor }}
                  >
                    {p.subtitle}
                  </p>
                </div>
                <ChevronRight
                  className="h-3.5 w-3.5 shrink-0"
                  style={{ color: active === i ? '#4a9eff' : 'rgba(255,255,255,0.35)' }}
                />
              </button>
            ))}
          </div>

          <ScrollReveal className="flex-1">
            <div className="relative min-h-[420px] overflow-hidden rounded-2xl border-[1.5px] border-blue/30 bg-gradient-to-br from-[rgba(7,28,70,0.95)] to-[rgba(5,18,45,0.98)] p-8 shadow-[0_0_40px_rgba(74,158,255,0.08)] sm:p-10">
              <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(ellipse,rgba(0,180,200,0.08)_0%,transparent_70%)] blur-2xl" />

              <div className="relative flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <img
                    src={path.image}
                    alt=""
                    className="h-[52px] w-[52px] rounded-xl border border-blue/30 object-cover"
                  />
                  <p className="text-xs font-bold uppercase tracking-widest text-blue">
                    {path.subtitle} · with {path.educator}
                  </p>
                </div>

                <h3 className="font-display text-2xl font-bold sm:text-3xl">{path.title}</h3>
                <p className="max-w-lg text-base leading-relaxed text-muted">{path.description}</p>

                <div className="flex flex-wrap gap-3">
                  {path.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-2 rounded-full border border-blue/25 bg-blue/[0.06] px-4 py-2 text-[13px] text-white/80"
                    >
                      <svg viewBox="0 0 12 10" className="h-2.5 w-3 shrink-0" fill="none" aria-hidden="true">
                        <path
                          d="M1 5l3.5 3.5L11 1"
                          stroke="#4a9eff"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/6 pt-6">
                  <p className="text-xs tracking-wider text-muted/50">
                    PATH ·{' '}
                    <span className="font-bold text-blue">
                      {String(active + 1).padStart(2, '0')}
                    </span>{' '}
                    / 06
                  </p>
                  <button
                    type="button"
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#3b6fff] to-[#00c2ff] px-5 py-2.5 text-[13px] font-bold text-white shadow-[0_0_20px_rgba(59,111,255,0.35)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <Play className="h-3.5 w-3.5 fill-white" />
                    Explore Path
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
