import { THEME_OPTIONS } from "@/data/portfolio";
import { cn } from "@/lib/cn";
import type { Theme } from "@/types/portfolio";
import { Icon } from "./Icon";

type ThemeMenuProps = {
  theme: Theme;
  open: boolean;
  onToggle: () => void;
  onSelect: (theme: Theme) => void;
};

const iconButton =
  "inline-flex h-9 items-center justify-center rounded-lg border border-[var(--border2)] bg-transparent px-2 text-[var(--muted)] transition-colors hover:bg-[var(--chip)] hover:text-[var(--fg)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

export function ThemeMenu({ theme, open, onToggle, onSelect }: ThemeMenuProps) {
  const selectedTheme =
    THEME_OPTIONS.find((option) => option.id === theme) ?? THEME_OPTIONS[1];

  return (
    <div className="relative">
      <button
        className={cn(iconButton, "gap-1")}
        type="button"
        onClick={onToggle}
        aria-label="Escolher tema"
        aria-expanded={open}
      >
        <Icon name={selectedTheme.icon} size={15} />
        <Icon name="chevron-down" size={13} />
      </button>

      {open && (
        <div
          data-glass="menu"
          data-theme-menu="true"
          className="animate-dropdown-down isolate absolute right-0 top-[calc(100%+6px)] z-[70] flex min-w-40 origin-top flex-col gap-0.5 overflow-hidden rounded-[10px] border border-[var(--border2)] bg-[var(--surface)] p-1.5 shadow-[0_12px_32px_rgba(0,0,0,.4)]"
        >
          {THEME_OPTIONS.map((option) => (
            <button
              className="flex items-center gap-2.5 rounded-[7px] border-0 bg-transparent px-2.5 py-2 text-left text-[13.5px] font-medium text-[var(--fg)] transition-colors hover:bg-[var(--chip)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              key={option.id}
              type="button"
              onClick={() => onSelect(option.id)}
            >
              <Icon name={option.icon} size={15} />
              <span className="flex-1">{option.label}</span>
              {theme === option.id && (
                <Icon name="check" size={14} className="text-[var(--accent)]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
