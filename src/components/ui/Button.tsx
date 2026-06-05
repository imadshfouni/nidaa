import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useMagnetic } from '@/hooks/useMagnetic'
import { useReducedMotion } from '@/hooks/useReducedMotion'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'

type ButtonProps = {
  variant?: Variant
  children: ReactNode
  href?: string
  className?: string
  onClick?: () => void
  external?: boolean
  type?: 'button' | 'submit' | 'reset'
  magnetic?: boolean
}

const styles: Record<Variant, string> = {
  primary:
    'bg-primary text-white shadow-[0_8px_30px_-8px_rgba(37,99,235,0.45)] hover:bg-primary-light hover:shadow-[0_12px_36px_-8px_rgba(37,99,235,0.5)]',
  secondary:
    'bg-white text-ink border border-border shadow-sm hover:border-primary/20 hover:shadow-md',
  outline:
    'bg-transparent text-ink border border-border hover:border-primary/30 hover:bg-primary/5',
  ghost: 'text-muted hover:text-ink hover:bg-ink/5',
}

export function Button({
  variant = 'primary',
  children,
  href,
  className = '',
  onClick,
  external = false,
  type = 'button',
  magnetic = true,
}: ButtonProps) {
  const reduced = useReducedMotion()
  const magneticAnchor = useMagnetic<HTMLAnchorElement>(0.2)
  const magneticButton = useMagnetic<HTMLButtonElement>(0.2)
  const base =
    'inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300'
  const classes = `${base} ${styles[variant]} ${className}`

  const motionProps = reduced ? {} : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } }
  const isExternal = external || (href?.startsWith('http') && !href.startsWith('#'))

  if (href) {
    const magneticProps =
      magnetic && !reduced
        ? {
            ref: magneticAnchor.ref,
            onMouseMove: magneticAnchor.onMouseMove,
            onMouseLeave: magneticAnchor.onMouseLeave,
            style: { transition: 'transform 0.2s ease-out' },
          }
        : {}

    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
        {...magneticProps}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </motion.a>
    )
  }

  const magneticProps =
    magnetic && !reduced
      ? {
          ref: magneticButton.ref,
          onMouseMove: magneticButton.onMouseMove,
          onMouseLeave: magneticButton.onMouseLeave,
          style: { transition: 'transform 0.2s ease-out' },
        }
      : {}

  return (
    <motion.button type={type} className={classes} onClick={onClick} {...motionProps} {...magneticProps}>
      {children}
    </motion.button>
  )
}
