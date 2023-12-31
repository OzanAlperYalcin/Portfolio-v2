
export const fetchPosts = async () => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'posts/', { cache: 'no-store' })
        const data = await res.json()
        return data
    } catch (err) {
        throw new Error(err)
    }
}

export const searchPosts = async (query) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `posts?search=${query}`, { cache: 'no-store' })
        const data = await res.json()
        return data
    } catch (err) {
        throw new Error(err)
    }
}

export const fetchPost = async (id) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'posts/' + id, { cache: 'no-store' })
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
    }
}

export const fetchPostBySlug = async (slug) => {
    try {
        const postResponse = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'posts/post/' + slug, { cache: 'no-store' })
        const postResult = await postResponse.json()
        const userResponse = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'users/' + postResult.post.uid, { cache: 'no-store' })
        const userResult = await userResponse.json()
        postResult.post.author = userResult.user
        const data = { ...postResult }
        return data
    } catch (err) {
        console.log(err)
    }
}

export const createPost = async (payload, authorization) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'posts/', {
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

export const updatePost = async (id, payload, authorization) => {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'posts/' + id, {
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

export const deletePost = async (id, authorization) => {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'posts/' + id, {method: 'DELETE', headers: { authorization }})
    const data = await res.json()
    return data
}