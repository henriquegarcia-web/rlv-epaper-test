'use client'

import clsx from 'clsx'
import { Button } from '@/components'

import { useViews } from '@/contexts/ViewsProvider'

import { IView, viewsData } from '@/data/views'
import { useEffect, useState } from 'react'

interface ISideMenuProps {}

const SideMenu: React.FC<ISideMenuProps> = ({}) => {
  const {
    activeView,
    handleChangeActiveView,
    isSideMenuOpen,
    handleToggleSideMenu
  } = useViews()
  const [showMenuLabels, setShowMenuLabels] = useState(false)

  useEffect(() => {
    if (isSideMenuOpen) {
      const timeout = setTimeout(() => setShowMenuLabels(true), 200)
      return () => clearTimeout(timeout)
    } else {
      setShowMenuLabels(false)
    }
  }, [isSideMenuOpen])

  return (
    <div className="fixed top-admin-header left-0 flex w-full h-admin-content">
      <div
        className={clsx(
          '!z-[100] fixed top-admin-header left-0 flex h-admin-content border-r border-r-border-primary bg-foreground transition-all duration-200',
          {
            'w-full max-w-admin-sidemenu': !isSideMenuOpen,
            'w-full max-w-admin-sidemenu-open-mobile md:max-w-admin-sidemenu-open':
              isSideMenuOpen
          }
        )}
      >
        <nav className="flex flex-col gap-[10px] w-full p-[10px]">
          {viewsData.map((menu: IView) => {
            if (!menu.visible) return null
            const isActive = menu.path === activeView

            return (
              <Button
                key={menu.id}
                active={isActive}
                onClick={() => handleChangeActiveView(menu.path)}
                disabled={!menu.active}
                variant="menu"
                size="menu"
                className="relative"
              >
                {menu.icon}
                {showMenuLabels && (
                  <span
                    className={clsx(
                      'pt-[1px] transition-opacity duration-200',
                      {
                        'opacity-0': !isSideMenuOpen,
                        'opacity-100': isSideMenuOpen
                      }
                    )}
                  >
                    {menu.label}
                  </span>
                )}
              </Button>
            )
          })}
        </nav>
      </div>
      {isSideMenuOpen && (
        <div
          className="!z-[10] absolute top-0 left-0 flex w-full h-admin-content backdrop-blur-[2px]"
          onClick={handleToggleSideMenu}
        />
      )}
    </div>
  )
}

export default SideMenu
