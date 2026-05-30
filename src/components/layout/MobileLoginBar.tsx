import { LogIn } from 'lucide-react'
import { APP_URL } from '@/config/site'
import { Button } from '@/components/ui/Button'

/** Fixed Log in CTA at bottom — matches Figma mobile pattern */
export function MobileLoginBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-navy/95 px-4 py-3 backdrop-blur-xl pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <Button variant="login" href={APP_URL} className="w-full">
        <LogIn size={16} />
        Log in
      </Button>
    </div>
  )
}
