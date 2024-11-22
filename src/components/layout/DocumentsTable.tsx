'use client'

import { useState, useMemo, useRef, useEffect } from 'react'
import { ChevronsUpDown, MoreHorizontal } from 'lucide-react'

import {
  ColumnDef,
  SortingState,
  VisibilityState,
  ColumnFiltersState,
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  flexRender
} from '@tanstack/react-table'
import {
  Checkbox,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
  TableFooter,
  CompositeCell
} from '@/components'
import { formatCurrency } from '@/utils/functions/formatCurrency'
import { formatDate } from '@/utils/functions/formatTime'
import { documentsData, ITableDocument, IDocument } from '@/data/documents'

interface IndeterminateButtonElement extends HTMLButtonElement {
  indeterminate?: boolean
}

export const columns: ColumnDef<ITableDocument>[] = [
  {
    id: 'select',
    header: ({ table }) => {
      const ref = useRef<IndeterminateButtonElement>(null)
      const isIndeterminate =
        table.getIsSomePageRowsSelected() && !table.getIsAllPageRowsSelected()

      useEffect(() => {
        if (ref.current) {
          ref.current.indeterminate = isIndeterminate
        }
      }, [isIndeterminate])

      return (
        <Checkbox
          ref={ref}
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      )
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <Button
        variant="filter"
        size="filter"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Nome do documento
        <ChevronsUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-color-secondary">{row.getValue('name')}</div>
    )
  },
  {
    accessorKey: 'issuer',
    header: ({ column }) => (
      <Button
        variant="filter"
        size="filter"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Emitente
        <ChevronsUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-color-secondary">{row.getValue('issuer')}</div>
    )
  },
  {
    accessorKey: 'totalTaxValue',
    header: ({ column }) => (
      <Button
        variant="filter"
        size="filter"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Valor total dos tributos
        <ChevronsUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-color-secondary">
        {formatCurrency(row.getValue('totalTaxValue'))}
      </div>
    )
  },
  {
    accessorKey: 'netValue',
    header: ({ column }) => (
      <Button
        variant="filter"
        size="filter"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Valor líquido
        <ChevronsUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-color-secondary">
        {formatCurrency(row.getValue('netValue'))}
      </div>
    )
  },
  {
    accessorKey: 'creationDate',
    header: ({ column }) => (
      <Button
        variant="filter"
        size="filter"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Data de criação
        <ChevronsUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-color-secondary">
        {formatDate(row.getValue('creationDate'))}
      </div>
    )
  },
  {
    accessorKey: 'lastEditDate',
    header: ({ column }) => (
      <Button
        variant="filter"
        size="filter"
        onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
      >
        Última atualização
        <ChevronsUpDown />
      </Button>
    ),
    cell: ({ row }) => (
      <div className="text-color-secondary">
        {formatDate(row.getValue('lastEditDate'))}
      </div>
    )
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="filter" size="filter" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => {}}>Visualizar</DropdownMenuItem>
          <DropdownMenuItem onClick={() => {}}>Excluir</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
]

interface IDocumentsTableProps {}

const DocumentsTable: React.FC<IDocumentsTableProps> = () => {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const tableDocuments: ITableDocument[] = useMemo(() => {
    return documentsData.map((doc) => ({
      id: doc.id,
      name: doc.name,
      issuer: doc.issuer,
      totalTaxValue: doc.totalTaxValue,
      netValue: doc.netValue,
      creationDate: doc.creationDate,
      lastEditDate: doc.lastEditDate
    }))
  }, [])

  const table = useReactTable({
    data: tableDocuments,
    columns,
    state: { sorting, columnFilters, columnVisibility, rowSelection },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel()
  })

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} withoutSelect>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              Sem resultados
            </TableCell>
          </TableRow>
        )}
      </TableBody>
      <TableFooter>
        <TableRow withoutSelect>
          <TableCell>
            <CompositeCell
              label="Total"
              value={`${tableDocuments.length} ${
                tableDocuments.length > 1 ? 'documentos' : 'documento'
              }`}
            />
          </TableCell>
          <TableCell>
            <CompositeCell
              label="nº de emitentes"
              value={`${tableDocuments.length} ${
                tableDocuments.length > 1 ? 'emitentes' : 'emitente'
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

// <Table>
//   <TableHeader>
//     <TableRow withoutSelect>
//       <TableHead className="w-[200px]">Nome do documento</TableHead>
//       <TableHead>Emitente</TableHead>
//       <TableHead>Valor total dos tributos</TableHead>
//       <TableHead>Valor líquido</TableHead>
//       <TableHead>Data de criação</TableHead>
//       <TableHead>Última atualização</TableHead>
//       <TableHead className="w-[60px]" />
//     </TableRow>
//   </TableHeader>
//   <TableBody>
//     {documents.map((document: IDocument) => (
//       <TableRow key={document.id}>
//         <TableCell className="w-[200px]">
//           <div className="flex items-center gap-[10px] [&>svg]:font-[24px] [&>svg]:text-color-contrast">
//             <FileText />
//             <CompositeCell
//               label={`Cód. ${document.code}`}
//               value={document.name}
//             />
//           </div>
//         </TableCell>
//         <TableCell>{document.issuer}</TableCell>
//         <TableCell>{formatCurrency(document.totalTaxValue)}</TableCell>
//         <TableCell>{formatCurrency(document.netValue)}</TableCell>
//         <TableCell>{formatDate(document.creationDate)}</TableCell>
//         <TableCell>{formatDate(document.lastEditDate)}</TableCell>
//         <TableCell className="w-[60px] text-right">
//           <Button variant="icon" size="icon" className="hidden sm:flex">
//             <MoreHorizontal />
//           </Button>
//         </TableCell>
//       </TableRow>
//     ))}
//   </TableBody>
// <TableFooter>
//   <TableRow withoutSelect>
//     <TableCell>
//       <CompositeCell
//         label="Total"
//         value={`${documents.length} ${
//           documents.length > 1 ? 'documentos' : 'documento'
//         }`}
//       />
//     </TableCell>
//     <TableCell>
//       <CompositeCell
//         label="nº de emitentes"
//         value={`${documents.length} ${
//           documents.length > 1 ? 'emitentes' : 'emitente'
//         }`}
//       />
//     </TableCell>
//     <TableCell>
//       <CompositeCell
//         label="Total de tributos"
//         value={formatCurrency(1800)}
//       />
//     </TableCell>
//     <TableCell colSpan={3}>
//       <CompositeCell
//         label="Total valor líquido"
//         value={formatCurrency(18000)}
//       />
//     </TableCell>
//     <TableCell className="w-[60px]" />
//   </TableRow>
// </TableFooter>
// </Table>
