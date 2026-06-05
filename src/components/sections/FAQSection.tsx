import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { faq } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-page section-padding">
      <div className="container-premium max-w-3xl">
        <ScrollReveal className="mb-12 text-center">
          <p className="eyebrow mb-4">FAQ</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Questions answered</h2>
        </ScrollReveal>
        <div className="space-y-3">
          {faq.map((item, i) => (
            <ScrollReveal key={item.question} delay={i * 0.04}>
              <div className="overflow-hidden rounded-2xl border border-border bg-surface-raised">
                <button type="button" onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                  <span className="font-medium text-ink">{item.question}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-muted transition-transform ${open === i ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                      <p className="border-t border-border px-5 py-4 text-sm leading-relaxed text-muted">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
