import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { aiMentor } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function AIMentorPreview() {
  const reduced = useReducedMotion()

  return (
    <section id="mentor" className="relative overflow-hidden bg-void section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_60%,rgba(139,92,246,0.1),transparent_60%)]" />

      <div className="container-premium relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal>
            <p className="eyebrow mb-5">AI Mentor</p>
            <h2 className="font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              Intelligent guidance,{' '}
              <span className="text-gradient">always on</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              Not a chatbot. A coach that knows your path, tracks your progress, and helps you
              build — available whenever you need it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue/20 via-violet/10 to-cyan/10 blur-2xl" />

              <div className="glass-strong glow-ring relative overflow-hidden rounded-3xl p-7 sm:p-9">
                <div className="mb-7 flex items-center gap-3 border-b border-white/8 pb-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-violet shadow-[0_0_24px_rgba(47,124,255,0.4)]">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">AI Mentor</p>
                    <p className="text-xs text-muted">Personalized · Adaptive</p>
                  </div>
                </div>

                <div className="space-y-5">
                  <motion.div
                    className="ml-auto max-w-[88%] rounded-2xl rounded-tr-md bg-white/[0.07] px-5 py-4"
                    initial={reduced ? {} : { opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <p className="text-sm leading-relaxed text-white/90">{aiMentor.userMessage}</p>
                  </motion.div>

                  <motion.div
                    className="max-w-[92%] rounded-2xl rounded-tl-md border border-blue/20 bg-gradient-to-br from-blue/15 to-violet/10 px-5 py-4 shadow-[0_0_30px_-10px_rgba(47,124,255,0.3)]"
                    initial={reduced ? {} : { opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    <p className="text-sm leading-relaxed text-white/95">{aiMentor.aiResponse}</p>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-2.5 px-1"
                    initial={reduced ? {} : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                  >
                    <span className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-blue"
                          animate={reduced ? {} : { opacity: [0.2, 1, 0.2], scale: [0.9, 1.1, 0.9] }}
                          transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
                        />
                      ))}
                    </span>
                    <span className="text-xs text-muted">AI Mentor is typing...</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
