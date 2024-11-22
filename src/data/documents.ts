export interface IDocumentOption {
  id: string
  label: string
}

export interface IDocument {
  id: string
  code: number
  file: string
  name: string
  issuer: string
  totalTaxValue: number
  netValue: number
  creationDate: Date
  lastEditDate: Date
  documentOrigin: IDocumentOption
  documentType: IDocumentOption
}

export interface ITableDocument {
  id: string
  name: string
  issuer: string
  totalTaxValue: number
  netValue: number
  creationDate: Date
  lastEditDate: Date
}

const documentOrigins: IDocumentOption[] = [
  {
    id: 'origin_digitalized',
    label: 'Digitalizado'
  },
  {
    id: 'origin_physical',
    label: 'Físico'
  },
  {
    id: 'origin_scanned',
    label: 'Escaneado'
  },
  {
    id: 'origin_email',
    label: 'Email'
  },
  {
    id: 'origin_fax',
    label: 'Fax'
  }
]

const documentTypes: IDocumentOption[] = [
  {
    id: 'type_nf',
    label: 'Nota Fiscal'
  },
  {
    id: 'type_receipt',
    label: 'Recibo'
  },
  {
    id: 'type_invoice',
    label: 'Fatura'
  },
  {
    id: 'type_contract',
    label: 'Contrato'
  },
  {
    id: 'type_report',
    label: 'Relatório'
  },
  {
    id: 'type_memo',
    label: 'Memorando'
  }
]

const documentsData: IDocument[] = [
  {
    id: 'doc_001',
    code: 1001,
    file: 'file_001.pdf',
    name: 'Documento 1',
    issuer: 'Empresa A',
    totalTaxValue: 100.5,
    netValue: 900.0,
    creationDate: new Date('2024-01-01'),
    lastEditDate: new Date('2024-01-05'),
    documentOrigin: documentOrigins[0],
    documentType: documentTypes[0]
  },
  {
    id: 'doc_002',
    code: 1002,
    file: 'file_002.pdf',
    name: 'Documento 2',
    issuer: 'Empresa B',
    totalTaxValue: 200.75,
    netValue: 1800.0,
    creationDate: new Date('2024-02-01'),
    lastEditDate: new Date('2024-02-05'),
    documentOrigin: documentOrigins[1],
    documentType: documentTypes[1]
  },
  {
    id: 'doc_003',
    code: 1003,
    file: 'file_003.pdf',
    name: 'Documento 3',
    issuer: 'Empresa C',
    totalTaxValue: 150.0,
    netValue: 1350.0,
    creationDate: new Date('2024-03-01'),
    lastEditDate: new Date('2024-03-05'),
    documentOrigin: documentOrigins[2],
    documentType: documentTypes[2]
  },
  {
    id: 'doc_004',
    code: 1004,
    file: 'file_004.pdf',
    name: 'Documento 4',
    issuer: 'Empresa D',
    totalTaxValue: 120.0,
    netValue: 1080.0,
    creationDate: new Date('2024-04-01'),
    lastEditDate: new Date('2024-04-05'),
    documentOrigin: documentOrigins[3],
    documentType: documentTypes[3]
  },
  {
    id: 'doc_005',
    code: 1005,
    file: 'file_005.pdf',
    name: 'Documento 5',
    issuer: 'Empresa E',
    totalTaxValue: 180.25,
    netValue: 1620.0,
    creationDate: new Date('2024-05-01'),
    lastEditDate: new Date('2024-05-05'),
    documentOrigin: documentOrigins[4],
    documentType: documentTypes[4]
  },
  {
    id: 'doc_006',
    code: 1006,
    file: 'file_006.pdf',
    name: 'Documento 6',
    issuer: 'Empresa F',
    totalTaxValue: 210.0,
    netValue: 1890.0,
    creationDate: new Date('2024-06-01'),
    lastEditDate: new Date('2024-06-05'),
    documentOrigin: documentOrigins[0],
    documentType: documentTypes[5]
  },
  {
    id: 'doc_007',
    code: 1007,
    file: 'file_007.pdf',
    name: 'Documento 7',
    issuer: 'Empresa G',
    totalTaxValue: 95.0,
    netValue: 855.0,
    creationDate: new Date('2024-07-01'),
    lastEditDate: new Date('2024-07-05'),
    documentOrigin: documentOrigins[1],
    documentType: documentTypes[0]
  },
  {
    id: 'doc_008',
    code: 1008,
    file: 'file_008.pdf',
    name: 'Documento 8',
    issuer: 'Empresa H',
    totalTaxValue: 130.0,
    netValue: 1170.0,
    creationDate: new Date('2024-08-01'),
    lastEditDate: new Date('2024-08-05'),
    documentOrigin: documentOrigins[2],
    documentType: documentTypes[1]
  },
  {
    id: 'doc_009',
    code: 1009,
    file: 'file_009.pdf',
    name: 'Documento 9',
    issuer: 'Empresa I',
    totalTaxValue: 175.0,
    netValue: 1575.0,
    creationDate: new Date('2024-09-01'),
    lastEditDate: new Date('2024-09-05'),
    documentOrigin: documentOrigins[3],
    documentType: documentTypes[2]
  },
  {
    id: 'doc_010',
    code: 1010,
    file: 'file_010.pdf',
    name: 'Documento 10',
    issuer: 'Empresa J',
    totalTaxValue: 110.0,
    netValue: 990.0,
    creationDate: new Date('2024-10-01'),
    lastEditDate: new Date('2024-10-05'),
    documentOrigin: documentOrigins[4],
    documentType: documentTypes[3]
  }
]

export { documentOrigins, documentTypes, documentsData }
