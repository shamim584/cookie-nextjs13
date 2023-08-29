import { headers } from 'next/headers'
import { NextRequest, NextResponse } from "next/server";

export async function GET() {

  const headersList = headers()
  const token = headersList.get('token')
  const prefix = "Bearer "

  const resData = {
    "My Authorization Token": token,
    "New Authorization Token": prefix + token
  }

  //return NextResponse.next()
  return NextResponse.json(resData)
}



