import { ADD_COMPLAIN, EDIT_PROFILE, } from "../../../helper/apiConfig";
import { store } from "../../store";
import { loginUser } from "../../Reducer/userReducer";
import Validator from "../../../helper/Validator/Validator";
import { errorToaster } from "../../../helper/toastconfig";
import { apiPost } from "../../../Constants/apiCalling";


const addCompalin = async (navigation, userData, media, reportText, SetModalMessage, SetModalVisibility, setLoading, selectedProducts,) => {
    try {
        if (reportText && reportText?.trim()?.length > 0) {

            setLoading(true)
            let imagesArr = [];
            const uploadPromises = media?.map(async (item, index) => {
                // console.log('item',item);
                return await uploadFile(item);
            });
            console.log(uploadPromises)
            const uploadedFiles = await Promise.all(uploadPromises);

            const uploadedFilesArray = uploadedFiles.map(response => {
                const uploadedLink = response?.data?.data[0]?.uploadedLink;
                return { image: uploadedLink };
            });


            let body = {
                "description": reportText,
                "product": selectedProducts,
                "image": uploadedFilesArray || ''
            }

            console.log("body---", body)
            let res = await apiPost(ADD_COMPLAIN, body);
            setLoading(false);

            if (res?.message && res?.message == 'complain added successfully') {
                SetModalMessage('Complain submitted successfully')
                SetModalVisibility(true)
            } else {
                SetModalMessage('Something went wrong try again please')
                SetModalVisibility(true)
            }
        }
        else {
            setLoading(false);
            errorToaster('Please describe what went wrong')
        }
    } catch (error) {
        setLoading(false);
        errorToaster(error?.message)
        // SetModalVisibility(true)
        console.log('addReport====>', error);
    }
};

const editProfile = async (body, image, userData, SetLoading, SetModalVisibility, SetModalMessage) => {
    const { dispatch } = store;
    let data = {
        "name": body.name,
        "phoneNo": body.phoneNo,
        image: body?.image
    }
    const isValidData = () => {
        const error = Validator({
            fullName: body.name,
            Phone: body.phoneNo
        })
        if (error) {
            SetModalMessage(error);
            SetModalVisibility(true)
            return false
        }
        return true
    }
    if (isValidData()) {
        try {
            SetLoading(true)
            if (image) {
                const UploadedImage = image && await uploadFile(image, false);
                if (UploadedImage?.data && UploadedImage?.status == 200) {
                    data = {
                        "name": body.name,
                        "phoneNo": body.phoneNo,
                        image: UploadedImage?.data?.data[0]?.uploadedLink
                    }
                }
            }
            let res = await apiPost(EDIT_PROFILE, data);

            if (res?.message) {
                dispatch(loginUser({ ...userData, ...data }))
                SetModalMessage(res?.message?.toUpperCase())
                SetModalVisibility(true)
            }
            SetLoading(false)
        } catch (error) {
            SetModalMessage(error?.message)
            SetModalVisibility(true)
            SetLoading(false)
            console.log('Edit_Profile====>', error);
        }
    }

};




export {
    editProfile,
    addCompalin
}
