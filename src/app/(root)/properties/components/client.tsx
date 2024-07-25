'use client'

import { useRouter } from 'next/navigation'

import { PlusCircleIcon } from 'lucide-react'

import { Property } from '@prisma/client'

import { DataTable } from '@/components/data-table'
import { Header } from '@/components/header'

import { Button } from '@/components/ui/button'

import { columns } from './columns'

interface PropertyClientProps {
  data: Property[]
}

export const PropertyClient = ({ data }: PropertyClientProps) => {
  const router = useRouter()

  return (
    <div>
      <Header
        title="Imóveis"
        contentButtons={
          <>
            <Button
              onClick={() => router.push(`/properties/new`)}
              className="flex gap-2"
              size="sm"
            >
              <PlusCircleIcon className="size-4" />
              Novo Registro
            </Button>
          </>
        }
      />

      <div className="p-4">
        <DataTable searchKey="title" columns={columns} data={data} />
      </div>
    </div>
  )
}
