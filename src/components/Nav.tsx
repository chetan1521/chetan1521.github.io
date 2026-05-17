import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const links = ['About', 'Projects', 'Experience', 'Skills', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(6,10,18,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '0 5%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '64px',
      }}
    >
      {/* Logo */}
      <span className="nav-logo" style={{ fontFamily: 'Space Mono', fontWeight: 700, fontSize: '1rem', color: '#e6edf3', letterSpacing: '0.05em' }}>
        // <span className="accent">CHETAN.C</span>
      </span>

      {/* Desktop links */}
      <div className="nav-desktop-links" style={{ gap: '2rem', alignItems: 'center' }}>
        {links.map(l => (
          <Link
            key={l}
            to={l.toLowerCase()}
            smooth spy offset={-70} duration={500}
            style={{ fontFamily: 'Space Mono', fontSize: '0.78rem', color: 'var(--text-dim)', letterSpacing: '0.08em', transition: 'color 0.2s' }}
            activeStyle={{ color: 'var(--accent)' }}
            className="hover:text-[var(--accent)]"
          >
            {l}
          </Link>
        ))}
        <a
          href="mailto:chetangowda1521@gmail.com"
          className="btn-primary"
          style={{ fontSize: '0.72rem', padding: '8px 20px' }}
        >
          HIRE ME →
        </a>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="nav-mobile-toggle"
        style={{ background: 'none', border: 'none', color: 'var(--accent)', fontSize: '1.6rem', padding: '0.5rem' }}
        aria-label="menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '64px', left: 0, right: 0,
          background: 'rgba(6,10,18,0.97)', backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--border)',
          display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '2rem 5%',
        }}>
          {links.map(l => (
            <Link
              key={l}
              to={l.toLowerCase()}
              smooth spy offset={-70} duration={500}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: 'Space Mono', fontSize: '0.9rem', color: 'var(--text)' }}
            >
              {l}
            </Link>
          ))}
          <a href="mailto:chetangowda1521@gmail.com" className="btn-primary" style={{ textAlign: 'center' }}>
            HIRE ME →
          </a>
        </div>
      )}
    </nav>
  )
}
