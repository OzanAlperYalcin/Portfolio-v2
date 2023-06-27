import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

function SearchTable({ state }) {
    const { query, setQuery } = state
    const router = useRouter()
    const pathname = usePathname()

    const handleSearch = (e) => {
        e.preventDefault()
        query ?
            router.push(`${pathname}?search=${query}`)
            :
            router.push(pathname)
    }
    return (
        <form onSubmit={e => handleSearch(e)} className='flex items-center gap-5'>
            <input type="text" className='input-style' placeholder='ARA..' value={query} onChange={e => setQuery(e.target.value)} />
            <button type="submit"
                className='h-10 px-2.5 bg-green-500 rounded text-white text-sm font-semibold'>
                ARA
            </button>
        </form>
    )
}

export default SearchTable