"use client"
import Table from '@/components/admin/table'
import Modals from '@/components/admin/modals'
import Link from "next/link"
import moment from "moment"
import { useModals } from '@/store/modals/hooks'
import { createModal } from '@/store/modals/actions'
import 'moment/locale/tr'

function PostsTable({ posts }) {
    const modals = useModals()
    
    return (
        <>
            {modals.length > 0 && <Modals />}
            <Table
                head={[
                    { name: 'SIRA' },
                    { name: 'BAŞLIK' },
                    { name: 'GÖNDERİ' },
                    { name: 'TARİH' },
                    { name: 'İŞLEMLER', width: 150 }
                ]}
                body={posts?.map((post, i) => [
                    i + 1,
                    post.title,
                    <p key={i} className='line-clamp-1'>{post.post}</p>,
                    moment(post.createdAt).format('LL'),
                    <div key={i} className="flex justify-center items-center gap-2.5">
                        <Link href={`/dashboard/post/${post._id}`} className="bg-green-500 btn-process">DÜZENLE</Link>
                        <button
                            onClick={() =>
                                createModal({ name: 'accept-modal', title: `${post.title} Gönderiyi Sil`, data: { name: 'post', id: post._id } })}
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

export default PostsTable