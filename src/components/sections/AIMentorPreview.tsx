import { motion } from 'framer-motion'
import { aiMentor } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function AIMentorPreview() {
  const reduced = useReducedMotion()

  return (
    <section id="mentor" className="relative overflow-hidden bg-void section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_70%_50%,rgba(139,92,246,0.1),transparent_60%)]" />

      <div className="container-premium relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <p className="eyebrow mb-5">AI Mentor</p>
            <h2 className="font-display text-4xl font-bold tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              Your personal coach,{' '}
              <span className="text-gradient">built in</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              The AI Mentor knows your path, tracks your progress, and guides you step by step —
              available whenever you need it.
            </p>

            {/* Chat preview alongside the real app */}
            <div className="mt-10 space-y-4">
              <div className="ml-auto max-w-[90%] rounded-2xl rounded-tr-md bg-white/[0.06] px-5 py-4">
                <p className="text-sm text-white/90">{aiMentor.userMessage}</p>
              </div>
              <div className="max-w-[95%] rounded-2xl rounded-tl-md border border-blue/20 bg-blue/10 px-5 py-4">
                <p className="text-sm text-white/95">{aiMentor.aiResponse}</p>
              </div>
              <div className="flex items-center gap-2 px-1">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-blue"
                    animate={reduced ? {} : { opacity: [0.2, 1, 0.2] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
                <span className="text-xs text-muted">AI Mentor is typing...</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="relative mx-auto max-w-[300px] lg:max-w-none lg:justify-self-end">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue/20 to-violet/10 blur-3xl" />
              <motion.div
                animate={reduced ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img
                  src="/phone-app-img/AiMentor.png"
                  alt="brAInify AI Mentor in the app"
                  className="relative z-10 mx-auto w-[260px] object-contain sm:w-[280px] lg:w-[300px]"
                  style={{ filter: 'drop-shadow(0 40px 80px rgba(0,50,180,0.5))' }}
                  loading="lazy"
                  width={300}
                  height={620}
                />
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
