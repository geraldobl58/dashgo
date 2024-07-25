import { Container } from '@/components/container'
import { Header } from '@/components/header'

import { ClientForm } from './components/client-form'

const ImoveisPageId = () => {
  return (
    <>
      <Header title="Novo Registro" />
      <Container>
        <ClientForm initialData={[]} />
      </Container>
    </>
  )
}

export default ImoveisPageId
