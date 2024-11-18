import { prisma } from '@/lib/prisma'
import { DocumentRequest, DocumentData } from '@/utils/schemas/document'

export class DocumentRepository {
  async create(data: DocumentRequest): Promise<DocumentData> {
    return prisma.document.create({ data })
  }

  async findAll(): Promise<DocumentData[]> {
    return prisma.document.findMany()
  }

  async findById(id: string): Promise<DocumentData | null> {
    return prisma.document.findUnique({ where: { id } })
  }

  async update(
    id: string,
    data: Partial<DocumentRequest>
  ): Promise<DocumentData> {
    return prisma.document.update({ where: { id }, data })
  }

  async delete(id: string): Promise<DocumentData> {
    return prisma.document.delete({ where: { id } })
  }
}
