import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js'
import { useAudienceMap } from '../hooks/useAudienceMap.js'

export function AudienceMap() {
  const reduced = usePrefersReducedMotion()
  const { cells, viewers, shares, skips, ticker, mapRef } = useAudienceMap({ reduced })

  return (
    <aside className="sim" aria-label="Illustrative reader-response simulation">
      <div className="sim__chrome">
        <span className="sim__dots">
          <i />
          <i />
          <i />
        </span>
        <span className="sim__title">audience_map · live</span>
      </div>

      <div className="sim__body">
        <div className="sim__map" ref={mapRef} aria-hidden="true">
          {cells.map((kind, i) => (
            <i key={i} className={kind} />
          ))}
        </div>

        <div className="sim__meta">
          <div className="stat">
            <span className="stat__k">{viewers}</span>
            <span className="stat__l">readers reached</span>
          </div>
          <div className="stat">
            <span className="stat__k">{shares}</span>
            <span className="stat__l">shares</span>
          </div>
          <div className="stat">
            <span className="stat__k">{skips}</span>
            <span className="stat__l">skips</span>
          </div>
        </div>

        <div className="sim__ticker">
          {ticker.map((item) => (
            <span key={item.id} className={item.kind === 'skip' ? 'neg' : undefined}>
              <b>{item.kind}</b>
              <span>
                {item.who}: “{item.text}”
              </span>
            </span>
          ))}
        </div>
      </div>

      <p className="sim__note">Illustrative animation of the reader map, not a live model run.</p>
    </aside>
  )
}
