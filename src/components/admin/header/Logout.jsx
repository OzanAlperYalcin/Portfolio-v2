"use client"
import { deleteCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast"
import { MdLogout } from 'react-icons/md'

export default function Logout() {
    const router = useRouter()
    const logoutHandle = () => {
        router.push('/login')
        toast.success('Oturum kapatma başarılı')
        deleteCookie('token')
    }

    return (
        <button
            onClick={() => logoutHandle()}
            className="flex items-center justify-center w-[44px] h-[44px] rounded-full bg-zinc-200 hover:bg-zinc-100 border-2 border-red-500 transition-all"
        >
            <MdLogout size={20} />
        </button>
    )
}