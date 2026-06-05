import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '@/data/content'
import { BRAND_NAME, START_LEARNING_URL } from '@/config/site'
import { Button } from '@/components/ui/Button'

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
    ? 'border-b border-white/8 bg-deep/90 shadow-[0_4px_30px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl'
    : 'border-b border-transparent bg-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${shell}`}>
      <div className="container-premium flex items-center justify-between px-5 py-5 lg:px-14">
        <a href="#home" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue to-violet text-sm font-bold">
            b
          </span>
          <span className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            {BRAND_NAME}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
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

        <div className="hidden lg:block">
          <Button variant="primary" href={START_LEARNING_URL} className="!px-6 !py-3">
            Start Learning
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/8 bg-deep/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-5 py-6">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-lg font-medium text-white hover:bg-white/5"
                >
                  {l.label}
                </motion.a>
              ))}
              <Button
                href={START_LEARNING_URL}
                className="mt-4 w-full"
                onClick={() => setOpen(false)}
              >
                Start Learning
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
