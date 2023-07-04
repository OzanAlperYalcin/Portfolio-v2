import Image from "next/image"
import Logout from './Logout'
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"
import UserMenu from "./UserMenu"
async function Right({ user }) {
    const { id } = await useAuth()

    return (
        <div className="flex items-center gap-2.5">
            <UserMenu user={user} />
            <Logout />
        </div>
    )
}

export default Right