"use client"
import Link from "next/link"
import SideBar from "./SideBar"
import { usePathname } from 'next/navigation'

function Nav() {
    const pathname = usePathname()

    const navMenu = [
        { name: 'Anasayfa', link: '/' },
        { name: 'Projeler', link: '/projects' },
        { name: 'Blog', link: '/blog' },
        { name: 'Yer İmleri', link: '/bookmarks' },
    ]

    return (
        <nav>
            <div className="hidden md:flex gap-10 tracking-wider">
                {navMenu.map((menu, i) => (
                    <div key={i} className="relative group">
                        <Link href={menu.link} className={pathname === menu.link ? 'text-red-500':''}>{menu.name}</Link>
                        <div className="absolute h-0.5 bg-rose-600 top-8 left-1/2 -translate-x-1/2 w-0 group-hover:w-full transition-all duration-300" />
                    </div>
                ))}
            </div>
            <SideBar navMenu={navMenu} />
        </nav>
    )
}

export default Nav