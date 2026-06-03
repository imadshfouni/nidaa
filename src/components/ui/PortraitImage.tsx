import { motion } from 'framer-motion'
import profileSrc from '@/assets/nidaa-profile.png'

type Props = {
  className?: string
  variant?: 'hero' | 'about'
}

export function PortraitImage({ className = '', variant = 'hero' }: Props) {
  const aspect = variant === 'hero' ? 'aspect-[4/5]' : 'aspect-[3/4]'

  return (
    <motion.div
      className={`relative ${aspect} ${className}`}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-gold/40 via-gold-light/20 to-transparent opacity-70 blur-md"
        aria-hidden
      />
      <div className="portrait-glow relative h-full overflow-hidden rounded-[1.875rem] border-2 border-gold/50 bg-cream">
        <img
          src={profileSrc}
          alt="Nidaa Ryweck — Business Coach, Entrepreneur, and Visionary Leader"
          className="h-full w-full object-cover object-top"
        />
      </div>
    </motion.div>
  )
}
