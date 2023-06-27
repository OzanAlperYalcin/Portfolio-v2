
export const fetchProjects = async (page) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'projects?page=' + page, { cache: 'no-store' })
        const data = await res.json()
        return data
    } catch (err) {
        throw new Error(err)
    }
}

export const searchProjects = async (query) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `projects?search=${query}`, { cache: 'no-store' })
        const data = await res.json()
        return data
    } catch (err) {
        throw new Error(err)
    }
}

export const fetchProject = async (id) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'projects/' + id, { cache: 'no-store' })
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

export const createProject = async (payload, authorization) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'projects/', {
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

export const updateProject = async (id, payload, authorization) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'projects/' + id, {
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

export const deleteProject = async (id, authorization) => {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'projects/' + id, {method: 'DELETE', headers: { authorization }})
    const data = await res.json()
    return data
}