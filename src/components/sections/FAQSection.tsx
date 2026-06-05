import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faq } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { AnimatePresence, motion } from 'framer-motion'

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative overflow-hidden bg-deep section-padding">
      <div className="container-premium relative max-w-3xl">
        <ScrollReveal className="mb-12 text-center">
          <p className="eyebrow mb-3 !text-emerald-200/80">Honest answers</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Questions you&apos;re about to ask.
          </h2>
        </ScrollReveal>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <ScrollReveal key={item.question} delay={i * 0.04}>
              <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-white sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-muted transition-transform duration-200 ${
                      open === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="border-t border-white/8 px-5 py-4 text-sm leading-relaxed text-muted">
                        {item.answer}
                      </p>
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
