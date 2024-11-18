export interface DocumentData {
  id?: string
  name: string
  origem: string
  tipo: string
  arquivo: string
}

export interface DocumentRequest {
  name: string
  origem: string
  tipo: string
  arquivo: string
}
