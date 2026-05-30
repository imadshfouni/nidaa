import { motion } from 'framer-motion'

export function ValueProposition() {
  return (
    <section className="section-padding border-y border-white/[0.04] bg-navy-mid/50">
      <div className="container-wide text-center">
        <motion.h2
          className="mx-auto max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          The future of education isn&apos;t just personalized,{' '}
          <span className="text-gradient-accent">it&apos;s personal.</span>
        </motion.h2>
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          Meet brAInify — your AI-powered companion that learns how you learn,
          then helps you build in the real world.
        </motion.p>
      </div>
    </section>
  )
}
