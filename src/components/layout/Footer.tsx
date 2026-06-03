import { navLinks } from '@/data/content'
import { BRAND_NAME, BRAND_TITLE, INSTAGRAM_URL } from '@/config/site'
import { InstagramIcon } from '@/components/ui/SocialIcons'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy/10 bg-navy text-ivory">
      <div className="container-luxury section-padding !py-16 px-5 lg:px-14">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold">{BRAND_NAME}</p>
            <p className="mt-3 text-sm uppercase tracking-widest text-gold-light">{BRAND_TITLE}</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/55">
              Guiding ambitious leaders toward clarity, confidence, and meaningful success.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-5 text-gold-light">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-ivory/70 transition hover:text-gold-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5 text-gold-light">Connect</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-ivory/70 transition hover:text-gold-light"
            >
              <InstagramIcon size={18} />
              Follow Nidaa Ryweck on Instagram
            </a>
          </div>
        </div>

        <p className="mt-14 border-t border-ivory/10 pt-8 text-center text-sm text-ivory/40">
          © {year} {BRAND_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
