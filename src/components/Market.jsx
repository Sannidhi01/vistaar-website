import { audiences, genericVerticals } from '../data/content.js'

export function Market() {
  return (
    <section className="section section--alt" id="market">
      <div className="shell">
        <header className="section__head">
          <p className="kicker">06 · Market &amp; impact</p>
          <h2>Anyone who has to bet on a creative.</h2>
        </header>

        <div className="who">
          {audiences.map((item) => (
            <div className="who__item" key={item.title}>
              <span className="who__ico" aria-hidden="true">
                {item.icon}
              </span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>

        <div className="why-now">
          <div className="why-now__copy">
            <h3>Why now</h3>
            <p>
              AI is pushing the cost of <em>producing</em> creative down while the cost of{' '}
              <em>reader attention</em> keeps rising. At scale, Vistaar becomes a preflight layer: a
              simulated audience before the real one arrives.
            </p>
          </div>

          <div className="why-now__viz" aria-hidden="true">
            <div className="cross">
              <span className="cross__line cross__line--down" />
              <span className="cross__line cross__line--up" />
              <span className="cross__lbl cross__lbl--a">cost to produce</span>
              <span className="cross__lbl cross__lbl--b">cost of attention</span>
            </div>
          </div>
        </div>

        <div className="callout callout--accent">
          <p>
            <strong>Not confined to story ads.</strong> The same engine can go beyond books: point it at a
            product launch, a music drop, a game trailer, or a solo creator’s Reel and it works the same
            way. Story apps are the first vertical because the reader-intent signal is easiest to define
            and sell; every other short-form creative is the market right behind it.
          </p>
          <ul className="chips">
            {genericVerticals.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
