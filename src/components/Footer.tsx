export default function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      borderTop: '1px solid var(--border)',
      padding: '2rem 5%',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      flexWrap: 'wrap', gap: '1rem',
    }}>
      <span style={{ fontFamily: 'Space Mono', fontSize: '0.72rem', color: 'var(--text-dim)' }}>
        © 2025 Chetan C — All systems operational.
      </span>
      <span className="accent" style={{ fontFamily: 'Space Mono', fontSize: '0.72rem', letterSpacing: '0.12em' }}>
        AGENTIC AI ENGINEER
      </span>
    </footer>
  )
}
