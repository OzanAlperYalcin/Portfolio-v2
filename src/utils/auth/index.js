import { jwtVerify } from 'jose'

const getJwtSecretKey = () => {
    const secretKey = process.env.JWT_SECRET_KEY
    if (!secretKey) {
        throw new Error('JWT secret key bulunamadı.')
    }
    return new TextEncoder().encode(secretKey)
}

export async function verifyToken(token) {
    try {
        const { payload } = await jwtVerify(token, getJwtSecretKey())
        return payload
    } catch (err) {
        return null
    }
}

export function isAuthPage(url) {
    const AUTH_PAGES = ["/login", "/register", "/forget-password"]
    return AUTH_PAGES.some(page => page.startsWith(url))
}