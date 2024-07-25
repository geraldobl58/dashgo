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

    const {
      title,
      category,
      description,
      address,
      neighborhood,
      price,
      size,
      bathroom,
      bedroom,
      garage
    } = body

    if (
      !title ||
      !category ||
      !description ||
      !address ||
      !neighborhood ||
      !price ||
      !size ||
      !bathroom ||
      !bedroom ||
      !bedroom
    ) {
      return new NextResponse('Campo Obrigátorio', { status: 400 })
    }

    if (!params.propertyId) {
      return new NextResponse('ID Imovél Obrigátorio', { status: 400 })
    }

    const property = await db.property.updateMany({
      where: {
        id: params.propertyId
      },
      data: {
        title,
        category,
        description,
        address,
        neighborhood,
        price,
        size,
        bathroom,
        bedroom,
        garage
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
