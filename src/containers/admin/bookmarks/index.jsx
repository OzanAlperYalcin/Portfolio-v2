import Navbar from "@/components/admin/navbar"
import BookmarksTable from './BookmarksTable'
import Stats from "@/components/admin/stats"

function BookmarksContainer({ data, title }) {
    const { bookmarks, totalCount } = data

    return (
        <div className="grid gap-10 my-10">
            <Navbar title={title} />
            <div className='mx-auto w-full grid gap-5 bg-white p-10 shadow rounded'>
                <Stats totalCount={totalCount} path={{ name: 'YENİ YER İMİ', url: '/dashboard/bookmark' }} />
                <BookmarksTable bookmarks={bookmarks} />
            </div>
        </div>
    )
}

export default BookmarksContainer