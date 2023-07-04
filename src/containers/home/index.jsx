import { FadeIn } from '@/components/animation'
import Blog from '@/components/blog'
import Bookmark from '@/components/bookmarks/index.jsx'
import Featured from '@/components/home/Featured'
import Techs from '@/components/home/techs'

function HomeContainer({ posts, bookmarks }) {
    return (
        <FadeIn>
            <section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className='container mx-auto grid gap-10 px-5'>
                <Featured />
                <Techs />
                <Blog posts={posts} />
                <Bookmark bookmarks={bookmarks.slice(0, 5)} />
            </section>
        </FadeIn>
    )
}

export default HomeContainer