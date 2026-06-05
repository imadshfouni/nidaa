import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
}

const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
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
  variants,
}: ScrollRevealProps) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={variants ?? (reduced ? reducedVariants : defaultVariants)}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  )
}
