import { motion } from 'framer-motion'

const chips = [
  'LangGraph', 'Claude MCP', 'MongoDB MCP', 'NVIDIA NIM', 'Groq',
  'RAG Pipelines', 'Qdrant', 'Neo4j', 'FAISS', 'Pinecone',
  'LoRA Fine-tuning', 'QLoRA', 'llama.cpp', 'GGUF',
  'Playwright', 'FastAPI', 'Docker', 'Vertex AI', 'GCP', 'AWS',
]

export default function About() {
  return (
    <section id="about" style={{ padding: '8rem 5%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '5rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>

        {/* Left: Bio */}
        <motion.div
          style={{ flex: '1 1 400px' }}
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p className="section-label" style={{ marginBottom: '1rem' }}>// about</p>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>
            Who I <span className="accent">Am</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem', lineHeight: 1.85, color: 'var(--text)' }}>
            <p>
              I'm an <span className="accent">Agentic AI Engineer</span> who builds AI systems that reason, act, and ship to production — not just demos that look good in a notebook.
            </p>
            <p>
              My work sits at the intersection of <span style={{ color: '#e6edf3' }}>LLM orchestration</span>, <span style={{ color: '#e6edf3' }}>autonomous agents</span>, and <span style={{ color: '#e6edf3' }}>RAG systems</span>. I use LangGraph to model complex multi-step agent loops as typed stateful graphs — every node, edge, and conditional branch intentional.
            </p>
            <p>
              Currently building <span className="accent">MedMind</span> — a 4-project open-source ecosystem for medical research intelligence using NVIDIA NIM, Groq, Qdrant, Neo4j, and free GPU compute (Colab + Kaggle). 100% free stack, 100% real.
            </p>
            <p>
              I care deeply about systems that are <span style={{ color: '#e6edf3' }}>actually buildable</span> — not just architecturally impressive on paper.
            </p>
          </div>
        </motion.div>

        {/* Right: Tech chips */}
        <motion.div
          style={{ flex: '1 1 300px' }}
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="section-label" style={{ marginBottom: '1.5rem' }}>// tech stack</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {chips.map((chip, i) => (
              <motion.span
                key={chip}
                className="tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                {chip}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
