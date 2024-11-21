import { CreateButton, DocumentsListingFilter, Table } from '@/components'

interface IDocumentsListingProps {}

const DocumentsListing: React.FC<IDocumentsListingProps> = ({}) => {
  return (
    <div className="flex flex-col gap-[15px] w-full h-full">
      <div className="flex justify-between items-end w-full border border-red-500">
        <DocumentsListingFilter />
        <CreateButton label="Novo documento" onClick={() => {}} />
      </div>
      <div className="flex w-full border border-blue-500">
        <Table />
      </div>
    </div>
  )
}

export default DocumentsListing
