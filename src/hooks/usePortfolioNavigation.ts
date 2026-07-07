import { useDisclosure } from './useDisclosure'

export function usePortfolioNavigation() {
  const mobileMenu = useDisclosure()
  const themeMenu = useDisclosure()

  function closeMenus() {
    mobileMenu.close()
    themeMenu.close()
  }

  return { mobileMenu, themeMenu, closeMenus }
}
