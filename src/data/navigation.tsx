import { LuLayoutGrid } from 'react-icons/lu'

export interface INavigation {
  id: string
  label: string
  icon: React.ReactNode
  visible: boolean
}

const navigationData: INavigation[] = [
  {
    id: 'nav_solutions',
    label: 'Soluções',
    icon: <LuLayoutGrid />,
    visible: true
  }
]

export { navigationData }
