import { motion } from 'framer-motion'
import { Bot } from 'lucide-react'

type PhoneMockupProps = {
  /** Full app screenshot shown inside the device frame */
  screenshotSrc?: string
  screenshotAlt?: string
  className?: string
  maxWidth?: string
}

export function PhoneMockup({
  screenshotSrc,
  screenshotAlt = 'brAInify app',
  className = '',
  maxWidth = 'max-w-[300px]',
}: PhoneMockupProps) {
  return (
    <motion.div
      className={`relative mx-auto w-full ${maxWidth} ${className}`}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-[60px]" />

      <div className="relative rounded-[2.5rem] border border-white/15 bg-gradient-to-b from-slate-800 to-slate-950 p-2 shadow-2xl shadow-blue-500/20">
        <div className="overflow-hidden rounded-[2rem] bg-[#060b18]">
          {screenshotSrc ? (
            <img
              src={screenshotSrc}
              alt={screenshotAlt}
              className="block w-full"
              loading="eager"
              decoding="async"
            />
          ) : (
            <>
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
                <span className="text-xs text-slate-500">9:41</span>
                <span className="text-xs font-medium text-cyan-400">brAInify</span>
              </div>
              <div className="space-y-3 p-4">
                <div className="rounded-xl bg-blue-500/15 p-3">
                  <p className="text-xs text-slate-400">AI Mentor</p>
                  <p className="mt-1 text-sm text-white">
                    Ready to start your AI Path lesson?
                  </p>
                </div>
                <div className="ml-6 rounded-xl bg-white/5 p-3">
                  <p className="text-sm text-slate-300">
                    Yes, let&apos;s build my first agent!
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3">
                  <Bot size={18} className="text-cyan-400" />
                  <p className="text-xs text-cyan-200">Preparing your lesson…</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}
