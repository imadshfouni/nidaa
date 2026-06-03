import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '@/data/content'
import { BOOK_SESSION_URL, BRAND_NAME, INSTAGRAM_URL } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { InstagramIcon } from '@/components/ui/SocialIcons'

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
    ? 'border-b border-navy/8 bg-ivory/92 shadow-[0_4px_30px_-8px_rgba(12,18,34,0.08)] backdrop-blur-xl'
    : 'border-b border-white/10 bg-navy/30 backdrop-blur-md'

  const linkCls = scrolled
    ? 'text-muted hover:text-navy'
    : 'text-ivory/85 hover:text-ivory'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${shell}`}>
      <div className="container-luxury flex items-center justify-between px-5 py-5 lg:px-14">
        <a href="#home" className="group">
          <span
            className={`font-display block text-xl font-semibold tracking-tight transition-colors sm:text-2xl ${
              scrolled ? 'text-navy' : 'text-ivory'
            }`}
          >
            {BRAND_NAME}
          </span>
          <span
            className={`mt-0.5 hidden text-[10px] font-semibold uppercase tracking-[0.2em] sm:block ${
              scrolled ? 'text-gold-dark' : 'text-gold-light/90'
            }`}
          >
            Coach · Entrepreneur · Visionary
          </span>
        </a>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Main">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm font-medium transition-colors ${linkCls}`}>
              {l.label}
            </a>
          ))}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full p-2 transition ${linkCls}`}
            aria-label="Instagram"
          >
            <InstagramIcon size={20} />
          </a>
        </nav>

        <div className="hidden lg:block">
          <Button variant="secondary" href={BOOK_SESSION_URL}>
            Book a Session
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={scrolled ? 'text-navy' : 'text-ivory'}
            aria-label="Instagram"
          >
            <InstagramIcon size={22} />
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={`rounded-lg p-2 ${scrolled ? 'text-navy' : 'text-ivory'}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-navy/10 bg-ivory lg:hidden"
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
                  className="rounded-lg px-3 py-3 text-lg font-medium text-navy hover:bg-cream"
                >
                  {l.label}
                </motion.a>
              ))}
              <Button href={BOOK_SESSION_URL} className="mt-4 w-full" onClick={() => setOpen(false)}>
                Book a Session
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
