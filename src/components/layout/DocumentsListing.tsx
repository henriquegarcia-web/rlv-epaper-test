'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

// import { useEffect } from 'react'

import {
  CreateButton,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components'
import {
  DocumentsSubFilterDefaultValues,
  DocumentsSubFilterSchema,
  DocumentsSubFilterTypes
} from '@/utils/schemas/forms'

// import { useDocuments } from '@/hooks/useDocuments'

interface IDocumentsListingProps {}

const DocumentsListing: React.FC<IDocumentsListingProps> = ({}) => {
  // const {
  //   documents,
  //   isLoadingDocuments,
  //   createDocument,
  //   updateDocument,
  //   deleteDocument
  // } = useDocuments()

  // useEffect(() => {
  //   console.log(documents)
  // }, [documents])

  // if (isLoadingDocuments) return <div>Carregando...</div>

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex justify-between items-end w-full">
        <DocumentsListingFilter />
        <CreateButton label="Novo documento" onClick={() => {}} />
      </div>
    </div>
  )
}

export default DocumentsListing

// =============================================

interface IDocumentsListingFilterProps {}

const DocumentsListingFilter: React.FC<IDocumentsListingFilterProps> = ({}) => {
  const form = useForm<DocumentsSubFilterTypes>({
    resolver: zodResolver(DocumentsSubFilterSchema),
    defaultValues: DocumentsSubFilterDefaultValues
  })

  const onSubmit = (data: DocumentsSubFilterTypes) => {
    console.log(data)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-[20px]">
        <FormField
          control={form.control}
          name="documentOrigin"
          render={({ field }) => (
            <FormItem className="flex flex-col w-[260px]">
              <FormLabel>Origem do documento</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ''}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione uma origem" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tipos</SelectLabel>
                    <SelectItem value="notaFiscal">Nota Fiscal</SelectItem>
                    <SelectItem value="recibo">Recibo</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="documentType"
          render={({ field }) => (
            <FormItem className="flex flex-col w-[260px]">
              <FormLabel>Tipo documental</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ''}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um tipo" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tipos</SelectLabel>
                    <SelectItem value="notaFiscal">Nota Fiscal</SelectItem>
                    <SelectItem value="recibo">Recibo</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
