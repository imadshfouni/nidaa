import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { lazy, Suspense, useRef } from 'react'
import { hero } from '@/data/content'
import { EXPLORE_PATHS_URL, START_LEARNING_URL } from '@/config/site'
import { AppStoreButtons } from '@/components/ui/AppStoreButtons'
import { Button } from '@/components/ui/Button'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const LearningUniverse = lazy(() =>
  import('@/components/three/LearningUniverse').then((m) => ({ default: m.LearningUniverse })),
)

export function HeroSection() {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const visualY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 50])

  return (
    <section ref={ref} id="home" className="relative overflow-hidden bg-mesh pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="container-premium relative z-10 grid items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-14">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/5 px-4 py-2 text-xs font-medium text-muted shadow-[0_0_24px_-8px_rgba(59,130,246,0.5)] backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
            {hero.badge}
          </span>

          <h1 className="font-display text-[2.75rem] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-6xl lg:text-[4.25rem]">
            {hero.headline}
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{hero.subheadline}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button variant="primary" href={START_LEARNING_URL} className="!px-8 !py-4">
              {hero.ctaPrimary}
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" href={EXPLORE_PATHS_URL} className="!px-8 !py-4">
              {hero.ctaSecondary}
            </Button>
          </div>

          <div className="mt-8">
            <AppStoreButtons />
          </div>
        </motion.div>

        <motion.div style={{ y: visualY }} className="relative">
          <div className="card-light relative overflow-hidden p-6 lg:p-10">
            <Suspense fallback={<div className="h-[340px] animate-pulse rounded-2xl bg-ink/5 sm:h-[400px] lg:h-[480px]" />}>
              <LearningUniverse />
            </Suspense>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
