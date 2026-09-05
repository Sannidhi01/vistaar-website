export function Solution() {
  return (
    <section className="section section--alt" id="solution">
      <div className="shell">
        <header className="section__head">
          <p className="kicker">02 · The solution</p>
          <h2>A Story Ad Performance Lab for reader acquisition.</h2>
        </header>

        <blockquote className="oneliner">
          Upload a story ad image or video, and Vistaar profiles the creative, generates a
          content-conditioned reader audience, simulates tap-to-read behaviour, checks current trend
          context, and returns a <strong>directional reader-intent score</strong> before spend is
          committed.
        </blockquote>

        <div className="contrast">
          <div className="contrast__side contrast__side--no">
            <p className="contrast__label">Not this</p>
            <p>A generic virality grader that returns a single score and leaves you to guess what to change.</p>
          </div>
          <div className="contrast__side contrast__side--yes">
            <p className="contrast__label">This</p>
            <p>
              A content-conditioned reader audience: core genre readers, adjacent readers, skeptics and
              controls, who watch, skip, save, share, comment, follow or tap to read, and explain why.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
