import { cn } from '@/lib/cn'
import { sectionShell } from '@/lib/styles'

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] py-7" data-screen-label="Footer">
      <div className={cn(sectionShell, 'flex flex-wrap items-center justify-between gap-4 text-[13px] text-[var(--muted2)]')}>
        <span>© 2026 Gustavo Camazzola Trevisan. Todos os direitos reservados.</span>
        <span className="font-mono">Feito com Vite + React + TailwindCSS</span>
      </div>
    </footer>
  )
}
