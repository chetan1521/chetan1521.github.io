import { motion } from 'framer-motion'

const chips = [
  // Orchestration & Agents
  'LangGraph', 'LangChain', 'Claude MCP', 'MongoDB MCP', 'Agentic Workflows', 'Function Calling',
  // LLMs & APIs
  'GPT-4', 'Claude (Anthropic)', 'Gemini', 'Amazon Bedrock', 'Azure AI Foundry', 'Vertex AI',
  // Chatbots
  'MCP Chatbots', 'Conversational AI', 'Multi-turn Agents', 'RAG Chatbots',
  // RAG & Vector
  'RAG Pipelines', 'Hybrid Retrieval', 'Pinecone', 'Qdrant', 'FAISS', 'Neo4j', 'BM25', 'BAAI/bge', 'Cross-Encoder Reranking',
  // Fine-tuning
  'LoRA / QLoRA', 'PEFT', 'HuggingFace', 'llama.cpp', 'GGUF',
  // Browser & APIs
  'Playwright', 'Selenium', 'FastAPI', 'Streamlit',
  // Infra & MLOps
  'Docker', 'docker-compose', 'CI/CD', 'GitLab', 'Redis', 'MongoDB', 'SQL',
  // Cloud
  'GCP · Vertex AI', 'Azure', 'AWS Bedrock',
  // Code
  'Python', 'TypeScript', 'Power BI',
]

const prodWork = [
  {
    title: 'Autonomous Browser AI Agent',
    desc: 'Built an autonomous agent that crawls millions of career pages, intercepts live network APIs, and extracts real-time job data — zero human intervention. Powers a live production mobile product.',
    stack: ['Playwright', 'Async Python', 'MongoDB', 'Docker'],
  },
  {
    title: 'MCP Agentic Chatbots',
    desc: 'Designed conversational AI agents using Claude MCP + MongoDB MCP — Claude reasons natively over live data with zero middleware. Achieved ~60% latency reduction vs traditional chatbot stacks.',
    stack: ['Claude MCP', 'MongoDB MCP', 'FastAPI', 'Redis'],
  },
  {
    title: 'Biomedical Concept Search Engine',
    desc: 'High-throughput semantic search over 1M+ biomedical entities (UMLS/SNOMED/MeSH) at 50K records/sec using GPU-accelerated BAAI/bge embeddings and FAISS ANN indexing. Sub-100ms query latency via FastAPI.',
    stack: ['FAISS', 'BAAI/bge', 'PyTorch', 'FastAPI'],
  },
  {
    title: 'RAG System — 10M+ Documents',
    desc: 'Production RAG over 10M+ documents with hybrid retrieval, cross-encoder reranking, and graph-based context expansion. Sub-2-second end-to-end latency with Redis caching.',
    stack: ['Pinecone', 'Neo4j', 'Redis', 'LangChain'],
  },
  {
    title: 'SLM Fine-tuning Pipeline',
    desc: 'End-to-end LoRA/PEFT fine-tuning for Llama-3.2, Qwen2.5, and Gemma-2 on domain-specific datasets. GGUF quantization and FastAPI deployment on Vertex AI GPU clusters.',
    stack: ['LoRA/PEFT', 'Vertex AI GPU', 'llama.cpp', 'Docker'],
  },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '8rem 5%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Top: Bio + chips */}
        <div className="mobile-stack-gap mobile-stack-mb" style={{ display: 'flex', gap: '5rem', flexWrap: 'wrap', alignItems: 'flex-start', marginBottom: '6rem' }}>

          {/* Bio */}
          <motion.div
            style={{ flex: '1 1 420px' }}
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
          >
            <p className="section-label" style={{ marginBottom: '1rem' }}>// about</p>
            <h2 className="section-title" style={{ marginBottom: '2rem' }}>
              Who I <span className="accent">Am</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.85rem', lineHeight: 1.9, color: 'var(--text)' }}>
              <p>
                I'm an <span className="accent">Agentic AI Engineer and SDE</span> with 2+ years building production LLM systems — not prototypes, not demos. Systems that process millions of records, answer queries in under 2 seconds, and run without human intervention.
              </p>
              <p>
                My core expertise is <span style={{ color: '#e6edf3' }}>LangGraph agent orchestration</span>, <span style={{ color: '#e6edf3' }}>MCP chatbot development</span> (Claude MCP + MongoDB MCP), and <span style={{ color: '#e6edf3' }}>hybrid RAG pipelines</span> — Pinecone, Neo4j graph expansion, cross-encoder reranking. I've shipped autonomous browser agents, multi-turn conversational agents, and LoRA fine-tuned SLMs on cloud GPU.
              </p>
              <p>
                I work across the full AI stack: <span style={{ color: '#e6edf3' }}>LLM APIs</span> (GPT-4, Claude, Gemini, Amazon Bedrock, Azure AI Foundry, Vertex AI), <span style={{ color: '#e6edf3' }}>RAG & vector databases</span> (Pinecone, Qdrant, FAISS, Neo4j), <span style={{ color: '#e6edf3' }}>SLM fine-tuning</span> (LoRA/QLoRA, GGUF, llama.cpp), and <span style={{ color: '#e6edf3' }}>production infra</span> (Docker, CI/CD, FastAPI, Redis, GitLab).
              </p>
              <p>
                Every system I build ships end to end — from architecture to deployment.
              </p>
            </div>
          </motion.div>

          {/* Tech chips */}
          <motion.div
            style={{ flex: '1 1 320px' }}
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="section-label" style={{ marginBottom: '1.5rem' }}>// tech stack</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem' }}>
              {chips.map((chip, i) => (
                <motion.span
                  key={chip}
                  className="tag"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.02 }}
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Production Work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label" style={{ marginBottom: '1rem' }}>// production work</p>
          <h2 className="section-title" style={{ marginBottom: '0.8rem' }}>
            Systems I've <span className="accent">Shipped</span>
          </h2>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            Production systems built and deployed at scale — overview of key projects from professional work.
          </p>

          <div className="responsive-grid cols-work">
            {prodWork.map((w, i) => (
              <motion.div
                key={w.title}
                className="card"
                style={{ padding: '1.6rem' }}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -3 }}
              >
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '0.95rem', color: '#e6edf3', marginBottom: '0.7rem' }}>
                  <span className="accent">▸</span> {w.title}
                </h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-dim)', lineHeight: 1.8, marginBottom: '1rem' }}>
                  {w.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {w.stack.map(s => <span key={s} className="tag">{s}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
