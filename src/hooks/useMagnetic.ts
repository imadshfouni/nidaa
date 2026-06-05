import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useCallback, useRef, type MouseEvent } from 'react'

export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T>(null)
  const reduced = useReducedMotion()

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (reduced || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      ref.current.style.transform = `translate(${x * strength}px, ${y * strength}px)`
    },
    [reduced, strength],
  )

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return
    ref.current.style.transform = ''
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}
