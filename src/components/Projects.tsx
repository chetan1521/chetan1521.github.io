import { motion } from 'framer-motion'
import { ExternalLink, Package } from 'lucide-react'

const flagship = {
  title: 'grounded-rag-mcp',
  badge: 'PUBLISHED · OPEN SOURCE',
  desc: 'An MCP server that gives any LLM host grounded, cited retrieval over its own documents — hybrid retrieval (BM25 + dense) fused with Reciprocal Rank Fusion, cross-encoder reranking, grounded answers via MCP sampling, and a built-in eval harness (recall@k, MRR, hit-rate). Shipped in two languages with full type safety (mypy --strict / strict TypeScript), test suites, and CI/CD automated publishing.',
  tags: ['MCP Server', 'Hybrid Retrieval', 'BM25 + Dense · RRF', 'Cross-Encoder Rerank', 'MCP Sampling', 'Eval Harness', 'Python', 'TypeScript'],
  links: [
    { label: 'PyPI', url: 'https://pypi.org/project/grounded-rag-mcp/' },
    { label: 'npm', url: 'https://www.npmjs.com/package/grounded-rag-mcp' },
    { label: 'GitHub · Python', url: 'https://github.com/chetan1521/grounded-rag-mcp' },
    { label: 'GitHub · TypeScript', url: 'https://github.com/chetan1521/grounded-rag-mcp-ts' },
  ],
}

const labs = [
  {
    title: 'MedMind — Medical Research Agent',
    desc: 'LangGraph multi-tool agent orchestrating live ClinicalTrials.gov data, hybrid PubMed RAG, and a fine-tuned biomedical SLM into one conversational research assistant.',
    tags: ['LangGraph', 'NVIDIA NIM', 'Groq', 'Streamlit'],
    url: 'https://github.com/chetan1521/medical-research-agent',
  },
  {
    title: 'Clinical Trial Crawler',
    desc: 'LangGraph autonomous browser agent crawling 500K+ clinical trials — Groq drives navigation, NVIDIA NIM extracts structured schemas. Zero hand-written selectors.',
    tags: ['LangGraph', 'Playwright', 'Groq', 'Pydantic v2'],
    url: 'https://github.com/chetan1521/clinical-trial-crawler',
  },
  {
    title: 'MedRAG Paper Assistant',
    desc: 'RAG over 10M+ PubMed abstracts — parallel BM25 + Qdrant dense retrieval fused via RRF, bge cross-encoder reranking, Neo4j citation-graph expansion. Sub-2s at scale.',
    tags: ['Qdrant', 'Neo4j', 'BM25 · RRF', 'BAAI/bge'],
    url: 'https://github.com/chetan1521/medrag-paper-assistant',
  },
  {
    title: 'Biomedical SLM Pipeline',
    desc: 'End-to-end fine-tuning for Llama-3.2 / BioMistral on PubMedQA + MedQA — QLoRA → LoRA adapters → W&B → GGUF via llama.cpp → OpenAI-compatible FastAPI server.',
    tags: ['QLoRA · PEFT', 'llama.cpp · GGUF', 'Vertex AI', 'W&B'],
    url: 'https://github.com/chetan1521/biomedical-slm-finetune',
  },
]

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '8rem 5%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} style={{ marginBottom: '3rem' }}
        >
          <p className="section-label" style={{ marginBottom: '1rem' }}>// projects</p>
          <h2 className="section-title">
            Published &amp; <span className="accent">Built</span>
          </h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', marginTop: '1rem', maxWidth: '560px', lineHeight: 1.8 }}>
            Open-source tooling shipped to PyPI and npm — plus a lab of AI systems I build to push my own limits.
          </p>
        </motion.div>

        {/* Flagship — published package */}
        <motion.div
          className="card flagship-card"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ padding: '2.4rem', marginBottom: '3.5rem' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', minWidth: 0 }}>
              <Package size={22} color="var(--accent)" style={{ flexShrink: 0 }} />
              <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.5rem', color: '#e6edf3' }}>
                {flagship.title}
              </h3>
              <span className="tag" style={{ fontSize: '0.6rem', letterSpacing: '0.12em', whiteSpace: 'normal' }}>{flagship.badge}</span>
            </div>
          </div>

          <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', lineHeight: 1.9, marginBottom: '1.5rem', maxWidth: '760px' }}>
            {flagship.desc}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.6rem' }}>
            {flagship.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
            {flagship.links.map(l => (
              <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer"
                className="btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.72rem', padding: '9px 18px' }}>
                {l.label} <ExternalLink size={13} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Labs */}
        <motion.p
          className="section-label"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ marginBottom: '1.5rem' }}
        >
          // labs · experiments
        </motion.p>

        <div className="responsive-grid cols-projects">
          {labs.map((p, i) => (
            <motion.div
              key={p.title}
              className="card"
              style={{ padding: '1.8rem' }}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1rem', color: '#e6edf3' }}>
                  {p.title}
                </h3>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.title} on GitHub`}
                  style={{ color: 'var(--text-dim)' }}
                >
                  <ExternalLink size={16} />
                </a>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: '1.2rem' }}>
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
