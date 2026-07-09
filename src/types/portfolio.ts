export type Theme = 'escuro' | 'amoled' | 'claro' | 'liquido'

export type SectionId = 'inicio' | 'sobre' | 'experiencia' | 'projetos' | 'skills' | 'contato'

export type IconName =
  | 'arrow-right'
  | 'briefcase'
  | 'calendar'
  | 'check'
  | 'chevron-down'
  | 'ci'
  | 'droplet'
  | 'external'
  | 'github'
  | 'instagram'
  | 'linkedin'
  | 'mail'
  | 'map-pin'
  | 'menu'
  | 'moon'
  | 'network'
  | 'smartphone'
  | 'sun'
  | 'user'
  | 'wave'
  | 'whatsapp'
  | 'x'

export type BrandSlug =
  | 'cloudinary'
  | 'figma'
  | 'github'
  | 'nextdotjs'
  | 'postgresql'
  | 'prisma'
  | 'react'
  | 'reacthookform'
  | 'shadcnui'
  | 'tailwindcss'
  | 'typescript'
  | 'vercel'
  | 'vite'
  | 'vitest'
  | 'zod'

export type SkillTag =
  | { label: string; brand: BrandSlug }
  | { label: string; icon: IconName }

export type ThemeOption = {
  id: Theme
  label: string
  icon: IconName
}

export type NavSection = {
  id: Exclude<SectionId, 'inicio'>
  label: string
}

export type Project = {
  title: string
  image: string
  alt: string
  description: string
  liveUrl: string
  codeUrl: string
  tags: SkillTag[]
}

export type ExperienceRole = {
  title: string
  startDate: string
  endDate?: string
  mode: string
  description: string[]
  competencies: string[]
}

export type ExperienceItem = {
  company: string
  employmentType: string
  location: string
  roles: ExperienceRole[]
}

export type SkillGroup = {
  title: string
  tags: SkillTag[]
}

export type ContactLink = {
  label: string
  href: string
  icon: IconName
}
