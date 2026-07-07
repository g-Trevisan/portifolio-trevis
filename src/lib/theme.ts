import type { Theme } from '@/types/portfolio'

export const DEFAULT_THEME: Theme = 'escuro'
export const THEME_STORAGE_KEY = 'portfolio-tema'
export const THEMES = ['escuro', 'amoled', 'claro', 'liquido'] satisfies Theme[]

export function isTheme(value: string | null): value is Theme {
  return THEMES.includes(value as Theme)
}
