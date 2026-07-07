import { useState } from 'react'

export function useDisclosure(defaultOpen = false) {
  const [open, setOpen] = useState(defaultOpen)

  function close() {
    setOpen(false)
  }

  function toggle() {
    setOpen((current) => !current)
  }

  return { open, setOpen, close, toggle }
}
