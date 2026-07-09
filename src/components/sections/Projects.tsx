import { PROJECTS } from '@/data/portfolio'
import type { Project } from '@/types/portfolio'
import { Card } from '@/components/ui/Card'
import { ExternalLink } from '@/components/ui/ExternalLink'
import { Icon } from '@/components/ui/Icon'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Tag } from '@/components/ui/Tag'

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      as="article"
      className="flex flex-col overflow-hidden transition-colors hover:border-[var(--borderh)]"
      data-reveal="true"
    >
      <img
        src={project.image}
        alt={project.alt}
        loading="lazy"
        decoding="async"
        className="block h-60 w-full border-b border-[var(--border)] object-cover object-top max-[560px]:h-[180px]"
      />

      <div className="flex flex-1 flex-col gap-3.5 p-6 max-[560px]:gap-3 max-[560px]:p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="m-0 text-xl font-semibold tracking-normal max-[560px]:text-lg">{project.title}</h3>
          <Icon name="external" size={17} className="shrink-0 text-[var(--muted2)]" />
        </div>

        <p className="m-0 text-[14.5px] leading-[1.6] text-[var(--muted)] max-[560px]:text-sm max-[560px]:leading-[1.55]">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag tag={tag} key={tag.label} />
          ))}
        </div>

        <div className="mt-auto flex w-full items-center justify-between gap-4 pt-1 text-sm font-medium">
          <ExternalLink
            href={project.liveUrl}
            className="inline-flex items-center gap-1.5 text-[var(--fg)] transition-colors hover:text-[var(--accent)]"
            aria-label={`Abrir projeto ${project.title} em nova aba`}
          >
            Ver projeto
            <Icon name="external" size={14} />
          </ExternalLink>
          <ExternalLink
            href={project.codeUrl}
            className="inline-flex items-center gap-1.5 text-[var(--muted)] transition-colors hover:text-[var(--accent)]"
            aria-label={`Abrir GitHub de Gustavo Trevisan em nova aba`}
          >
            <Icon name="github" size={14} />
            GitHub
          </ExternalLink>
        </div>
      </div>
    </Card>
  )
}

export function Projects() {
  return (
    <Section id="projetos" label="Projetos">
      <div className="flex flex-col gap-10">
        <SectionHeading eyebrowText="Projetos em destaque" title="Trabalhos que resolvem problemas reais." titleClassName="leading-[1.2]" />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(340px,100%),1fr))] gap-6">
          {PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </Section>
  )
}
