import { instructors } from '@/data/content'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function SpecialtyExperts() {
  return (
    <section id="instructors" className="section-padding bg-[#060b18]">
      <div className="container-wide">
        <ScrollReveal className="mb-10 text-center md:mb-12">
          <p className="eyebrow">Inside brAInify</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            7 AI mentors. Seven specialties.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Meet the instructors guiding each path — the same mentors you&apos;ll
            learn with inside the app.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
          {instructors.map((person, index) => (
            <ScrollReveal key={person.id} delay={index * 0.06}>
              <article className="flex flex-col items-center rounded-2xl border border-white/[0.06] bg-[#0c1428] px-3 py-5 transition-colors hover:border-cyan-500/20 hover:bg-[#101c36] sm:px-4 sm:py-6">
                <div className="relative mb-4 h-[88px] w-[88px] overflow-hidden rounded-full border-2 border-white/[0.08] bg-[#141c30] sm:h-[100px] sm:w-[100px]">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-center text-base font-bold text-white sm:text-lg">
                  {person.name}
                </h3>
                <p className="mt-1 text-center text-xs text-slate-400 sm:text-sm">
                  {person.role}
                </p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
