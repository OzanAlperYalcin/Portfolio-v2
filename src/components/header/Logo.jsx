import Image from 'next/image'
import { FaCode } from 'react-icons/fa'

function Logo({ user }) {
    return (
        <div className='flex items-center gap-5'>
            <div className='h-24 w-24 rounded-full border-2 border-rose-600 bg-zinc-300 overflow-hidden'>
                <Image src={user.photoURL} width={96} height={96} alt='Ozan Alper Yalçın' priority={true}/>
            </div>
            <div>
                <h3 className='name'>{user.username}</h3>
                <span className='flex items-center justify-end gap-1 text-sm text-rose-600'><FaCode /> {user.title} </span>
            </div>
        </div>
    )
}

export default Logo