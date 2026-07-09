import profileImg from "@/assets/portfolio/foto_perfil-1783428331804.png";
import acordaViolaImg from "@/assets/portfolio/screenshot_acorda_viola-1783428643747.png";
import brechoDaGabiImg from "@/assets/portfolio/img-brecho.png";
import marfecImg from "@/assets/portfolio/screenshot_brecho-1783429811238.png";
import type {
  ContactLink,
  NavSection,
  Project,
  SectionId,
  SkillGroup,
  ThemeOption,
} from "@/types/portfolio";

export const ACCENT_COLOR = "#34d399";
export const WHATSAPP_URL = "https://wa.me/5554996006674";
export const SECTION_IDS = [
  "inicio",
  "sobre",
  "projetos",
  "skills",
  "contato",
] satisfies SectionId[];

export const THEME_OPTIONS: ThemeOption[] = [
  { id: "claro", label: "Claro", icon: "sun" },
  { id: "escuro", label: "Escuro", icon: "moon" },
  { id: "amoled", label: "AMOLED", icon: "smartphone" },
  { id: "liquido", label: "Translúcido", icon: "droplet" },
];

export const NAV_SECTIONS: NavSection[] = [
  { id: "sobre", label: "Sobre" },
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
    href: "https://www.linkedin.com/in/gustavo-trevisan-262117208/",
    icon: "linkedin",
  },
  {
    label: "@_trevis15",
    href: "https://www.instagram.com/_trevis15/",
    icon: "instagram",
  },
];
