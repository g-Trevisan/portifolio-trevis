import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react'
import { cn } from '@/lib/cn'
import type { IconName } from '@/types/portfolio'
import { Icon } from './Icon'

const controlClass =
  'w-full rounded-[9px] border border-[var(--border2)] bg-[var(--bg)] text-sm text-[var(--fg)] transition placeholder:text-[var(--muted2)] focus:border-[var(--accent)] focus:shadow-[0_0_0_3px_var(--ring)] focus:outline-none focus-visible:outline-none'

type TextInputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  icon: IconName
}

type TextareaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string
  meta?: ReactNode
}

export function TextInputField({ label, icon, className, ...props }: TextInputFieldProps) {
  return (
    <label className="flex flex-col gap-1.5 text-[13.5px] font-medium">
      {label}
      <span className="relative block">
        <Icon name={icon} size={15} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--muted2)]" />
        <input className={cn(controlClass, 'px-3.5 py-2.5 pl-[38px]', className)} {...props} />
      </span>
    </label>
  )
}

export function TextareaField({ label, meta, className, ...props }: TextareaFieldProps) {
  return (
    <label className="flex flex-col gap-1.5 text-[13.5px] font-medium">
      <span className="flex items-baseline justify-between gap-3">
        {label}
        <span className="min-h-4 text-xs font-normal text-[var(--muted2)]">{meta}</span>
      </span>
      <textarea className={cn(controlClass, 'min-h-[142px] resize-y px-3.5 py-3 leading-[1.6]', className)} {...props} />
    </label>
  )
}
