import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modals: []
}
const modals = createSlice({
    name: 'modals',
    initialState,
    reducers: {
        _createModal: (state, action) => {
            const modals = [...state.modals, action.payload]
            state.modals = modals
        },
        _closeModal: (state, _) => {
            const modals = [...state.modals]
            modals.pop()
            state.modals = modals
        },
        _destroyModals: (state, _) => {
            state.modals = []
        }
    }
})

export const { _createModal, _closeModal, _destroyModals } = modals.actions
export default modals.reducer