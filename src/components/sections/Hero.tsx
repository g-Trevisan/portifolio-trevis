import { HERO_STACK, LINKEDIN_URL } from '@/data/portfolio'
import { cn } from '@/lib/cn'
import { sectionShell } from '@/lib/styles'
import { ButtonLink } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden py-[176px] pb-[120px] max-[760px]:py-[136px] max-[760px]:pb-[88px]"
      data-screen-label="Hero"
      aria-labelledby="hero-title"
    >
      <div
        className="pointer-events-none absolute inset-0 [background-image:linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_40%,transparent_100%)]"
        aria-hidden="true"
      />

      <div className={cn(sectionShell, 'relative flex flex-col items-start gap-7')}>
        <h1 id="hero-title" className="m-0 max-w-[900px] text-[76px] font-bold leading-[1.05] tracking-normal text-balance max-[900px]:text-[58px] max-[480px]:text-[42px]">
          Desenvolvedor Web Fullstack.
        </h1>
        <p className="m-0 max-w-[620px] text-lg leading-[1.65] text-[var(--muted)] text-pretty max-[480px]:text-base">
          Crio interfaces com <strong className="font-medium text-[var(--fg)]">Next.js</strong>,{' '}
          <strong className="font-medium text-[var(--fg)]">React</strong> e{' '}
          <strong className="font-medium text-[var(--fg)]">TypeScript</strong> — do componente ao deploy, com atenção à performance e à experiência de quem usa.
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-3 max-[480px]:w-full max-[480px]:flex-col">
          <ButtonLink href="#projetos" className="max-[480px]:w-full">
            Ver projetos
            <Icon name="arrow-right" size={16} />
          </ButtonLink>
          <ButtonLink href="#contato" variant="secondary" className="max-[480px]:w-full">
            Entrar em contato
          </ButtonLink>
          <ButtonLink
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="max-[480px]:w-full"
          >
            <Icon name="linkedin" size={16} />
            Ver LinkedIn
          </ButtonLink>
        </div>

        <ul className="m-0 mt-5 flex list-none flex-wrap items-center gap-x-6 gap-y-2.5 p-0 font-mono text-[13px] text-[var(--muted3)]" aria-label="Tecnologias principais">
          {HERO_STACK.map((technology) => (
            <li key={technology}>
              <span aria-hidden="true">// </span>
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
