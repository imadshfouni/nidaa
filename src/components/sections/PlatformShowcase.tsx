import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { BookOpen, Bot, Award, FolderKanban, TrendingUp } from 'lucide-react'
import { platformFeatures } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const featureIcons = [BookOpen, Bot, TrendingUp, FolderKanban, Award]

export function PlatformShowcase() {
  const reduced = useReducedMotion()
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 80, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 80, damping: 20 })
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section id="platform" className="relative overflow-hidden bg-navy section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_30%_50%,rgba(47,124,255,0.1),transparent_60%)]" />

      <div className="container-premium relative">
        <ScrollReveal className="mb-16 text-center">
          <p className="eyebrow mb-4">Platform</p>
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Your command <span className="text-gradient">center</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            Everything you need to learn, track progress, and build — in one intelligent dashboard.
          </p>
        </ScrollReveal>

        <ScrollReveal>
          <div
            className="relative mx-auto max-w-4xl"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
          >
            <motion.div
              className="relative"
              style={reduced ? {} : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
              animate={reduced ? {} : { y: [0, -8, 0] }}
              transition={reduced ? {} : { duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="glass-strong glow-blue overflow-hidden rounded-3xl border border-white/12 p-1 shadow-2xl">
                <div className="rounded-[20px] bg-deep/90 p-6 sm:p-8">
                  <div className="mb-6 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500/80" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <div className="h-3 w-3 rounded-full bg-green-500/80" />
                    <span className="ml-4 text-xs font-medium text-muted">brAInify Dashboard</span>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {platformFeatures.map((feature, i) => {
                      const Icon = featureIcons[i]
                      return (
                        <div
                          key={feature.label}
                          className={`glass rounded-2xl p-5 transition-colors hover:border-blue/20 ${
                            i === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                          }`}
                        >
                          <div className="mb-3 flex items-center gap-2">
                            <Icon className="h-4 w-4 text-blue" />
                            <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                              {feature.label}
                            </span>
                          </div>
                          <p className="font-display text-lg font-semibold">{feature.value}</p>
                          {feature.label === 'Progress' && (
                            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/8">
                              <div className="h-full w-[68%] rounded-full bg-gradient-to-r from-blue to-violet" />
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="absolute -inset-8 -z-10 rounded-[40px] bg-gradient-to-br from-blue/20 to-violet/10 blur-3xl" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
