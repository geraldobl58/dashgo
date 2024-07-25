import { Container } from '@/components/container'
import { Header } from '@/components/header'

import { ClientForm } from './components/client-form'
import db from '@/lib/db'

interface ImoveisPageIdProps {
  params: {
    imoveisId: string
  }
}

const ImoveisPageId = async ({ params }: ImoveisPageIdProps) => {
  const data = await db.property.findUnique({
    where: {
      id: params.imoveisId
    }
  })

  return (
    <>
      <Header title="Novo Registro" />
      <Container>
        <ClientForm initialData={data} />
      </Container>
    </>
  )
}

export default ImoveisPageId
