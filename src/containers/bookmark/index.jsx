import { FadeIn } from "@/components/animation"
import Bookmark from "@/components/bookmarks/index.jsx"

function BookmarkContainer({ bookmarks }) {
    return (
        <FadeIn>
            <section className='container mx-auto grid gap-10 px-5 mt-10'>
                <Bookmark bookmarks={bookmarks} page={'bookmarks'} />
            </section>
        </FadeIn>
    )
}

export default BookmarkContainer