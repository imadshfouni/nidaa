import { instructors } from '@/data/content'
import { PhoneMockup } from '@/components/ui/PhoneMockup'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function SpecialtyExperts() {
  return (
    <section id="instructors" className="section-padding bg-[#060b18]">
      <div className="container-wide">
        <ScrollReveal className="mb-10 text-center md:mb-14">
          <p className="eyebrow">Inside brAInify</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            7 AI mentors. Seven specialties.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            The same instructors you meet in the app — each one guides a dedicated
            learning path.
          </p>
        </ScrollReveal>

        <div className="grid items-center gap-12 lg:grid-cols-[1fr_auto] lg:gap-16">
          <ScrollReveal className="order-2 lg:order-1">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {instructors.map((person) => (
                <li
                  key={person.id}
                  className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-[#0c1428] px-4 py-3.5 transition-colors hover:border-cyan-500/20"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/40 to-cyan-500/30 text-sm font-bold text-cyan-300">
                    {person.name.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-white">{person.name}</p>
                    <p className="text-sm text-slate-400">{person.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal className="order-1 flex justify-center lg:order-2" delay={0.1}>
            <PhoneMockup
              screenshotSrc="/examples/instructors-app.jpg"
              screenshotAlt="brAInify AI instructors in the app"
              maxWidth="max-w-[min(100%,340px)]"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
