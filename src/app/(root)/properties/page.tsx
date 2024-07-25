import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { PropertyClient } from './components/client'
import { PropertiesColumn } from './components/columns'

import { formattedPrice } from '@/lib/utils'
import db from '@/lib/db'

const Imoveis = async () => {
  const properties = await db.property.findMany({
    orderBy: {
      id: 'desc'
    }
  })

  const formattedPropeties: PropertiesColumn[] = properties.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category,
    description: item.description,
    address: item.address,
    neighborhood: item.neighborhood,
    price: formattedPrice.format(item.price.toNumber()),
    size: item.size,
    bathroom: item.bathroom,
    bedroom: item.bedroom,
    garage: item.garage,
    createdAt: format(item.createdAt, "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {
      locale: ptBR
    }),
    updatedAt: format(item.createdAt, "'Dia' dd 'de' MMMM', às ' HH:mm'h'", {
      locale: ptBR
    })
  }))

  return (
    <>
      <PropertyClient data={formattedPropeties} />
    </>
  )
}

export default Imoveis
