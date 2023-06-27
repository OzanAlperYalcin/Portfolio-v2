import { configureStore } from "@reduxjs/toolkit"
import modals from "./modals"

export const store = configureStore({
    reducer: {
        modals
    }
})