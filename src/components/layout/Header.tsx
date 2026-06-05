import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '@/data/content'
import { LOGIN_URL, START_LEARNING_URL } from '@/config/site'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const shell = scrolled
    ? 'border-b border-border bg-white/80 shadow-sm backdrop-blur-xl'
    : 'border-b border-transparent bg-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${shell}`}>
      <div className="container-premium flex h-[72px] items-center justify-between gap-8 px-5 lg:px-14">
        <a href="#home"><Logo size="md" /></a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-muted transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a href={LOGIN_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted hover:text-ink">
            Login
          </a>
          <Button variant="primary" href={START_LEARNING_URL} className="!px-6 !py-2.5 !text-sm">
            Start Learning
          </Button>
        </div>
        <button type="button" onClick={() => setOpen(!open)} className="rounded-lg p-2 text-ink lg:hidden" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-border bg-white lg:hidden">
            <nav className="flex flex-col gap-1 px-5 py-5">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-slate-50">
                  {l.label}
                </a>
              ))}
              <Button href={START_LEARNING_URL} className="mt-4 w-full" onClick={() => setOpen(false)}>Start Learning</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
