'use client'

import { Drawer } from '@/components'
import { useViews } from '@/contexts/ViewsProvider'

interface IFilterDrawerProps {}

const FilterDrawer: React.FC<IFilterDrawerProps> = ({}) => {
  const { isFilterDrawerOpen, handleToggleFilterDrawer } = useViews()

  return (
    <>
      <Drawer
        title="Filtrar documentos"
        legend="Indique os dados necessários para realizar a filtragem"
        isDrawerOpen={isFilterDrawerOpen}
        handleCloseDrawer={handleToggleFilterDrawer}
      >
        <div></div>
      </Drawer>
      {isFilterDrawerOpen && (
        <div
          className="!z-[110] fixed top-0 left-0 flex w-full h-full bg-backdrop opacity-70"
          onClick={handleToggleFilterDrawer}
        />
      )}
    </>
  )
}

export default FilterDrawer
