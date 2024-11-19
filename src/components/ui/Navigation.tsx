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
            className="flex items-center gap-[8px] h-full px-[10px] text-[24px] text-color-secondary cursor-pointer"
          >
            {nav.icon}
            <span className="pt-[2x] text-[14px] leading-[14px] text-color-secondary">
              {nav.label}
            </span>
          </li>
        )
      })}
    </ul>
  )
}

export default Navigation
