import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    IsLoading: true,
    IsUserType: false,
    IsTextValid: true,
    IsSearchPageActive: false,
    IsSearchFiledActive: false,
    IsError: false
}

const OperationsStatesSlice = createSlice({
    name: "OperationsStates",
    initialState,
    reducers: {
        setIsLoading: (state, action) => {
            state.IsLoading = action.payload
        },
        setIsUserType: (state, action) => {
            state.IsUserType = action.payload
        },
        setIsTextValid: (state, action) => {
            state.IsTextValid = action.payload
        },
        setIsSearchPageActive: (state, action) => {
            state.IsSearchPageActive = action.payload
        },
        setIsSearchFiledActive: (state, action) => {
            state.IsSearchFiledActive = action.payload
        },
        setIsError: (state, action) => {
            state.IsError = action.payload
        }
    }
})

export default OperationsStatesSlice.reducer
export const { setIsLoading, setIsUserType, setIsTextValid, setIsSearchPageActive, setIsSearchFiledActive, setIsError } = OperationsStatesSlice.actions