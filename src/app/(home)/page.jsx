import HomeContainer from "@/containers/home"
import {  fetchBookmarks } from "@/services/bookmarks"
import { fetchPosts } from "@/services/posts"

export default async function Home() {
  const promises = [
    fetchPosts(),
    fetchBookmarks()
  ]
  const [ posts, bookmarks ] = await Promise.all(promises)

  return (
    <>
    <HomeContainer posts={posts.posts} bookmarks={bookmarks.bookmarks} />
    </>
  )
}
