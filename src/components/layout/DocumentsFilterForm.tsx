'use client'

import { useState } from 'react'
import { Calendar as LuCalendar } from 'lucide-react'

import { DateRange } from 'react-day-picker'
import { format } from 'date-fns'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Button,
  Calendar,
  Form,
  FormControl,
  Separator,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  Input
} from '@/components'
import { cn } from '@/lib/utils'
import {
  formatCurrency,
  handleCurrencyInput
} from '@/utils/functions/formatCurrency'
import {
  DocumentsFilterDefaultValues,
  DocumentsFilterFormSchema,
  DocumentsFilterFormTypes
} from '@/utils/schemas/forms'

interface IDocumentsFilterFormProps {
  handleCloseDrawer: () => void
}

const DocumentsFilterForm: React.FC<IDocumentsFilterFormProps> = ({
  handleCloseDrawer
}) => {
  const [date, setDate] = useState<DateRange | undefined>()

  const form = useForm<DocumentsFilterFormTypes>({
    resolver: zodResolver(DocumentsFilterFormSchema),
    defaultValues: DocumentsFilterDefaultValues
  })

  const watchDocumentType = form.watch('documentType')
  const isFieldsEnabled = !!watchDocumentType

  const onSubmit = (data: DocumentsFilterFormTypes) => {
    console.log(data)

    handleCloseDrawer()
  }

  const handleReset = () => {
    form.reset(DocumentsFilterDefaultValues)
    setDate(undefined)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-[15px]"
      >
        {/* ======================================== INPUT PER. DE CRIAÇÃO */}
        <FormField
          control={form.control}
          name="documentPeriod"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Período de criação</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value?.from ? (
                        field.value.to ? (
                          <>
                            {format(field.value.from, 'dd/MM/yyyy')} -{' '}
                            {format(field.value.to, 'dd/MM/yyyy')}
                          </>
                        ) : (
                          format(field.value.from, 'dd/MM/yyyy')
                        )
                      ) : (
                        <span className="text-color-legend">
                          Selecionar período
                        </span>
                      )}
                      <LuCalendar className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    selected={date}
                    onSelect={(range) => {
                      setDate(range)
                      if (range?.from && range?.to) {
                        field.onChange(range)
                      }
                    }}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="!my-[10px]" />
        {/* ======================================== INPUT TIPO DE DOCUMENTO */}
        <FormField
          control={form.control}
          name="documentType"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Tipo de documento</FormLabel>
              <Select onValueChange={field.onChange} value={field.value || ''}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione uma opção" />
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
        {/* ======================================== INPUT EMITENTE */}
        <FormField
          control={form.control}
          name="documentIssuer"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Emitente</FormLabel>
              <FormControl>
                <Input
                  placeholder="Razão social do emitente"
                  {...field}
                  disabled={!isFieldsEnabled}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* ======================================== INPUT TRIBUTOS TOTAIS */}
        <FormField
          control={form.control}
          name="documentTotalTaxes"
          render={({ field: { onChange, value, ...field } }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Valor total dos tributos</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={!isFieldsEnabled}
                  placeholder="R$ 0,00"
                  onChange={(e) => handleCurrencyInput(e, onChange)}
                  value={value ? formatCurrency(value) : ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* ======================================== INPUT VALOR LÍQUIDO */}
        <FormField
          control={form.control}
          name="documentNetValue"
          render={({ field: { onChange, value, ...field } }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Valor líquido</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={!isFieldsEnabled}
                  placeholder="R$ 0,00"
                  onChange={(e) => handleCurrencyInput(e, onChange)}
                  value={value ? formatCurrency(value) : ''}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="!my-[10px]" />
        {/* ======================================== FOOTER DO FORMULÁRIO  */}
        <div className="flex justify-end gap-[8px]">
          <Button type="button" variant="outline" onClick={handleReset}>
            Limpar
          </Button>
          <Button
            type="submit"
            variant="primary"
            disabled={!form.formState.isDirty}
          >
            Aplicar filtro
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default DocumentsFilterForm
