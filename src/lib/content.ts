export const siteConfig = {
  name: "Priscyllianna Gondim",
  tagline: "Transformando espaços em experiências únicas.",
  email: "contato@priscylliannagondim.com.br",
  whatsapp: "+55 84 99441-1535",
  instagram: "@priscylliannagondimarquitetura",
  address: "Natal / RN",
  url: "https://priscylliannagondim.com.br",
} as const;

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
] as const;

export const hero = {
  headline: "Arquitetura e interiores\ncom design autoral e funcionalidade.",
  subheadline:
    "Projetos que refletem a sua personalidade e valorizam cada detalhe do seu espaço.",
  primaryCta: { label: "Conheça meus projetos", href: "#projetos" },
  secondaryCta: { label: "Agende uma consultoria", href: "#contato" },
} as const;

export const story = {
  title: "Cada espaço conta uma história.",
  paragraphs: [
    "Sou Priscyllianna Gondim, arquiteta apaixonada por transformar ambientes em experiências que conectam pessoas.",
    "Acredito que a arquitetura vai além da estética — ela precisa funcionar, acolher e inspirar quem vive naquele espaço.",
    "Minha abordagem une escuta ativa, design autoral e atenção obsessiva aos detalhes.",
    "Cada projeto é único porque cada cliente é único.",
    "Do primeiro croqui à entrega final, meu compromisso é transformar sua visão em realidade — com sensibilidade, técnica e dedicação.",
  ],
} as const;

export const about = {
  title: "Arquitetura pensada para a vida real.",
  text: "Desenvolvo projetos residenciais e comerciais que equilibram beleza e funcionalidade. Do layout inteligente à escolha de materiais, cada decisão é guiada pela forma como você vive, trabalha e se conecta com o espaço ao redor.",
} as const;

export const differentiators = {
  title: "O que torna meu trabalho diferente.",
  subtitle:
    "Cada projeto é desenvolvido com dedicação e atenção às necessidades únicas de quem vai viver naquele espaço.",
  items: [
    {
      title: "Projeto Personalizado",
      description:
        "Cada projeto é desenhado a partir da sua rotina, seus desejos e seu estilo de vida. Nada é genérico.",
      role: "Exclusividade",
    },
    {
      title: "Acompanhamento de Obra",
      description:
        "Presença constante durante a execução para garantir que o projeto saia do papel exatamente como planejado.",
      role: "Execução",
    },
    {
      title: "Design Autoral",
      description:
        "Estética contemporânea com identidade própria — projetos que surpreendem e encantam.",
      role: "Criatividade",
    },
    {
      title: "Funcionalidade + Estética",
      description:
        "Ambientes bonitos que funcionam no dia a dia. Beleza sem abrir mão do conforto.",
      role: "Equilíbrio",
    },
    {
      title: "Atenção aos Detalhes",
      description:
        "Dos acabamentos à iluminação, cada elemento é pensado para criar harmonia e bem-estar.",
      role: "Refinamento",
    },
    {
      title: "Compromisso com Prazos",
      description:
        "Planejamento rigoroso e comunicação transparente para entregas dentro do cronograma.",
      role: "Confiança",
    },
  ],
} as const;

export const partners = {
  title: "Projetos que transformam.",
  groups: [
    {
      label: "Residenciais",
      logos: [],
    },
    {
      label: "Comerciais",
      logos: [],
    },
  ],
  testimonials: [
    {
      quote:
        "A Priscyllianna entendeu exatamente o que queríamos e entregou um projeto que superou todas as expectativas.",
      name: "Cliente Residencial",
      designation: "Apartamento completo",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1000&fit=crop",
    },
    {
      quote:
        "Profissionalismo, criatividade e atenção aos detalhes. Nosso escritório ficou incrível.",
      name: "Cliente Comercial",
      designation: "Projeto corporativo",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
    },
    {
      quote:
        "O acompanhamento da obra fez toda a diferença. Tudo saiu exatamente como no 3D.",
      name: "Cliente Residencial",
      designation: "Casa completa",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1000&fit=crop",
    },
  ],
} as const;

export const stats = {
  title: "Números que contam minha trajetória",
  items: [
    { value: "8+", label: "Anos de experiência" },
    { value: "50+", label: "Projetos entregues" },
    { value: "3.000+", label: "m² projetados" },
    { value: "100%", label: "Clientes satisfeitos" },
  ],
} as const;

export const finalCta = {
  headline: "Vamos transformar o seu espaço?",
  text: "Cada projeto começa com uma conversa. Me conte sobre o seu sonho e juntos vamos criar algo único.",
  cta: { label: "Agende uma consultoria", href: "#contato" },
} as const;

export const contact = {
  title: "Vamos conversar?",
  subtitle:
    "Entre em contato para agendar uma consultoria e dar o primeiro passo na transformação do seu espaço.",
  fields: {
    name: "Nome",
    company: "Tipo de projeto",
    role: "Cidade",
    email: "E-mail",
    phone: "Telefone",
    message: "Conte sobre o seu projeto",
  },
  sidebar: {
    commercial: { label: "E-mail", value: siteConfig.email },
    whatsapp: { label: "WhatsApp", value: siteConfig.whatsapp },
    address: { label: "Localização", value: siteConfig.address },
  },
} as const;

export const footer = {
  tagline: siteConfig.tagline,
  links: navLinks,
} as const;

export const heroProducts = [
  {
    title: "Sala de Estar Contemporânea",
    link: "#projetos",
    thumbnail: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=400&fit=crop",
  },
  {
    title: "Cozinha Integrada",
    link: "#projetos",
    thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
  },
  {
    title: "Quarto Master",
    link: "#projetos",
    thumbnail: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=400&fit=crop",
  },
  {
    title: "Escritório Residencial",
    link: "#projetos",
    thumbnail: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=400&fit=crop",
  },
  {
    title: "Banheiro Spa",
    link: "#projetos",
    thumbnail: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=400&fit=crop",
  },
  {
    title: "Varanda Gourmet",
    link: "#projetos",
    thumbnail: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=400&fit=crop",
  },
  {
    title: "Living Room Minimalista",
    link: "#projetos",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop",
  },
  {
    title: "Área de Lazer",
    link: "#projetos",
    thumbnail: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop",
  },
  {
    title: "Hall de Entrada",
    link: "#projetos",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop",
  },
  {
    title: "Espaço Comercial",
    link: "#projetos",
    thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
  },
  {
    title: "Sala de Jantar",
    link: "#projetos",
    thumbnail: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=400&fit=crop",
  },
  {
    title: "Closet Planejado",
    link: "#projetos",
    thumbnail: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&h=400&fit=crop",
  },
  {
    title: "Terraço Moderno",
    link: "#projetos",
    thumbnail: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&h=400&fit=crop",
  },
  {
    title: "Lavabo Elegante",
    link: "#projetos",
    thumbnail: "https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=600&h=400&fit=crop",
  },
  {
    title: "Fachada Residencial",
    link: "#projetos",
    thumbnail: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
  },
];
