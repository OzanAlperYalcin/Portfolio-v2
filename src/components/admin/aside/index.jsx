"use client"
import { usePathname } from 'next/navigation'
import { FaGauge, FaDiagramProject, FaBookmark, FaSheetPlastic, FaShareNodes, FaCode } from 'react-icons/fa6'
import Link from 'next/link'
const navMenu = [
  { title: 'Dashboard', icon: FaGauge, url: '/dashboard', active: 'dashboard' },
  { title: 'Projects', icon: FaDiagramProject, url: '/dashboard/projects', active: 'projects' },
  { title: 'Blog', icon: FaSheetPlastic, url: '/dashboard/posts', active: 'posts' },
  { title: 'Bookmarks', icon: FaBookmark, url: '/dashboard/bookmarks', active: 'bookmarks' },
  { title: 'Technologies', icon: FaCode, url: '/dashboard/techs', active: 'techs' },
  { title: 'Socials', icon: FaShareNodes, url: '/dashboard/socials', active: 'socials' },

]

function Aside() {
  const pathName = usePathname()
  const activePath = pathName.split('/')

  return (
    <aside className='flex-shrink-0 w-[64px]'>
      <div className='h-screen fixed top-14 bottom-0 bg-black'>
        <div className='grid gap-5 text-white text-2xl p-2.5'>
          {navMenu.map((menu, i) => (
            <Link key={i} href={menu.url} title={menu.title} className={`${menu.active === activePath[activePath.length - 1] ? 'bg-red-500' : 'bg-white/20'} rounded-full hover:bg-red-400 p-2.5 transition-all`}>
              <menu.icon />
            </Link>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Aside