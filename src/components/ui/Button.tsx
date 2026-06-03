import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'instagram'

type ButtonProps = {
  variant?: ButtonVariant
  children: ReactNode
  href?: string
  className?: string
  onClick?: () => void
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-navy text-cream shadow-lg shadow-navy/20 hover:bg-navy-soft border border-navy',
  secondary:
    'bg-gold text-navy shadow-lg shadow-gold/25 hover:bg-gold-dark hover:text-cream border border-gold-dark/30',
  outline:
    'border-2 border-navy/20 bg-transparent text-navy hover:border-gold hover:bg-gold/5',
  ghost: 'text-navy/70 hover:text-navy hover:bg-navy/5',
  instagram:
    'bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white shadow-md hover:opacity-95',
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  href,
  onClick,
  external = false,
  type = 'button',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${variants[variant]} ${className}`

  const isExternal =
    external || (href?.startsWith('http') && !href.startsWith('#'))

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
