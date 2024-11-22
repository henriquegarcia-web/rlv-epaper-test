'use client'

import { MoreHorizontal, Trash, View, ChevronsUpDown } from 'lucide-react'

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
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
  Button
} from '@/components'
import { formatCurrency } from '@/utils/functions/formatCurrency'
import { formatDate } from '@/utils/functions/formatTime'
import { documentsData, IDocument, ITableDocument } from '@/data/documents'
import { useState } from 'react'

export const columns: ColumnDef<ITableDocument>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
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
    header: ({ column }) => {
      return (
        <Button
          variant="filter"
          size="filter"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Nome do documento
          <ChevronsUpDown />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="text-color-secondary">{row.getValue('name')}</div>
    )
  },
  {
    accessorKey: 'issuer',
    header: ({ column }) => {
      return (
        <Button
          variant="filter"
          size="filter"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Emitente
          <ChevronsUpDown />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="text-color-secondary">{row.getValue('issuer')}</div>
    )
  },
  {
    accessorKey: 'totalTaxValue',
    header: ({ column }) => {
      return (
        <Button
          variant="filter"
          size="filter"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Valor total dos tributos
          <ChevronsUpDown />
        </Button>
      )
    },
    cell: ({ row }) => {
      const totalTaxValue: number = row.getValue('totalTaxValue')
      return (
        <div className="text-color-secondary">
          {formatCurrency(totalTaxValue)}
        </div>
      )
    }
  },
  {
    accessorKey: 'netValue',
    header: ({ column }) => {
      return (
        <Button
          variant="filter"
          size="filter"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Valor líquido
          <ChevronsUpDown />
        </Button>
      )
    },
    cell: ({ row }) => {
      const netValue: number = row.getValue('netValue')
      return (
        <div className="text-color-secondary">{formatCurrency(netValue)}</div>
      )
    }
  },
  {
    accessorKey: 'creationDate',
    header: ({ column }) => {
      return (
        <Button
          variant="filter"
          size="filter"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Data de criação
          <ChevronsUpDown />
        </Button>
      )
    },
    cell: ({ row }) => {
      const creationDate: Date = row.getValue('creationDate')
      return (
        <div className="text-color-secondary">{formatDate(creationDate)}</div>
      )
    }
  },
  {
    accessorKey: 'lastEditDate',
    header: ({ column }) => {
      return (
        <Button
          variant="filter"
          size="filter"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Última atualização
          <ChevronsUpDown />
        </Button>
      )
    },
    cell: ({ row }) => {
      const lastEditDate: Date = row.getValue('lastEditDate')
      return (
        <div className="text-color-secondary">{formatDate(lastEditDate)}</div>
      )
    }
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="filter" size="filter" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => {}}>
              <View /> Vizualizar
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => {}}>
              <Trash />
              Excluir documento
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]

interface IDocumentsTableProps {}

const DocumentsTable: React.FC<IDocumentsTableProps> = ({}) => {
  const documents: IDocument[] = documentsData

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const tableDocuments: ITableDocument[] = documents.map((document) => ({
    name: document.name,
    issuer: document.issuer,
    totalTaxValue: document.totalTaxValue,
    netValue: document.netValue,
    creationDate: document.creationDate,
    lastEditDate: document.lastEditDate
  }))

  const table = useReactTable({
    data: tableDocuments,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection
    }
  })

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id} withoutSelect>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
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
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
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
    //   <TableFooter>
    //     <TableRow withoutSelect>
    //       <TableCell>
    //         <CompositeCell
    //           label="Total"
    //           value={`${documents.length} ${
    //             documents.length > 1 ? 'documentos' : 'documento'
    //           }`}
    //         />
    //       </TableCell>
    //       <TableCell>
    //         <CompositeCell
    //           label="nº de emitentes"
    //           value={`${documents.length} ${
    //             documents.length > 1 ? 'emitentes' : 'emitente'
    //           }`}
    //         />
    //       </TableCell>
    //       <TableCell>
    //         <CompositeCell
    //           label="Total de tributos"
    //           value={formatCurrency(1800)}
    //         />
    //       </TableCell>
    //       <TableCell colSpan={3}>
    //         <CompositeCell
    //           label="Total valor líquido"
    //           value={formatCurrency(18000)}
    //         />
    //       </TableCell>
    //       <TableCell className="w-[60px]" />
    //     </TableRow>
    //   </TableFooter>
    // </Table>
  )
}

export default DocumentsTable
