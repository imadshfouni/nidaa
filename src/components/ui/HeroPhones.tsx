import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HeroPhones() {
  const reduced = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-[340px] overflow-hidden sm:max-w-[380px] md:max-w-[420px]">
      <div className="relative mx-auto h-[400px] w-full scale-[0.88] sm:h-[480px] sm:scale-95 md:h-[540px] md:scale-100 lg:h-[600px]">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue/20 via-violet/10 to-cyan/5 blur-3xl" />

        <motion.div
          className="absolute right-0 top-8 z-10 w-[170px] sm:right-[-10px] sm:top-10 sm:w-[200px] md:right-[-20px] md:w-[220px] lg:right-[-40px] lg:w-[230px]"
          animate={reduced ? {} : { y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <img
            src="/phone-app-img/AiMentor2.png"
            alt="brAInify AI Mentor conversation"
            className="h-auto w-full object-contain drop-shadow-[0_30px_60px_rgba(0,40,160,0.5)]"
            loading="eager"
            width={230}
            height={480}
          />
        </motion.div>

        <motion.div
          className="absolute left-[30px] top-12 z-20 w-[175px] sm:left-[50px] sm:top-14 sm:w-[210px] md:left-[70px] md:top-16 md:w-[230px] lg:left-[90px] lg:top-[60px] lg:w-[250px]"
          animate={reduced ? {} : { y: [0, -12, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img
            src="/phone-app-img/AiMentor.png"
            alt="brAInify app — AI Mentor"
            className="h-auto w-full object-contain drop-shadow-[0_40px_80px_rgba(0,50,200,0.55)]"
            loading="eager"
            width={250}
            height={520}
          />
        </motion.div>
      </div>
    </div>
  )
}
