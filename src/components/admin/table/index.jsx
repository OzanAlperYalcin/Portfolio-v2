"use client"
import { useState } from 'react'
import { useMediaQuery } from "@react-hook/media-query"
import SearchTable from './SearchTable'
import DesktopTable from './DesktopTable'
import MobileTable from './MobileTable'

function Table({ body, head, search }) {
    const isMobile = useMediaQuery('(max-width: 845px)')
    const [query, setQuery] = useState('')

    return (
        <div className='grid gap-5 text-sm'>
            {search && <SearchTable state={{ query, setQuery }} />}
            {isMobile ?
                <MobileTable head={head} body={body} />
                :
                <DesktopTable head={head} body={body} />
            }
        </div>
    )
}

export default Table