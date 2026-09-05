import { reportDimensions } from '../data/content.js'

export function Report() {
  return (
    <section className="section section--alt" id="report">
      <div className="shell report">
        <div className="report__copy">
          <p className="kicker">04 · The output</p>
          <h2>A score that explains itself.</h2>
          <p className="section__sub">
            The number is the headline; the breakdown is the product. Every run returns the dimensions
            that produced the score, so the next edit is obvious.
          </p>

          <ul className="ticks ticks--lg">
            {reportDimensions.map(([name, detail]) => (
              <li key={name}>
                <strong>{name}</strong>: {detail}
              </li>
            ))}
          </ul>
        </div>

        <figure className="report__fig">
          <img
            src="/img/pic-report.svg"
            alt="A reader acquisition report showing a directional score dial and bars for reader intent, tap-through, curiosity gap and genre fit"
            loading="lazy"
          />
          <figcaption>Illustrative report layout.</figcaption>
        </figure>
      </div>
    </section>
  )
}
