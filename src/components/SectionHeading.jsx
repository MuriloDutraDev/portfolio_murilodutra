import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, copy }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .35 }} transition={{ duration: .55 }}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </motion.div>
  )
}
