import { Logo, ToggleSideMenu } from '@/components'

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = ({}) => {
  return (
    <header className="flex w-full h-[var(--admin-header-h)] border border-blue-500 bg-[var(--foreground)]">
      <div className="flex w-[var(--admin-sidemenu-w)] h-full justify-center items-center border border-red-500">
        <ToggleSideMenu />
      </div>
      <div className="flex items-center h-full px-[10px]">
        <Logo />
      </div>
    </header>
  )
}

export default Header
