import { LOGO_SRC } from '@/config/site'

type LogoProps = {
  showWordmark?: boolean
  showTagline?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizes = {
  sm: { img: 'h-8 w-8', title: 'text-base', tagline: 'text-[8px]' },
  md: { img: 'h-10 w-10', title: 'text-xl', tagline: 'text-[9px]' },
  lg: { img: 'h-12 w-12', title: 'text-2xl', tagline: 'text-[10px]' },
}

export function Logo({
  showWordmark = true,
  showTagline = false,
  size = 'md',
  className = '',
}: LogoProps) {
  const s = sizes[size]

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img
        src={LOGO_SRC}
        alt="brAInify"
        className={`${s.img} shrink-0 rounded-xl object-cover`}
        width={48}
        height={48}
      />
      {showWordmark && (
        <span className="flex min-w-0 flex-col leading-tight">
          <span className={`${s.title} font-bold tracking-tight text-white`}>
            br<span className="text-cyan-400">AI</span>nify
          </span>
          {showTagline && (
            <span
              className={`${s.tagline} mt-0.5 hidden font-medium uppercase tracking-[0.14em] text-slate-500 lg:block`}
            >
              Innovating Learning with AI
            </span>
          )}
        </span>
      )}
    </span>
  )
}
