import Image from "next/image"
import Logout from './Logout'
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"
async function Right({ user }) {
    const { id } = await useAuth()

    return (
        <div className="flex items-center gap-2.5">
            <Link href={`/dashboard/user/${user._id}`} className="overflow-hidden rounded-full bg-zinc-200 hover:bg-zinc-100 border-2 border-red-500 transition-all">
                <Image width={40} height={40} src={user.photoURL} alt="Ozan Alper YALÇIN" />
            </Link>
            <Logout />
        </div>
    )
}

export default Right