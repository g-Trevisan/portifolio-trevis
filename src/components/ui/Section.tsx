import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'
import { sectionShell } from '@/lib/styles'

type SectionProps = HTMLAttributes<HTMLElement> & {
  label: string
  children: ReactNode
  contained?: boolean
}

export function Section({ id, label, children, className, contained = true, ...props }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('border-t border-[var(--border)] py-24 max-[760px]:py-16 max-[480px]:py-14', className)}
      data-screen-label={label}
      aria-label={label}
      {...props}
    >
      {contained ? <div className={sectionShell}>{children}</div> : children}
    </section>
  )
}
