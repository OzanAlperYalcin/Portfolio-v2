
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

export const changePassword = async (payload, authorization) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'auth/change-password/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization
            },
            body: JSON.stringify(payload)
        })
        const data = await res.json()
        return data
    } catch (err) {
        throw new Error(err)
    }
}


