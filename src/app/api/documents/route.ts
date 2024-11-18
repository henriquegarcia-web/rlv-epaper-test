import { documentContract } from '@/contracts/document.contract'
import { prisma } from '@/lib/prisma'
import { createNextRouter } from '@ts-rest/next'

const handler = createNextRouter(documentContract, {
  getDocuments: async () => {
    const documents = await prisma.document.findMany()
    return { status: 200, body: documents }
  },
  createDocument: async ({ body }) => {
    const document = await prisma.document.create({ data: body })
    return { status: 201, body: { id: document.id } }
  },
  updateDocument: async ({ params, body }) => {
    await prisma.document.update({
      where: { id: params.id },
      data: body
    })
    return { status: 200, body: { success: true } }
  },
  deleteDocument: async ({ params }) => {
    await prisma.document.delete({ where: { id: params.id } })
    return { status: 200, body: { success: true } }
  }
})

export { handler as GET, handler as POST, handler as PUT, handler as DELETE }
