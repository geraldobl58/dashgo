import db from '@/lib/db'

import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const { title } = body

    if (!title) {
      return new NextResponse('Título Obrigátorio', { status: 400 })
    }

    const property = await db.property.create({
      data: {
        title
      }
    })

    return NextResponse.json(property)
  } catch (error) {
    console.log('[PROPERTY]', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
