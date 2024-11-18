import axios from 'axios'

export const api = axios.create({
  baseURL: '/api/documents',
  headers: {
    'Content-Type': 'application/json'
  }
})
