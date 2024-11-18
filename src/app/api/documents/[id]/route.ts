import { NextRequest, NextResponse } from 'next/server'
import { DocumentRepository } from '@/repositories/document-repository'
import { DocumentSchema } from '@/utils/validation'

const documentRepository = new DocumentRepository()

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const document = await documentRepository.findById(params.id)
    return NextResponse.json(document)
  } catch (error) {
    return NextResponse.json(
      { error: 'Documento não encontrado' },
      { status: 404 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const validatedData = DocumentSchema.partial().parse(body)

    const document = await documentRepository.update(params.id, validatedData)
    return NextResponse.json(document)
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao atualizar documento' },
      { status: 400 }
    )
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await documentRepository.delete(params.id)
    return NextResponse.json({ message: 'Documento deletado com sucesso' })
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao deletar documento' },
      { status: 400 }
    )
  }
}
