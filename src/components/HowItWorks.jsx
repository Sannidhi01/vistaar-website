import { Reveal } from './Reveal.jsx'
import { steps } from '../data/content.js'

function StepCard({ step, delay, area }) {
  return (
    <Reveal as="article" className={`step-card gf-${area}`} delay={delay}>
      <img className="step-card__fig" src={step.img} alt={step.alt} loading="lazy" />
      <p className="step-card__no">Step {step.no}</p>
      <h3>{step.title}</h3>
      <p className="step-card__line">{step.line}</p>
    </Reveal>
  )
}

export function HowItWorks() {
  const [a, b, c, d] = steps

  return (
    <section className="section" id="how">
      <div className="shell">
        <header className="section__head">
          <p className="kicker">03 · The magic</p>
          <h2>Four steps, one pass.</h2>
          <p className="section__sub">This is what the prototype actually does when you press start.</p>
        </header>

        <div className="steps-flow">
          <StepCard step={a} delay={0} area="s1" />
          <span className="flow-arrow flow-arrow--right gf-a12" aria-hidden="true">
            →
          </span>
          <StepCard step={b} delay={70} area="s2" />

          <span className="flow-arrow flow-arrow--down gf-a23" aria-hidden="true">
            ↓
          </span>

          <StepCard step={c} delay={140} area="s3" />
          <span className="flow-arrow flow-arrow--left gf-a43" aria-hidden="true">
            →
          </span>
          <StepCard step={d} delay={210} area="s4" />
        </div>
      </div>
    </section>
  )
}
