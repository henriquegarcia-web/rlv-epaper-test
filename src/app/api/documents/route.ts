import { NextRequest, NextResponse } from 'next/server'
import { DocumentRepository } from '@/repositories/document-repository'
import { DocumentSchema } from '@/utils/validation'

const documentRepository = new DocumentRepository()

export async function GET() {
  try {
    const documents = await documentRepository.findAll()
    return NextResponse.json(documents)
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao buscar documentos' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = DocumentSchema.parse(body)

    const document = await documentRepository.create(validatedData)
    return NextResponse.json(document, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao criar documento' },
      { status: 400 }
    )
  }
}
