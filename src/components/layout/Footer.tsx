import { navLinks } from '@/data/content'
import { APP_STORE_URL, EMAIL, GOOGLE_PLAY_URL } from '@/config/site'
import { Logo } from '@/components/ui/Logo'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 bg-deep">
      <div className="container-premium px-5 py-16 lg:px-14">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              A complete AI-powered learning ecosystem. Project-led, not video-soup. Live in 175
              countries · 11 languages.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition hover:text-white"
              >
                App Store
              </a>
              <a
                href={GOOGLE_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition hover:text-white"
              >
                Google Play
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-muted transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Contact</p>
            <a href={`mailto:${EMAIL}`} className="text-sm text-muted transition hover:text-white">
              {EMAIL}
            </a>
          </div>
        </div>

        <p className="mt-12 border-t border-white/8 pt-8 text-center text-sm text-muted/60">
          © {year} brAInify. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
