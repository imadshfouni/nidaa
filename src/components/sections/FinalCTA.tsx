import { motion } from 'framer-motion'
import { AppStoreBadges } from '@/components/ui/AppStoreBadges'
import { Button } from '@/components/ui/Button'

export function FinalCTA() {
  return (
    <section id="cta" className="section-padding">
      <div className="container-wide">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-blue-900/50 via-navy-card to-navy px-8 py-16 text-center sm:px-12 sm:py-20"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-48 w-96 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[80px]" />
          </div>

          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Stop watching.{' '}
              <span className="text-gradient-accent">Start shipping.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Join thousands learning, creating, and building with brAInify.
              Download the app or start on web today.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="#">Start Learning</Button>
              <Button variant="secondary" href="#paths">
                Explore Paths
              </Button>
            </div>

            <div className="mt-10 flex justify-center">
              <AppStoreBadges />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
