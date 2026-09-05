const links = [
  { href: '#problem', label: 'Problem' },
  { href: '#how', label: 'How it works' },
  { href: '#pricing', label: 'Model' },
  { href: '#ask', label: 'Ask' },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__brand">
          <img src="/img/logo-mark.svg" alt="" width="30" height="30" />
          <span>
            Vi<span className="brand__name-alt">staar</span>
          </span>
        </div>

        <p className="footer__note">
          Simulated reader audiences produce directional signals for comparing creative
          options, they are not guaranteed predictions of real-world performance.
        </p>

        <nav className="footer__links" aria-label="Footer">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
