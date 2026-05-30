import { Bot, Flame, PieChart } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { ecosystemFeatures } from '@/data/content'
import { PhoneMockup } from '@/components/ui/PhoneMockup'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const featureIcons: Record<string, LucideIcon> = {
  'Track your progress': PieChart,
  'Lessons + simulations': Bot,
  'XP & streaks': Flame,
}

export function LearningEcosystem() {
  return (
    <section id="ecosystem" className="section-padding overflow-hidden">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <ScrollReveal>
            <p className="eyebrow">Inside the app</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              A learning ecosystem
            </h2>
            <p className="mt-4 max-w-lg leading-relaxed text-slate-400">
              Project-led lessons, gamified progress, XP, and a mentor — built in
              so you actually finish.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <ul className="space-y-6">
              {ecosystemFeatures.map((feature) => {
                const Icon = featureIcons[feature.title] ?? Bot
                return (
                  <li key={feature.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/20">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{feature.title}</h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15} className="mt-12 flex justify-center lg:mt-14">
          <PhoneMockup
            size="wide"
            screenshotSrc="/examples/app-preview.png"
            screenshotAlt="brAInify app — lessons, progress, and AI mentor"
            className="w-full max-w-[min(100%,520px)]"
          />
        </ScrollReveal>
      </div>
    </section>
  )
}
