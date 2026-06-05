import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { lazy, Suspense } from 'react'
import { hero } from '@/data/content'
import { EXPLORE_PATHS_URL, START_LEARNING_URL } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const HeroScene = lazy(() =>
  import('@/components/three/HeroScene').then((m) => ({ default: m.HeroScene })),
)

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-deep pt-28 pb-20 lg:pt-32"
    >
      <div className="bg-radial-hero absolute inset-0" />
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep" />

      <div className="container-premium relative grid items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-14">
        <motion.div
          initial={reduced ? { opacity: 1 } : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.span
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue backdrop-blur-sm"
            initial={reduced ? {} : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue shadow-[0_0_8px_#2F7CFF]" />
            {hero.badge}
          </motion.span>

          <h1 className="font-display max-w-2xl text-[2.5rem] font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.75rem]">
            <span className="text-gradient-subtle">{hero.headline[0]}</span>
            <br />
            <span className="text-gradient">{hero.headline[1]}</span>
          </h1>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
            {hero.subheadline}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Button variant="primary" href={START_LEARNING_URL}>
              {hero.ctaPrimary}
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" href={EXPLORE_PATHS_URL}>
              {hero.ctaSecondary}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue/10 to-violet/10 blur-3xl" />
          <Suspense
            fallback={
              <div className="flex h-[420px] items-center justify-center sm:h-[480px] lg:h-[560px]">
                <div className="h-48 w-48 animate-pulse rounded-full border border-blue/30 bg-blue/5" />
              </div>
            }
          >
            <HeroScene />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}
