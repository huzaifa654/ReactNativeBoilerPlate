import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    banners: [],
    categories: [],
    brand: [],
    latestProducts: [],
    productPageData: {},
    vendorProfileData: {},

}

export const homeReducer = createSlice({
    name: 'homeReducer',
    initialState,
    reducers: {
        SetBanners: (state, actions) => {
            state.banners = actions.payload
        },
        SetCategories: (state, actions) => {
            state.categories = actions.payload
        },
        SetLatestProducts: (state, actions) => {
            state.latestProducts = actions.payload
        },
        SetBrand: (state, actions) => {
            state.brand = actions.payload
        },
        SetProductPageData: (state, actions) => {
            state.productPageData = actions.payload
        },
        SetVendorProfileData: (state, actions) => {
            state.vendorProfileData = actions.payload
        }
    },
})


export const { SetBanners, SetCategories, SetBrand, SetLatestProducts, SetProductPageData, SetVendorProfileData } = homeReducer.actions

export default homeReducer.reducer