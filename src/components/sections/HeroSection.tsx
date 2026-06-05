import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useRef } from 'react'
import { hero } from '@/data/content'
import { EXPLORE_PATHS_URL, START_LEARNING_URL } from '@/config/site'
import { AppStoreButtons } from '@/components/ui/AppStoreButtons'
import { Button } from '@/components/ui/Button'
import { BackgroundGlow } from '@/components/ui/BackgroundGlow'
import { HeroPhones } from '@/components/ui/HeroPhones'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HeroSection() {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const phonesY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 60])
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 30])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduced ? 1 : 0.4])

  return (
    <section
      ref={ref}
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-cinematic"
    >
      <div className="bg-grid-fine absolute inset-0 opacity-50" />
      <BackgroundGlow />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent" />

      <div className="container-premium relative z-10 grid items-center gap-12 px-5 pt-28 pb-20 lg:grid-cols-2 lg:gap-16 lg:px-14 lg:pt-32">
        <motion.div style={{ y: textY, opacity }} className="max-w-2xl">
          <motion.span
            className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-muted backdrop-blur-md"
            initial={reduced ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue shadow-[0_0_10px_#2F7CFF]" />
            {hero.badge}
          </motion.span>

          <motion.h1
            className="font-display text-[2.75rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.25rem] xl:text-[4.75rem]"
            initial={reduced ? {} : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-gradient-hero">{hero.headline[0]}</span>
            <br />
            <span className="text-gradient">{hero.headline[1]}</span>
          </motion.h1>

          <motion.p
            className="mt-8 max-w-lg text-lg leading-relaxed text-muted sm:text-xl"
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            <Button variant="primary" href={START_LEARNING_URL} className="!px-8 !py-4 !text-base">
              {hero.ctaPrimary}
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" href={EXPLORE_PATHS_URL} className="!px-8 !py-4 !text-base">
              {hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.div
            className="mt-8"
            initial={reduced ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted">
              Download the app · Free to start
            </p>
            <AppStoreButtons />
          </motion.div>
        </motion.div>

        <motion.div style={{ y: phonesY }} className="relative flex justify-center lg:justify-end">
          <HeroPhones />
        </motion.div>
      </div>
    </section>
  )
}
