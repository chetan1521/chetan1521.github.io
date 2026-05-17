import { motion } from 'framer-motion'

const chips = [
  // Orchestration
  'LangGraph', 'LangChain', 'Claude MCP', 'MongoDB MCP', 'Agentic Workflows',
  // LLMs
  'NVIDIA NIM', 'Groq', 'GPT-4', 'Claude (Anthropic)', 'Gemini', 'Azure OpenAI', 'Amazon Bedrock',
  // RAG & Vector
  'RAG Pipelines', 'Hybrid Retrieval', 'Qdrant', 'Pinecone', 'FAISS', 'Neo4j', 'BM25',
  'BAAI/bge', 'Cross-Encoder Reranking', 'IBM Docling',
  // Fine-tuning
  'LoRA / QLoRA', 'PEFT', 'HuggingFace', 'llama.cpp', 'GGUF', 'Vertex AI GPU',
  // Browser & Infra
  'Playwright', 'FastAPI', 'Docker', 'Redis', 'MongoDB Atlas',
  // Cloud
  'GCP · Vertex AI', 'Azure', 'AWS Bedrock',
  // Code
  'Python', 'TypeScript', 'SQL', 'Streamlit',
]

export default function About() {
  return (
    <section id="about" style={{ padding: '8rem 5%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '5rem', flexWrap: 'wrap', alignItems: 'flex-start' }}>

        {/* Left: Bio */}
        <motion.div
          style={{ flex: '1 1 420px' }}
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
        >
          <p className="section-label" style={{ marginBottom: '1rem' }}>// about</p>
          <h2 className="section-title" style={{ marginBottom: '2rem' }}>
            Who I <span className="accent">Am</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem', lineHeight: 1.85, color: 'var(--text)' }}>
            <p>
              I'm an <span className="accent">Agentic AI Engineer and SDE</span> with 2+ years building production LLM systems — not prototypes, not demos. Systems that process millions of records, answer queries in under 2 seconds, and run without human intervention.
            </p>
            <p>
              My core expertise is <span style={{ color: '#e6edf3' }}>LangGraph-based agent orchestration</span> — modelling complex multi-step reasoning as typed stateful graphs with conditional routing, tool use, and Redis checkpointing. I've built autonomous browser agents, hybrid RAG pipelines over 10M+ documents, and LoRA fine-tuning pipelines on cloud GPU clusters.
            </p>
            <p>
              I work across the full AI stack: <span style={{ color: '#e6edf3' }}>LLM APIs</span> (NVIDIA NIM, Groq, Claude, GPT-4), <span style={{ color: '#e6edf3' }}>vector & graph databases</span> (Qdrant, Pinecone, Neo4j), <span style={{ color: '#e6edf3' }}>SLM fine-tuning</span> (LoRA/QLoRA, llama.cpp, GGUF), and <span style={{ color: '#e6edf3' }}>production infra</span> (FastAPI, Docker, GCP Vertex AI, Azure).
            </p>
            <p>
              Every system I build ships end to end — from architecture to deployment.
            </p>
          </div>
        </motion.div>

        {/* Right: Tech chips */}
        <motion.div
          style={{ flex: '1 1 320px' }}
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="section-label" style={{ marginBottom: '1.5rem' }}>// tech stack</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {chips.map((chip, i) => (
              <motion.span
                key={chip}
                className="tag"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.025 }}
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
