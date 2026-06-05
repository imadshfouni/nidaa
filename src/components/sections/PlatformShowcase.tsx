import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { MouseEvent } from 'react'
import {
  Award,
  BookOpen,
  Bot,
  FolderKanban,
  TrendingUp,
  Video,
} from 'lucide-react'
import { dashboardItems } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const icons = [BookOpen, Bot, TrendingUp, FolderKanban, Award, Video]

export function PlatformShowcase() {
  const reduced = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 18 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 18 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-6, 6])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduced) return
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const resetMouse = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section id="platform" className="relative overflow-hidden bg-deep section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(47,124,255,0.08),transparent_65%)]" />

      <div className="container-premium relative">
        <ScrollReveal className="mb-20 text-center">
          <p className="eyebrow mb-5">Platform</p>
          <h2 className="font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            Your command{' '}
            <span className="text-gradient">center</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            A premium SaaS dashboard — built for learners who finish.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="relative mx-auto max-w-5xl"
            onMouseMove={handleMouseMove}
            onMouseLeave={resetMouse}
            style={{ perspective: 1400 }}
          >
            <motion.div
              className="relative"
              style={reduced ? {} : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
              animate={reduced ? {} : { y: [0, -10, 0] }}
              transition={reduced ? {} : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-[1px] shadow-[0_40px_100px_-30px_rgba(47,124,255,0.4)]">
                <div className="relative overflow-hidden rounded-[23px] bg-void/95 p-6 backdrop-blur-2xl sm:p-10">
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue/5 via-transparent to-violet/5"
                    aria-hidden
                  />
                  <div className="relative mb-8 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/70" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                    <div className="h-3 w-3 rounded-full bg-green-500/70" />
                    <span className="ml-4 text-xs font-medium tracking-wide text-muted">
                      brAInify Dashboard
                    </span>
                  </div>

                  <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {dashboardItems.map((item, i) => {
                      const Icon = icons[i]
                      return (
                        <div
                          key={item.label}
                          className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition-colors hover:border-blue/25 hover:bg-white/[0.05]"
                        >
                          <div className="mb-3 flex items-center gap-2.5">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue/10">
                              <Icon className="h-4 w-4 text-blue" />
                            </div>
                            <span className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                              {item.label}
                            </span>
                          </div>
                          <p className="font-display text-lg font-semibold">{item.value}</p>
                          {'progress' in item && item.progress !== undefined && (
                            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/8">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-blue via-cyan to-violet"
                                style={{ width: `${item.progress}%` }}
                              />
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div
                className="pointer-events-none absolute -inset-4 -z-10 rounded-[40px] opacity-60 blur-3xl"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(47,124,255,0.2), rgba(139,92,246,0.15), rgba(34,211,238,0.1))',
                }}
                aria-hidden
              />
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
