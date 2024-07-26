import { ClientForm } from './components/client-form'

import db from '@/lib/db'

interface PropertyIdPageProps {
  params: {
    propertyId: string
  }
}

const PropertyIdPage = async ({ params }: PropertyIdPageProps) => {
  return (
    <>
      <ClientForm initialData={[]} />
    </>
  )
}

export default PropertyIdPage
