import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { learningWorlds } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { TiltCard } from '@/components/ui/TiltCard'
import { useReducedMotion } from '@/hooks/useReducedMotion'

function WorldCard({ world, index }: { world: (typeof learningWorlds)[number]; index: number }) {
  const reduced = useReducedMotion()

  return (
    <ScrollReveal delay={index * 0.06} className="h-full">
      <TiltCard intensity={6} className="h-full">
        <motion.a
          href={world.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-full min-h-[380px] flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-[0_8px_40px_-16px_rgba(15,23,42,0.1)] transition-all duration-300 hover:shadow-[0_24px_60px_-20px_rgba(37,99,235,0.2)]"
          whileHover={reduced ? {} : { y: -6 }}
        >
          <div className="relative flex h-48 items-end justify-center overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 pt-8">
            <div
              className="absolute inset-0 opacity-60"
              style={{ background: `radial-gradient(ellipse at 50% 100%, ${world.accentColor}18, transparent 70%)` }}
            />
            <img src={world.image} alt={world.title} className="relative h-36 w-36 object-contain transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          </div>
          <div className="flex flex-1 flex-col p-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: world.accentColor }}>
              {world.subtitle}
            </p>
            <h3 className="font-display mt-2 text-2xl font-bold text-ink">{world.title}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{world.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Explore Path <ArrowUpRight size={16} />
            </span>
          </div>
        </motion.a>
      </TiltCard>
    </ScrollReveal>
  )
}

export function LearningPathsSection() {
  return (
    <section id="paths" className="bg-mesh-subtle section-padding">
      <div className="container-premium">
        <ScrollReveal className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4">Learning Paths</p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Six paths to <span className="text-gradient">mastery</span>
          </h2>
          <p className="mt-5 text-lg text-muted">Choose your direction. Each path takes you from foundations to real-world skill.</p>
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
