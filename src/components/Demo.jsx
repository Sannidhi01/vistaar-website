export function Demo() {
  return (
    <section className="section" id="demo">
      <div className="shell">
        <header className="section__head">
          <p className="kicker">05 · The demo</p>
          <h2>From creative to reader-acquisition report.</h2>
          <p className="section__sub">
            Upload a story ad image or video, add the caption or premise, and start the simulation. Watch
            reader agents react live, then open the Reader Acquisition Report to see whether this
            creative is ready for spend.
          </p>
        </header>

        <figure className="demo__fig">
          <video
            src="/video/demo.mp4"
            poster="/video/demo-poster.jpg"
            controls
            muted
            playsInline
            preload="metadata"
          />
        </figure>
      </div>
    </section>
  )
}
