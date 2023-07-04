import { FaTimes } from 'react-icons/fa'
import { closeModal } from '@/store/modals/actions'
function ModalHeader({ title }) {
    return (
        <header className='border-b border-zinc-300 px-2.5 py-2'>
            <h3 className='title text-center !text-base'>{title}</h3>
            <button
                onClick={() => closeModal()}
                className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 hover:rotate-180 transition-all'
            >
                <FaTimes size={12} />
            </button>
        </header>
    )
}

export default ModalHeader