import { cookies } from 'next/headers'
import { verifyToken } from "@/utils/auth"

export async function useAuth() {
    const cookiesList = cookies()
    const { value: token } = cookiesList.get('token') ?? { value: null }
    const verifiedToken = await verifyToken(token)

    return verifiedToken
}