import { FaTimes } from 'react-icons/fa'
import { closeModal } from '@/store/modals/actions'
function ModalHeader({ title }) {
    return (
        <header className='border-b border-zinc-300 px-2.5 py-2'>
            <h3 className='title'>{title}</h3>
            <button
                onClick={() => closeModal()}
                className='absolute -top-2.5 -right-2.5 bg-red-500 text-white rounded-full p-0.5 hover:rotate-180 transition-all'
            >
                <FaTimes />
            </button>
        </header>
    )
}

export default ModalHeader