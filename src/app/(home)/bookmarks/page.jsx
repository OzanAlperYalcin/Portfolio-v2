import BookmarkContainer from "@/containers/bookmark";
import { fetchBookmarks } from "@/services/bookmarks";

export default async function Bookmarks() {
    const bookmarks = await fetchBookmarks()

    return (
        <BookmarkContainer bookmarks={bookmarks.bookmarks} />
    )
}