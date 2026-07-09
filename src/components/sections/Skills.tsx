import { SKILL_GROUPS } from '@/data/portfolio'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'

export function Skills() {
  return (
    <Section id="skills" label="Skills">
      <div className="flex flex-col gap-10 max-[560px]:gap-7">
        <SectionHeading eyebrowText="Skills" title="Ferramentas do dia a dia." />

        <div className="grid grid-cols-3 gap-6 max-[900px]:grid-cols-1 max-[560px]:gap-4" data-reveal="true">
          {SKILL_GROUPS.map((group) => (
            <Card className="flex flex-col gap-4 p-6 max-[560px]:gap-3 max-[560px]:p-5" key={group.title}>
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--muted2)]">{group.title}</span>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <Tag tag={tag} variant="tile" key={tag.label} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}
