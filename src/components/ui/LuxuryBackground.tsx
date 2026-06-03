import { motion } from 'framer-motion'

export function LuxuryBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-cream-dark" />
      <motion.div
        className="absolute -right-32 top-20 h-[28rem] w-[28rem] rounded-full bg-gold/15 blur-3xl"
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.55, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -left-24 bottom-1/4 h-80 w-80 rounded-full bg-beige/60 blur-3xl"
        animate={{ x: [0, 24, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute right-1/4 top-1/3 h-64 w-64 rotate-12 rounded-[3rem] border border-gold/10 bg-gradient-to-br from-white/40 to-transparent" />
      <div className="absolute left-[10%] top-[45%] h-40 w-40 -rotate-6 rounded-full border border-navy/[0.04] bg-white/30" />
    </div>
  )
}
