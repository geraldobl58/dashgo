import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { PropertyClient } from './components/client'
import { PropertiesColumn } from './components/columns'

import { formattedPrice } from '@/lib/utils'
import db from '@/lib/db'

const Imoveis = async () => {
  return (
    <>
      <PropertyClient data={[]} />
    </>
  )
}

export default Imoveis
