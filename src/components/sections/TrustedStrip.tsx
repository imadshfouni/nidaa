import { trustedStrip } from '@/data/content'

export function TrustedStrip() {
  const items = [...trustedStrip.partners, ...trustedStrip.partners]

  return (
    <section className="relative border-y border-white/[0.06] bg-deep/80 py-8 backdrop-blur-sm">
      <div className="container-premium px-5 lg:px-14">
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted/70">
          {trustedStrip.label}
        </p>
        <div
          className="overflow-hidden"
          style={{
            maskImage:
              'linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)',
          }}
        >
          <div className="animate-marquee flex w-max gap-12">
            {items.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="shrink-0 whitespace-nowrap text-sm font-semibold tracking-wide text-white/25 transition-colors hover:text-white/40"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
