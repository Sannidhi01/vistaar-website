import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'
import { useReveal } from '../hooks/useReveal.js'

/** Wraps children in a scroll-revealed element. */
export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const reduced = usePrefersReducedMotion()
  const [ref, shown] = useReveal({ reduced, delay })

  return (
    <Tag ref={ref} className={['reveal', shown && 'is-in', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </Tag>
  )
}
