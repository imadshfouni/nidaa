import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  variants?: Variants
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variants = defaultVariants,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
