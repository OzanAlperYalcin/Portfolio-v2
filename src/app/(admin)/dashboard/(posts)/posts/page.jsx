import PostsContainer from "@/containers/admin/posts"
import { fetchPosts, searchPosts } from "@/services/posts"

export default async function PostsPage({ searchParams }) {
    const { search } = searchParams
    const posts = !search ? await fetchPosts() : await searchPosts(search)

    return (
        <PostsContainer data={posts} />
    )
}