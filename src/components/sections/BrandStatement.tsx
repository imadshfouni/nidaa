import { motion } from 'framer-motion'
import { brandStatement } from '@/data/content'

export function BrandStatement() {
  return (
    <section className="relative overflow-hidden bg-navy py-28 sm:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(196,165,116,0.2),transparent_50%)]" />
      <div className="container-luxury relative px-5 lg:px-14">
        <motion.p
          className="font-display mx-auto max-w-5xl text-center text-[1.75rem] font-medium leading-[1.35] tracking-tight text-ivory sm:text-3xl md:text-4xl lg:text-[2.75rem] lg:leading-[1.3]"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {brandStatement}
        </motion.p>
        <motion.div
          className="gold-line mx-auto mt-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>
    </section>
  )
}
