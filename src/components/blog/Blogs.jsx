import Link from "next/link"
import moment from "moment";
function Blogs({ posts }) {

    const orderedPosts = {}
    posts.forEach(post => {
        const date = moment(post.createdAt).format('LL').split(' ')
        const year = date[2]
        const month = date[1]
        const formattedDate = `${month} ${year}`

        if (!orderedPosts[formattedDate]) {
            orderedPosts[formattedDate] = {
                date: formattedDate,
                data: [],
            };
        }

        orderedPosts[formattedDate].data.push(post)
    })

    return (
        <div className='grid gap-10 pl-2.5'>
            {Object.values(orderedPosts).map((posts, i) => (
                <div key={i}>
                    <h3 className='text'>{posts.date}</h3>
                    <div className='grid gap-2.5 mt-2.5'>
                        {posts.data.map((post, i) => (
                            <Link key={i} href={post.title} className='blog group'>
                                <p className='group-hover:text-red-600 transition-all duration-300'>{post.title}</p>
                                <span className='text-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300'>
                                    {post.hashtag}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Blogs