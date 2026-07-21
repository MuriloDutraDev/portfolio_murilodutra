import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowUpRight, Code2, Sparkles } from 'lucide-react'

export default function HeroVisual() {
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const smoothRotateX = useSpring(rotateX, { stiffness: 150, damping: 22, mass: .7 })
  const smoothRotateY = useSpring(rotateY, { stiffness: 150, damping: 22, mass: .7 })

  function handleMove(event) {
    const rect = event.currentTarget.getBoundingClientRect()
    const normalizedX = (event.clientX - rect.left) / rect.width - .5
    const normalizedY = (event.clientY - rect.top) / rect.height - .5
    rotateY.set(normalizedX * 12)
    rotateX.set(normalizedY * -12)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: .94, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: .8, delay: .15, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto h-[430px] w-full max-w-[460px] sm:h-[540px]"
      style={{ perspective: 1100 }}
    >
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }} className="absolute -inset-3 rounded-[2.5rem] border border-dashed border-white/10" />
      <motion.div animate={{ scale: [1, 1.08, 1], opacity: [.06, .14, .06] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute inset-0 rounded-[2rem] bg-white blur-[80px]" />
      <motion.div onMouseMove={handleMove} onMouseLeave={() => { rotateX.set(0); rotateY.set(0) }} initial={{ clipPath: 'inset(100% 0 0 0 round 2rem)' }} animate={{ clipPath: 'inset(0% 0 0 0 round 2rem)' }} transition={{ duration: 1.05, delay: .18, ease: [0.22, 1, 0.36, 1] }} style={{ rotateX: smoothRotateX, rotateY: smoothRotateY, transformStyle: 'preserve-3d' }} className="absolute inset-4 overflow-hidden rounded-[2rem] border border-white/15 bg-panel shadow-2xl shadow-black/70 will-change-transform sm:inset-5">
        <motion.img initial={{ scale: 1.13 }} animate={{ scale: 1 }} transition={{ duration: 1.3, delay: .2, ease: [0.22, 1, 0.36, 1] }} src="/images/murilo-dutra.jpeg" alt="Murilo Dutra, desenvolvedor web em Canoas" width="536" height="954" decoding="async" fetchPriority="high" className="h-full w-full object-cover object-[center_30%] saturate-[.75] contrast-[1.08]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/10" />
        <motion.div initial={{ x: '-160%', skewX: -18 }} animate={{ x: '220%' }} transition={{ duration: 1.2, delay: 1.05, ease: 'easeInOut' }} className="pointer-events-none absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="text-xs font-medium uppercase tracking-[.2em] text-zinc-300">Desenvolvedor web</p>
          <p className="mt-2 text-2xl font-semibold tracking-[-.04em] text-white">Murilo Dutra</p>
        </div>
      </motion.div>
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute -left-2 top-[18%] flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/90 px-4 py-3 shadow-soft backdrop-blur-xl sm:-left-7">
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-zinc-200"><Code2 size={18} /></span>
        <div><p className="text-[10px] uppercase tracking-wider text-muted">Especialidade</p><p className="text-sm font-semibold">Web responsiva</p></div>
      </motion.div>
      <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: .7 }} className="absolute -right-2 bottom-[19%] flex items-center gap-2 rounded-full border border-white/20 bg-zinc-100 px-4 py-2.5 text-xs font-semibold text-zinc-950 shadow-blue sm:-right-5">
        <Sparkles size={15} /> Design + performance <ArrowUpRight size={14} />
      </motion.div>
    </motion.div>
  )
}
