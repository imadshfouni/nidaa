import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { learningPaths } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'

export function LearningPaths() {
  const [activeId, setActiveId] = useState(learningPaths[0].id)
  const active = learningPaths.find((p) => p.id === activeId) ?? learningPaths[0]

  return (
    <section id="paths" className="section-padding bg-navy-mid/40">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Learning Paths"
          title="Six learning paths. Which one is yours?"
          description="Choose a path — each one is built for real-world outcomes, not theory alone."
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12">
          <div className="space-y-2">
            {learningPaths.map((path) => {
              const isActive = path.id === activeId
              return (
                <button
                  key={path.id}
                  type="button"
                  onClick={() => setActiveId(path.id)}
                  className={`flex w-full items-center gap-4 rounded-xl border px-4 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-cyan-500/30 bg-cyan-500/10'
                      : 'border-transparent bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/40 to-cyan-500/30 ${
                      isActive ? 'shadow-lg shadow-cyan-500/20' : ''
                    }`}
                  >
                    <path.icon size={22} className="text-cyan-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white">{path.title}</p>
                    <p className={`text-[10px] font-semibold uppercase tracking-wider ${path.tagColor}`}>
                      {path.tag}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35 }}
              className="glass-panel-glow flex flex-col justify-between p-8 sm:p-10"
            >
              <div>
                <div className="mb-6 inline-flex rounded-xl bg-blue-500/15 p-4">
                  <active.icon size={32} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {active.title}
                </h3>
                <p className={`mt-2 text-xs font-semibold uppercase tracking-wider ${active.tagColor}`}>
                  {active.tag}
                </p>
                <p className="mt-4 text-slate-400 leading-relaxed">
                  {active.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {active.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <Button href="#cta" className="mt-8 w-fit">
                Explore Path
                <ArrowRight size={16} />
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
