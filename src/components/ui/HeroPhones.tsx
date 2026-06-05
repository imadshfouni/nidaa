import { motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function HeroPhones() {
  const reduced = useReducedMotion()

  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="relative h-[480px] sm:h-[540px] lg:h-[600px]">
        {/* Ambient glow behind phones */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue/20 via-violet/10 to-cyan/5 blur-3xl" />

        {/* Back phone — AI Mentor screen 2 */}
        <motion.div
          className="absolute right-[-10px] top-10 z-10 w-[200px] sm:right-[-20px] sm:top-12 sm:w-[220px] lg:right-[-40px] lg:w-[230px]"
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

        {/* Front phone — main app screen */}
        <motion.div
          className="absolute left-[50px] top-14 z-20 w-[210px] sm:left-[70px] sm:top-16 sm:w-[230px] lg:left-[90px] lg:top-[60px] lg:w-[250px]"
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
