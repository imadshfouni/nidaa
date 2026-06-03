import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'instagram'

type ButtonProps = {
  variant?: Variant
  children: ReactNode
  href?: string
  className?: string
  onClick?: () => void
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const styles: Record<Variant, string> = {
  primary:
    'bg-navy text-ivory border border-navy shadow-[0_12px_32px_-8px_rgba(12,18,34,0.45)] hover:bg-navy-mid',
  secondary:
    'bg-gold text-navy border border-gold-dark/20 shadow-[0_12px_32px_-8px_rgba(196,165,116,0.5)] hover:bg-gold-dark hover:text-ivory',
  outline:
    'bg-transparent text-navy border-2 border-navy/15 hover:border-gold hover:bg-gold/5',
  ghost: 'text-muted hover:text-navy hover:bg-navy/5',
  instagram:
    'bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#bc1888] text-white border-0 shadow-md hover:brightness-105',
}

export function Button({
  variant = 'primary',
  children,
  href,
  className = '',
  onClick,
  external = false,
  type = 'button',
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300'
  const classes = `${base} ${styles[variant]} ${className}`

  const isExternal =
    external || (href?.startsWith('http') && !href.startsWith('#'))

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type={type} className={classes} onClick={onClick} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.button>
  )
}
