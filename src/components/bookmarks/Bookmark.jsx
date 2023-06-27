import Link from "next/link"
import moment from "moment"
import { FaClock } from 'react-icons/fa'
function Bookmark({ bookmark, page }) {
  return (
    <div>
      <Link href={bookmark.link} target="_blank" className="bookmark">
        <p className="text-sm text-zinc-300">❝ {bookmark.title} ❞</p>
        <span className='date'>
          <FaClock />
          {moment(bookmark.createdAt).locale('tr').format('LL')}
        </span>
      </Link>
      {page === 'bookmarks' &&
        <p className="text px-5 line-clamp-1">{bookmark.description}</p>
      }
    </div>
  )
}

export default Bookmark