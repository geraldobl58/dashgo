'use client'

import { ColumnDef } from '@tanstack/react-table'

import { CellAction } from './cell-action'

export type PropertiesColumn = {
  id: string
  title: string
  category: string
  description: string
  address: string
  neighborhood: string
  price: string
  size: number
  bathroom: number
  bedroom: number
  garage: number
}

export const columns: ColumnDef<PropertiesColumn>[] = [
  {
    accessorKey: 'title',
    header: 'Título'
  },
  {
    accessorKey: 'category',
    header: 'Categoria'
  },
  {
    accessorKey: 'price',
    header: 'Preço'
  },
  {
    accessorKey: 'bathroom',
    header: 'Banheiros'
  },
  {
    accessorKey: 'bedroom',
    header: 'Quartos'
  },
  {
    accessorKey: 'garage',
    header: 'Garagem'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
