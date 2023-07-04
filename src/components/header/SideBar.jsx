"use client"
import { useState } from 'react'
import { FaBars } from "react-icons/fa"
import Link from 'next/link'

function SideBar({ navMenu }) {

    const [toggle, setToggle] = useState(false)
    const handleSideBar = () => {
        setToggle(prev => !prev)
    }

    return (
        <div>
            <button onClick={() => handleSideBar()} className="block md:hidden">
                <FaBars size={30} />
            </button>
            <div className={`sidebar ${toggle ? 'open' : ''}`}>
                <div className='mt-5 grid text-center gap-10'>
                    {navMenu.map((menu, i) => (
                        <Link key={i} href={menu.link} onClick={() => handleSideBar()}>
                            {menu.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SideBar