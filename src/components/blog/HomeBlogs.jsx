import { FaClock } from 'react-icons/fa'
import moment from 'moment'
import Link from 'next/link'
function HomeBlogs({ posts }) {
    return (
        posts.map((post, i) => (
            <div key={i} className='grid gap-1 card-green group hover:border-green-700 transition-all'>
                <Link href={`/blog/${post.slug}`}><h3>{post.title}</h3></Link>
                <p className='text group-hover:text-zinc-400 transition-all line-clamp-3'>{post.text}</p>
                <span className='date'>
                    <FaClock />
                    {moment(post.createdAt).locale('tr').format('LL')}
                </span>
            </div>
        ))
    )
}

export default HomeBlogs