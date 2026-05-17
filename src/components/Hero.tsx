import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const stats = [
  { value: '2+', label: 'Years Production AI' },
  { value: '1M+', label: 'Records / Run' },
  { value: '50K/s', label: 'Throughput' },
  { value: '<2s', label: 'RAG Latency' },
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
            Agentic AI Engineer · SDE · Bangalore, India
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
            style={{ fontSize: '1.1rem', color: '#e6edf3', fontFamily: 'Syne, sans-serif', fontWeight: 600, marginBottom: '0.8rem', lineHeight: 1.4 }}
          >
            I build autonomous AI agents that ship to production —<br />
            <span className="accent">LangGraph · LLM Orchestration · RAG · SLM Fine-tuning</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: 1.9, maxWidth: '520px', marginBottom: '2.5rem' }}
          >
            2+ years engineering production LLM systems — from autonomous browser agents and hybrid RAG pipelines
            to LoRA fine-tuned SLMs deployed on cloud GPU. Every project ships end to end.
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
          style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', flex: '0 0 auto' }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 + i * 0.1 }}
              className="card"
              style={{ padding: '1.2rem 2rem', textAlign: 'right', minWidth: '190px' }}
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
