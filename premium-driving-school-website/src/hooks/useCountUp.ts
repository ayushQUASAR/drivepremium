'use client'

import { useState, useEffect, useRef } from 'react'

export function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting && !started) setStarted(true) },
      { threshold: 0.4 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const step = 16
    const inc = target / (duration / step)
    let cur = 0
    const t = setInterval(() => {
      cur += inc
      if (cur >= target) { setCount(target); clearInterval(t) }
      else setCount(Math.floor(cur))
    }, step)
    return () => clearInterval(t)
  }, [started, target, duration])

  return { count, ref }
}