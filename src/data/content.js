import { Globe2, LayoutTemplate, Search } from 'lucide-react'

export const services = [
  { icon: LayoutTemplate, number: '01', title: 'Landing Pages', text: 'Páginas focadas em apresentar sua oferta com clareza e transformar visitas em novas oportunidades.' },
  { icon: Globe2, number: '02', title: 'Sites Institucionais', text: 'Uma presença digital profissional que organiza sua marca, seus serviços e seus canais de contato.' },
  { icon: Search, number: '03', title: 'SEO Básico', text: 'Estrutura e conteúdo preparados para ajudar sua empresa a ser encontrada nos mecanismos de busca.' },
]

export const projects = [
  {
    category: 'Site institucional',
    title: 'Ivana Goulart',
    subtitle: 'Nutrição comportamental',
    description: 'Experiência digital acolhedora para uma nutricionista comportamental, com apresentação da abordagem, especialidades, atendimento, relatos e dúvidas frequentes.',
    image: '/images/projects/nutri-ivana-optimized.jpg',
    imageSmall: '/images/projects/nutri-ivana-640.jpg',
    imageSmallWidth: 640,
    imagePosition: 'center 28%',
    imageWidth: 864,
    imageHeight: 1821,
    tags: ['React', 'Framer Motion', 'Vite'],
  },
  {
    category: 'Site comercial',
    title: 'Brownies da Érica',
    subtitle: 'Confeitaria artesanal',
    description: 'Site responsivo para uma confeitaria de Canoas, com catálogo de sabores, processo de compra e contato direto pelo WhatsApp.',
    image: '/images/projects/brownies-erica.jpeg',
    imageSmall: '/images/projects/brownies-erica-720.jpg',
    imageSmallWidth: 720,
    imagePosition: 'center',
    imageWidth: 1200,
    imageHeight: 1600,
    tags: ['React', 'Tailwind CSS', 'Vite'],
    url: 'https://brownies-da-erica.vercel.app/',
  },
]

export const technologies = ['React', 'JavaScript', 'Tailwind CSS', 'Git', 'Vercel']
