import BookmarkForm from "@/components/admin/bookmarks/BookmarkForm"
import FormContainer from "@/containers/admin/form"
import { fetchBookmark } from "@/services/bookmarks"

export default async function BookmarkPage({ params }) {
    const bookmark = await fetchBookmark(params.id)

    return (
        <FormContainer title={'YER İMİ'}>
            <BookmarkForm data={bookmark?.bookmark} />
        </FormContainer>
    )
}