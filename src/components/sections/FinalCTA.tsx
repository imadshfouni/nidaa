import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { finalCta } from '@/data/content'
import { EXPLORE_PATHS_URL, START_LEARNING_URL } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function FinalCTA() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden bg-deep section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(47,124,255,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_30%_at_80%_20%,rgba(139,92,246,0.1),transparent_50%)]" />

      {!reduced && (
        <motion.div
          className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue/5 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}

      <div className="container-premium relative">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">{finalCta.subtext}</p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" href={START_LEARNING_URL}>
              {finalCta.ctaPrimary}
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" href={EXPLORE_PATHS_URL}>
              {finalCta.ctaSecondary}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
