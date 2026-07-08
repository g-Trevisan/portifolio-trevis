import { useEffect, useRef } from "react";
import { NAV_SECTIONS } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import { sectionShell } from "@/lib/styles";
import type { ThemeOrigin } from "@/hooks/usePortfolioTheme";
import type { SectionId, Theme } from "@/types/portfolio";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ThemeMenu } from "@/components/ui/ThemeMenu";

type HeaderProps = {
  theme: Theme;
  activeSection: SectionId;
  menuOpen: boolean;
  themeMenuOpen: boolean;
  onThemeToggle: () => void;
  onThemeSelect: (theme: Theme, origin: ThemeOrigin) => void;
  onMenuToggle: () => void;
  onMenuClose: () => void;
};

const iconButton =
  "size-9 items-center justify-center rounded-lg border border-[var(--border2)] bg-transparent p-0 text-[var(--muted)] transition-colors hover:bg-[var(--chip)] hover:text-[var(--fg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

export function Header({
  theme,
  activeSection,
  menuOpen,
  themeMenuOpen,
  onThemeToggle,
  onThemeSelect,
  onMenuToggle,
  onMenuClose,
}: HeaderProps) {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen && !themeMenuOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) {
        onMenuClose();
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onMenuClose();
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, themeMenuOpen, onMenuClose]);

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--border)] bg-[var(--navbg)] backdrop-blur-xl"
      data-screen-label="Nav"
    >
      <nav
        className={cn(
          sectionShell,
          "flex h-16 items-center justify-between gap-6 max-[560px]:gap-3",
        )}
        aria-label="Navegação principal"
      >
        <a
          href="#inicio"
          className="inline-flex items-center gap-2.5 whitespace-nowrap text-[15px] font-semibold tracking-normal text-[var(--fg)] max-[560px]:text-sm"
          onClick={onMenuClose}
          aria-label="Ir para o início do portfólio de Gustavo Trevisan"
          aria-current={activeSection === "inicio" ? "location" : undefined}
        >
          <span
            className="inline-flex size-7 items-center justify-center rounded-lg bg-[var(--fg)] font-mono text-[13px] font-medium text-[var(--bg)]"
            aria-hidden="true"
          >
            {"{`}"}
          </span>
          <span>
            g-trevisan<span className="text-[var(--muted2)]">.com.br</span>
          </span>
        </a>

        <div className="flex items-center gap-7 text-sm max-[760px]:hidden">
          {NAV_SECTIONS.map((section) => (
            <a
              href={`#${section.id}`}
              className={cn(
                "transition-colors hover:text-[var(--fg)]",
                activeSection === section.id
                  ? "text-[var(--fg)]"
                  : "text-[var(--muted)]",
              )}
              key={section.id}
              aria-current={activeSection === section.id ? "location" : undefined}
            >
              {section.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeMenu
            theme={theme}
            open={themeMenuOpen}
            onToggle={onThemeToggle}
            onSelect={onThemeSelect}
          />

          <button
            className={cn(iconButton, "hidden max-[760px]:inline-flex")}
            type="button"
            onClick={onMenuToggle}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
          >
            <Icon name={menuOpen ? "x" : "menu"} size={17} />
          </button>

          <ButtonLink
            href="#contato"
            size="sm"
            className="max-[480px]:hidden"
            onClick={onMenuClose}
          >
            Fale comigo
          </ButtonLink>
        </div>
      </nav>

      {menuOpen && (
        <nav
          id="menu-mobile"
          className="animate-mobile-menu-down flex origin-top flex-col gap-0.5 overflow-hidden border-t border-[var(--border)] bg-[var(--bg)] px-6 py-3 max-[560px]:px-5"
          aria-label="Menu mobile"
        >
          {NAV_SECTIONS.map((section) => (
            <a
              href={`#${section.id}`}
              className="px-1 py-3 text-[15px] text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
              key={section.id}
              onClick={onMenuClose}
              aria-current={activeSection === section.id ? "location" : undefined}
            >
              {section.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
