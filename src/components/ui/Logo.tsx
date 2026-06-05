import { BRAND_NAME } from '@/config/site'

type LogoProps = {
  className?: string
  height?: number
}

export function Logo({ className = '', height = 44 }: LogoProps) {
  return (
    <img
      src="/logo-with-txt.svg"
      alt={BRAND_NAME}
      height={height}
      className={`h-9 w-auto sm:h-11 ${className}`}
    />
  )
}
