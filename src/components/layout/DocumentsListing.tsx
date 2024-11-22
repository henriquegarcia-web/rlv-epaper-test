import {
  CreateDocumentButton,
  DocumentsListingFilter,
  DocumentsTable
} from '@/components'

interface IDocumentsListingProps {}

const DocumentsListing: React.FC<IDocumentsListingProps> = ({}) => {
  return (
    <div className="flex flex-col gap-[15px] w-full h-full">
      <div className="flex justify-between items-end w-full">
        <DocumentsListingFilter />
        <CreateDocumentButton />
      </div>
      <div className="flex w-full">
        <DocumentsTable />
      </div>
    </div>
  )
}

export default DocumentsListing
