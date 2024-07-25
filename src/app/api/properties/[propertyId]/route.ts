import db from '@/lib/db'

import { NextResponse } from 'next/server'

export async function PATCH(
  req: Request,
  {
    params
  }: {
    params: {
      propertyId: string
    }
  }
) {
  try {
    const body = await req.json()

    const { title } = body

    if (!title) {
      return new NextResponse('Título Obrigátorio', { status: 400 })
    }

    if (!params.propertyId) {
      return new NextResponse('ID Título Obrigátorio', { status: 400 })
    }

    const property = await db.property.updateMany({
      where: {
        id: params.propertyId
      },
      data: {
        title
      }
    })

    return NextResponse.json(property)
  } catch (error) {
    console.log(['PROPERTY_PATCH'], error)
  }
}

export async function DELETE(
  req: Request,
  {
    params
  }: {
    params: {
      propertyId: string
    }
  }
) {
  try {
    if (!params.propertyId) {
      return new NextResponse('Título Obrigátorio', { status: 400 })
    }

    const property = await db.property.deleteMany({
      where: {
        id: params.propertyId
      }
    })

    return NextResponse.json(property)
  } catch (error) {
    console.log(['PROPERTY_DELETE'], error)
  }
}
