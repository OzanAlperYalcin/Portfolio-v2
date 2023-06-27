import PostForm from "@/components/admin/posts/PostForm"
import FormContainer from "@/containers/admin/form"
import { fetchPost } from "@/services/posts"

export default async function PostPage({ params }) {
    const post = await fetchPost(params.id)

    return (
        <FormContainer title={'BLOG YAZISI'}>
            <PostForm data={post?.post} />
        </FormContainer>
    )
}