import { motion } from 'framer-motion'

type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  light?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
  className = '',
}: Props) {
  const alignCls = align === 'center' ? 'mx-auto text-center' : 'text-left'

  return (
    <motion.header
      className={`mb-16 max-w-3xl ${alignCls} ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && (
        <>
          <p className={`eyebrow mb-4 ${light ? 'text-gold-light' : ''}`}>{eyebrow}</p>
          <div className={`gold-line mb-8 ${align === 'center' ? 'mx-auto' : ''}`} />
        </>
      )}
      <h2
        className={`font-display text-[2.25rem] font-semibold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl ${
          light ? 'text-ivory' : 'text-navy'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? 'text-ivory/75' : 'text-muted'
          }`}
        >
          {description}
        </p>
      )}
    </motion.header>
  )
}
