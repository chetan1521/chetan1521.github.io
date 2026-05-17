import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  {
    num: '01',
    badge: 'ECOSYSTEM',
    title: 'MedMind — Medical Research Agent',
    desc: 'LangGraph multi-tool agent connecting live ClinicalTrials.gov data + PubMed RAG + fine-tuned biomedical SLM. NVIDIA NIM for synthesis, Groq for fast planning, Streamlit UI on HuggingFace Spaces.',
    tags: ['LangGraph', 'NVIDIA NIM', 'Groq', 'MongoDB', 'Streamlit'],
    url: 'https://github.com/chetan1521/medical-research-agent',
  },
  {
    num: '02',
    badge: 'AGENT',
    title: 'Clinical Trial Crawler',
    desc: 'LangGraph autonomous browser agent crawling 500K+ clinical trials from ClinicalTrials.gov + WHO ICTRP. Groq Llama-3.1-8B drives navigation, NVIDIA NIM extracts structured trial schemas via JSON mode. Zero selectors.',
    tags: ['LangGraph', 'Playwright', 'Groq', 'NVIDIA NIM', 'Redis'],
    url: 'https://github.com/chetan1521/clinical-trial-crawler',
  },
  {
    num: '03',
    badge: 'RAG',
    title: 'MedRAG Paper Assistant',
    desc: 'Production RAG over 10M+ PubMed abstracts. Hybrid BM25 + Qdrant dense retrieval → RRF fusion → BAAI/bge cross-encoder reranking → Neo4j AuraDB citation graph expansion. <2s end-to-end. 100% free stack.',
    tags: ['LangGraph', 'Qdrant', 'Neo4j', 'BM25', 'BAAI/bge'],
    url: 'https://github.com/chetan1521/medrag-paper-assistant',
  },
  {
    num: '04',
    badge: 'FINE-TUNE',
    title: 'Biomedical SLM Fine-tune',
    desc: 'QLoRA pipeline fine-tuning Llama-3.2 / BioMistral on PubMedQA + MedQA + MedMCQA (all free HuggingFace datasets) using free GPU — Colab T4 or Kaggle P100. W&B tracking → GGUF → FastAPI deployment.',
    tags: ['LoRA/PEFT', 'QLoRA', 'HuggingFace', 'llama.cpp', 'Colab T4'],
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
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(520px, 1fr))', gap: '1.5rem' }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              className="card"
              style={{ padding: '2rem' }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ fontFamily: 'Space Mono', fontSize: '0.72rem', color: 'var(--text-dim)' }}>{p.num}</span>
                  <span className="tag" style={{ fontSize: '0.62rem', letterSpacing: '0.1em' }}>{p.badge}</span>
                </div>
                <a href={p.url} target="_blank" rel="noopener noreferrer"
                  style={{ color: 'var(--text-dim)', transition: 'color 0.2s' }}
                  className="hover:text-[var(--accent)]"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {/* Title */}
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: '#e6edf3', marginBottom: '0.8rem' }}>
                {p.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                {p.desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
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
