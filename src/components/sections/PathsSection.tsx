import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { learningPaths } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useReducedMotion } from '@/hooks/useReducedMotion'

function PathCard({
  path,
  index,
}: {
  path: (typeof learningPaths)[number]
  index: number
}) {
  const Icon = path.icon
  const reduced = useReducedMotion()

  return (
    <ScrollReveal delay={index * 0.08}>
      <motion.div
        className="group relative h-full"
        whileHover={reduced ? {} : { y: -6 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: 1000 }}
      >
        <div
          className={`glass-strong relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-3xl p-8 transition-all duration-500 group-hover:border-blue/30 group-hover:shadow-[0_20px_60px_-15px_rgba(47,124,255,0.25)] ${reduced ? '' : 'group-hover:[transform:rotateX(2deg)_rotateY(-2deg)]'}`}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${path.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
          />

          <div className="relative">
            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/12 bg-white/[0.06] transition-all duration-500 group-hover:glow-ring group-hover:border-blue/30">
              <Icon className="h-8 w-8 text-blue transition-colors group-hover:text-blue-glow" strokeWidth={1.5} />
            </div>

            <h3 className="font-display text-2xl font-bold tracking-tight">{path.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-muted">{path.description}</p>

            <div className="mt-auto pt-8">
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue opacity-0 transition-all duration-300 group-hover:opacity-100">
                Explore path
                <ArrowUpRight size={16} />
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  )
}

export function PathsSection() {
  return (
    <section id="paths" className="relative overflow-hidden bg-deep section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(139,92,246,0.08),transparent_50%)]" />

      <div className="container-premium relative">
        <ScrollReveal className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Learning Paths</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Six paths to <span className="text-gradient">mastery</span>
          </h2>
          <p className="mt-5 text-lg text-muted">
            Choose your direction. Each path is designed to take you from fundamentals to real-world impact.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {learningPaths.map((path, i) => (
            <PathCard key={path.title} path={path} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
