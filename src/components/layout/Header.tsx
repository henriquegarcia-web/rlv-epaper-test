import { Logo, ToggleSideMenu } from '@/components'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = ({}) => {
  return (
    <header className="flex w-full h-admin-header py-[12px] bg-foreground border-b border-b-border-primary">
      <div className="flex w-admin-sidemenu h-full justify-center items-center">
        <ToggleSideMenu />
      </div>
      <div className="flex items-center h-full px-[10px] border-r border-r-border-primary">
        <Logo />
      </div>
    </header>
  )
}

export default Header
