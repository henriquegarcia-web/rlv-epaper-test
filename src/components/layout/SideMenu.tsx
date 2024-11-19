'use client'

import clsx from 'clsx'

import { useViews } from '@/contexts/ViewsProvider'

interface ISideMenuProps {}

const SideMenu: React.FC<ISideMenuProps> = ({}) => {
  const { isSideMenuOpen } = useViews()

  return (
    <div
      className={clsx(
        'fixed top-admin-header left-0 flex h-admin-content border-r border-r-border-primary bg-foreground transition-all duration-300',
        {
          'w-admin-sidemenu': !isSideMenuOpen,
          'w-admin-sidemenu-open': isSideMenuOpen
        }
      )}
    ></div>
  )
}

export default SideMenu
