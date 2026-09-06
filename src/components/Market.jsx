import { audiences } from '../data/content.js'

export function Market() {
  return (
    <section className="section section--alt" id="market">
      <div className="shell">
        <header className="section__head">
          <p className="kicker">06 · Market &amp; impact</p>
          <h2>Anyone who has to bet on a creative.</h2>
          <p className="section__sub">
            Story apps are the first vertical because the reader-intent signal is the easiest to define
            and sell. The same engine points at any short-form creative: that market is right behind it.
          </p>
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
      </div>
    </section>
  )
}
