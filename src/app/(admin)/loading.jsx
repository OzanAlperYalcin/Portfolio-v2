import { FaSpinner } from 'react-icons/fa'

export default function Loading() {
    return (
        <div className="fixed inset-0 bg-black/20 z-50">
            <div className='h-full flex justify-center items-center animate-spin text-white'>
                <FaSpinner />
            </div>
        </div>
    )
}