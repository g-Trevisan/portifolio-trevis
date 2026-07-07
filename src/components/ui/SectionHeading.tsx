import { cn } from '@/lib/cn'
import { eyebrow, sectionTitle } from '@/lib/styles'

type SectionHeadingProps = {
  eyebrowText: string
  title: string
  className?: string
  titleClassName?: string
}

export function SectionHeading({ eyebrowText, title, className, titleClassName }: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-3.5', className)}>
      <span className={eyebrow}>{eyebrowText}</span>
      <h2 className={cn(sectionTitle, titleClassName)}>{title}</h2>
    </div>
  )
}
