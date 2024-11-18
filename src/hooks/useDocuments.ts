'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { DocumentData, DocumentRequest } from '@/utils/schemas/document'
import axios from 'axios'

const api = axios.create({
  baseURL: '/api/documents'
})

export function useDocuments() {
  const queryClient = useQueryClient()

  const documentsQuery = useQuery<DocumentData[]>({
    queryKey: ['documents'],
    queryFn: async () => {
      const { data } = await api.get('/')
      return data
    },
    staleTime: 1000 * 60 * 5
  })

  const getDocumentById = (id: string) => {
    return useQuery<DocumentData>({
      queryKey: ['document', id],
      queryFn: async () => {
        const { data } = await api.get(`/${id}`)
        return data
      },
      enabled: !!id
    })
  }

  const createDocumentMutation = useMutation<
    DocumentData,
    Error,
    DocumentRequest
  >({
    mutationFn: async (documentData) => {
      const { data } = await api.post('/', documentData)
      return data
    },
    onSuccess: (newDocument) => {
      queryClient.invalidateQueries({ queryKey: ['documents'] })

      queryClient.setQueryData(
        ['documents'],
        (oldData: DocumentData[] | undefined) => [
          ...(oldData || []),
          newDocument
        ]
      )
    }
  })

  const updateDocumentMutation = useMutation<
    DocumentData,
    Error,
    { id: string; data: Partial<DocumentRequest> }
  >({
    mutationFn: async ({ id, data }) => {
      const response = await api.put(`/${id}`, data)
      return response.data
    },
    onSuccess: (updatedDocument) => {
      queryClient.invalidateQueries({ queryKey: ['documents'] })
      queryClient.invalidateQueries({
        queryKey: ['document', updatedDocument.id]
      })

      queryClient.setQueryData(
        ['document', updatedDocument.id],
        updatedDocument
      )
    }
  })

  const deleteDocumentMutation = useMutation<void, Error, string>({
    mutationFn: async (id) => {
      await api.delete(`/${id}`)
    },
    onSuccess: (_, deletedId) => {
      queryClient.invalidateQueries({ queryKey: ['documents'] })

      queryClient.removeQueries({ queryKey: ['document', deletedId] })
    }
  })

  return {
    documents: documentsQuery.data,
    isLoadingDocuments: documentsQuery.isLoading,
    documentsError: documentsQuery.error,

    getDocumentById,

    createDocument: {
      mutate: createDocumentMutation.mutate,
      isPending: createDocumentMutation.isPending,
      isError: createDocumentMutation.isError,
      error: createDocumentMutation.error
    },
    updateDocument: {
      mutate: updateDocumentMutation.mutate,
      isPending: updateDocumentMutation.isPending,
      isError: updateDocumentMutation.isError,
      error: updateDocumentMutation.error
    },
    deleteDocument: {
      mutate: deleteDocumentMutation.mutate,
      isPending: deleteDocumentMutation.isPending,
      isError: deleteDocumentMutation.isError,
      error: deleteDocumentMutation.error
    }
  }
}
