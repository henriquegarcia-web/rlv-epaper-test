'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Modal,
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
  SelectValue,
  Separator,
  Button,
  FileUploadInput
} from '@/components'
import { useViews } from '@/contexts/ViewsProvider'
import {
  DocumentCreateFormTypes,
  DocumentCreateFormSchema,
  DocumentCreateFormDefaultValues
} from '@/utils/schemas/forms'

interface IDocumentsCreateFormProps {}

const DocumentsCreateForm: React.FC<IDocumentsCreateFormProps> = ({}) => {
  const { isCreateDocModalOpen, handleToggleCreateDocModal } = useViews()

  const form = useForm<DocumentCreateFormTypes>({
    resolver: zodResolver(DocumentCreateFormSchema),
    defaultValues: DocumentCreateFormDefaultValues
  })

  const [file, setFile] = useState<File | null>(null)

  const handleFileChange = (newFile: File | null) => {
    setFile(newFile)
    // Aqui você pode realizar outras ações com o arquivo, como enviá-lo para um servidor
  }

  const onSubmit = (data: DocumentCreateFormTypes) => {
    console.log(data)
  }

  const handleReset = () => {
    form.reset(DocumentCreateFormDefaultValues)
  }

  return (
    <Modal
      title="Criar novo documento"
      legend="Insira os dados necessários para criar"
      isModalOpen={isCreateDocModalOpen}
      handleCloseModal={handleToggleCreateDocModal}
    >
      <div className="flex flex-col gap-[25px] w-full">
        <span className="flex w-fit py-[10px] px-[15px] rounded-[100px] bg-active-secondary text-[14px] leading-[14px] font-bold text-color-secondary">
          0000
        </span>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-[25px] w-full"
          >
            <FormField
              control={form.control}
              name="documentOrigin"
              render={({ field }) => (
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Origem do documento</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ''}
                  >
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
                <FormItem className="flex flex-col w-full">
                  <FormLabel>Tipo documental</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value || ''}
                  >
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
            <FileUploadInput onFileChange={handleFileChange} value={file} />
            <Separator className="!my-[10px]" />
            <div className="flex justify-end gap-[8px]">
              <Button
                type="button"
                variant="outline"
                size="outline"
                onClick={handleReset}
              >
                Limpar
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="primary"
                disabled={!form.formState.isValid}
              >
                Criar documento
                <ArrowRight />
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </Modal>
  )
}

export default DocumentsCreateForm
