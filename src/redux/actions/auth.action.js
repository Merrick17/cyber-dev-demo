import { LOGIN_USER, LOGOUT_USER } from "./action.types"
import { useForm } from "react-hook-form";
import { postApi } from "../../utils/apiUtils";
export const loginUser = (data) => {
    return {
        type: LOGIN_USER,
        payload: data
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}

export const loginUserApi = (body, navigation, addToast) => async dispatch => {
    try {
        let result = await postApi('login', body)
        if (result.success) {
            dispatch(loginUser(result.result.token));
            localStorage.setItem("token",result.result.token) ;
            navigation.replace('main');
        } else {
            addToast(result.result, {
                appearance: 'error',
                autoDismiss: true,
            })
        }

    } catch (error) {
        console.log(error) ; 
        addToast("Incorrect email or password", {
            appearance: 'error',
            autoDismiss: true,
        })
    }

}