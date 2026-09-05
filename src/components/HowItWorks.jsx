import { Reveal } from './Reveal.jsx'
import { steps } from '../data/content.js'

export function HowItWorks() {
  return (
    <section className="section" id="how">
      <div className="shell">
        <header className="section__head">
          <p className="kicker">03 · The magic</p>
          <h2>Four steps, one pass.</h2>
          <p className="section__sub">This is what the prototype actually does when you press start.</p>
        </header>

        <div className="steps">
          {steps.map((step, i) => (
            <Reveal
              as="article"
              key={step.no}
              className={`step${i % 2 ? ' step--flip' : ''}`}
              delay={i * 70}
            >
              <div className="step__copy">
                <p className="step__no">Step {step.no}</p>
                <h3>{step.title}</h3>
                <p className="step__line">{step.line}</p>
              </div>

              <figure className="step__fig">
                <img src={step.img} alt={step.alt} loading="lazy" />
                {step.caption && <figcaption>{step.caption}</figcaption>}
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
