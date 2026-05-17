import { motion } from 'framer-motion'

const roles = [
  {
    period: 'Jan 2025 – Present',
    title: 'Software Development Engineer',
    company: 'Spire.AI, Bangalore',
    bullets: [
      'Built LangGraph-based autonomous browser AI agent — zero human intervention, millions of records crawled per run',
      'Designed MCP agentic chatbots (Claude MCP + MongoDB MCP) — ~60% latency reduction vs traditional middleware stacks',
      'Engineered FAISS semantic skill matcher — 1M+ pairs at 50K rec/sec, days → minutes',
      'Built RAG system over 10M+ documents — Pinecone + Neo4j + Redis, <2s end-to-end latency',
      'Fine-tuned SLMs (Llama-3.2, Qwen2.5, Gemma-2) via LoRA/PEFT on Vertex AI GPU clusters',
    ],
  },
  {
    period: 'May 2024 – Dec 2024',
    title: 'AI Analyst — Product Quality & Metrics',
    company: 'Spire.AI, Bangalore',
    bullets: [
      'Built multi-agent AI Foundry pipelines on Vertex AI — ~70% reduction in manual taxonomy curation',
      'Fine-tuned NLP models (T5, DeBERTa, SciSpacy) — deployed to production HuggingFace endpoints',
      'Led AI Role Transformation analysis across 220K+ workforce, 7,000+ roles using GPT-4 + Claude',
    ],
  },
  {
    period: 'Jan 2024 – May 2024',
    title: 'Independent Consultant — AI & Data',
    company: 'Spire.AI, Bangalore',
    bullets: [
      'Built LLM skill gap pipelines with async ETL — 500K+ records to MongoDB',
      'Developed forecasting models (LSTM, SARIMA, Prophet, Chronos) feeding Power BI dashboards',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '8rem 5%' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} style={{ marginBottom: '4rem' }}
        >
          <p className="section-label" style={{ marginBottom: '1rem' }}>// experience</p>
          <h2 className="section-title">
            Where I've <span className="accent">Worked</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="timeline-wrap" style={{ position: 'relative', paddingLeft: '2rem' }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute', left: '5px', top: 0, bottom: 0,
            width: '1px', background: 'linear-gradient(to bottom, var(--accent), transparent)',
          }} />

          {roles.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              style={{ position: 'relative', marginBottom: '3.5rem' }}
            >
              {/* Dot */}
              <div className="timeline-dot" style={{ position: 'absolute', left: '-1.85rem', top: '6px' }} />

              <span style={{ fontFamily: 'Space Mono', fontSize: '0.7rem', color: 'var(--accent)', letterSpacing: '0.05em' }}>
                {r.period}
              </span>
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#e6edf3', margin: '0.4rem 0 0.2rem' }}>
                {r.title}
              </h3>
              <p style={{ fontFamily: 'Space Mono', fontSize: '0.75rem', color: 'var(--text-dim)', marginBottom: '1rem' }}>
                {r.company}
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {r.bullets.map(b => (
                  <li key={b} style={{ display: 'flex', gap: '0.7rem', fontSize: '0.8rem', color: 'var(--text)', lineHeight: 1.7 }}>
                    <span className="accent" style={{ flexShrink: 0, marginTop: '2px' }}>▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
