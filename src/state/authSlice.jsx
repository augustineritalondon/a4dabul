import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user: {
            username: 'lola@a4dabul.com',
            password: 'lola@a4dabul.com'
        }
    },
    reducers: {
        isLoggedIn: (state) => {
            return {
                ...state,
                isLoggedIn: true
            }
        },
        isLoggedOut: (state, action) => {
            return {
                ...state,
                isLoggedIn: false,
            }
        }
    }
})

export const {isLoggedIn, isLoggedOut} = authSlice.actions

export default authSlice.reducer