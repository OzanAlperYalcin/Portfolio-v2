"use client"
import Table from '@/components/admin/table'
import Modals from '@/components/admin/modals'
import Link from "next/link"
import { useModals } from '@/store/modals/hooks'
import { createModal } from '@/store/modals/actions'
import { getTechIcon } from '@/utils/techs'

function TechsTable({ techs }) {
    const modals = useModals()
    
    return (
        <>
            {modals.length > 0 && <Modals />}
            <Table
                head={[
                    { name: 'SIRA' },
                    { name: 'TEKNOLOJİ' },
                    { name: 'TÜR' },
                    { name: 'HASH TAG' },
                    { name: 'İŞLEMLER', width: 150 }
                ]}
                body={techs?.map((tech, i) => [
                    tech.sort,
                    getTechIcon(tech.name),
                    tech.type,
                    <p key={i} className='line-clamp-1'>{tech.hashtag}</p>,
                    <div key={i} className="flex justify-center items-center gap-2.5">
                        <Link href={`/dashboard/tech/${tech._id}`} className="bg-green-500 btn-process">DÜZENLE</Link>
                        <button
                            onClick={() =>
                                createModal({ name: 'accept-modal', title: `${tech.name} Gönderiyi Sil`, data: { name: 'tech', id: tech._id } })}
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

export default TechsTable