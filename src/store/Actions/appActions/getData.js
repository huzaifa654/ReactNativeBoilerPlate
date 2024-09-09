import { Alert } from "react-native";
import { apiGet, apiPost } from "../../../helper/apiCalling";
import { COMPLAIN_HISTORY, DELETE_ACCOUNT, GET_ADDRESS, GET_ALL_PRODUCTS, GET_GOOGLE_LENSE_IMAGE, GET_WISH_LIST, HOME_BANNERS, HOME_BRANDS, HOME_CATEGORIES, HOME_LATEST_PRODUCT, ORDER_HISTORY, PRODUCT_BY_BRAND_ID, PRODUCT_BY_CATEGORIES, PRODUCT_BY_ID, SEARCH_FILTER } from "../../../helper/apiConfig";
import { SetBanners, SetBrand, SetCategories, SetLatestProducts } from "../../Reducer/homeReducer";
import { store } from "../../store";
import { uploadFile } from "./postData";
import { loginUser, LogoutUser, setIsUserLogin, setPreviousNavigation } from "../../Reducer/userReducer";

const getBanners = async (data) => {
    try {
        const { dispatch } = store;
        let res = await apiPost(HOME_BANNERS, data);
        console.log("getBanners respnse23123123132=======================-----", res)
        if (res?.data) {
            dispatch(SetBanners(res?.data))
        }
    } catch (error) {
        console.log('getBanners====>', error);
    }
};



export {
    getBanners,

}