'use client'

import clsx from 'clsx'

import { useViews } from '@/contexts/ViewsProvider'

interface ISideMenuProps {}

const SideMenu: React.FC<ISideMenuProps> = ({}) => {
  const { isSideMenuOpen } = useViews()

  return (
    <div
      className={clsx(
        'fixed top-[var(--admin-header-h)] left-0 flex h-[var(--admin-content-h)] border border-white-500 bg-[var(--foreground)] transition-all duration-300',
        {
          'w-[var(--admin-sidemenu-w)]': !isSideMenuOpen,
          'w-[var(--admin-sidemenu-open-w)]': isSideMenuOpen
        }
      )}
    ></div>
  )
}

export default SideMenu
