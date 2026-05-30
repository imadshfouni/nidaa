import { useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

type AnimatedCounterProps = {
  value: number
  suffix?: string
  duration?: number
  decimals?: number
}

export function AnimatedCounter({
  value,
  suffix = '',
  duration = 2,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 })

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      if (ref.current) {
        const formatted =
          decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toLocaleString()
        ref.current.textContent = formatted + suffix
      }
    })
    return unsubscribe
  }, [spring, suffix, decimals])

  const initial =
    decimals > 0 ? (0).toFixed(decimals) + suffix : '0' + suffix

  return (
    <span ref={ref} className="tabular-nums">
      {initial}
    </span>
  )
}
