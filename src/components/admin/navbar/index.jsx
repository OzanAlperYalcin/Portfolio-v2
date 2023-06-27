"use client"
import { useRouter } from "next/navigation"
import { FaBackwardStep } from 'react-icons/fa6'
function Navbar({ title }) {
    const router = useRouter()
    return (
        <button onClick={() => router.back()} className='flex justify-between items-center'>
            <h1 className='title'>{title}</h1>
            <div className="btn-red-sm">
                <FaBackwardStep />
                <span>Geri</span>
            </div>
        </button>
    )
}

export default Navbar