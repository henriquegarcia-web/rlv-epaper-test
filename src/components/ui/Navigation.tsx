import { INavigation, navigationData } from '@/data/navigation'

interface INavigationProps {}

const Navigation: React.FC<INavigationProps> = ({}) => {
  return (
    <ul className="flex h-full gap-[10px]">
      {navigationData.map((nav: INavigation) => {
        if (!nav.visible) return null

        return (
          <li
            key={nav.id}
            className="flex items-center gap-[8px] h-full px-[10px] rounded-[6px] text-[24px] text-color-secondary cursor-pointer hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            {nav.icon}
            <span className="hidden pt-[2x] text-[14px] text-color-secondary sm:block">
              {nav.label}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default Navigation
