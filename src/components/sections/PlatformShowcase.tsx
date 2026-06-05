import type { LucideIcon } from 'lucide-react'
import { Clock, FlaskConical, MonitorPlay, Star, UserRound, Zap } from 'lucide-react'
import { platformFeatures } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const leftIcons = [Clock, MonitorPlay, Zap]
const rightIcons = [UserRound, FlaskConical, Star]

function FeatureItem({
  title,
  description,
  icon: Icon,
  align,
}: {
  title: string
  description: string
  icon: LucideIcon
  align: 'left' | 'right'
}) {
  return (
    <div
      className={`flex items-start gap-3 ${
        align === 'right' ? 'flex-row' : 'flex-row-reverse md:flex-row'
      }`}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue/20 bg-blue/[0.08]">
        <Icon className="h-5 w-5 text-blue" />
      </div>
      <div className={align === 'right' ? 'text-left' : 'text-right md:text-left'}>
        <p className="text-sm font-bold text-white">{title}</p>
        <p className="mt-0.5 text-[13px] text-muted">{description}</p>
      </div>
    </div>
  )
}

export function PlatformShowcase() {
  return (
    <section id="inside-app" className="relative overflow-hidden bg-navy section-padding">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(47,124,255,0.1),transparent_60%)]" />

      <div className="container-premium relative">
        <ScrollReveal className="mb-16 max-w-xl">
          <p className="eyebrow mb-3 !text-emerald-200/80">Inside the app</p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            A learning ecosystem
          </h2>
          <p className="mt-4 text-muted">
            Project-led lessons, gamified progress, XP, and a mentor — built in so you actually
            finish.
          </p>
        </ScrollReveal>

        <div className="flex flex-col items-center gap-10 md:flex-row md:gap-6 lg:gap-12">
          <div className="flex flex-1 flex-col gap-8">
            {platformFeatures.left.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.08}>
                <FeatureItem
                  title={f.title}
                  description={f.description}
                  icon={leftIcons[i]}
                  align="left"
                />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="shrink-0">
            <img
              src="/phone-app-img/chapterCircles.png"
              alt="brAInify app — chapter view"
              className="w-[240px] object-contain sm:w-[260px]"
              style={{ filter: 'drop-shadow(0 40px 80px rgba(0,50,180,0.5))' }}
              loading="lazy"
            />
          </ScrollReveal>

          <div className="flex flex-1 flex-col gap-8">
            {platformFeatures.right.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.08}>
                <FeatureItem
                  title={f.title}
                  description={f.description}
                  icon={rightIcons[i]}
                  align="right"
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
