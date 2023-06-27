import { FaCode } from 'react-icons/fa'

export default function HomeLoading() {
    return (
        <div className='fixed inset-0 bg-whit/20'>
            <div className='h-full flex justify-center items-center animate-pulse text-red-500'>
                <FaCode size={60} />
            </div>
        </div>
    )
}