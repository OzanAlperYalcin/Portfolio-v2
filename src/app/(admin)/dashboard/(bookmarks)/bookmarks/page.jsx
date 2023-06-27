import BookmarksContainer from "@/containers/admin/bookmarks"
import { fetchBookmarks, searchBookmarks } from "@/services/bookmarks"


export default async function BookmarksPage({ searchParams }) {
    const { search } = searchParams
    const bookmarks = !search ? await fetchBookmarks() : await searchBookmarks(search)

    return (
        <BookmarksContainer data={bookmarks} title={'YER İMLERİ'}/>
    )
}