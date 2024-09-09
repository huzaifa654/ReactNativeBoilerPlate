import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userDetails: {},
    isUserLogin: false,
    previousNavigation: ''
}

export const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        setPreviousNavigation: (state, actions) => {
            state.previousNavigation = actions.payload
        },
        setIsUserLogin: (state, actions) => {
            state.isUserLogin = actions.payload
        },
        loginUser: (state, actions) => {
            state.userDetails = actions.payload
        },
        LogoutUser: (state) => {
            state.userDetails = {}
        },
    },
})


export const { loginUser, LogoutUser, setIsUserLogin, setPreviousNavigation } = userReducer.actions

export default userReducer.reducer