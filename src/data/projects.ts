export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  challenges: string[];
  status: 'completed' | 'in-progress' | 'concept';
  category: string;
  thumbnail: string;
  images: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 'finwise',
    title: 'FinWise',
    shortDescription: 'Sistema de gestão financeira com analytics em tempo real e visualizações interativas.',
    fullDescription: 'Plataforma completa de gestão financeira empresarial com dashboards personalizáveis, relatórios automáticos e integração com múltiplos bancos.',
    problem: 'Pessoas gastavam muito tempo com planilhas de excel que não ajudavam em nada, e no fim não conseguiam ter uma real análise sobre seus gastos e consumos.',
    solution: 'Desenvolvi um sistema moderno e objetivo para que usuários possam adicionar receitas e despesas de forma simples, realizar planejamentos mensais, controlar metas/objetivos financeiros, e ainda ter uma visão completa em um dashboard com informações importantes para análises e compreendimento dos recursos.',
    features: [
      'Dashboard com métricas em tempo real',
      'Sistema de alertas inteligentes',
      'Acompanhamento de Faturas Bancárias',
      'Controle de Investimentos',
      'Exportação para diversos formatos',
      'Relatórios automáticos personalizáveis'
    ],
    technologies: ['React', 'TypeScript', 'ViteJs', 'Supabase'],
    challenges: [
      'Processamento de alto volume de transações',
      'Garantir segurança e compliance financeiro'
    ],
    status: 'completed',
    category: 'SaaS',
    thumbnail: '/placeholder.svg',
    images: ['/placeholder.svg', '/placeholder.svg'],
    githubUrl: 'https://github.com/EduardoBOliveira/finwise-app',
    liveUrl: 'https://finwise-app-topaz.vercel.app/',
    year: '2025'
  },
  {
    id: 'fitlife',
    title: 'FitLife',
    shortDescription: 'Sistema completo de acompanhamento físico com treinos, dieta e evolução.',
    fullDescription: 'Plataforma integrada que centraliza todas as informações essenciais para o acompanhamento físico, permitindo controle total sobre treinos, dieta e evolução.',
    problem: 'Muitas pessoas têm dificuldade em encontrar um sistema de treinos que realmente as acolha e atenda às suas necessidades. A maioria das soluções disponíveis não oferece uma forma simples e eficiente de acompanhar, organizar e controlar os treinos, nem de visualizar a evolução real ao longo do tempo, o que acaba desmotivando o usuário e prejudicando a consistência.',
    solution: 'Para resolver esse problema, desenvolvi um sistema completo e integrado que centraliza todas as informações essenciais para o acompanhamento físico. A plataforma permite que o usuário tenha controle total sobre seus treinos e dieta, registre seu progresso de forma prática e acompanhe dashboards inteligentes com dados claros sobre sua evolução, tornando o processo mais motivador, organizado e eficiente.',
    features: [
      'Registro de desempenho em tempo real',
      'Acompanhamento da evolução física',
      'Controle completo da dieta',
      'Gestão de hábitos diários',
      'Criação e gerenciamento de treinos e periodização',
      'Dashboard com métricas evolutivas baseadas em dados reais'
    ],
    technologies: ['React', 'TypeScript', 'ViteJs', 'Supabase', 'Vercel', 'TailwindCSS'],
    challenges: [
      'Integração de múltiplos módulos em uma experiência fluida',
      'Visualização clara de dados evolutivos'
    ],
    status: 'completed',
    category: 'SaaS',
    thumbnail: '/placeholder.svg',
    images: ['/placeholder.svg'],
    githubUrl: 'https://github.com/EduardoBOliveira/FitLife-App',
    liveUrl: 'https://fit-life-app-two.vercel.app/',
    year: '2025'
  }
];

export const technologies = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'Python',
  'PostgreSQL', 'Supabase', 'AWS', 'Docker', 'TailwindCSS'
];

export const categories = ['Todos', 'SaaS', 'E-commerce', 'Produtividade', 'IA & ML'];
