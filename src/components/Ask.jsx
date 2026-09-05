import { signals } from '../data/content.js'

export function Ask() {
  return (
    <section className="section" id="ask">
      <div className="shell ask">
        <p className="kicker">09 · The ask</p>
        <h2>Which signal would you trust most?</h2>
        <p className="section__sub ask__sub">
          We want feedback from creative teams, marketers and judges on the reader-acquisition signals
          that are genuinely worth building around.
        </p>

        <ul className="signals">
          {signals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>

        <p className="closing">
          Vistaar isn’t just predicting whether readers will tap.
          <br />
          <span>It’s building a rehearsal room for reader acquisition.</span>
        </p>

        <div className="ask__cta">
          <a className="btn btn--primary" href="mailto:sannidhi664@gmail.com?subject=Vistaar%20feedback">
            Send feedback
          </a>
          <a className="btn btn--ghost" href="#how">
            Re-read how it works
          </a>
        </div>
      </div>
    </section>
  )
}
