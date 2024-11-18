import { z } from 'zod'

export const DocumentSchema = z.object({
  name: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  origem: z.string().min(1, 'Origem é obrigatória'),
  tipo: z.string().min(1, 'Tipo é obrigatório'),
  arquivo: z.string().url('Arquivo deve ser uma URL válida')
})
