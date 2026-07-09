import { EXPERIENCE } from "@/data/portfolio";
import { eyebrow } from "@/lib/styles";
import { Card } from "@/components/ui/Card";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import type { ExperienceItem, ExperienceRole } from "@/types/portfolio";

const MONTH_LABELS = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
] as const;

type MonthDate = {
  year: number;
  month: number;
};

function parseMonthDate(value: string): MonthDate {
  const [year, month] = value.split("-").map(Number);

  return { year, month };
}

function getCurrentMonthDate(): MonthDate {
  const now = new Date();

  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
  };
}

function compareMonthDates(left: MonthDate, right: MonthDate) {
  return left.year === right.year ? left.month - right.month : left.year - right.year;
}

function getInclusiveMonths(startDate: MonthDate, endDate: MonthDate) {
  const months =
    (endDate.year - startDate.year) * 12 + (endDate.month - startDate.month) + 1;

  return Math.max(months, 0);
}

function formatDuration(totalMonths: number) {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts: string[] = [];

  if (years > 0) parts.push(`${years} ${years === 1 ? "ano" : "anos"}`);
  if (months > 0) parts.push(`${months} ${months === 1 ? "mês" : "meses"}`);

  return parts.length ? parts.join(" e ") : "menos de 1 mês";
}

function formatMonthDate(date: MonthDate) {
  return `${MONTH_LABELS[date.month - 1]} de ${date.year}`;
}

function getRoleEndDate(role: ExperienceRole) {
  return role.endDate ? parseMonthDate(role.endDate) : getCurrentMonthDate();
}

function getRolePeriod(role: ExperienceRole) {
  const startDate = parseMonthDate(role.startDate);
  const endDate = getRoleEndDate(role);
  const endLabel = role.endDate ? formatMonthDate(endDate) : "o momento";
  const duration = formatDuration(getInclusiveMonths(startDate, endDate));

  return `${formatMonthDate(startDate)} - ${endLabel} · ${duration}`;
}

function getExperienceDuration(experience: ExperienceItem) {
  const roleDates = experience.roles.map((role) => ({
    start: parseMonthDate(role.startDate),
    end: getRoleEndDate(role),
  }));
  const startDate = roleDates.reduce(
    (earliest, current) =>
      compareMonthDates(current.start, earliest) < 0 ? current.start : earliest,
    roleDates[0].start,
  );
  const endDate = roleDates.reduce(
    (latest, current) =>
      compareMonthDates(current.end, latest) > 0 ? current.end : latest,
    roleDates[0].end,
  );

  return formatDuration(getInclusiveMonths(startDate, endDate));
}

export function Experience() {
  return (
    <Section id="experiencia" label="Experiência">
      <div className="flex flex-col gap-10" data-reveal="true">
        <span className={eyebrow}>Experiência</span>

        <div className="grid gap-6">
          {EXPERIENCE.map((experience) => (
            <Card as="article" className="p-6 max-[560px]:p-4" key={experience.company}>
              <div className="flex flex-col gap-1.5 border-b border-[var(--border)] pb-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="inline-flex size-9 items-center justify-center rounded-lg border border-[var(--border2)] bg-[var(--chip)] text-[var(--accent)]">
                    <Icon name="briefcase" size={17} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="m-0 text-xl font-semibold tracking-normal max-[480px]:text-[17px]">
                      {experience.company}
                    </h3>
                    <p className="m-0 text-sm text-[var(--muted)] max-[480px]:text-xs">
                      {experience.employmentType} · {getExperienceDuration(experience)}
                    </p>
                  </div>
                </div>
                <p className="m-0 pl-[46px] text-sm text-[var(--muted2)] max-[560px]:pl-0 max-[480px]:text-xs">
                  {experience.location}
                </p>
              </div>

              <div className="relative mt-6 flex flex-col gap-7 before:absolute before:left-[7px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-[var(--border2)] max-[560px]:gap-6 max-[560px]:before:left-[5px]">
                {experience.roles.map((role) => (
                  <div className="relative grid grid-cols-[16px_1fr] gap-5 max-[560px]:gap-3.5" key={role.title}>
                    <span className="mt-2 size-3.5 rounded-full border-2 border-[var(--bg)] bg-[var(--muted2)] ring-2 ring-[var(--border2)]" />
                    <div className="flex flex-col gap-3">
                      <div>
                        <h4 className="m-0 text-[17px] font-semibold tracking-normal max-[480px]:text-[15.5px]">
                          {role.title}
                        </h4>
                        <p className="relative m-0 mt-1 flex items-start gap-2 pl-5 text-sm text-[var(--muted)] max-[480px]:text-xs">
                          <Icon name="calendar" size={14} className="absolute left-0 top-[0.15em]" />
                          <span className="min-w-0 leading-[1.45]">
                            {getRolePeriod(role)} · {role.mode}
                          </span>
                        </p>
                      </div>

                      <div className="flex flex-col gap-2">
                        {role.description.map((paragraph) => (
                          <p
                            className="m-0 text-[15px] leading-[1.65] text-[var(--muted)] max-[480px]:text-[13.5px] max-[480px]:leading-[1.6]"
                            key={paragraph}
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {role.competencies.map((competency) => (
                          <span
                            className="rounded-full border border-[var(--border2)] bg-[var(--chip)] px-3 py-1 font-mono text-xs font-medium text-[var(--muted)] max-[480px]:px-2.5 max-[480px]:text-[11px]"
                            key={competency}
                          >
                            {competency}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
