import { motion } from 'framer-motion'

const groups = [
  {
    label: 'AI / LLM',
    skills: ['Conversational AI / Chatbots', 'Claude MCP', 'MongoDB MCP', 'MCP Server Development', 'Harness Engineering (Agent + Eval)', 'Multi-Agent Systems', 'Function Calling', 'Tool Orchestration', 'Agentic Workflows', 'Prompt Engineering', 'GPT-4', 'Gemini', 'LLaMA', 'Amazon Bedrock'],
  },
  {
    label: 'ML / NLP',
    skills: ['RAG Pipelines', 'NLU', 'Dialogue Management', 'Intent Classification', 'Entity Extraction', 'Semantic Chunking', 'Hybrid Retrieval (BM25 + Dense)', 'Cross-Encoder Reranking', 'FAISS', 'Pinecone', 'Neo4j Graph DB', 'ANN Indexing', 'IBM Docling', 'HuggingFace', 'SLM Fine-tuning (LoRA · llama.cpp)'],
  },
  {
    label: 'Cloud & MLOps',
    skills: ['GCP (Vertex AI)', 'AWS (Bedrock)', 'FastAPI', 'Docker', 'Redis', 'CI/CD (GitHub Actions)', 'Structured Logging', 'Observability', 'Cloud-native Deployment'],
  },
  {
    label: 'Programming & Data',
    skills: ['Python', 'TypeScript', 'Node.js', 'SQL', 'REST APIs', 'ReactJS', 'Streamlit', 'Playwright', 'Selenium', 'MongoDB', 'Elastic Search', 'Vector Databases', 'Power BI'],
  },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '8rem 5%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} style={{ marginBottom: '4rem' }}
        >
          <p className="section-label" style={{ marginBottom: '1rem' }}>// skills</p>
          <h2 className="section-title">
            What I <span className="accent">Know</span>
          </h2>
        </motion.div>

        <div className="responsive-grid cols-skills">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              className="card"
              style={{ padding: '1.8rem' }}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: gi * 0.1 }}
            >
              <p className="accent" style={{ fontFamily: 'Space Mono', fontSize: '0.72rem', letterSpacing: '0.12em', marginBottom: '1.2rem', textTransform: 'uppercase' }}>
                {g.label}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {g.skills.map((s, si) => (
                  <motion.span
                    key={s}
                    className="tag"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                    viewport={{ once: true }} transition={{ delay: gi * 0.05 + si * 0.02 }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
