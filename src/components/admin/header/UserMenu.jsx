"use client"
import { createModal } from "@/store/modals/actions"
import Popover from "../popover"
import Image from "next/image"
import Link from "next/link"
import Modals from "../modals"
import { useModals } from '@/store/modals/hooks'
import { FaUserEdit, FaLock } from 'react-icons/fa'

export default function UserMenu({ user }) {
    const modals = useModals()

    const handleModal = (close) => {
        close()
        createModal({ name: "change-password", title: `${user.username} Şifre Değiştir`, data: user._id })
    }

    return (
        <>
            {modals.length > 0 && <Modals />}
            <Popover as="div" className="h-full flex items-center relative">
                <Popover.Button>
                    <div className="overflow-hidden rounded-full bg-zinc-200 hover:bg-zinc-100 border-2 border-red-500 transition-all">
                        <Image width={40} height={40} src={user.photoURL} alt="Ozan Alper YALÇIN" />
                    </div>
                </Popover.Button>
                <Popover.Panel
                    className="absolute left-1/2 -translate-x-1/2"
                    to={{ visibility: 'hidden', opacity: '0', top: '4rem' }}
                    from={{ visibility: 'visible', opacity: '100', top: '3.5rem' }}
                >
                    {({ close }) => (
                        <div className={`grid bg-white shadow border border-zinc-300 rounded w-40 text-sm font-bold`}>
                            <Link href={`/dashboard/user/${user._id}`} className="popover-item">
                                <FaUserEdit size={26} className="bg-black text-white rounded-full p-1" />
                                Profili Görüntüle
                            </Link>
                            <button type="button" onClick={() => handleModal(close)} className="popover-item">
                                <FaLock size={26} className="bg-black text-white rounded-full p-1" />
                                Şifre Değiştir
                            </button>
                        </div>
                    )}
                </Popover.Panel>
            </Popover>
        </>
    )
}