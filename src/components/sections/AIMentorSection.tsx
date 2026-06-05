import { motion } from 'framer-motion'
import { Bot, Sparkles } from 'lucide-react'
import { aiMentor } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function AIMentorSection() {
  const reduced = useReducedMotion()

  return (
    <section id="mentor" className="relative overflow-hidden bg-deep section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_70%_60%,rgba(139,92,246,0.1),transparent_50%)]" />

      <div className="container-premium relative">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <p className="eyebrow mb-4">AI Mentor</p>
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Personalized guidance, <span className="text-gradient">always on</span>
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Your AI mentor understands your goals, adapts to your pace, and helps you build real skills — not just complete lessons.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {['Adaptive learning', 'Progress tracking', 'Project guidance'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-sm text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="glass-strong glow-ring relative overflow-hidden rounded-3xl p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-3 border-b border-white/8 pb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue to-violet">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold">AI Mentor</p>
                  <p className="text-xs text-muted">Always available</p>
                </div>
                <Sparkles className="ml-auto h-4 w-4 text-violet" />
              </div>

              <div className="space-y-5">
                <motion.div
                  className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-white/8 px-5 py-4"
                  initial={reduced ? {} : { opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <p className="text-sm leading-relaxed">{aiMentor.userMessage}</p>
                </motion.div>

                <motion.div
                  className="max-w-[90%] rounded-2xl rounded-tl-sm border border-blue/20 bg-blue/10 px-5 py-4"
                  initial={reduced ? {} : { opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  <p className="text-sm leading-relaxed text-white/90">{aiMentor.aiResponse}</p>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 px-2"
                  initial={reduced ? {} : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                >
                  <span className="flex gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-blue/60"
                        animate={reduced ? {} : { opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                      />
                    ))}
                  </span>
                  <span className="text-xs text-muted">AI Mentor is thinking...</span>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
