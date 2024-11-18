import { initContract } from '@ts-rest/core'
import { z } from 'zod'

const c = initContract()

export const documentContract = c.router({
  getDocuments: {
    method: 'GET',
    path: '/documents',
    responses: {
      200: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
          origem: z.string(),
          tipo: z.string(),
          arquivo: z.string(),
          createdAt: z.string(),
          updatedAt: z.string()
        })
      )
    }
  },
  createDocument: {
    method: 'POST',
    path: '/documents',
    body: z.object({
      name: z.string(),
      origem: z.string(),
      tipo: z.string(),
      arquivo: z.string()
    }),
    responses: {
      201: z.object({
        id: z.string()
      })
    }
  },
  updateDocument: {
    method: 'PUT',
    path: '/documents/:id',
    body: z.object({
      name: z.string(),
      origem: z.string(),
      tipo: z.string(),
      arquivo: z.string()
    }),
    responses: {
      200: z.object({
        success: z.boolean()
      })
    }
  },
  deleteDocument: {
    method: 'DELETE',
    path: '/documents/:id',
    responses: {
      200: z.object({
        success: z.boolean()
      })
    }
  }
})
