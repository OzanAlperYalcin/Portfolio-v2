import PostForm from "@/components/admin/posts/PostForm"
import FormContainer from "@/containers/admin/form"
import { fetchPost } from "@/services/posts"
import { useAuth } from "@/hooks/useAuth"
import 'quill/dist/quill.snow.css'

export default async function PostPage({ params }) {
    const post = await fetchPost(params.id)
    const { id } = await useAuth()

    return (
        <FormContainer title={'BLOG YAZISI'}>
            <PostForm data={post?.post} uid={id} />
        </FormContainer>
    )
}