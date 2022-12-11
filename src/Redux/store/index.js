import { configureStore } from "@reduxjs/toolkit"
import DataSlice from '../DataSlice'
import OperationsStatesSlice from "../AppStatesSlice/OperationsStatesSlice"

export const store = configureStore({
    reducer: {
        Data: DataSlice,
        Operation: OperationsStatesSlice
    }

})