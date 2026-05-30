import { experts } from '@/data/content'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

export function SpecialtyExperts() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <SectionHeading
          eyebrow="AI Mentors"
          title="4 experts, four specialties"
          description="Specialized AI mentors for every path — each tuned to how you learn and what you want to build."
        />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-8">
          {experts.map((expert, index) => (
            <ScrollReveal key={expert.name} delay={index * 0.08}>
              <div className="flex flex-col items-center text-center">
                <div
                  className={`relative mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br ${expert.color} p-[2px] sm:h-28 sm:w-28`}
                >
                  <div
                    className={`flex h-full w-full items-center justify-center rounded-full bg-navy ring-4 ${expert.ring}`}
                  >
                    <span className="text-2xl font-bold text-white">
                      {expert.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <h3 className="font-semibold text-white">{expert.name}</h3>
                <p className="mt-1 text-xs text-slate-500 sm:text-sm">
                  {expert.specialty}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
