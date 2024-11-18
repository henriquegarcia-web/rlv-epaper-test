'use client'

import { DocumentData } from '@/types/document'
// import { useDocuments } from '@/hooks/useDocuments'
import { useEffect, useState } from 'react'

export default function Home() {
  const [documents, setDocuments] = useState<DocumentData[]>([])

  useEffect(() => {
    async function fetchDocuments() {
      const response = await fetch('/api/documents')
      const data = await response.json()
      setDocuments(data)
    }
    fetchDocuments()
  }, [])

  useEffect(() => {
    console.log(documents)
  }, [documents])

  // if (isLoading) return <p>Loading...</p>

  return <div className=""></div>
}
