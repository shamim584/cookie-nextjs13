import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers'
export async function GET(
    // req: NextApiRequest,
    // res: NextApiResponse
) {

    const resData = {
        "message": "Cookie has been set."
    }

    cookies().delete('theme')
    cookies().delete('language')

    // res.setHeader('Set-Cookie', 'username=lee; Path=/; HttpOnly')
    // res.status(200).send('Cookie has been set.')

    return NextResponse.json(resData)
}