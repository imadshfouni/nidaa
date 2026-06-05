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
    'bg-blue text-white border border-blue/50 shadow-[0_0_40px_-8px_rgba(47,124,255,0.6)] hover:bg-blue-glow hover:shadow-[0_0_50px_-6px_rgba(47,124,255,0.7)]',
  secondary:
    'bg-white/8 text-white border border-white/12 backdrop-blur-sm hover:bg-white/12 hover:border-white/20',
  outline:
    'bg-transparent text-white border border-white/20 hover:border-blue/50 hover:bg-blue/5',
  ghost: 'text-muted hover:text-white hover:bg-white/5',
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
  const magneticAnchor = useMagnetic<HTMLAnchorElement>(0.25)
  const magneticButton = useMagnetic<HTMLButtonElement>(0.25)
  const base =
    'inline-flex items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300'
  const classes = `${base} ${styles[variant]} ${className}`

  const motionProps = reduced
    ? {}
    : {
        whileHover: { scale: 1.02 },
        whileTap: { scale: 0.98 },
      }

  const isExternal =
    external || (href?.startsWith('http') && !href.startsWith('#'))

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
    <motion.button
      type={type}
      className={classes}
      onClick={onClick}
      {...motionProps}
      {...magneticProps}
    >
      {children}
    </motion.button>
  )
}
