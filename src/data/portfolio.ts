import profileImg from "@/assets/portfolio/foto_perfil.webp";
import acordaViolaImg from "@/assets/portfolio/screenshot_acorda_viola.webp";
import brechoDaGabiImg from "@/assets/portfolio/img-brecho.webp";
import marfecImg from "@/assets/portfolio/screenshot_marfec.webp";
import type {
  ContactLink,
  ExperienceItem,
  NavSection,
  Project,
  SectionId,
  SkillGroup,
  ThemeOption,
} from "@/types/portfolio";

export const ACCENT_COLOR = "#34d399";
export const WHATSAPP_URL = "https://wa.me/5554996006674";
export const LINKEDIN_URL = "https://www.linkedin.com/in/gustavo-trevisan-262117208/";
export const SECTION_IDS = [
  "inicio",
  "sobre",
  "experiencia",
  "projetos",
  "skills",
  "contato",
] satisfies SectionId[];

export const THEME_OPTIONS: ThemeOption[] = [
  { id: "claro", label: "Claro", icon: "sun" },
  { id: "escuro", label: "Escuro", icon: "moon" },
  { id: "amoled", label: "AMOLED", icon: "circle-off" },
  { id: "liquido", label: "Translúcido", icon: "layers" },
];

export const NAV_SECTIONS: NavSection[] = [
  { id: "sobre", label: "Sobre" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "skills", label: "Skills" },
  { id: "contato", label: "Contato" },
];

export const HERO_STACK = ["Next.js", "React", "TypeScript", "Tailwind CSS"];

export const ABOUT_PARAGRAPHS = [
  "Atuo como desenvolvedor na Windel Sistemas, em Caxias do Sul. Trabalho no ecossistema de um CRM completo, usado tanto pela equipe interna quanto pelos clientes da empresa — com React, Next.js e TypeScript, numa stack que evoluiu do Material UI para shadcn/ui com Tailwind CSS. Depois de dois anos no suporte, migrei para o time de desenvolvimento.",
  "Curso Análise e Desenvolvimento de Sistemas e concentro meus estudos no que uso todos os dias: o ecossistema JavaScript, com Next.js, React e Node. O objetivo é dominar cada vez melhor as ferramentas com que trabalho.",
  "Curiosidade: nas horas vagas, costumo estudar guitarra, violão e viola caipira — foi daí que surgiu o Acorda Viola, um dos projetos abaixo.",
];

export const PROFILE = {
  name: "Gustavo Camazzola Trevisan",
  location: "Caxias do Sul — RS",
  image: profileImg,
};

