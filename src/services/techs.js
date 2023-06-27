
export const fetchTechs = async () => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'techs/', { cache: 'no-store' })
        const data = await res.json()
        return data
    } catch (err) {
        throw new Error(err)
    }
}

export const fetchTech = async (id) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'techs/' + id, { cache: 'no-store' })
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

export const searchTechs = async (query) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `techs?search=${query}`, { cache: 'no-store' })
        const data = await res.json()
        return data
    } catch (err) {
        throw new Error(err)
    }
}

export const createTech = async (payload, authorization) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'techs/', {
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

export const updateTech = async (id, payload, authorization) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'techs/' + id, {
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

export const deleteTech = async (id, authorization) => {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'techs/' + id, {method: 'DELETE', headers: { authorization }})
    const data = await res.json()
    return data
}