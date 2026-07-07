import { type CSSProperties } from 'react'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { WhatsAppButton } from '@/components/layout/WhatsAppButton'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { Hero } from '@/components/sections/Hero'
import { Projects } from '@/components/sections/Projects'
import { Skills } from '@/components/sections/Skills'
import { ACCENT_COLOR, SECTION_IDS } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useLiquidSpotlight } from '@/hooks/useLiquidSpotlight'
import { usePortfolioNavigation } from '@/hooks/usePortfolioNavigation'
import { usePortfolioTheme } from '@/hooks/usePortfolioTheme'

function App() {
  const { theme, selectTheme } = usePortfolioTheme()
  const activeSection = useActiveSection(SECTION_IDS)
  const spotlightRef = useLiquidSpotlight(theme)
  const { mobileMenu, themeMenu, closeMenus } = usePortfolioNavigation()

  return (
    <div
      className="portfolio min-h-screen overflow-x-hidden bg-[var(--bg)] font-sans text-[var(--fg)] antialiased"
      data-theme={theme}
      style={{ '--accent': ACCENT_COLOR } as CSSProperties}
    >
      {theme === 'liquido' && (
        <div
          ref={spotlightRef}
          className="pointer-events-none fixed inset-0 z-40 opacity-0 mix-blend-screen transition-opacity duration-500"
          aria-hidden="true"
        />
      )}

      <Header
        theme={theme}
        activeSection={activeSection}
        menuOpen={mobileMenu.open}
        themeMenuOpen={themeMenu.open}
        onThemeToggle={themeMenu.toggle}
        onThemeSelect={(nextTheme) => {
          selectTheme(nextTheme)
          closeMenus()
        }}
        onMenuToggle={mobileMenu.toggle}
        onMenuClose={closeMenus}
      />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  )
}

export default App
