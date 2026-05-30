import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type PhoneMockupProps = {
  /** Full app screenshot shown inside the device frame */
  screenshotSrc?: string
  screenshotAlt?: string
  /** Built-in React screen (preferred when matching Figma UI) */
  screen?: ReactNode
  className?: string
  size?: 'default' | 'wide'
  maxWidth?: string
  animate?: boolean
}

export function PhoneMockup({
  screenshotSrc,
  screenshotAlt = 'brAInify app',
  screen,
  className = '',
  size = 'default',
  maxWidth,
  animate = true,
}: PhoneMockupProps) {
  const widthClass =
    maxWidth ??
    (size === 'wide' ? 'max-w-[min(100%,520px)]' : 'max-w-[320px]')

  const frame = (
    <div
      className={`relative border border-white/15 bg-gradient-to-b from-slate-800 to-slate-950 p-2 shadow-2xl shadow-blue-500/20 ${
        size === 'wide' ? 'rounded-[2.75rem]' : 'rounded-[2.5rem]'
      }`}
    >
      <div
        className={`overflow-hidden bg-[#060b18] ${
          size === 'wide' ? 'rounded-[2.25rem]' : 'rounded-[2rem]'
        }`}
      >
        {screen ??
          (screenshotSrc ? (
            <img
              src={screenshotSrc}
              alt={screenshotAlt}
              className="block w-full"
              loading="eager"
              decoding="async"
            />
          ) : null)}
      </div>
    </div>
  )

  if (!animate) {
    return (
      <div className={`relative mx-auto w-full ${widthClass} ${className}`}>
        <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-[60px]" />
        {frame}
      </div>
    )
  }

  return (
    <motion.div
      className={`relative mx-auto w-full ${widthClass} ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-[60px]" />
      {frame}
    </motion.div>
  )
}
