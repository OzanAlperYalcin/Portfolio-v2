import BlogPost from './BlogPost'
import { FaPen, FaCalendar, FaHashtag } from 'react-icons/fa'
import moment from "moment"

function SinglePost({ post }) {

  return (
    <>
      <div className="grid justify-center">
        <img src={post.photoURL} alt={post.title} title={post.title} className="max-h-80" />
      </div>
      <h1 className="title text-center tracking-wider">{post.title}</h1>
      <div className="flex justify-between items-center text-sm font-light">
        <div className="flex items-center gap-2.5">
          <FaPen />
          <p><span className="font-semibold">Yazar:</span> {post.author.username}</p>
        </div>
        <div className="flex items-center gap-2.5">
          <FaCalendar />
          <p><span className="font-semibold">Tarih:</span> {moment(post.createdAt).format('LL')}</p>
        </div>
      </div>
      <BlogPost data={post.post} />
      <div className="flex justify-end items-center gap-2.5">
        <FaHashtag size={30} />
        <p>{post.hashtag}</p>
      </div>
    </>
  )
}

export default SinglePost