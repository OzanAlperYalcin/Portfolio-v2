
export const fetchUsers = async (page) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'users?page=' + page, { cache: 'no-store' })
        const data = await res.json()
        return data
    } catch (err) {
        throw new Error(err)
    }
}

export const fetchUser = async (id) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'users/' + id, { cache: 'no-store' })
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

export const updateUser = async (id, payload, authorization) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'users/' + id, {
            method: 'PATCH',
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

export const deleteUser = async (id) => {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'users/' + id, { method: 'DELETE' })
    const data = await res.json()
    return data
}