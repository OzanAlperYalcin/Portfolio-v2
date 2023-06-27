import HomeBlogs from './HomeBlogs'
import Blogs from './Blogs'

function Blog({ blog, posts }) {

    return (
        <div>
            <h1 className='title'>{blog ? 'Blog' : 'Son Yazdıklarım'}</h1>
            <div className={`grid gap-10 my-5 ${blog ? 'grid-cols-1':'grid-cols-1 lg:grid-cols-2'}`}>
                {blog ?
                    <Blogs posts={posts} />
                    :
                    <HomeBlogs posts={posts.slice(0, 5)} />
                }
            </div>
        </div>
    )
}

export default Blog