import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    num: '01',
    badge: 'ECOSYSTEM',
    title: 'MedMind — Medical Research Agent',
    desc: 'LangGraph multi-tool agent orchestrating live ClinicalTrials.gov data, hybrid PubMed RAG, and a fine-tuned biomedical SLM into one conversational research assistant. NVIDIA NIM for synthesis, Groq for fast planning, Streamlit UI.',
    tags: ['LangGraph', 'NVIDIA NIM', 'Groq', 'MongoDB', 'Streamlit', 'MemorySaver'],
    url: 'https://github.com/chetan1521/medical-research-agent',
  },
  {
    num: '02',
    badge: 'AUTONOMOUS AGENT',
    title: 'Clinical Trial Crawler',
    desc: 'LangGraph autonomous browser agent crawling 500K+ clinical trials from ClinicalTrials.gov + WHO ICTRP. Groq Llama-3.1-8B drives all navigation decisions, NVIDIA NIM extracts structured schemas via JSON mode. Zero hand-written selectors, Playwright network interception.',
    tags: ['LangGraph', 'Playwright', 'Groq', 'NVIDIA NIM', 'Redis Bloom', 'Pydantic v2'],
    url: 'https://github.com/chetan1521/clinical-trial-crawler',
  },
  {
    num: '03',
    badge: 'RAG SYSTEM',
    title: 'MedRAG Paper Assistant',
    desc: 'Production RAG over 10M+ PubMed abstracts — parallel BM25 + Qdrant dense retrieval fused via RRF, BAAI/bge cross-encoder reranking, Neo4j AuraDB multi-hop citation graph expansion, Redis caching. Sub-2-second end-to-end latency at scale.',
    tags: ['LangGraph', 'Qdrant', 'Neo4j', 'BM25 · RRF', 'BAAI/bge', 'NVIDIA NIM'],
    url: 'https://github.com/chetan1521/medrag-paper-assistant',
  },
  {
    num: '04',
    badge: 'SLM FINE-TUNING',
    title: 'Biomedical SLM Pipeline',
    desc: 'End-to-end fine-tuning pipeline for Llama-3.2 and BioMistral on PubMedQA + MedQA + MedMCQA datasets. QLoRA (4-bit base loading) → LoRA adapter training → W&B experiment tracking → GGUF quantization via llama.cpp → OpenAI-compatible FastAPI server.',
    tags: ['QLoRA · PEFT', 'HuggingFace', 'llama.cpp · GGUF', 'Vertex AI GPU', 'W&B', 'FastAPI'],
    url: 'https://github.com/chetan1521/biomedical-slm-finetune',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '8rem 5%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} style={{ marginBottom: '4rem' }}
        >
          <p className="section-label" style={{ marginBottom: '1rem' }}>// projects</p>
          <h2 className="section-title">
            What I've <span className="accent">Built</span>
          </h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '1rem', maxWidth: '560px', lineHeight: 1.8 }}>
            Four interconnected AI systems — one ecosystem. Each solves a distinct problem; together they form a complete medical research intelligence platform.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '1.5rem' }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              className="card"
              style={{ padding: '2rem' }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontFamily: 'Space Mono', fontSize: '0.7rem', color: 'var(--text-dim)' }}>{p.num}</span>
                  <span className="tag" style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}>{p.badge}</span>
                </div>
                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text-dim)', transition: 'color 0.2s' }}
                  className="hover:text-(--accent)"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#e6edf3', marginBottom: '0.8rem' }}>
                {p.title}
              </h3>

              <p style={{ fontSize: '0.79rem', color: 'var(--text-dim)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                {p.desc}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <a href="https://github.com/chetan1521" target="_blank" rel="noopener noreferrer" className="btn-outline">
            VIEW ALL ON GITHUB →
          </a>
        </motion.div>

      </div>
    </section>
  )
}
