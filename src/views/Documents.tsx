// 'use client'

// import { useEffect } from 'react'

// import { useDocuments } from '@/hooks/useDocuments'

export default function DocumentsView() {
  // const {
  //   documents,
  //   isLoadingDocuments,
  //   createDocument,
  //   updateDocument,
  //   deleteDocument
  // } = useDocuments()

  // useEffect(() => {
  //   console.log(documents)
  // }, [documents])

  // if (isLoadingDocuments) return <div>Carregando...</div>

  return (
    <div className="flex flex-col w-full h-full py-[30px] px-[20px] bg-foreground">
      <div className="flex justify-between w-full pb-[20px] border-b border-b-border-primary">
        <div className="flex flex-col gap-[8px]">
          <h1 className="text-[24px] leading-[24px] font-bold text-color-secondary">
            Documentos
          </h1>
          <p className="text-[14px] leading-[14px] text-color-legend">
            Crie, gerencie e visualize os documentos
          </p>
        </div>
        <div></div>
      </div>
    </div>
  )
}
