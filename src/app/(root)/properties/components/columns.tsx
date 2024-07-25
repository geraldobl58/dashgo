'use client'

import { ColumnDef } from '@tanstack/react-table'

import { CellAction } from './cell-action'

export type PropertiesColumn = {
  id: string
  title: string
}

export const columns: ColumnDef<PropertiesColumn>[] = [
  {
    accessorKey: 'title',
    header: 'Título'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
]
