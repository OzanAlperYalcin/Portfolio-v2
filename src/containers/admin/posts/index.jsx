import Navbar from "@/components/admin/navbar"
import PostsTable from './PostsTable'
import Stats from "@/components/admin/stats"

function PostsContainer({ data, title }) {
    const { posts, totalCount } = data

    return (
        <div className="grid gap-10 my-10">
            <Navbar title={title} />
            <div className='mx-auto w-full grid gap-5 bg-white p-10 shadow rounded'>
                <Stats totalCount={totalCount} path={{ name: 'YENİ GÖNDERİ', url: '/dashboard/post' }} />
                <PostsTable posts={posts} />
            </div>
        </div>
    )
}

export default PostsContainer