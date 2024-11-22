import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const timestampToDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000)

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = String(date.getFullYear()).slice(-2)
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const dateString = `${day}/${month}/${year} às ${hours}:${minutes}`

  return dateString
}

const timestampToHours = (timestamp: string): string => {
  const date = new Date(timestamp)
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
}

const formatDate = (date: Date) => {
  return format(date, "d 'de' MMMM yyyy", { locale: ptBR })
}

export { timestampToDate, timestampToHours, formatDate }
