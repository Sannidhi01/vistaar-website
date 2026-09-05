import { visionCards } from '../data/content.js'

export function Vision() {
  return (
    <section className="section section--vision" id="vision">
      <div className="shell">
        <header className="section__head">
          <p className="kicker">08 · The vision</p>
          <h2>From scorecard to creative intelligence engine.</h2>
          <p className="section__sub">Where this goes in two to five years.</p>
        </header>

        <div className="vision-grid">
          {visionCards.map((card) => (
            <div className="vg" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}

          <div className="vg vg--wide">
            <h3>A trend-to-creative matching engine</h3>
            <p>
              Instead of only scoring a single ad, the future version monitors what’s currently gaining
              attention in the world, compares those signals against our library of story creatives, and
              recommends which ads to activate because their premise, genre, emotion or trope matches
              current demand.
            </p>
            <p>
              If a fantasy-romance movie is suddenly booming, Vistaar could surface story ads already in
              the library with matching themes: forbidden love, royal betrayal, magical worlds,
              second-chance romance, and recommend those creatives for an immediate marketing push.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
