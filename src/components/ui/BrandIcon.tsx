import type { CSSProperties } from 'react'
import type { BrandSlug } from '@/types/portfolio'

type BrandIconProps = {
  slug: BrandSlug
  className?: string
}

export function BrandIcon({ slug, className = 'size-3' }: BrandIconProps) {
  const iconUrl = `url(https://cdn.simpleicons.org/${slug})`
  const style = {
    mask: `${iconUrl} center / contain no-repeat`,
    WebkitMask: `${iconUrl} center / contain no-repeat`,
  } as CSSProperties

  return <span className={`inline-block shrink-0 bg-current ${className}`} style={style} aria-hidden="true" />
}
