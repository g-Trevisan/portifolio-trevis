import type { HTMLAttributes } from 'react'
import { cn } from '@/lib/cn'

type CardProps = HTMLAttributes<HTMLDivElement> & {
  as?: 'div' | 'article'
  glass?: boolean
}

export function Card({ as: Component = 'div', className, glass = true, ...props }: CardProps) {
  return (
    <Component
      className={cn('rounded-2xl border border-[var(--border)] bg-[var(--surface)]', className)}
      data-glass={glass ? 'card' : undefined}
      {...props}
    />
  )
}
