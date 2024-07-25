'use client'

import { useState } from 'react'

import { useParams, useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as z from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface ClientFormProps {
  initialData: any | null
}

export const formShema = z.object({
  title: z.string().min(1, {
    message: 'Campo obrigário'
  })
})

type ClientFormValues = z.infer<typeof formShema>

export const ClientForm = ({ initialData }: ClientFormProps) => {
  const params = useParams()
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const title = initialData ? 'Editar registro' : 'Novo registro'
  const action = initialData ? 'Editar registro' : 'Salvar registro'

  const form = useForm<ClientFormValues>({
    resolver: zodResolver(formShema),
    defaultValues: initialData || {
      title: ''
    }
  })

  const onSubmit = async (data: ClientFormValues) => {
    console.log(data)
  }

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full mt-5"
        >
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      disabled={loading}
                      {...field}
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={loading} className="ml-auto">
            {action}
          </Button>
        </form>
      </Form>
    </div>
  )
}
