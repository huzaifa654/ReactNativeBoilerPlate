export const API_BASE_URL = "http://54.234.140.52/"
export const getApiURL = (endpoint) => API_BASE_URL + endpoint


//AUTH APIS
export const SIGNUP_API = getApiURL('user/signUp');
export const LOGIN_API = getApiURL('user/login');
export const SEND_OTP = getApiURL('user/sendOtp');
export const VERIFY_OTP = getApiURL('user/verifyOTP');
export const UPDATE_PASSWORD_OTP = getApiURL('user/updateForgottenPassword');

//HOME PAGE APIS
export const HOME_BANNERS = getApiURL('user/getBanners');
export const HOME_BRANDS = getApiURL('user/getBrands');
export const HOME_CATEGORIES = getApiURL('user/getAllCategory');
export const HOME_LATEST_PRODUCT = getApiURL('user/getLatestProduct');

//PRODUCT PAGE APIS
export const PRODUCT_BY_CATEGORIES = getApiURL('user/getProductByCategory');
export const PRODUCT_BY_ID = getApiURL('user/getProductById');
export const PRODUCT_BY_BRAND_ID = getApiURL('user/getProductByBrand');
export const GET_ALL_PRODUCTS = getApiURL('user/getAllProduct');

//DELETE ACCOUNT API
export const DELETE_ACCOUNT = getApiURL('user/deactivateAccount');


//EDIT PROFILE
export const EDIT_PROFILE = getApiURL('user/editProfile');

//ADD REPORT
export const ADD_REPORT = getApiURL('user/addReport');

//ADD COMPLAIN
export const ADD_COMPLAIN = getApiURL('user/addComplain');

//Complain History
export const COMPLAIN_HISTORY = getApiURL('user/getAllComplain');




//WISH LIST APIS
export const ADD_WISHLIST = getApiURL('user/addWishList');
export const REMOVE_WISHLIST = getApiURL('user/removeWishList');
export const GET_WISH_LIST = getApiURL('user/getWishList');

//GOOGLE LENSE
export const GET_GOOGLE_LENSE_IMAGE = getApiURL('user/lenseApi');

// ADDRESS
export const ADD_ADDRESS = getApiURL('user/addAddress');
export const GET_ADDRESS = getApiURL('user/getAddress');
export const DEL_ADDRESS = getApiURL('user/deleteAddress');
export const UPDATE_ADDRESS = getApiURL('user/updateAddress');

// PLACE ORDER
export const MAKE_ORDER = getApiURL('user/addOrder');

// SEARCH FILTER
export const SEARCH_FILTER = getApiURL('user/getFilteredProduct');

// Order History
export const ORDER_HISTORY = getApiURL('user/getAllOrders');
