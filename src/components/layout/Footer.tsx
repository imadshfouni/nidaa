import { InstagramIcon, LinkedInIcon, TwitterIcon } from '@/components/ui/SocialIcons'
import { navLinks } from '@/data/content'
import {
  BRAND_NAME,
  EMAIL,
  INSTAGRAM_URL,
  SOCIAL_LINKS,
  TAGLINE,
} from '@/config/site'
import { InstagramLink } from '@/components/ui/InstagramLink'

const socialIcons = [
  { href: SOCIAL_LINKS.instagram, Icon: InstagramIcon, label: 'Instagram' },
  { href: SOCIAL_LINKS.linkedin, Icon: LinkedInIcon, label: 'LinkedIn' },
  { href: SOCIAL_LINKS.twitter, Icon: TwitterIcon, label: 'Twitter' },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy/10 bg-navy text-cream">
      <div className="container-wide section-padding !py-14">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold">{BRAND_NAME}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/65">{TAGLINE}</p>
            <p className="mt-4 text-sm text-cream/50">
              Empowering leaders to build clarity, confidence, and growth.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 text-gold-light">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/75 transition hover:text-gold-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-gold-light">Connect</p>
            <ul className="space-y-3 text-sm text-cream/75">
              <li>
                <a href={`mailto:${EMAIL}`} className="transition hover:text-gold-light">
                  {EMAIL}
                </a>
              </li>
              <li>
                <InstagramLink
                  showLabel
                  label="Follow on Instagram"
                  className="text-cream/75 hover:text-gold-light"
                />
              </li>
            </ul>
            <div className="mt-6 flex gap-3">
              {socialIcons.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-cream/15 p-2.5 text-cream/80 transition hover:border-gold/40 hover:text-gold-light"
                  aria-label={label}
                >
                  <Icon size={18} className="text-current" />
                </a>
              ))}
            </div>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-xs font-semibold uppercase tracking-wider text-gold-light transition hover:text-gold"
            >
              Follow Nidaa on Instagram →
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-sm text-cream/45">
          © {year} {BRAND_NAME}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
