import { useEffect, useState } from 'react'

/** True once the page has scrolled far enough for the nav to need a bottom edge. */
export function useStickyNav(threshold = 8) {
  const [stuck, setStuck] = useState(false)

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return stuck
}
