import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Play, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '@/data/content'
import { LOGIN_URL, WATCH_URL } from '@/config/site'
import { Logo } from '@/components/ui/Logo'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const shell = scrolled
    ? 'border-b border-white/8 bg-deep/90 backdrop-blur-xl'
    : 'border-b border-transparent bg-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${shell}`}>
      <div className="container-premium flex h-[72px] items-center justify-between gap-8 px-5 lg:px-14">
        <a href="#home" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={WATCH_URL}
            className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
              <Play className="ml-0.5 h-2.5 w-2.5 fill-white text-white" />
            </span>
            Watch
          </a>
          <a
            href={LOGIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Login
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-white md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/8 bg-deep/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-white/80 hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <a
                  href={WATCH_URL}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-center text-sm font-medium text-white"
                >
                  Watch intro
                </a>
                <a
                  href={LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-blue px-4 py-2.5 text-center text-sm font-medium text-white"
                >
                  Login
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
