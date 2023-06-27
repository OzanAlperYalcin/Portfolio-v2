"use client"
import ModalHeader from "./ModalHeader"
import { handleModal } from "./handleModals"
import { useModals } from "@/store/modals/hooks"
import { closeModal } from "@/store/modals/actions"

function Modals() {
    const modals = useModals()
    return (
        <div onClick={() => closeModal()} className="fixed inset-0 bg-black/40 flex flex-col justify-center items-center">
            {modals.map((modal, i) => {
                const getModal = handleModal.find(m => m.name === modal.name)
                return (
                    <div onClick={(e) => e.stopPropagation()} key={i} className="grid gap-2.5 w-2/3 md:w-2/4 lg:w-1/3 bg-zinc-100 rounded relative">
                        <ModalHeader title={modal.title} />
                        <getModal.element data={modal.data} />
                    </div>
                )
            })}
        </div>
    )
}

export default Modals