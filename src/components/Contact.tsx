import { motion } from 'framer-motion'
import { Mail, Phone, ExternalLink } from 'lucide-react'

const cards = [
  { icon: Mail, label: 'Email', value: 'chetangowda1521@gmail.com', href: 'mailto:chetangowda1521@gmail.com' },
  { icon: ExternalLink, label: 'LinkedIn', value: 'linkedin.com/in/chetan-c-1ba71123b', href: 'https://linkedin.com/in/chetan-c-1ba71123b' },
  { icon: ExternalLink, label: 'GitHub', value: 'github.com/chetan1521', href: 'https://github.com/chetan1521' },
  { icon: Phone, label: 'Phone', value: '+91 98869 98081', href: 'tel:+919886998081' },
]

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '8rem 5%' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', gap: '5rem', flexWrap: 'wrap', alignItems: 'center' }}>

        {/* Left */}
        <motion.div
          style={{ flex: '1 1 300px' }}
          initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-label" style={{ marginBottom: '1rem' }}>// contact</p>
          <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
            Let's build<br />something <span className="accent">real.</span>
          </h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', lineHeight: 1.9 }}>
            Open to Agentic AI · LLM Engineer · AI Systems roles.<br />
            Remote ✓ · Based in Bangalore, India
          </p>
        </motion.div>

        {/* Right: contact cards */}
        <motion.div
          style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '1rem' }}
          initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="card"
              style={{ padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
            >
              <c.icon size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontFamily: 'Space Mono', fontSize: '0.65rem', color: 'var(--text-dim)', letterSpacing: '0.1em', marginBottom: '2px' }}>
                  {c.label}
                </div>
                <div style={{ fontFamily: 'Space Mono', fontSize: '0.78rem', color: '#e6edf3' }}>
                  {c.value}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
