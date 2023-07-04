import PostContainer from "@/containers/blog/PostContainer"
import { fetchPostBySlug } from "@/services/posts"

export default async function BlogPage({ params }) {
    const { slug } = params
    const post = await fetchPostBySlug(slug)

    return (
        <PostContainer post={post.post} />
    )
}