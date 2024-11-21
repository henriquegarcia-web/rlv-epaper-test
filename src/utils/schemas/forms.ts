import { z } from 'zod'

// =============== DOCUMENTS FILTER ===============

const DocumentsFilterFormSchema = z.object({
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

export type DocumentsFilterFormTypes = z.infer<typeof DocumentsFilterFormSchema>

const DocumentsFilterDefaultValues = {
  documentPeriod: {
    from: undefined,
    to: undefined
  },
  documentType: undefined,
  documentIssuer: undefined,
  documentTotalTaxes: undefined,
  documentNetValue: undefined
}

export { DocumentsFilterFormSchema, DocumentsFilterDefaultValues }
