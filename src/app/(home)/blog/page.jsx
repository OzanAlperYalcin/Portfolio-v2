import BlogContainer from "@/containers/blog";
import { fetchPosts } from "@/services/posts";

export default async function Blogs() {

    const posts = await fetchPosts()
    return (
        <BlogContainer posts={posts.posts} />
    )
}