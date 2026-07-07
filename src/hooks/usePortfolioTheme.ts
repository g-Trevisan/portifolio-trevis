import { useState } from 'react'
import { DEFAULT_THEME, isTheme, THEME_STORAGE_KEY } from '@/lib/theme'
import type { Theme } from '@/types/portfolio'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return DEFAULT_THEME

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  return isTheme(storedTheme) ? storedTheme : DEFAULT_THEME
}

export function usePortfolioTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  function selectTheme(nextTheme: Theme) {
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme)
    setTheme(nextTheme)
  }

  return { theme, selectTheme }
}
