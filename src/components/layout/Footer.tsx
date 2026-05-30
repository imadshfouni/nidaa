import { footerLinks } from '@/data/content'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-surface-elevated/50">
      <div className="container-wide section-padding !py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-brand-600 to-cyan-500 text-sm font-bold text-white">
                bA
              </span>
              <span className="text-xl font-bold text-white">
                br<span className="text-brand-400">AI</span>nify
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-500">
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

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} brAInify. All rights reserved.
          </p>
          <p className="text-sm text-slate-600">
            <a
              href="https://www.brAInify.world"
              className="transition-colors hover:text-brand-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.brAInify.world
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
