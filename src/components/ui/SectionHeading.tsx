import { motion } from 'framer-motion'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  className?: string
  light?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const titleClass = light ? 'text-cream' : 'text-navy'
  const descClass = light ? 'text-cream/75' : 'text-charcoal/65'

  return (
    <motion.div
      className={`mb-14 max-w-3xl ${alignClass} ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {eyebrow && <p className={`eyebrow mb-4 ${light ? 'text-gold-light' : ''}`}>{eyebrow}</p>}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-tight ${titleClass}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${descClass}`}>
          {description}
        </p>
      )}
    </motion.div>
  )
}
