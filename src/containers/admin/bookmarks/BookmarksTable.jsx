"use client"
import Table from '@/components/admin/table'
import Modals from '@/components/admin/modals'
import Link from "next/link"
import moment from "moment"
import { useModals } from '@/store/modals/hooks'
import { createModal } from '@/store/modals/actions'
import 'moment/locale/tr'

function BookmarksTable({ bookmarks }) {
    const modals = useModals()
    
    return (
        <>
            {modals.length > 0 && <Modals />}
            <Table
                head={[
                    { name: 'SIRA' },
                    { name: 'BAŞLIK' },
                    { name: 'LİNK' },
                    { name: 'TARİH' },
                    { name: 'İŞLEMLER', width: 150 }
                ]}
                body={bookmarks?.map((bookmark, i) => [
                    i + 1,
                    bookmark.title,
                    bookmark.link,
                    moment(bookmark.createdAt).format('LL'),
                    <div key={i} className="flex justify-center items-center gap-2.5">
                        <Link href={`/dashboard/bookmark/${bookmark._id}`} className="bg-green-500 btn-process">DÜZENLE</Link>
                        <button
                            onClick={() =>
                                createModal({ name: 'accept-modal', title: `${bookmark.title} Yer İmini Sil`, data: { name: 'bookmark', id: bookmark._id } })}
                            className="bg-red-500 btn-process"
                        >
                            SİL
                        </button>
                    </div>
                ])}
                search={true}
            />
        </>
    )
}

export default BookmarksTable