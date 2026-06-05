import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useCallback, useRef } from 'react'
import type { MouseEvent } from 'react'

export function useTilt(intensity = 12) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (reduced || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      ref.current.style.transform = `perspective(1000px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) scale3d(1.02, 1.02, 1.02)`
    },
    [reduced, intensity],
  )

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return
    ref.current.style.transform = ''
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
