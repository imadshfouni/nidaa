import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { learningWorlds } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TiltCard } from '@/components/ui/TiltCard'
import { useReducedMotion } from '@/hooks/useReducedMotion'

function WorldCard({ world, index }: { world: (typeof learningWorlds)[number]; index: number }) {
  const reduced = useReducedMotion()

  return (
    <ScrollReveal delay={index * 0.08} className="h-full">
      <TiltCard intensity={8} className="h-full">
        <motion.a
          href={world.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-full min-h-[420px] cursor-pointer flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:border-blue/30 hover:shadow-[0_24px_80px_-20px_rgba(47,124,255,0.35)]"
          whileHover={reduced ? {} : { y: -4 }}
        >
          <div className="relative h-52 overflow-hidden sm:h-56">
            <div
              className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-60"
              style={{
                background: `radial-gradient(ellipse at 50% 100%, ${world.accentColor}40, transparent 70%)`,
              }}
            />
            <img
              src={world.image}
              alt={world.title}
              className="absolute bottom-0 left-1/2 h-40 w-40 -translate-x-1/2 object-contain transition-transform duration-500 group-hover:scale-110 sm:h-44 sm:w-44"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent" />
          </div>

          <div className="flex flex-1 flex-col p-7 sm:p-8">
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: world.accentColor }}
            >
              {world.subtitle}
            </p>
            <h3 className="font-display mt-2 text-2xl font-bold tracking-tight">{world.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{world.description}</p>

            <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue transition-all group-hover:gap-3">
              Explore Path
              <ArrowUpRight size={16} />
            </span>
          </div>
        </motion.a>
      </TiltCard>
    </ScrollReveal>
  )
}

export function LearningPathsSection() {
  return (
    <section id="paths" className="relative overflow-hidden bg-void section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_20%,rgba(139,92,246,0.08),transparent_50%)]" />

      <div className="container-premium relative">
        <ScrollReveal className="mb-20 max-w-2xl">
          <p className="eyebrow mb-5">Learning Worlds</p>
          <h2 className="font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            Six paths. One{' '}
            <span className="text-gradient">future</span>.
          </h2>
          <p className="mt-6 text-lg text-muted">
            Premium learning worlds — not crowded course cards. Pick your direction and go deep.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {learningWorlds.map((world, i) => (
            <WorldCard key={world.id} world={world} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
