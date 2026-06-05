import { navLinks } from '@/data/content'
import { APP_STORE_URL, BRAND_TITLE, EMAIL, GOOGLE_PLAY_URL } from '@/config/site'
import { Logo } from '@/components/ui/Logo'
import { AppStoreButtons } from '@/components/ui/AppStoreButtons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] bg-void">
      <div className="container-premium px-5 py-20 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-blue">{BRAND_TITLE}</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              A complete AI-powered learning ecosystem. Project-led, not video-soup.
            </p>
            <AppStoreButtons className="mt-8" />
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
              <li>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition hover:text-white"
                >
                  App Store
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted transition hover:text-white"
                >
                  Google Play
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Contact</p>
            <a href={`mailto:${EMAIL}`} className="text-sm text-muted transition hover:text-white">
              {EMAIL}
            </a>
          </div>
        </div>

        <p className="mt-16 border-t border-white/[0.06] pt-8 text-center text-xs text-muted/50">
          © {year} brAInify. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
