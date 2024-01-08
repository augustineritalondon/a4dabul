import { createSlice } from '@reduxjs/toolkit'
import {dataNew} from '../data/productData'

export const productSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        product: [],
        category: []
    },
    reducers: {
        addProduct: (state, action) => {
            return {
                ...state,
                product: action.payload
            }
        },
        addCategory: (state, action) => {
            return {
                ...state,
                category: action.payload
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

export const {addProduct, addCategory, isLoggedOut} = productSlice.actions

export default productSlice.reducer