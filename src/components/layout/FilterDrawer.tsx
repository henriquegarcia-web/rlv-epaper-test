'use client'

import { Backdrop, BoxInformation, DocumentsFilter, Drawer } from '@/components'
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
        <div className="flex flex-col gap-[15px] w-full">
          <BoxInformation info="Selecione o tipo de documento necessário para, a partir dele, selecionar os tipos de índice para a filtragem." />
          <DocumentsFilter handleCloseDrawer={handleToggleFilterDrawer} />
        </div>
      </Drawer>
      {isFilterDrawerOpen && (
        <Backdrop type="dark" handleCloseBackdrop={handleToggleFilterDrawer} />
      )}
    </>
  )
}

export default FilterDrawer
