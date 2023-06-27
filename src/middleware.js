import { NextResponse } from "next/server"
import { verifyToken, isAuthPage } from "./utils/auth"

export async function middleware(req) {
    const { url, nextUrl, cookies } = req
    const { value: token } = cookies.get('token') ?? { value: null }

    const hasVerifiedToken = token && await verifyToken(token)
    const isAuthPageRequested = isAuthPage(nextUrl.pathname)

    if (isAuthPageRequested) {
        if (!hasVerifiedToken) {
            return NextResponse.next()
        }
        return NextResponse.redirect(new URL('/dashboard', url))
    }

    if (!hasVerifiedToken) {
        return NextResponse.redirect(new URL('/login', url))
    }
    
    const response = NextResponse.next()
    response.headers.set('Authorization', `Bearer ${token}`)
    return response
}

export const config = {
    matcher: [
        "/login",
        "/dashboard/:path*"
    ]
}