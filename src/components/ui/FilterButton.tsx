'use client'

import { LuFilter } from 'react-icons/lu'

import { Button } from '@/components'
import { useViews } from '@/contexts/ViewsProvider'

interface IFilterButtonProps {}

const FilterButton: React.FC<IFilterButtonProps> = ({}) => {
  const { handleToggleFilterDrawer } = useViews()

  return (
    <Button variant="outline" size="outline" onClick={handleToggleFilterDrawer}>
      <LuFilter />
      Filtrar
    </Button>
  )
}

export default FilterButton
