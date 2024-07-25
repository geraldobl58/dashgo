import { ClientForm } from './components/client-form'

import db from '@/lib/db'

interface PropertyIdPageProps {
  params: {
    propertyId: string
  }
}

const PropertyIdPage = async ({ params }: PropertyIdPageProps) => {
  const data = await db.property.findUnique({
    where: {
      id: params.propertyId
    }
  })

  return (
    <>
      <div>
        <ClientForm initialData={data} />
      </div>
    </>
  )
}

export default PropertyIdPage
