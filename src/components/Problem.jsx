import { afterPosting, theGap } from '../data/content.js'

export function Problem() {
  return (
    <section className="section" id="problem">
      <div className="shell">
        <header className="section__head">
          <p className="kicker">01 · The problem</p>
          <h2>Story ads are how readers get acquired. Choosing the right one is still guesswork.</h2>
          <p className="section__sub">
            Existing tools are excellent at describing the past. They report what happened after the
            campaign runs, and by then the budget is already spent.
          </p>
        </header>

        <div className="split">
          <article className="card card--muted">
            <p className="card__tag">What today’s tools tell you, after the campaign</p>
            <ul className="ticks ticks--dim">
              {afterPosting.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="card__foot">Useful for reporting. Too late for deciding.</p>
          </article>

          <article className="card card--accent">
            <p className="card__tag">What they don’t tell you</p>
            <ul className="ticks">
              {theGap.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="card__foot">The gap is creative decision-making before spend, not after.</p>
          </article>
        </div>
      </div>
    </section>
  )
}
