import { z } from 'zod'

export const formShema = z.object({
  title: z.string().min(1, {
    message: 'Campo obrigário'
  }),
  category: z.string().min(1, {
    message: 'Campo obrigário'
  }),
  description: z.string().min(10, {
    message: 'Campo obrigário'
  }),
  address: z.string().min(1, {
    message: 'Campo obrigário'
  }),
  neighborhood: z.string().min(1, {
    message: 'Campo obrigário'
  }),
  price: z.coerce.number().min(1, {
    message: 'Campo obrigário'
  }),
  size: z.coerce.number().min(1, {
    message: 'Campo obrigário'
  }),
  bathroom: z.coerce.number().min(1, {
    message: 'Campo obrigário'
  }),
  bedroom: z.coerce.number().min(1, {
    message: 'Campo obrigário'
  }),
  garage: z.coerce.number().min(1, {
    message: 'Campo obrigário'
  })
})
