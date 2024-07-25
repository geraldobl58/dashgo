import db from '@/lib/db'

import { NextResponse } from 'next/server'

export async function POST(req: Request) {
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

    const property = await db.property.create({
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
    console.log('[PROPERTY_POST]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}

export async function GET(req: Request) {
  try {
    const properties = await db.property.findMany({
      orderBy: {
        id: 'desc'
      }
    })

    return NextResponse.json(properties)
  } catch (error) {
    console.log('[PROPERTY_GET]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
