import { Bot, Sparkles } from 'lucide-react'

/** Hero phone UI — AI mentor home (matches Figma hero device) */
export function HeroAppScreen() {
  return (
    <div className="bg-[#060b18] p-4">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[10px] text-slate-500">9:41</span>
        <span className="text-[10px] font-semibold text-cyan-400">brAInify</span>
      </div>
      <p className="text-xs font-medium text-slate-400">Good morning 👋</p>
      <p className="mt-1 text-sm font-semibold text-white">Ready to learn today?</p>
      <div className="mt-4 rounded-xl border border-cyan-500/20 bg-gradient-to-br from-blue-600/20 to-cyan-500/10 p-3">
        <div className="flex items-start gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-500/20">
            <Bot size={16} className="text-cyan-400" />
          </div>
          <div>
            <p className="text-[10px] font-medium text-cyan-300">AI Mentor</p>
            <p className="mt-1 text-xs leading-relaxed text-slate-300">
              Start your AI Path — I&apos;ll guide you step by step.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {['The AI Path', 'The Creator Path', 'Digital Marketing'].map((path) => (
          <div
            key={path}
            className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2"
          >
            <span className="text-xs text-slate-300">{path}</span>
            <Sparkles size={12} className="text-cyan-500/70" />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-lg bg-cyan-500/15 px-3 py-2">
        <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[35%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
        </div>
        <span className="text-[10px] font-semibold text-cyan-300">35%</span>
      </div>
    </div>
  )
}
