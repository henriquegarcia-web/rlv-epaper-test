import { MoreHorizontal, FileText } from 'lucide-react'

import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  Button,
  CompositeCell
} from '@/components'
import { formatCurrency } from '@/utils/functions/formatCurrency'
import { formatDate } from '@/utils/functions/formatTime'
import { documentsData, IDocument } from '@/data/documents'

interface IDocumentsTableProps {}

const DocumentsTable: React.FC<IDocumentsTableProps> = ({}) => {
  const documents = documentsData

  return (
    <Table>
      <TableHeader>
        <TableRow withoutSelect>
          <TableHead className="w-[200px]">Nome do documento</TableHead>
          <TableHead>Emitente</TableHead>
          <TableHead>Valor total dos tributos</TableHead>
          <TableHead>Valor líquido</TableHead>
          <TableHead>Data de criação</TableHead>
          <TableHead>Última atualização</TableHead>
          <TableHead className="w-[60px]" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {documents.map((document: IDocument) => (
          <TableRow key={document.id}>
            <TableCell className="w-[200px]">
              <div className="flex items-center gap-[10px] [&>svg]:font-[24px] [&>svg]:text-color-contrast">
                <FileText />
                <CompositeCell
                  label={`Cód. ${document.code}`}
                  value={document.name}
                />
              </div>
            </TableCell>
            <TableCell>{document.issuer}</TableCell>
            <TableCell>{formatCurrency(document.totalTaxValue)}</TableCell>
            <TableCell>{formatCurrency(document.netValue)}</TableCell>
            <TableCell>{formatDate(document.creationDate)}</TableCell>
            <TableCell>{formatDate(document.lastEditDate)}</TableCell>
            <TableCell className="w-[60px] text-right">
              <Button variant="icon" size="icon" className="hidden sm:flex">
                <MoreHorizontal />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow withoutSelect>
          <TableCell>
            <CompositeCell
              label="Total"
              value={`${documents.length} ${
                documents.length > 1 ? 'documentos' : 'documento'
              }`}
            />
          </TableCell>
          <TableCell>
            <CompositeCell
              label="nº de emitentes"
              value={`${documents.length} ${
                documents.length > 1 ? 'emitentes' : 'emitente'
              }`}
            />
          </TableCell>
          <TableCell>
            <CompositeCell
              label="Total de tributos"
              value={formatCurrency(1800)}
            />
          </TableCell>
          <TableCell colSpan={3}>
            <CompositeCell
              label="Total valor líquido"
              value={formatCurrency(18000)}
            />
          </TableCell>
          <TableCell className="w-[60px]" />
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default DocumentsTable

// ============================================== COMPOSITE CELL
