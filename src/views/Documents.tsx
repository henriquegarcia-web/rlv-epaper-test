'use client'

import { useEffect } from 'react'

import { useDocuments } from '@/hooks/useDocuments'

export default function DocumentsView() {
  const {
    documents,
    isLoadingDocuments,
    createDocument,
    updateDocument,
    deleteDocument
  } = useDocuments()

  useEffect(() => {
    console.log(documents)
  }, [documents])

  if (isLoadingDocuments) return <div>Carregando...</div>

  return <div className="">Documentos</div>
}
