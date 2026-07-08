import type { AnchorHTMLAttributes, ReactNode } from 'react'

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: ReactNode
}

export function ExternalLink({ href, children, rel = 'noopener noreferrer', ...props }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel={rel} {...props}>
      {children}
    </a>
  )
}
