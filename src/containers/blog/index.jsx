import { FadeIn } from '@/components/animation'
import Blog from '@/components/blog'

function BlogContainer({ posts }) {
    return (
        <FadeIn>
            <section className='container mx-auto grid gap-10 px-5 mt-10'>
                <Blog blog={true} posts={posts} />
            </section>
        </FadeIn>
    )
}

export default BlogContainer