import { BRAND_NAME } from '@/config/site'

type LogoProps = {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'h-8 sm:h-9',
  md: 'h-9 sm:h-11',
  lg: 'h-11 sm:h-14',
}

export function Logo({ className = '', size = 'md' }: LogoProps) {
  return (
    <img
      src="/logo-with-txt.svg"
      alt={BRAND_NAME}
      width={160}
      height={44}
      decoding="async"
      fetchPriority="high"
      className={`w-auto ${sizes[size]} ${className}`}
    />
  )
}
