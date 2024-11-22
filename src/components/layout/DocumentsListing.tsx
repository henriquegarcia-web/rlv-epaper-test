import {
  CreateButton,
  DocumentsListingFilter,
  DocumentsTable
} from '@/components'

interface IDocumentsListingProps {}

const DocumentsListing: React.FC<IDocumentsListingProps> = ({}) => {
  return (
    <div className="flex flex-col gap-[15px] w-full h-full">
      <div className="flex justify-between items-end w-full">
        <DocumentsListingFilter />
        <CreateButton label="Novo documento" onClick={() => {}} />
      </div>
      <div className="flex w-full">
        <DocumentsTable />
      </div>
    </div>
  )
}

export default DocumentsListing
