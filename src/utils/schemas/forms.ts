import { z } from 'zod'

// =============== DOCUMENTS FILTER ===============

const DocumentsFilterSchema = z.object({
  documentPeriod: z
    .object({
      from: z.date().optional(),
      to: z.date().optional()
    })
    .optional(),
  documentType: z.string().optional(),
  documentIssuer: z.string().optional(),
  documentTotalTaxes: z.number().optional(),
  documentNetValue: z.number().optional()
})

export type DocumentsFilterTypes = z.infer<typeof DocumentsFilterSchema>

const DocumentsFilterDefaultValues = {
  documentPeriod: {
    from: undefined,
    to: undefined
  },
  documentType: '',
  documentIssuer: '',
  documentTotalTaxes: undefined,
  documentNetValue: undefined
}

// =============== DOCUMENTS SUB FILTER ===============

const DocumentsListingFilterSchema = z.object({
  documentOrigin: z.string().optional(),
  documentType: z.string().optional()
})

export type DocumentsListingFilterTypes = z.infer<
  typeof DocumentsListingFilterSchema
>

const DocumentsListingFilterDefaultValues = {
  documentOrigin: '',
  documentType: ''
}

// =============== DOCUMENTS SUB FILTER ===============

const DocumentCreateFormSchema = z.object({
  documentOrigin: z.string(),
  documentType: z.string()
})

export type DocumentCreateFormTypes = z.infer<typeof DocumentCreateFormSchema>

const DocumentCreateFormDefaultValues = {
  documentOrigin: '',
  documentType: ''
}

export {
  DocumentsFilterSchema,
  DocumentsFilterDefaultValues,
  DocumentsListingFilterSchema,
  DocumentsListingFilterDefaultValues,
  DocumentCreateFormSchema,
  DocumentCreateFormDefaultValues
}
