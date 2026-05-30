import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'

type ButtonProps = {
  variant?: ButtonVariant
  children: ReactNode
  href?: string
  className?: string
  onClick?: () => void
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/25 hover:shadow-cyan-500/30',
  secondary: 'border border-white/15 bg-white/5 text-white hover:bg-white/10',
  outline:
    'border border-cyan-500/30 bg-transparent text-cyan-300 hover:border-cyan-400/50 hover:bg-cyan-500/10',
  ghost: 'text-slate-400 hover:text-white',
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  href,
  onClick,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type="button"
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
