import { initClient } from '@ts-rest/core'
import { documentContract } from '@/contracts/document.contract'

export const documentClient = initClient(documentContract, {
  baseUrl: '/api',
  baseHeaders: {
    'Content-Type': 'application/json'
  }
})
