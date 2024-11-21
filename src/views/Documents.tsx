import { LuSearch } from 'react-icons/lu'

import {
  DocumentsListing,
  FilterButton,
  FilterDrawer,
  Input
} from '@/components'

interface IDocumentsViewProps {}

const DocumentsView: React.FC<IDocumentsViewProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col w-full h-full pt-[25px] pr-[16px] pb-[20px] pl-[20px] bg-foreground">
        <div className="flex justify-between w-full pb-[20px] border-b border-b-border-primary">
          <div className="flex flex-col gap-[8px]">
            <h1 className="text-[24px] leading-[24px] font-bold text-color-secondary">
              Documentos
            </h1>
            <p className="text-[14px] leading-[14px] text-color-legend">
              Crie, gerencie e visualize os documentos
            </p>
          </div>
          <div className="flex items-center gap-[14px]">
            <div className="w-[280px]">
              <Input placeholder="Buscar documentos" icon={<LuSearch />} />
            </div>
            <FilterButton />
          </div>
        </div>
        <div className="flex flex-1 border border-red-500">
          <DocumentsListing />
        </div>
      </div>

      <FilterDrawer />
    </>
  )
}

export default DocumentsView
