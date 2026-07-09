import { type CSSProperties } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { ACCENT_COLOR, SECTION_IDS } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLiquidSpotlight } from "@/hooks/useLiquidSpotlight";
import { usePortfolioNavigation } from "@/hooks/usePortfolioNavigation";
import { usePortfolioTheme } from "@/hooks/usePortfolioTheme";

function App() {
  const { theme, selectTheme } = usePortfolioTheme();
  const activeSection = useActiveSection(SECTION_IDS);
  const spotlightRef = useLiquidSpotlight(theme);
  const { mobileMenu, themeMenu, closeMenus } = usePortfolioNavigation();

  return (
    <div
      className="portfolio min-h-screen overflow-x-hidden bg-[var(--bg)] font-sans text-[var(--fg)] antialiased"
      data-theme={theme}
      style={{ "--accent": ACCENT_COLOR } as CSSProperties}
    >
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--fg)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--bg)] focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent)]"
      >
        Pular para o conteúdo
      </a>

      {theme === "liquido" && (
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
        onThemeSelect={(nextTheme, origin) => {
          selectTheme(nextTheme, origin);
          closeMenus();
        }}
        onMenuToggle={mobileMenu.toggle}
        onMenuClose={closeMenus}
      />

      <main id="conteudo">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