export const PROJECTS: Project[] = [
  {
    title: "Acorda Viola",
    image: acordaViolaImg,
    alt: "Interface do Acorda Viola",
    description:
      "Aplicação web para estudo de viola caipira: braço virtual interativo, dicionário de acordes por afinação, afinador cromático em tempo real via microfone, metrônomo digital e exercícios de teoria harmônica com reconhecimento de áudio.",
    liveUrl: "https://viola-master.vercel.app/",
    codeUrl: "https://github.com/g-Trevisan",
    tags: [
      { label: "Next.js", brand: "nextdotjs" },
      { label: "TypeScript", brand: "typescript" },
      { label: "Tailwind CSS", brand: "tailwindcss" },
      { label: "Web Audio API", icon: "wave" },
      { label: "Vitest", brand: "vitest" },
    ],
  },
  {
    title: "Marfec",
    image: marfecImg,
    alt: "Site da Marfec Serviços Automotivos",
    description:
      "Landing page para oficina mecânica em Caxias do Sul: apresentação de serviços, veículos, depoimentos e galeria, com chamadas diretas para orçamento via WhatsApp — leve, responsiva e otimizada para conversão.",
    liveUrl: "https://www.marfec.website/",
    codeUrl: "https://github.com/g-Trevisan",
    tags: [
      { label: "Vite", brand: "vite" },
      { label: "React", brand: "react" },
      { label: "TypeScript", brand: "typescript" },
      { label: "Tailwind CSS", brand: "tailwindcss" },
      { label: "shadcn/ui", brand: "shadcnui" },
    ],
  },
  {
    title: "Brechó da Gabi",
    image: brechoDaGabiImg,
    alt: "Interface do catálogo Brechó da Gabi",
    description:
      "Catálogo online para brechó com vitrine pública, filtros por busca, categoria, tamanho, condição e preço, páginas de produto com SEO dinâmico, contato via WhatsApp com mensagem pré-preenchida e painel administrativo protegido para CRUD de peças e upload de imagens.",
    liveUrl: "https://brecho-da-gabi.vercel.app/",
    codeUrl: "https://github.com/g-Trevisan",
    tags: [
      { label: "Next.js", brand: "nextdotjs" },
      { label: "TypeScript", brand: "typescript" },
      { label: "Tailwind CSS", brand: "tailwindcss" },
      { label: "Prisma", brand: "prisma" },
      { label: "Cloudinary", brand: "cloudinary" },
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Windel Sistemas Ltda",
    employmentType: "Tempo integral",
    location: "Caxias do Sul, Rio Grande do Sul, Brasil",
    roles: [
      {
        title: "Desenvolvedor Web",
        startDate: "2024-11",
        mode: "Presencial",
        description: [
          "Desenvolvimento de interfaces web modernas e responsivas utilizando React, Next.js, TypeScript, shadcn/ui e Tailwind CSS aplicados ao ecossistema completo de CRM.",
          "Atuação com foco em UX para otimizar a experiência do usuário em fluxos usados por equipes internas e clientes.",
        ],
        competencies: ["GitHub", "GitFlow", "React", "Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Shadcn/ui"],
      },
      {
        title: "Suporte técnico",
        startDate: "2022-11",
        endDate: "2024-11",
        mode: "Presencial",
        description: [
          "Atendimento e auxílio remoto a clientes via acesso remoto e ligação telefônica, com suporte direto na utilização do sistema e emissão de documentos fiscais.",
          "Geração e verificação do SPED Fiscal e aplicação de SQL para análise de dados e produção de relatórios personalizados sob demanda.",
        ],
        competencies: ["SQL", "Suporte ao cliente", "ERP Fiscal", "Tributação", "SPED Fiscal", "Relatórios"],
      },
    ],
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Front-end",
    tags: [
      { label: "Next.js", brand: "nextdotjs" },
      { label: "React", brand: "react" },
      { label: "TypeScript", brand: "typescript" },
      { label: "Tailwind CSS", brand: "tailwindcss" },
      { label: "Shadcn/UI", brand: "shadcnui" },
    ],
  },
  {
    title: "Dados & integrações",
    tags: [
      { label: "APIs REST", icon: "network" },
      { label: "React Hook Form", brand: "reacthookform" },
      { label: "Zod", brand: "zod" },
      { label: "Prisma", brand: "prisma" },
      { label: "PostgreSQL", brand: "postgresql" },
      { label: "Cloudinary", brand: "cloudinary" },
      { label: "Web Audio API", icon: "wave" },
    ],
  },
  {
    title: "Ferramentas",
    tags: [
      { label: "Git & GitHub", brand: "github" },
      { label: "Vercel", brand: "vercel" },
      { label: "Figma", brand: "figma" },
      { label: "Vitest", brand: "vitest" },
      { label: "CI/CD", icon: "ci" },
    ],
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "gtrevis15@gmail.com",
    href: "mailto:gtrevis15@gmail.com",
    icon: "mail",
  },
  {
    label: "github.com/g-Trevisan",
    href: "https://github.com/g-Trevisan",
    icon: "github",
  },
  {
    label: "linkedin.com/in/gustavo-trevisan",
    href: LINKEDIN_URL,
    icon: "linkedin",
  },
  {
    label: "@_trevis15",
    href: "https://www.instagram.com/_trevis15/",
    icon: "instagram",
  },
];
