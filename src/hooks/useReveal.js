import { useCallback, useEffect, useRef, useState } from 'react'

/**
 * Returns [ref, shown] for a scroll-reveal element. Elements reveal once, the
 * first time they cross into view; with reduced motion they start revealed.
 */
export function useReveal({ reduced = false, delay = 0 } = {}) {
  const [shown, setShown] = useState(reduced)
  const nodeRef = useRef(null)
  const timerRef = useRef(null)

  const ref = useCallback((node) => {
    nodeRef.current = node
  }, [])

  useEffect(() => {
    if (reduced || !nodeRef.current) {
      setShown(true)
      return
    }
    if (!('IntersectionObserver' in window)) {
      setShown(true)
      return
    }

    const node = nodeRef.current
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.unobserve(node)
        timerRef.current = setTimeout(() => setShown(true), delay)
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.15 },
    )
    io.observe(node)

    return () => {
      io.disconnect()
      clearTimeout(timerRef.current)
    }
  }, [reduced, delay])

  return [ref, shown]
}
