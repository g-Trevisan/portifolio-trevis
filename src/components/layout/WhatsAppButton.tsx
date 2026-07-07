import { WHATSAPP_URL } from '@/data/portfolio'
import { Icon } from '@/components/ui/Icon'

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      className="fixed bottom-6 right-6 z-[60] inline-flex size-[54px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_8px_24px_rgba(0,0,0,.35)] transition hover:-translate-y-px hover:bg-[#1fb457] hover:text-white max-[560px]:bottom-[18px] max-[560px]:right-[18px]"
      target="_blank"
      rel="noreferrer"
      aria-label="Conversar no WhatsApp"
      title="Conversar no WhatsApp"
    >
      <Icon name="whatsapp" size={27} />
    </a>
  )
}
