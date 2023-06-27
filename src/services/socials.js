
export const fetchSocials = async () => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'socials/', { cache: 'no-store' })
        const data = await res.json()
        return data
    } catch (err) {
        throw new Error(err)
    }
}

export const searchSocials = async (query) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `socials?search=${query}`, { cache: 'no-store' })
        const data = await res.json()
        return data
    } catch (err) {
        throw new Error(err)
    }
}

export const fetchSocial = async (id) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'socials/' + id, { cache: 'no-store' })
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

export const createSocial = async (payload, authorization) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'socials/', {
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

export const updateSocial = async (id, payload, authorization) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'socials/' + id, {
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

export const deleteSocial = async (id, authorization) => {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'socials/' + id, {method: 'DELETE', headers: { authorization }})
    const data = await res.json()
    return data
}