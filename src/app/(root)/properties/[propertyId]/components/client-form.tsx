'use client'

import { useState } from 'react'

import { useParams, useRouter } from 'next/navigation'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import * as z from 'zod'

import { Property } from '@prisma/client'

import { formShema } from '@/modules/schemas/properties'

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
import { Header } from '@/components/header'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import api from '@/lib/api'
import { Textarea } from '@/components/ui/textarea'

interface ClientFormProps {
  initialData: Property | null
}

type ClientFormValues = z.infer<typeof formShema>

export const ClientForm = ({ initialData }: ClientFormProps) => {
  const params = useParams()
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const title = initialData ? 'Editar registro' : 'Novo registro'
  const action = initialData ? 'Editar registro' : 'Salvar registro'

  const form = useForm<ClientFormValues>({
    resolver: zodResolver(formShema),
    defaultValues: initialData
      ? {
          ...initialData,
          price: parseFloat(String(initialData?.price))
        }
      : {
          title: '',
          category: '',
          description: '',
          address: '',
          neighborhood: '',
          price: 0,
          size: 0,
          bathroom: 1,
          bedroom: 1,
          garage: 1
        }
  })

  const onSubmit = async (data: ClientFormValues) => {
    try {
      setLoading(true)

      if (initialData) {
        await api.patch(`/api/properties/${params.propertyId}`, data)
      } else {
        await api.post('/api/properties', data)
      }
      router.refresh()
      router.push('/properties')
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Header title={title} />
      <div className="p-4">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 w-full mt-5"
          >
            <div className="grid grid-cols-4 gap-4">
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
              <FormField
                control={form.control}
                name="title"
                render={() => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <FormControl>
                      <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                          <FormItem>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Selecione a categoria" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="apartamento">
                                  Apartamento
                                </SelectItem>
                                <SelectItem value="casa">Casa</SelectItem>
                                <SelectItem value="cobertura">
                                  Cobertura
                                </SelectItem>
                                <SelectItem value="chacara">Chácara</SelectItem>
                                <SelectItem value="flat">Flat</SelectItem>
                                <SelectItem value="kinet">Kinet</SelectItem>
                                <SelectItem value="loft">Loft</SelectItem>
                                <SelectItem value="sobrado">Sobrado</SelectItem>
                                <SelectItem value="terreno">Terreno</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="size"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Terreno(m²)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        disabled={loading}
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="neighborhood"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bairro</FormLabel>
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
            <div className="grid grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        disabled={loading}
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bathroom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quartos</FormLabel>
                    <FormControl>
                      <Input
                        min={1}
                        max={5}
                        type="number"
                        disabled={loading}
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bedroom"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Banheiros</FormLabel>
                    <FormControl>
                      <Input
                        min={1}
                        max={5}
                        type="number"
                        disabled={loading}
                        {...field}
                        className="w-full"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="garage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Garagem</FormLabel>
                    <FormControl>
                      <Input
                        min={1}
                        max={5}
                        type="number"
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
            <div>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Endereço</FormLabel>
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
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Descriçao</FormLabel>
                    <FormControl>
                      <Textarea
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
    </div>
  )
}
