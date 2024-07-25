'use client'

import { useRouter } from 'next/navigation'

import { PlusCircleIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'

import { Container } from '@/components/container'
import { Header } from '@/components/header'

const Imoveis = () => {
  const router = useRouter()

  return (
    <>
      <Header
        title="Imóveis"
        contentButtons={
          <>
            <Button
              onClick={() => router.push(`/imoveis/novo`)}
              className="flex gap-2"
              size="sm"
            >
              <PlusCircleIcon className="size-4" />
              Novo Registro
            </Button>
          </>
        }
      />
      <Container>Imoveis</Container>
    </>
  )
}

export default Imoveis
