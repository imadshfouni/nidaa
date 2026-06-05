import { navLinks } from '@/data/content'
import { BRAND_TITLE, EMAIL } from '@/config/site'
import { Logo } from '@/components/ui/Logo'
import { AppStoreButtons } from '@/components/ui/AppStoreButtons'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-premium px-5 py-16 lg:px-14">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo size="lg" />
            <p className="mt-3 text-sm text-cyan">{BRAND_TITLE}</p>
            <p className="mt-4 max-w-sm text-sm text-muted">A premium learning platform for the AI generation.</p>
            <AppStoreButtons className="mt-6" />
          </div>
          <div>
            <p className="eyebrow mb-4">Navigate</p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}><a href={l.href} className="text-sm text-muted hover:text-ink">{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Contact</p>
            <a href={`mailto:${EMAIL}`} className="text-sm text-muted hover:text-ink">{EMAIL}</a>
          </div>
        </div>
        <p className="mt-12 border-t border-border pt-8 text-center text-xs text-muted">© {year} brAInify. All rights reserved.</p>
      </div>
    </footer>
  )
}
