import { motion } from 'framer-motion'
import { MessageCircle, Sparkles } from 'lucide-react'
import { aiMentor } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function AIMentorPreview() {
  const reduced = useReducedMotion()

  return (
    <section id="mentor" className="bg-page section-padding">
      <div className="container-premium">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal>
            <p className="eyebrow mb-4">AI Mentor</p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Your smart learning <span className="text-gradient">assistant</span>
            </h2>
            <p className="mt-5 text-lg text-muted">
              A clean, intelligent coach that knows your path, tracks progress, and helps you build — not a gimmicky chatbot.
            </p>

            <div className="card-light mt-10 space-y-4 p-6">
              <div className="flex items-center gap-3 border-b border-border pb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-ink">AI Mentor</p>
                  <p className="text-xs text-muted">Personalized · Always available</p>
                </div>
              </div>
              <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-white/8 px-4 py-3">
                <p className="text-sm text-ink">{aiMentor.userMessage}</p>
              </div>
              <div className="max-w-[95%] rounded-2xl rounded-tl-sm border border-primary/25 bg-primary/10 px-4 py-3 shadow-[0_0_24px_-8px_rgba(59,130,246,0.4)]">
                <p className="text-sm text-ink">{aiMentor.aiResponse}</p>
              </div>
              <div className="flex items-center gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-primary/50"
                    animate={reduced ? {} : { opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
                <span className="text-xs text-muted">Typing...</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="card-elevated relative mx-auto max-w-[300px] overflow-hidden p-3 lg:max-w-[320px]">
              <div className="mb-3 flex items-center gap-2 px-2 pt-1">
                <MessageCircle className="h-4 w-4 text-primary" />
                <span className="text-xs font-medium text-muted">In the app</span>
              </div>
              <img
                src="/phone-app-img/AiMentor.png"
                alt="brAInify AI Mentor in the app"
                className="w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
