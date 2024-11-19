'use client'

import { LuMenu } from 'react-icons/lu'

import clsx from 'clsx'

import { useViews } from '@/contexts/ViewsProvider'

interface IToggleSideMenuProps {}

const ToggleSideMenu: React.FC<IToggleSideMenuProps> = ({}) => {
  const { isSideMenuOpen, handleToggleSideMenu } = useViews()

  return (
    <button
      className={clsx(
        'flex w-[40px] h-[40px] rounded-[4px] justify-center items-center cursor-pointer hover:bg-active-secondary transition-all duration-300',
        {
          'bg-foreground': !isSideMenuOpen,
          'bg-active-secondary': isSideMenuOpen
        }
      )}
      onClick={handleToggleSideMenu}
    >
      <LuMenu className="text-[24px] text-color-primary" />
    </button>
  )
}

export default ToggleSideMenu
