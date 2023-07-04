import { FadeIn } from "@/components/animation"
import SinglePost from "@/components/blog/post"

function PostContainer({ post }) {
    return (
        <FadeIn>
            <section className='container mx-auto grid gap-10 px-5 my-10'>
                <SinglePost post={post} />
            </section>
        </FadeIn>
    )
}

export default PostContainer