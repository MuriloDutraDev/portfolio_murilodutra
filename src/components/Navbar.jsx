import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, m as motion } from 'framer-motion'

const links = [['Sobre', 'sobre'], ['Serviços', 'servicos'], ['Projetos', 'projetos'], ['Contato', 'contato']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  useEffect(() => {
    if (!open) return
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all ${scrolled ? 'border-line/80 bg-canvas/90 backdrop-blur-xl' : 'border-transparent bg-canvas/70'}`}>
      <nav className="container-site flex h-[72px] items-center justify-between" aria-label="Navegação principal">
        <a href="#inicio" className="focus-ring text-[15px] font-semibold tracking-[-.02em]">Murilo Dutra<span className="text-brand">.</span></a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, id]) => <a key={id} href={`#${id}`} className="focus-ring text-sm text-muted transition-colors hover:text-ink">{label}</a>)}
          <a href="#contato" className="focus-ring rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-zinc-950 transition hover:bg-white">Vamos conversar</a>
        </div>
        <button onClick={() => setOpen(!open)} className="focus-ring rounded-md p-2 md:hidden" aria-label={open ? 'Fechar menu' : 'Abrir menu'} aria-expanded={open} aria-controls="menu-mobile">{open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}</button>
      </nav>
      <AnimatePresence>{open && (
        <motion.div id="menu-mobile" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-line bg-surface md:hidden">
          <div className="container-site flex flex-col py-4">{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="py-3 text-sm text-muted">{label}</a>)}</div>
        </motion.div>
      )}</AnimatePresence>
    </header>
  )
}
