import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios, { AxiosResponse } from 'axios'

// Tipo do Documento
interface Document {
  id: string
  name: string
  origem: string
  tipo: string
  arquivo: string
  createdAt?: string
  updatedAt?: string
}

// Dados para criar ou atualizar um Documento
type DocumentInput = Omit<Document, 'id' | 'createdAt' | 'updatedAt'>

export const useDocuments = () => {
  const queryClient = useQueryClient()

  // Query para buscar os documentos
  const { data: documents, isLoading } = useQuery<Document[], Error>({
    queryKey: ['documents'],
    queryFn: async () => {
      const response = await axios.get<Document[]>('/api/documents')
      return response.data
    }
  })

  // Mutation para criar um documento
  const createDocument = useMutation<
    AxiosResponse<{ id: string }>, // Resposta esperada
    Error, // Tipo de erro
    DocumentInput // Dados de entrada
  >({
    mutationFn: async (newDoc) => {
      return axios.post('/api/documents', newDoc)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] })
    }
  })

  // Mutation para atualizar um documento
  const updateDocument = useMutation<
    AxiosResponse<{ success: boolean }>, // Resposta esperada
    Error, // Tipo de erro
    { id: string } & DocumentInput // Dados de entrada (id + DocumentInput)
  >({
    mutationFn: async ({ id, ...data }) => {
      return axios.put(`/api/documents/${id}`, data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] })
    }
  })

  // Mutation para deletar um documento
  const deleteDocument = useMutation<
    AxiosResponse<{ success: boolean }>, // Resposta esperada
    Error, // Tipo de erro
    string // ID do documento a ser deletado
  >({
    mutationFn: async (id) => {
      return axios.delete(`/api/documents/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['documents'] })
    }
  })

  return {
    documents,
    isLoading,
    createDocument,
    updateDocument,
    deleteDocument
  }
}
