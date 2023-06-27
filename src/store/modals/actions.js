import { _createModal, _closeModal, _destroyModals } from '.'
import { store } from "@/store"

export const createModal = (data) => store.dispatch(_createModal(data)) 
export const closeModal = (data) => store.dispatch(_closeModal(data)) 
export const destrotModals = (data) => store.dispatch(_destroyModals(data)) 