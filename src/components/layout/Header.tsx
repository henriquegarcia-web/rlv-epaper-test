import { Logo, ToggleSideMenu } from '@/components'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = ({}) => {
  return (
    <header className="flex w-full h-admin-header border border-blue-500 bg-foreground">
      <div className="flex w-admin-sidemenu h-full justify-center items-center border border-red-500">
        <ToggleSideMenu />
      </div>
      <div className="flex items-center h-full px-[10px]">
        <Logo />
      </div>
    </header>
  )
}

export default Header
