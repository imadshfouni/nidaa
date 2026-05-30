import { motion } from 'framer-motion'
import { LogIn, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from '@/data/content'
import { APP_URL } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-navy/90 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container-wide flex items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a href="#" className="flex items-center">
          <Logo size="md" />
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="login" href={APP_URL}>
            <LogIn size={16} />
            Log in
          </Button>
          <Button href={APP_URL}>Start Learning</Button>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 hover:bg-white/5 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-white/[0.06] bg-navy/95 px-5 py-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-slate-300"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Button variant="login" href={APP_URL} className="w-full">
              <LogIn size={16} />
              Log in
            </Button>
            <Button href={APP_URL} className="w-full">
              Start Learning
            </Button>
          </div>
        </div>
      )}
    </motion.header>
  )
}
