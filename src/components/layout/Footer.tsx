import { LogIn } from 'lucide-react'
import { footerLinks } from '@/data/content'
import { APP_URL } from '@/config/site'
import { Logo } from '@/components/ui/Logo'
import { AppStoreBadges } from '@/components/ui/AppStoreBadges'
import { Button } from '@/components/ui/Button'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface-elevated/50">
      <div className="container-wide section-padding !py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex">
              <Logo size="md" />
            </a>
            <div className="mt-6">
              <AppStoreBadges />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-500">
              An AI-powered learning ecosystem where learning turns into
              real-world building. Part of the Ignite ecosystem.
            </p>
            <p className="mt-4 text-sm text-slate-600">
              <a
                href="mailto:support@brainify.world"
                className="text-slate-400 transition-colors hover:text-brand-400"
              >
                support@brainify.world
              </a>
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Product
            </h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.06] pt-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <p className="text-sm text-slate-600">
              © {new Date().getFullYear()} brAInify. All rights reserved.
            </p>
            <Button variant="login" href={APP_URL} className="min-w-[200px]">
              <LogIn size={16} />
              Log in
            </Button>
            <a
              href="https://www.brAInify.world"
              className="text-sm text-slate-600 transition-colors hover:text-cyan-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.brAInify.world
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
