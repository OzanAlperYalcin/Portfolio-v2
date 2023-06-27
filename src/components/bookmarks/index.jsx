import Bookmark from './Bookmark'
import Link from 'next/link'

function Bookmarks({ bookmarks, page }) {

    return (
        <div>
            <h1 className='title'>Yer İmlerim</h1>
            <div className='grid gap-2.5 my-5'>
                {bookmarks.map((bookmark, i) => (
                    <Bookmark key={i} bookmark={bookmark} page={page} />
                ))}
            <Link href={'/bookmarks'} className='text-center text-sm underline underline-offset-4'> Tüm Linkler </Link>
            </div>
        </div>
    )
}

export default Bookmarks