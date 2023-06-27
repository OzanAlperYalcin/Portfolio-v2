import Blog from '@/components/blog'
import Bookmark from '@/components/bookmarks/index.jsx'
import Featured from '@/components/home/Featured'

function HomeContainer({ posts, bookmarks }) {
    return (
        <section className='container mx-auto grid gap-10 px-5'>
            <Featured />
            <Blog posts={posts} />
            <Bookmark bookmarks={bookmarks.slice(0, 5)} />
        </section>
    )
}

export default HomeContainer