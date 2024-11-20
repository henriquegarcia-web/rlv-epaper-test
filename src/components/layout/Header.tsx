import {
  Logo,
  Navigation,
  Notifications,
  ToggleSideMenu,
  UserMenu
} from '@/components'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = ({}) => {
  return (
    <header className="flex justify-between items-center w-full h-admin-header py-[12px] pr-[14px] bg-foreground border-b border-b-border-primary">
      <div className="flex items-center h-full">
        <div className="flex w-admin-sidemenu h-full justify-center items-center">
          <ToggleSideMenu />
        </div>
        <div className="flex items-center h-full px-[10px] border-r border-r-border-primary">
          <Logo type="default" />
        </div>
        <div className="flex items-center h-full px-[10px]">
          <Navigation />
        </div>
      </div>
      <div className="flex items-center gap-[15px] h-full">
        <Notifications />
        <UserMenu />
      </div>
    </header>
  )
}

export default Header
