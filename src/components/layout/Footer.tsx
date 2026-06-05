import { navLinks } from '@/data/content'
import { BRAND_NAME, BRAND_TITLE, EMAIL } from '@/config/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/8 bg-deep">
      <div className="container-premium section-padding !py-16 px-5 lg:px-14">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue to-violet text-sm font-bold">
                b
              </span>
              <p className="font-display text-2xl font-bold">{BRAND_NAME}</p>
            </div>
            <p className="mt-3 text-sm uppercase tracking-widest text-blue">{BRAND_TITLE}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Harvard for the AI generation. Learn, practice, build, and grow with AI-powered guidance.
            </p>
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

        <p className="mt-14 border-t border-white/8 pt-8 text-center text-sm text-muted/60">
          © {year} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
