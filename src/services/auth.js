
export const register = async (payload) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'auth/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const data = await res.json()
        return data
    } catch (err) {
        throw new Error(err)
    }
}

export const login = async (payload) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'auth/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        const data = await res.json()
        return data
    } catch (err) {
        throw new Error(err)
    }
}


