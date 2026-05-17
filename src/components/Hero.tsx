import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const stats = [
  { value: '10M+', label: 'Docs in RAG' },
  { value: '500K+', label: 'Records Processed' },
  { value: '4', label: 'AI Systems Built' },
  { value: '100%', label: 'Free Stack' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 5%',
        paddingTop: '64px',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap' }}>

        {/* Left: Text */}
        <div style={{ flex: '1 1 500px' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="section-label" style={{ marginBottom: '1.5rem' }}
          >
            Agentic AI Engineer · Bangalore, India
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1, color: '#e6edf3', marginBottom: '0.2rem' }}
          >
            CHETAN
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="accent glow"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1, marginBottom: '2rem' }}
          >
            C.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            style={{ fontSize: '1.15rem', color: '#e6edf3', fontFamily: 'Syne, sans-serif', fontWeight: 600, marginBottom: '1rem' }}
          >
            Building AI that acts, not just answers.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            style={{ fontSize: '0.85rem', color: 'var(--text-dim)', lineHeight: 1.8, maxWidth: '500px', marginBottom: '2.5rem' }}
          >
            LangGraph · NVIDIA NIM · RAG · LoRA Fine-tuning · Playwright · Groq
            <br />Building the MedMind open-source medical AI research ecosystem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <Link to="projects" smooth duration={500} offset={-70}>
              <button className="btn-primary">VIEW PROJECTS</button>
            </Link>
            <Link to="contact" smooth duration={500} offset={-70}>
              <button className="btn-outline">GET IN TOUCH</button>
            </Link>
          </motion.div>
        </div>

        {/* Right: Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', flex: '0 0 auto' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
              className="card"
              style={{ padding: '1.2rem 2rem', textAlign: 'right', minWidth: '180px' }}
            >
              <div className="accent glow" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '2rem', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', letterSpacing: '0.08em', marginTop: '4px' }}>{s.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
