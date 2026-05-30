import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { learningPaths } from '@/data/content'
import {
  APP_URL,
  googleDriveEmbedUrl,
  googleDriveVideoUrl,
} from '@/config/site'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { VideoModal } from '@/components/ui/VideoModal'

export function LearningPaths() {
  const [activeId, setActiveId] = useState(learningPaths[0].id)
  const [videoOpen, setVideoOpen] = useState(false)
  const active = learningPaths.find((p) => p.id === activeId) ?? learningPaths[0]
  const activeEmbedUrl = googleDriveEmbedUrl(active.videoUrl)
  const activeViewUrl = googleDriveVideoUrl(active.videoUrl)

  return (
    <section id="paths" className="section-padding bg-navy-mid/40">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Learning Paths"
          title="Six learning paths. Which one is yours?"
          description="Choose a path — watch the intro video, then start learning in the app."
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-12">
          <div className="space-y-2">
            {learningPaths.map((path) => {
              const isActive = path.id === activeId
              const hasVideo = Boolean(googleDriveEmbedUrl(path.videoUrl))
              return (
                <button
                  key={path.id}
                  type="button"
                  onClick={() => setActiveId(path.id)}
                  className={`flex w-full items-center gap-4 rounded-xl border px-4 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? 'border-cyan-500/30 bg-cyan-500/10'
                      : 'border-transparent bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04]'
                  }`}
                >
                  <div
                    className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600/40 to-cyan-500/30 ${
                      isActive ? 'shadow-lg shadow-cyan-500/20' : ''
                    }`}
                  >
                    <path.icon size={22} className="text-cyan-300" />
                    {hasVideo && (
                      <span className="absolute -bottom-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-500 text-[#060b18]">
                        <Play size={8} fill="currentColor" />
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white">{path.title}</p>
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-wider ${path.tagColor}`}
                    >
                      {path.tag}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.35 }}
              className="glass-panel-glow flex flex-col justify-between p-8 sm:p-10"
            >
              <div>
                <div className="mb-6 inline-flex rounded-xl bg-blue-500/15 p-4">
                  <active.icon size={32} className="text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  {active.title}
                </h3>
                <p
                  className={`mt-2 text-xs font-semibold uppercase tracking-wider ${active.tagColor}`}
                >
                  {active.tag}
                </p>
                <p className="mt-4 leading-relaxed text-slate-400">
                  {active.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {active.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {activeEmbedUrl ? (
                  <Button onClick={() => setVideoOpen(true)}>
                    <Play size={16} fill="currentColor" />
                    Explore Path
                    <ArrowRight size={16} />
                  </Button>
                ) : (
                  <p className="text-sm text-slate-500">Intro video coming soon.</p>
                )}
                <Button variant="outline" href={APP_URL} external>
                  Start in app
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
        embedUrl={activeEmbedUrl}
        viewUrl={activeViewUrl}
        title={`${active.title} — Intro`}
      />
    </section>
  )
}
