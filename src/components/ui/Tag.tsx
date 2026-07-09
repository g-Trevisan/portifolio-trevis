import { cn } from '@/lib/cn'
import type { SkillTag } from '@/types/portfolio'
import { BrandIcon } from './BrandIcon'
import { Icon } from './Icon'

type TagProps = {
  tag: SkillTag
  variant?: 'pill' | 'tile'
}

export function Tag({ tag, variant = 'pill' }: TagProps) {
  const isPill = variant === 'pill'

  return (
    <span
      className={cn(
        'inline-flex max-w-full items-center whitespace-nowrap border border-[var(--border2)] bg-[var(--chip)] font-medium text-[var(--fg)]',
        isPill
          ? 'gap-1.5 rounded-full px-3 py-1 font-mono text-xs text-[var(--muted)] max-[480px]:px-2.5 max-[480px]:py-0.5 max-[480px]:text-[11px]'
          : 'gap-2 rounded-lg px-3.5 py-2 text-[13.5px] max-[480px]:px-3 max-[480px]:py-1.5 max-[480px]:text-xs',
      )}
    >
      {'brand' in tag ? (
        <BrandIcon slug={tag.brand} className={isPill ? 'size-3' : 'size-3.5'} />
      ) : (
        <Icon name={tag.icon} size={isPill ? 12 : 14} className="shrink-0" />
      )}
      {tag.label}
    </span>
  )
}
