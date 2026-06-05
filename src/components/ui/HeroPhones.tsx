import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HeroPhones() {
  const reduced = useReducedMotion()

  return (
    <div className="relative mx-auto w-[320px] scale-[0.85] origin-top sm:w-[380px] sm:scale-90 md:scale-100 lg:mx-0 lg:w-[420px]">
      <div className="relative h-[480px] sm:h-[540px] lg:h-[600px]">
        {/* Back phone */}
        <div className="absolute right-[-20px] top-8 z-10 w-[200px] sm:right-[-30px] sm:top-10 sm:w-[220px] lg:right-[-40px] lg:w-[230px]">
          <img
            src="/phone-app-img/AiMentor2.png"
            alt="brAInify AI Mentor screen"
            className="h-auto w-full object-contain drop-shadow-[0_30px_60px_rgba(0,40,160,0.5)]"
            loading="eager"
          />
        </div>

        {/* Front phone */}
        <div className="absolute left-[60px] top-12 z-20 w-[210px] sm:left-[70px] sm:top-14 sm:w-[230px] lg:left-[90px] lg:top-[60px] lg:w-[250px]">
          <img
            src="/phone-app-img/AiMentor.png"
            alt="brAInify app screen"
            className="h-auto w-full object-contain drop-shadow-[0_40px_80px_rgba(0,50,200,0.55)]"
            loading="eager"
          />
        </div>

        {/* Floating AI robot */}
        <div
          className={`absolute left-[50px] top-[-10px] z-30 w-[90px] sm:left-[60px] sm:w-[100px] lg:left-[75px] lg:top-[-20px] lg:w-[120px] ${reduced ? '' : 'animate-[hero-float_3.8s_ease-in-out_infinite]'}`}
          aria-hidden="true"
        >
          <img
            src="/images/ai-robot.png"
            alt=""
            className="h-auto w-full object-contain drop-shadow-[0_0_40px_rgba(74,158,255,0.6)]"
          />
        </div>
      </div>
    </div>
  )
}
