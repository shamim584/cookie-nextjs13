import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'
export async function GET(
    // req: NextApiRequest,
    // res: NextApiResponse
) {

    cookies().set('theme', 'dark')
    cookies().set('language', 'en')

    // res.setHeader('Set-Cookie', 'username=lee; Path=/; HttpOnly')
    // res.status(200).send('Cookie has been set.')
    const resData = {
        "message": "Cookie has been set"
    }
    return NextResponse.json(resData)
}