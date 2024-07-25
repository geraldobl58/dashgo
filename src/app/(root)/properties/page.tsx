import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { PropertyClient } from './components/client'
import { PropertiesColumn } from './components/columns'

import db from '@/lib/db'

const Imoveis = async () => {
  const properties = await db.property.findMany({
    orderBy: {
      id: 'desc'
    }
  })

  const formattedPropeties: PropertiesColumn[] = properties.map((item) => ({
    id: item.id,
    title: item.title
  }))

  return (
    <>
      <div>
        <PropertyClient data={formattedPropeties} />
      </div>
    </>
  )
}

export default Imoveis
