import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MessageCircle, MoveUpRight } from 'lucide-react'
import Navbar from './components/Navbar'
import HeroVisual from './components/HeroVisual'
import SectionHeading from './components/SectionHeading'
import { projects, services, technologies } from './data/content'

const whatsappMessage = 'Olá, Murilo! Conheci seu portfólio e gostaria de conversar sobre a criação de um site para o meu negócio.'
const whatsapp = `https://wa.me/5551982706064?text=${encodeURIComponent(whatsappMessage)}`
const socialLinks = {
  email: 'mailto:murilohcanoas@gmail.com',
  linkedin: 'https://www.linkedin.com/in/murilo-dutraa/',
  github: 'https://github.com/MuriloDutraDev',
}

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: .18 },
  transition: { duration: .65, ease: [0.22, 1, 0.36, 1] },
}

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: .001 })
  const cursorX = useMotionValue(-500)
  const cursorY = useMotionValue(-500)
  const heroLight = useMotionTemplate`radial-gradient(520px circle at ${cursorX}px ${cursorY}px, rgba(255,255,255,.08), transparent 65%)`

  return (
    <div className="overflow-hidden">
      <a href="#conteudo" className="skip-link">Pular para o conteúdo</a>
      <motion.div className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-brand" style={{ scaleX }} />
      <Navbar />
      <main id="conteudo">
        <section id="inicio" onMouseMove={(event) => { const rect = event.currentTarget.getBoundingClientRect(); cursorX.set(event.clientX - rect.left); cursorY.set(event.clientY - rect.top) }} className="relative min-h-screen border-b border-line pt-24">
          <motion.div className="pointer-events-none absolute inset-0" style={{ background: heroLight }} />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: .4 }} transition={{ duration: 1.4 }} className="hero-grid absolute inset-0" />
          <motion.div animate={{ x: [0, 40, 0], y: [0, -25, 0], scale: [1, 1.12, 1] }} transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }} className="pointer-events-none absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-white/[.035] blur-[90px]" />
          <div className="container-site relative grid min-h-[calc(100vh-6rem)] items-center gap-12 py-16 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, ease: [0.22, 1, 0.36, 1] }}>
              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-line bg-white/[.03] px-4 py-2 text-xs font-medium text-slate-300 backdrop-blur"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" /><span className="relative h-2 w-2 rounded-full bg-emerald-400" /></span>Disponível para novos projetos</div>
              <motion.p initial={{ opacity: 0, x: -18 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: .18, duration: .55 }} className="mb-5 text-sm font-semibold uppercase tracking-[.18em] text-zinc-400">Desenvolvedor web · Canoas, RS</motion.p>
              <motion.h1 initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: .11, delayChildren: .25 } } }} className="max-w-3xl text-[clamp(3rem,6.4vw,5.7rem)] font-semibold leading-[.98] tracking-[-.07em]">
                <AnimatedLine>Transformo negócios</AnimatedLine>
                <AnimatedLine>em <span className="text-zinc-300">experiências</span></AnimatedLine>
                <AnimatedLine><span className="relative text-zinc-300">digitais.<svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 8" fill="none" aria-hidden="true"><motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.05, duration: .85, ease: 'easeOut' }} d="M2 6C80 1 206 1 298 4" stroke="#A1A1AA" strokeWidth="3" strokeLinecap="round" /></svg></span></AnimatedLine>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .72, duration: .6 }} className="mt-8 max-w-xl text-lg leading-8 text-muted sm:text-xl">Sites modernos, rápidos e estratégicos para empresas que querem conquistar confiança antes mesmo do primeiro contato.</motion.p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#projetos" className="focus-ring group inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-zinc-950 shadow-blue transition hover:bg-white">Explorar projetos <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a>
                <a href={whatsapp} target="_blank" rel="noreferrer" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-line bg-panel/80 px-6 py-3.5 text-sm font-semibold transition hover:border-zinc-500 hover:bg-surface"><MessageCircle size={17} /> Vamos conversar</a>
              </div>
              <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4 border-t border-line/70 pt-6 text-xs uppercase tracking-[.14em] text-muted"><span>Design estratégico</span><span>Desenvolvimento ágil</span><span>Mobile first</span></div>
            </motion.div>
            <HeroVisual />
          </div>
          <motion.a href="#sobre" aria-label="Conhecer mais" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="focus-ring absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[.2em] text-zinc-500 lg:flex"><span>Descubra</span><motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.7, repeat: Infinity }}><ArrowDown size={16} /></motion.span></motion.a>
        </section>

        <section id="sobre" className="section-space bg-surface">
          <div className="container-site">
            <div className="grid gap-8 lg:grid-cols-12">
              <motion.div {...reveal} className="relative min-h-[520px] overflow-hidden rounded-[2rem] border border-line lg:col-span-5">
                <img src="/images/workspace-480.jpg" srcSet="/images/workspace-480.jpg 480w, /images/workspace.jpeg 899w" sizes="(min-width: 1024px) 40vw, 100vw" alt="Estação de trabalho de Murilo Dutra com computador, monitor e iluminação suave" loading="lazy" decoding="async" width="480" height="854" className="absolute inset-0 h-full w-full object-cover object-center contrast-[1.08]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-0 p-7"><p className="text-xs uppercase tracking-[.2em] text-zinc-300">Onde as ideias ganham forma</p><p className="mt-2 max-w-xs text-xl font-semibold">Um espaço preparado para criar com foco e precisão.</p></div>
              </motion.div>
              <motion.div {...reveal} transition={{ ...reveal.transition, delay: .1 }} className="flex flex-col justify-between rounded-[2rem] border border-line bg-panel p-7 sm:p-10 lg:col-span-7">
                <div><p className="eyebrow">Sobre mim</p><h2 className="max-w-2xl text-3xl font-semibold tracking-[-.05em] sm:text-5xl">Curiosidade para aprender. Critério para construir.</h2><div className="mt-8 max-w-2xl space-y-5 text-base leading-7 text-muted sm:text-lg sm:leading-8"><p>Sou Murilo Dutra, estudante de Desenvolvimento de Sistemas e desenvolvedor web focado em criar experiências rápidas, responsivas e visualmente bem resolvidas.</p><p>Minha abordagem combina tecnologia, atenção aos detalhes e entendimento do negócio. Sem promessas exageradas — apenas trabalho cuidadoso para entregar uma presença digital que transmita confiança.</p></div></div>
                <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3"><MiniStat value="Responsivo" label="Em qualquer tela" /><MiniStat value="Estratégico" label="Foco no negócio" /><MiniStat value="Cuidadoso" label="Em cada detalhe" /></div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="servicos" className="section-space">
          <div className="container-site">
            <SectionHeading eyebrow="Como posso ajudar" title="Uma presença digital construída por inteiro." copy="Do primeiro contato à publicação, cada decisão tem um objetivo: apresentar seu negócio com clareza e gerar confiança." />
            <div className="mt-16 grid gap-4 lg:grid-cols-3">
              {services.map(({ icon: Icon, number, title, text }, index) => (
                <motion.article key={title} {...reveal} transition={{ ...reveal.transition, delay: index * .08 }} className="card-glow group relative min-h-[300px] overflow-hidden rounded-2xl border border-line bg-panel p-7 transition duration-500 hover:-translate-y-1 hover:border-zinc-500/60">
                  <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-white/0 blur-3xl transition duration-500 group-hover:bg-white/10" />
                  <div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/[.06] text-zinc-300"><Icon size={20} /></span><span className="font-mono text-xs text-zinc-600">/{number}</span></div>
                  <div className="mt-20"><h3 className="text-2xl font-semibold tracking-[-.04em]">{title}</h3><p className="mt-4 text-sm leading-6 text-muted">{text}</p></div>
                  <MoveUpRight size={19} className="absolute bottom-7 right-7 text-zinc-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-zinc-200" />
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="projetos" className="section-space bg-surface">
          <div className="container-site">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><SectionHeading eyebrow="Projetos selecionados" title="Soluções reais para negócios com identidades diferentes." /><p className="max-w-xs text-sm leading-6 text-muted">Projetos desenvolvidos do conceito à interface, com foco em clareza, responsividade e experiência.</p></div>
            <div className="mt-14 space-y-5">
              {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
            </div>
          </div>
        </section>

        <section id="tecnologias" className="border-y border-line py-20">
          <div className="container-site"><h2 className="mb-10 text-center text-xs font-semibold uppercase tracking-[.22em] text-muted">Tecnologias que fazem parte do processo</h2><div className="flex flex-wrap items-center justify-center gap-3">{technologies.map((tech, i) => <motion.span key={tech} initial={{ opacity: 0, scale: .9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * .07 }} className="rounded-full border border-line bg-panel px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:bg-zinc-900 hover:text-white">{tech}</motion.span>)}</div></div>
        </section>

        <section id="contato" className="section-space">
          <div className="container-site"><motion.div {...reveal} className="contact-grid relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel px-6 py-16 text-center shadow-soft sm:px-12 sm:py-24"><div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-[90px]" /><p className="relative mb-5 text-xs font-semibold uppercase tracking-[.2em] text-zinc-400">Seu próximo passo começa aqui</p><h2 className="relative mx-auto max-w-4xl text-4xl font-semibold tracking-[-.06em] sm:text-6xl lg:text-7xl">Vamos colocar sua empresa no digital?</h2><p className="relative mx-auto mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">Me conte sobre seu negócio. Uma boa conversa pode ser o começo de um site que realmente represente sua marca.</p><a href={whatsapp} target="_blank" rel="noreferrer" className="focus-ring relative mt-9 inline-flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-zinc-950 shadow-blue transition hover:bg-white"><MessageCircle size={18} /> Chame agora e tire seu site do papel</a><div className="relative mx-auto mt-10 flex max-w-2xl flex-col justify-center gap-3 sm:flex-row"><SocialLink href={socialLinks.email} icon={Mail} label="E-mail" /><SocialLink href={socialLinks.linkedin} icon={Linkedin} label="LinkedIn" external /><SocialLink href={socialLinks.github} icon={Github} label="GitHub" external /></div></motion.div></div>
        </section>
      </main>
      <footer className="border-t border-line py-8"><div className="container-site flex flex-col items-center justify-between gap-3 text-sm text-muted sm:flex-row"><p className="font-semibold text-ink">Murilo Dutra<span className="text-brand">.</span></p><p>© {new Date().getFullYear()} — Design e desenvolvimento por Murilo.</p></div></footer>
    </div>
  )
}

function MiniStat({ value, label }) {
  return <div className="rounded-xl border border-line bg-canvas/40 p-4"><strong className="block text-sm font-semibold text-white">{value}</strong><span className="mt-1 block text-xs text-muted">{label}</span></div>
}

function AnimatedLine({ children }) {
  return <span className="block overflow-hidden pb-[.08em]"><motion.span className="block" variants={{ hidden: { y: '110%', rotate: 2, opacity: 0 }, visible: { y: 0, rotate: 0, opacity: 1, transition: { duration: .72, ease: [0.22, 1, 0.36, 1] } } }}>{children}</motion.span></span>
}

function ProjectCard({ project, index }) {
  return <motion.article {...reveal} className="group grid overflow-hidden rounded-2xl border border-line bg-panel transition duration-500 hover:border-zinc-500/60 lg:grid-cols-[.8fr_1.2fr]">
    <div className="flex flex-col justify-between p-7 sm:p-9"><div><p className="text-xs font-semibold uppercase tracking-[.16em] text-zinc-400">0{index + 1} · {project.category}</p><h3 className="mt-5 text-3xl font-semibold tracking-[-.05em]">{project.title}</h3><p className="mt-2 text-sm font-medium text-zinc-400">{project.subtitle}</p><p className="mt-5 max-w-md text-sm leading-6 text-muted">{project.description}</p><div className="mt-7 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full border border-line bg-white/[.03] px-3 py-1.5 text-[11px] font-medium text-zinc-400">{tag}</span>)}</div></div>{project.url ? <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visitar o site ${project.title}`} className="focus-ring group/link mt-10 inline-flex w-fit items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-zinc-300 transition hover:border-zinc-500 hover:bg-white/[.06] hover:text-white">Visitar projeto <ArrowUpRight size={16} className="transition group-hover/link:-translate-y-1 group-hover/link:translate-x-1" /></a> : <span className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-zinc-500">Publicação em breve</span>}</div>
    <div className="relative min-h-[360px] overflow-hidden bg-zinc-950"><motion.img src={project.imageSmall} srcSet={`${project.imageSmall} ${project.imageSmallWidth}w, ${project.image} ${project.imageWidth}w`} sizes="(min-width: 1024px) 60vw, 100vw" alt={`Interface do projeto ${project.title} para ${project.subtitle.toLowerCase()}`} loading="lazy" decoding="async" width={project.imageWidth} height={project.imageHeight} style={{ objectPosition: project.imagePosition }} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]" /><div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" /><div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-xl border border-white/15 bg-black/40 px-4 py-3 backdrop-blur-md"><div className="flex gap-1.5" aria-hidden="true"><i className="h-2 w-2 rounded-full bg-zinc-500" /><i className="h-2 w-2 rounded-full bg-zinc-500" /><i className="h-2 w-2 rounded-full bg-zinc-500" /></div><span className="text-[10px] font-medium uppercase tracking-[.16em] text-white/70">Projeto real</span></div></div>
  </motion.article>
}

function SocialLink({ href, icon: Icon, label, external }) {
  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="focus-ring flex items-center justify-center gap-2.5 rounded-xl border border-line bg-white/[.03] px-5 py-3 text-sm text-zinc-300 transition hover:border-zinc-500 hover:bg-white/[.07] hover:text-white"><Icon size={17} className="text-zinc-400" />{label}</a>
}

export default App
