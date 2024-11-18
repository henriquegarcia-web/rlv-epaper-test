'use client'

import { useDocuments } from '@/hooks/useDocuments'
import { useEffect } from 'react'

interface Document {
  id: string
  name: string
  origem: string
  tipo: string
  arquivo: string
  createdAt: string
  updatedAt: string
}

export default function Home() {
  const { documents, isLoading, createDocument, deleteDocument } =
    useDocuments()

  useEffect(() => {
    console.log(documents)
  }, [documents])

  if (isLoading) return <p>Loading...</p>

  return <div className=""></div>
}
