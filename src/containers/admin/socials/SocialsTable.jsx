"use client"
import Table from '@/components/admin/table'
import Modals from '@/components/admin/modals'
import Link from "next/link"
import { useModals } from '@/store/modals/hooks'
import { createModal } from '@/store/modals/actions'
import { getSocialIcon } from '@/utils/socials'

function SocialsTable({ socials }) {
    const modals = useModals()

    return (
        <>
            {modals.length > 0 && <Modals />}
            <Table
                head={[
                    { name: 'SIRA' },
                    { name: 'SOSYAL MEDYA' },
                    { name: 'İSİM' },
                    { name: 'LİNK' },
                    { name: 'İŞLEMLER', width: 150 }
                ]}
                body={socials?.map((social, i) => [
                    i + 1,
                    getSocialIcon(social.title),
                    social.name,
                    social.link,
                    <div key={i} className="flex justify-center items-center gap-2.5">
                        <Link href={`/dashboard/social/${social._id}`} className="bg-green-500 btn-process">DÜZENLE</Link>
                        <button
                            onClick={() =>
                                createModal({ name: 'accept-modal', title: `${social.name} Gönderiyi Sil`, data: { name: 'social', id: social._id } })}
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

export default SocialsTable