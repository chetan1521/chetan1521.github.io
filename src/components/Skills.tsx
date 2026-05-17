import { motion } from 'framer-motion'

const groups = [
  {
    label: 'AI / LLM',
    skills: ['LangGraph', 'Claude MCP', 'MongoDB MCP', 'Embedding Models', 'GPT-4', 'Gemini', 'Amazon Bedrock', 'Azure OpenAI', 'Agentic Workflows', 'Function Calling', 'Prompt Engineering', 'Model Finetuning'],
  },
  {
    label: 'ML / NLP',
    skills: ['RAG Pipelines', 'FAISS', 'Qdrant', 'Pinecone', 'Neo4j Graph DB', 'HuggingFace', 'LoRA / QLoRA', 'PEFT', 'llama.cpp', 'GGUF', 'DeBERTa', 'SciSpacy', 'BAAI/bge', 'Dense Vector', 'Hybrid Query Model', 'BM25', 'Semantic Models'],
  },
  {
    label: 'Cloud & MLOps',
    skills: ['GCP / Vertex AI', 'Azure', 'AWS Bedrock', 'Docker', 'FastAPI', 'Redis', 'Upstash', 'MongoDB Atlas', 'Weights & Biases', 'CI/CD', 'GitLab', 'Render', 'HF Spaces'],
  },
  {
    label: 'Programming & Data',
    skills: ['Python', 'TypeScript', 'SQL', 'Playwright', 'Selenium', 'MongoDB', 'ReactJS', 'Knowledge Graph', 'Power BI', 'Pydantic', 'structlog', 'Vector DB'],
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

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
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
