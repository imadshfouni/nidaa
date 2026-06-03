import { motion } from 'framer-motion'
import { useState } from 'react'
import { PORTRAIT_SRC } from '@/config/site'

type PortraitImageProps = {
  className?: string
  imageClassName?: string
  variant?: 'hero' | 'about'
}

export function PortraitImage({
  className = '',
  imageClassName = '',
  variant = 'hero',
}: PortraitImageProps) {
  const [failed, setFailed] = useState(false)

  const frameClass =
    variant === 'hero'
      ? 'aspect-[4/5] w-full max-w-md'
      : 'aspect-[3/4] w-full max-w-sm'

  return (
    <motion.div
      className={`relative ${frameClass} ${className}`}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/30 via-gold-light/20 to-transparent opacity-80 blur-sm"
        aria-hidden
      />
      <div className="gold-ring relative h-full overflow-hidden rounded-[1.75rem] border-2 border-gold/40 bg-cream-dark">
        {!failed ? (
          <img
            src={PORTRAIT_SRC}
            alt="Nidaa — Business Coach and Visionary Leader"
            className={`h-full w-full object-cover object-top ${imageClassName}`}
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-cream-dark via-beige/50 to-gold/20 p-8 text-center">
            <span className="font-display text-6xl font-semibold text-gold-dark/80">N</span>
            <p className="mt-4 text-sm font-medium text-navy/60">
              Add portrait at{' '}
              <code className="rounded bg-white/60 px-1.5 py-0.5 text-xs">public/assets/nidaa-portrait.jpg</code>
            </p>
          </div>
        )}
      </div>
      <motion.div
        className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-2xl border border-gold/30 bg-gold/10 sm:block"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden
      />
    </motion.div>
  )
}
