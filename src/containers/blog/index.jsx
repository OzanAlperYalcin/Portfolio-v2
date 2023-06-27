import Blog from '@/components/blog'

function BlogContainer({ posts }) {
    return (
        <section className='container mx-auto grid gap-10 px-5 mt-10'>
            <Blog blog={true} posts={posts} />
        </section>
    )
}

export default BlogContainer