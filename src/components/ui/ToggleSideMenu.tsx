'use client'

import { LuMenu } from 'react-icons/lu'

import { Button } from '@/components'

import { useViews } from '@/contexts/ViewsProvider'

interface IToggleSideMenuProps {}

const ToggleSideMenu: React.FC<IToggleSideMenuProps> = ({}) => {
  const { isSideMenuOpen, handleToggleSideMenu } = useViews()

  return (
    <Button
      variant="icon"
      size="icon"
      active={isSideMenuOpen}
      onClick={handleToggleSideMenu}
    >
      <LuMenu />
    </Button>
  )
}

export default ToggleSideMenu
