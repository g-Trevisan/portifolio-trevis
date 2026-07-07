import { ABOUT_PARAGRAPHS, PROFILE } from '@/data/portfolio'
import { cn } from '@/lib/cn'
import { sectionCopy } from '@/lib/styles'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

export function About() {
  return (
    <Section id="sobre" label="Sobre">
      <div className="flex max-w-[760px] flex-col gap-5" data-reveal="true">
        <SectionHeading eyebrowText="Sobre mim" title="Desenvolvimento Web." className="gap-5" />

        {ABOUT_PARAGRAPHS.map((paragraph) => (
          <p className={cn(sectionCopy, 'text-pretty')} key={paragraph}>
            {paragraph}
          </p>
        ))}

        <div className="mt-2 flex items-center gap-3.5">
          <img
            src={PROFILE.image}
            alt="Foto de Gustavo Trevisan"
            className="size-16 shrink-0 rounded-full border border-[var(--border2)] object-cover object-[50%_20%]"
          />
          <div className="flex flex-col gap-0.5">
            <strong className="text-[15px] font-semibold">{PROFILE.name}</strong>
            <span className="inline-flex items-center gap-1.5 text-[13.5px] text-[var(--muted)]">
              <Icon name="map-pin" size={13} />
              {PROFILE.location}
            </span>
          </div>
        </div>
      </div>
    </Section>
  )
}
