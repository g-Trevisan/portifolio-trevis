import { useEffect, useRef } from 'react'
import type { Theme } from '@/types/portfolio'

export function useLiquidSpotlight(theme: Theme) {
  const spotlightRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function handleMouseMove(event: MouseEvent) {
      if (!spotlightRef.current || theme !== 'liquido') return

      spotlightRef.current.style.opacity = '1'
      spotlightRef.current.style.background = `radial-gradient(520px circle at ${event.clientX}px ${event.clientY}px, rgba(255,255,255,.09), rgba(129,140,248,.07) 35%, rgba(34,211,238,.04) 55%, transparent 72%)`
    }

    function handleMouseLeave() {
      if (spotlightRef.current) spotlightRef.current.style.opacity = '0'
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [theme])

  return spotlightRef
}
