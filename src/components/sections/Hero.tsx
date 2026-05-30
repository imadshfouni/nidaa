import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AppStoreBadges } from '@/components/ui/AppStoreBadges'
import { Button } from '@/components/ui/Button'
import { APP_URL } from '@/config/site'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 md:pb-24">
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="container-wide relative grid items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
        <div className="text-center lg:text-left">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            AI-Powered Learning Ecosystem
          </motion.p>

          <motion.h1
            className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Learn AI. Build Real Skills.{' '}
            <span className="text-gradient-accent">Create Your Future.</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            brAInify is a next-generation AI-powered learning ecosystem where
            thousands of users are learning, creating, and building with AI in
            real time.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <Button href={APP_URL}>
              Join for free
              <ArrowRight size={18} />
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 flex justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
          >
            <AppStoreBadges />
          </motion.div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-600/25 to-cyan-500/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-cyan-500/25 bg-navy-card p-2 shadow-2xl shadow-blue-500/20">
            <img
              src="/examples/app-preview.png"
              alt="brAInify app preview"
              className="w-full rounded-xl object-contain"
              width={343}
              height={361}
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
