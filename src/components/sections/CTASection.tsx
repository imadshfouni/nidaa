import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { finalCta } from '@/data/content'
import { EXPLORE_PATHS_URL, START_LEARNING_URL } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function CTASection() {
  const reduced = useReducedMotion()

  return (
    <section className="relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-void" />

      {!reduced && (
        <>
          <motion.div
            className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(ellipse, rgba(47,124,255,0.18) 0%, rgba(139,92,246,0.08) 40%, transparent 70%)',
            }}
            animate={{ scale: [1, 1.05, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue/50 to-transparent"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </>
      )}

      <div className="container-premium relative">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl lg:text-7xl">
            {finalCta.headline}
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg text-muted sm:text-xl">{finalCta.subtext}</p>

          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="primary" href={START_LEARNING_URL} className="!px-10 !py-4 !text-base">
              {finalCta.ctaPrimary}
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" href={EXPLORE_PATHS_URL} className="!px-10 !py-4 !text-base">
              {finalCta.ctaSecondary}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
