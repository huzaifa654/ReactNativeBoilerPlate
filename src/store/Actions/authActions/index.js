import { useSelector } from "react-redux";
import Validator from "../../../helper/Validator/Validator";
import { apiPost } from "../../../helper/apiCalling";
import { LOGIN_API, SEND_OTP, SIGNUP_API, UPDATE_PASSWORD_OTP, VERIFY_OTP } from "../../../helper/apiConfig";
import { errorToaster } from "../../../helper/toastconfig";
import { setIsUserLogin, loginUser } from "../../Reducer/userReducer";
import { store } from "../../store";
import { uploadFile } from "../appActions/postData";
import { useNavigation } from "@react-navigation/native";


const userSignup = async (profilePic, userName, email, password, confirmPassword, Phone, isChecked, SetModalMessage, SetModalVisibility, setLoading, countryCode) => {

    const isValidData = () => {
        const error = Validator({
            profilePic,
            email,
            password,
            userName,
            Phone,
            confirmPassword,
            isChecked
        })
        if (error) {
            errorToaster(error)
            return false
        }
        return true
    }

    const checkValid = isValidData()

    if (checkValid) {
        setLoading(true)
        const UploadedImage = profilePic && await uploadFile(profilePic, false);
        let data = {
            "name": userName,
            "email": email,
            "password": password,
            "phoneNo": `${countryCode}${Phone.replace('+', '')}`,
            image: UploadedImage?.data?.data ? UploadedImage?.data?.data[0]?.uploadedLink || '' : ""
        }
        try {
            let res = await apiPost(SIGNUP_API, data)
            if (res?.message == 'user registered successfully' && res?.status == 'Success') {
                SetModalMessage("Your account created successfully please login to continue");
                SetModalVisibility(true);
            } else if (res?.message) {
                SetModalMessage(res?.message);
                setTimeout(() => {
                    SetModalVisibility(true);
                }, 600);
            } else {
                SetModalMessage('Something went wrong try again please.');
                SetModalVisibility(true);
            }
            setLoading(false)
        } catch (error) {
            console.log("userSignup raised", error)
            SetModalMessage(error?.error || error?.message);
            setLoading(false)
            SetModalVisibility(true)

        }
    }
};

const userLogin = async (email, password, SetModalMessage, SetModalVisibility, setLoading, previousNavigation, navigation) => {


    const isValidData = () => {
        const error = Validator({
            email,
            password
        })
        if (error) {
            errorToaster(error)
            // SetModalMessage(error);
            // SetModalVisibility(true)
            return false
        }
        return true
    }

    const checkValid = isValidData();
    const { dispatch } = store;

    if (checkValid) {
        setLoading(true)
        let data = {
            "email": email?.toLowerCase(),
            "password": password,
        }
        try {
            let res = await apiPost(LOGIN_API, data)
            if (res?.message == 'login successfully' && res?.status == 'Success') {
                dispatch(loginUser(res?.data))
                dispatch(setIsUserLogin(true))
                if (previousNavigation == "ProductPage" || previousNavigation == "VendorProfile") {
                    navigation.replace(previousNavigation)
                } else if (previousNavigation == "") {
                    navigation.replace("BottomTabs")
                } else {
                    navigation?.replace('BottomTabs', { screen: previousNavigation })
                }
            }
            else if (res?.message == "account deactivated") {
                SetModalMessage('Invalid credentials');
                SetModalVisibility && SetModalVisibility(true);
            }
            else if (res?.message) {
                SetModalMessage(res?.message);
                SetModalVisibility && SetModalVisibility(true);
            } else {
                SetModalMessage('Invalid credentials');
                SetModalVisibility && SetModalVisibility(true);
            }
            setLoading(false)
        } catch (error) {
            console.log("userLogin raised", error)
            SetModalMessage(error?.error || error?.message);
            errorToaster(error?.error || error?.message)
            setLoading(false)
            SetModalVisibility && SetModalVisibility(true)

        }
    }
};

const sendOtp = async (email, SetModalMessage, SetModalVisibility, setLoading, navigation, resendOTP) => {

    const isValidData = () => {
        const error = Validator({
            email
        })
        if (error) {
            errorToaster(error)
            // SetModalMessage(error);
            // SetModalVisibility(true)
            return false
        }
        return true
    }

    const checkValid = isValidData();
    // const { dispatch } = store;

    if (checkValid) {
        setLoading(true)
        let data = {
            "email": email?.toLowerCase()
        }
        try {
            let res = await apiPost(SEND_OTP, data)
            console.log("sendOtp-------->", res)
            if (res?.Message == 'Email Successfully Sent' && res?.status == 200) {
                // dispatch(loginUser(res?.data))
                if (resendOTP) {
                    // SetModalMessage('');
                    // SetModalVisibility(true);
                } else {
                    navigation.navigate('OTP', {
                        email: email
                    })
                }
            } else if (res?.Message) {
                SetModalMessage(res?.Message);
                SetModalVisibility(true);
            } else {
                SetModalMessage('Something went wrong!');
                SetModalVisibility(true);
            }
            setLoading(false)
        } catch (error) {
            console.log("sendOtp raised", error)
            SetModalMessage(error?.error || error?.message);
            setLoading(false)
            SetModalVisibility(true)

        }
    }
};

const verifyOtp = async (email, otp, SetModalMessage, SetModalVisibility, setLoading, navigation) => {

    const isValidData = () => {
        const error = Validator({
            email,
            otp
        })
        if (error) {
            errorToaster(error)
            return false
        }
        return true
    }

    const checkValid = isValidData();
    // const { dispatch } = store;

    if (checkValid) {
        setLoading(true)
        let data = {
            "email": email?.toLowerCase(),
            "code": otp
        }
        try {
            let res = await apiPost(VERIFY_OTP, data)
            console.log("sendOtp-------->", res)
            if (res?.Message == 'Code Verified Successfully' && res?.status == 200) {
                // dispatch(loginUser(res?.data))
                navigation.navigate('NewPassword', res)
            } else if (res?.Message) {
                SetModalMessage(res?.Message);
                SetModalVisibility(true);
            } else {
                SetModalMessage('Something went wrong!');
                SetModalVisibility(true);
            }
            setLoading(false)
        } catch (error) {
            console.log("sendOtp raised", error)
            SetModalMessage(error?.error || error?.message);
            setLoading(false)
            SetModalVisibility(true)

        }
    }
};

const changePassword = async (password, confirmPassword, token, SetModalMessage, SetModalVisibility, setLoading, navigation) => {

    const isValidData = () => {
        const error = Validator({
            password: password,
            confirmPassword: confirmPassword
        })
        if (error) {
            errorToaster(error)
            return false
        }
        return true
    }

    const checkValid = isValidData();
    // const { dispatch } = store;

    if (checkValid) {
        setLoading(true)
        let data = {
            "token": token,
            "password": password?.trim()
        }
        try {
            let res = await apiPost(UPDATE_PASSWORD_OTP, data)
            if (res?.Message) {
                SetModalMessage(res?.Message);
                setTimeout(() => {
                    SetModalVisibility(true);
                }, 600);
            } else {
                SetModalMessage('Something went wrong!');
                SetModalVisibility(true);
            }
            setLoading(false)
        } catch (error) {
            console.log("sendOtp raised", error)
            SetModalMessage(error?.error || error?.message);
            setLoading(false)
            SetModalVisibility(true)

        }
    }
};

export {
    userSignup,
    userLogin,
    sendOtp,
    verifyOtp,
    changePassword
}