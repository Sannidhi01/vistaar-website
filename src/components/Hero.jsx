import { AudienceMap } from './AudienceMap.jsx'

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__glow" aria-hidden="true" />

      <div className="shell hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">
            <span className="dot" /> AI reader-acquisition simulator
          </p>

          <h1>
            <em>Predict</em> the tap.
            <br /> Protect the spend.
          </h1>

          <p className="lede">
            Which of your ad creatives will actually make a reader tap? Today you only find out after the
            campaign runs. Vistaar answers it first: it profiles the creative, builds a matched reader
            audience, and shows how they’d really react: watch, skip, save, share, or tap to read, before
            the campaign spends anything.
          </p>

          <div className="hero__cta">
            <a className="btn btn--primary" href="#how">
              See how it works <span aria-hidden="true">→</span>
            </a>
            <a className="btn btn--ghost" href="#demo">
              Demo flow
            </a>
          </div>
        </div>

        <AudienceMap />
      </div>
    </section>
  )
}
