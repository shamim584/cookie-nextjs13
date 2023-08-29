import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    const url = request.nextUrl.clone()

    if (url.pathname === '/redirection') {
        url.pathname = '/redirection-form'
        return NextResponse.redirect(url)
    }

    if (url.pathname === '/header-modification') {
        const response = NextResponse.next();
        response.headers.set('Token', '123456789')
        return response
    }

}