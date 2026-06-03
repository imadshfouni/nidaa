import { INSTAGRAM_URL } from '@/config/site'
import { InstagramIcon } from '@/components/ui/SocialIcons'

type InstagramLinkProps = {
  className?: string
  showLabel?: boolean
  label?: string
}

export function InstagramLink({
  className = '',
  showLabel = false,
  label = 'Instagram',
}: InstagramLinkProps) {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-gold-dark ${className}`}
      aria-label="Follow Nidaa on Instagram"
    >
      <InstagramIcon size={18} />
      {showLabel && <span>{label}</span>}
    </a>
  )
}
