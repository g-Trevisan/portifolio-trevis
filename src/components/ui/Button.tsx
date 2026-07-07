import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'sm' | 'md'

const baseClass =
  'inline-flex items-center justify-center gap-2 font-medium leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]'

const variants: Record<ButtonVariant, string> = {
  primary: 'border border-transparent bg-[var(--fg)] text-[var(--bg)] hover:bg-[var(--btnh)] hover:text-[var(--bg)]',
  secondary: 'border border-[var(--border2)] bg-transparent text-[var(--fg)] hover:bg-[var(--chip)] hover:text-[var(--fg)]',
  ghost: 'border border-transparent bg-transparent text-[var(--muted)] hover:bg-[var(--chip)] hover:text-[var(--fg)]',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'min-h-9 rounded-lg px-4 py-2 text-sm',
  md: 'min-h-11 rounded-[10px] px-6 py-3 text-[15px]',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
}

function buttonClasses({ variant = 'primary', size = 'md', className }: { variant?: ButtonVariant; size?: ButtonSize; className?: string }) {
  return cn(baseClass, variants[variant], sizes[size], className)
}

export function Button({ variant = 'primary', size = 'md', className, children, type = 'button', ...props }: ButtonProps) {
  return (
    <button className={buttonClasses({ variant, size, className })} type={type} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({ variant = 'primary', size = 'md', className, children, ...props }: ButtonLinkProps) {
  return (
    <a className={buttonClasses({ variant, size, className })} {...props}>
      {children}
    </a>
  )
}
