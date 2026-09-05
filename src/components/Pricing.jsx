import { tiers } from '../data/content.js'

export function Pricing() {
  return (
    <section className="section" id="pricing">
      <div className="shell">
        <header className="section__head">
          <p className="kicker">07 · Business model</p>
          <h2>Freemium SaaS, priced by how much you bet on creative.</h2>
          <p className="section__sub">
            Four tiers, from free to enterprise. Exact prices aren’t fixed yet: what’s included at each
            level is the plan.
          </p>
        </header>

        <div className="tiers">
          {tiers.map((tier) => (
            <article className={`tier${tier.flag ? ' tier--feature' : ''}`} key={tier.name}>
              {tier.flag && <span className="tier__flag">{tier.flag}</span>}
              <h3>{tier.name}</h3>
              <p className="tier__for">{tier.for}</p>
              <ul>
                {tier.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
