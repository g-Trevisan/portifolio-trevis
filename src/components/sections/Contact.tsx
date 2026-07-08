import { type FormEvent, useState } from "react";
import { CONTACT_LINKS } from "@/data/portfolio";
import { sectionCopy } from "@/lib/styles";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { TextareaField, TextInputField } from "@/components/ui/FormField";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setError("O envio ainda nao esta configurado.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", accessKey);
    formData.append("subject", "Nova mensagem pelo portfolio");

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Falha ao enviar mensagem");
      }

      form.reset();
      setSubmitted(true);
      setMessageLength(0);
    } catch {
      setError(
        "Nao foi possivel enviar a mensagem agora. Tente novamente ou chame no WhatsApp.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Section id="contato" label="Contato" className="pb-20 max-[760px]:pb-16">
      <div
        className="grid grid-cols-[1fr_1.1fr] items-start gap-16 max-[900px]:grid-cols-1"
        data-reveal="true"
      >
        <div className="flex flex-col gap-5">
          <SectionHeading
            eyebrowText="Contato"
            title="Vamos construir algo juntos?"
            className="gap-5"
          />
          <p className={sectionCopy}>
            Envie uma mensagem ou me encontre nas redes. Respondo em até 24h.
          </p>

          <div className="mt-2 flex flex-col gap-2.5">
            {CONTACT_LINKS.map((link) =>
              link.href.startsWith("http") ? (
                <ExternalLink
                  href={link.href}
                  className="inline-flex w-fit items-center gap-2.5 text-[15px] text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
                  key={link.href}
                >
                  <Icon name={link.icon} size={16} />
                  {link.label}
                </ExternalLink>
              ) : (
                <a
                  href={link.href}
                  className="inline-flex w-fit items-center gap-2.5 text-[15px] text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
                  key={link.href}
                >
                  <Icon name={link.icon} size={16} />
                  {link.label}
                </a>
              ),
            )}
          </div>
        </div>

        <Card className="p-7 max-[560px]:p-[22px]">
          {submitted ? (
            <div className="flex flex-col items-center gap-3.5 px-6 py-12 text-center">
              <Icon name="check" size={40} className="text-[var(--accent)]" />
              <strong className="text-lg font-semibold">
                Mensagem enviada!
              </strong>
              <span className="text-sm text-[var(--muted)]">
                Obrigado pelo contato — retorno em breve.
              </span>
              <Button
                type="button"
                variant="secondary"
                size="sm"
                className="mt-2 px-[18px]"
                onClick={() => setSubmitted(false)}
              >
                Enviar outra
              </Button>
            </div>
          ) : (
            <form className="flex flex-col gap-[18px]" onSubmit={handleSubmit}>
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />
              <div className="grid grid-cols-2 gap-4 max-[560px]:grid-cols-1">
                <TextInputField
                  label="Nome"
                  icon="user"
                  type="text"
                  name="name"
                  required
                  placeholder="Seu nome"
                  disabled={isSubmitting}
                />
                <TextInputField
                  label="E-mail"
                  icon="mail"
                  type="email"
                  name="email"
                  required
                  placeholder="voce@email.com"
                  disabled={isSubmitting}
                />
              </div>

              <TextareaField
                label="Mensagem"
                meta={
                  messageLength > 0
                    ? `${messageLength} caractere${messageLength === 1 ? "" : "s"}`
                    : ""
                }
                name="message"
                required
                rows={5}
                onInput={(event) =>
                  setMessageLength(event.currentTarget.value.length)
                }
                placeholder="Conte um pouco sobre o projeto: objetivo, prazo, referências..."
                disabled={isSubmitting}
              />

              {error ? <p className="text-sm text-red-500">{error}</p> : null}

              <Button
                type="submit"
                className="w-full border-0 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                {!isSubmitting ? <Icon name="arrow-right" size={15} /> : null}
              </Button>
            </form>
          )}
        </Card>
      </div>
    </Section>
  );
}
