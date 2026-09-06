import { visionCards } from '../data/content.js'

export function Vision() {
  return (
    <section className="section section--vision" id="vision">
      <div className="shell">
        <header className="section__head">
          <p className="kicker">08 · The vision</p>
          <h2>From scorecard to creative intelligence engine.</h2>
          <p className="section__sub">
            Where this goes in two to five years: not scoring one ad at a time, but matching a whole
            library against what the world is paying attention to this week.
          </p>
        </header>

        <div className="vision-grid">
          {visionCards.map((card) => (
            <div className="vg" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}

          <div className="vg vg--wide">
            <p className="vg__label">For example</p>
            <p>
              A fantasy-romance film starts booming. Vistaar surfaces story ads already in the library
              with matching themes: forbidden love, royal betrayal, magical worlds, and flags them for
              an immediate push.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
