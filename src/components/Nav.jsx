import { useState } from 'react'
import { useStickyNav } from '../hooks/useStickyNav.js'
import { navLinks, drawerLinks } from '../data/content.js'

export function Nav() {
  const stuck = useStickyNav()
  const [open, setOpen] = useState(false)

  return (
    <header className={`nav${stuck ? ' is-stuck' : ''}`}>
      <div className="shell nav__inner">
        <a className="brand" href="#top" aria-label="Vistaar home">
          <img className="brand__mark" src="/img/logo-mark.svg" alt="" width="34" height="34" />
          <span className="brand__name">
            Vi<span className="brand__name-alt">staar</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Sections">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="btn btn--ghost nav__cta" href="#demo">
            Watch the demo
          </a>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="navDrawer"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="navDrawer" className={`nav__drawer${open ? ' is-open' : ''}`} hidden={!open}>
        {drawerLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </header>
  )
}
