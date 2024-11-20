'use client'

import { LuInfo } from 'react-icons/lu'

import { DocumentsFilterForm, Drawer } from '@/components'
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
          <div className="flex gap-[12px] p-[15px] rounded-[6px] border border-border-primary [&_svg]:size-[18px] [&_svg]:shrink-0 [&_svg]:text-color-secondary">
            <LuInfo />
            <span className="flex flex-1 text-[14px] leading-[18px] text-color-legend">
              Selecione o tipo de documento necessário para, a partir dele,
              selecionar os tipos de índice para a filtragem.
            </span>
          </div>
          <DocumentsFilterForm />
        </div>
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
