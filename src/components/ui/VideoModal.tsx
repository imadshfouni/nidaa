import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'

type VideoModalProps = {
  isOpen: boolean
  onClose: () => void
  embedUrl: string
  title: string
  /** Fallback if embed is blocked by Drive sharing settings */
  viewUrl?: string
}

export function VideoModal({
  isOpen,
  onClose,
  embedUrl,
  title,
  viewUrl,
}: VideoModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && embedUrl ? (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.button
            type="button"
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-label="Close video"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="path-video-title"
            className="relative z-10 w-full max-w-4xl"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass-panel-glow overflow-hidden">
              <div className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
                <h2
                  id="path-video-title"
                  className="pr-2 text-sm font-semibold text-white sm:text-base"
                >
                  {title}
                </h2>
                <button
                  type="button"
                  onClick={onClose}
                  className="shrink-0 rounded-full p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Close"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={embedUrl}
                  title={title}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              </div>

              {viewUrl ? (
                <p className="border-t border-white/10 px-4 py-3 text-center text-xs text-slate-500">
                  Video not loading?{' '}
                  <a
                    href={viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300"
                  >
                    Open in Google Drive
                    <ExternalLink size={12} />
                  </a>
                </p>
              ) : null}
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  )
}
