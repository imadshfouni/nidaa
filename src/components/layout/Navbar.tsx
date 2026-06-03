import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { InstagramIcon } from '@/components/ui/SocialIcons'
import { useEffect, useState } from 'react'
import { navLinks } from '@/data/content'
import { BOOK_SESSION_URL, BRAND_NAME, INSTAGRAM_URL } from '@/config/site'
import { Button } from '@/components/ui/Button'
import { InstagramLink } from '@/components/ui/InstagramLink'

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

  const onHero = !scrolled
  const headerBg = onHero
    ? 'border-b border-white/10 bg-navy/40 backdrop-blur-xl'
    : 'border-b border-navy/10 bg-cream/95 shadow-sm backdrop-blur-xl'

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerBg}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container-wide flex items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
        <a
          href="#hero"
          className={`font-display text-xl font-semibold tracking-tight transition-colors ${
            onHero ? 'text-cream' : 'text-navy'
          }`}
        >
          {BRAND_NAME}
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  onHero
                    ? 'text-cream/80 hover:text-cream'
                    : 'text-charcoal/70 hover:text-navy'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <InstagramLink
              className={onHero ? 'text-cream/80 hover:text-gold-light' : 'text-charcoal/70 hover:text-gold-dark'}
            />
          </li>
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full p-2 transition ${
              onHero ? 'text-cream/80 hover:bg-white/10' : 'text-navy/70 hover:bg-navy/5'
            }`}
            aria-label="Instagram"
          >
            <InstagramIcon size={20} />
          </a>
          <Button
            variant={onHero ? 'secondary' : 'primary'}
            href={BOOK_SESSION_URL}
          >
            Work With Nidaa
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`rounded-full p-2 ${onHero ? 'text-cream' : 'text-navy'}`}
            aria-label="Instagram"
          >
            <InstagramIcon size={22} />
          </a>
          <button
            type="button"
            className={`rounded-lg p-2 ${onHero ? 'text-cream hover:bg-white/10' : 'text-navy hover:bg-navy/5'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-navy/10 bg-cream/98 px-5 py-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-base font-medium text-navy"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <InstagramLink showLabel className="text-navy" />
            </li>
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <Button variant="instagram" href={INSTAGRAM_URL} external className="w-full">
              <InstagramIcon size={18} />
              Follow on Instagram
            </Button>
            <Button href={BOOK_SESSION_URL} className="w-full" onClick={() => setMobileOpen(false)}>
              Work With Nidaa
            </Button>
          </div>
        </div>
      )}
    </motion.header>
  )
}
