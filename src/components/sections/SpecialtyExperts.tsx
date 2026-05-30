import { instructors } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const ringStyles = [
  'from-blue-500 to-cyan-400 ring-cyan-500/40',
  'from-fuchsia-500 to-pink-400 ring-fuchsia-500/40',
  'from-orange-500 to-amber-400 ring-orange-500/40',
  'from-emerald-500 to-teal-400 ring-emerald-500/40',
  'from-violet-500 to-purple-400 ring-violet-500/40',
  'from-sky-500 to-blue-400 ring-sky-500/40',
  'from-rose-500 to-red-400 ring-rose-500/40',
] as const

export function SpecialtyExperts() {
  return (
    <section id="instructors" className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="AI Mentors"
          title="7 experts. Seven specialties."
          description="Specialized AI mentors for every path — each tuned to how you learn and what you want to build."
        />

        <div className="-mx-5 flex gap-6 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-7 lg:gap-4 [&::-webkit-scrollbar]:hidden">
          {instructors.map((person, index) => (
            <ScrollReveal
              key={person.id}
              delay={index * 0.05}
              className="w-[min(42vw,140px)] shrink-0 sm:w-auto"
            >
              <div className="flex flex-col items-center text-center">
                <div
                  className={`relative mb-3 rounded-full bg-gradient-to-br p-[2px] ${ringStyles[index % ringStyles.length]}`}
                >
                  <div className="rounded-full bg-navy p-0.5 ring-2 ring-navy">
                    {person.image ? (
                      <img
                        src={person.image}
                        alt={`${person.name}, ${person.role}`}
                        className="h-20 w-20 rounded-full object-cover object-top sm:h-[88px] sm:w-[88px]"
                        loading="lazy"
                      />
                    ) : (
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-navy-card text-2xl font-bold text-white sm:h-[88px] sm:w-[88px]">
                        {person.name.charAt(0)}
                      </span>
                    )}
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-white">{person.name}</h3>
                <p className="mt-0.5 text-[11px] leading-tight text-slate-500 sm:text-xs">
                  {person.role}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
