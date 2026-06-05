import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { hero } from '@/data/content'
import { AppStoreButtons } from '@/components/ui/AppStoreButtons'
import { HeroPhones } from '@/components/ui/HeroPhones'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Hero() {
  const reduced = useReducedMotion()

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-deep pt-24 pb-16 lg:pt-28"
    >
      <div className="bg-radial-hero absolute inset-0" />
      <div className="bg-grid absolute inset-0 opacity-40" />

      <div className="container-premium relative z-10 flex flex-1 items-center px-5 lg:px-14">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="text-center md:text-left"
            initial={reduced ? { opacity: 1 } : { opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
              {hero.badge}
            </span>

            <h1 className="font-display max-w-xl text-[2.4rem] font-bold leading-[1.02] tracking-tight sm:text-5xl lg:text-[3.75rem]">
              {hero.headline}{' '}
              <span className="text-gradient">{hero.headlineAccent}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg md:mx-0">
              {hero.subheadline}
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 md:items-start">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
                {hero.downloadLabel}
              </p>
              <AppStoreButtons className="justify-center md:justify-start" />
            </div>

            <a
              href={hero.ecosystemHref}
              className="mt-5 inline-block text-sm text-blue transition-opacity hover:opacity-80"
            >
              {hero.ecosystemLink}
            </a>

            <div className="mt-8 flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-start">
              {hero.highlights.map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-xs text-muted">
                  <Check className="h-3 w-3 shrink-0 text-blue" strokeWidth={2.5} />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroPhones />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
