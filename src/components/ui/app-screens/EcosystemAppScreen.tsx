import { Bot } from 'lucide-react'

/** Inside-the-app phone UI — Creation Activation + progress (Figma ecosystem device) */
export function EcosystemAppScreen() {
  return (
    <div className="bg-[#060b18] p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-[10px] text-slate-500">9:41</span>
        <span className="text-[10px] font-semibold text-cyan-400">brAInify</span>
      </div>
      <p className="text-xs font-semibold text-white">Unit 1 · Foundations</p>
      <p className="mt-0.5 text-[10px] text-slate-500">Chapter 3 of 12</p>
      <div className="relative mx-auto my-6 flex h-36 w-36 items-center justify-center">
        <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="url(#progressGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="264"
            strokeDashoffset="198"
          />
          <defs>
            <linearGradient id="progressGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
        </svg>
        <span className="text-3xl font-bold text-white">25%</span>
      </div>
      <div className="rounded-xl border border-white/8 bg-white/[0.04] p-3">
        <p className="text-xs font-semibold text-white">Creation Activation</p>
        <p className="mt-1 text-[10px] leading-relaxed text-slate-500">
          Apply specificity and tension to write and refine your first AI workflow.
        </p>
        <div className="mt-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-500/20">
            <Bot size={14} className="text-cyan-400" />
          </div>
          <span className="text-[10px] text-cyan-300">Mentor is preparing your lesson…</span>
        </div>
      </div>
    </div>
  )
}
